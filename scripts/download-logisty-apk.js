#!/usr/bin/env node

import https from 'https';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const REPO_OWNER = 'logisty';
const REPO_NAME = 'Logisty';
const APK_PATTERN = /app-release\.apk$/;
const VERSION_PATTERN = /^v(\d+\.\d+\.\d+)$/;

// Create public/apks directory if it doesn't exist
const apksDir = path.join(__dirname, '..', 'public', 'apks');
if (!fs.existsSync(apksDir)) {
  fs.mkdirSync(apksDir, { recursive: true });
}

/**
 * Fetch data from GitHub API with authentication
 */
function fetchFromGitHub(url, token) {
  return new Promise((resolve, reject) => {
    const options = {
      headers: {
        'User-Agent': 'Logisty-Website-Build',
        'Accept': 'application/vnd.github.v3+json',
        'Authorization': token ? `token ${token}` : undefined
      }
    };

    // Remove undefined headers
    Object.keys(options.headers).forEach(key => {
      if (options.headers[key] === undefined) {
        delete options.headers[key];
      }
    });

    https.get(url, options, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => {
        if (res.statusCode === 200) {
          try {
            resolve(JSON.parse(data));
          } catch (error) {
            reject(new Error(`Failed to parse JSON: ${error.message}`));
          }
        } else {
          reject(new Error(`GitHub API error: ${res.statusCode} - ${data}`));
        }
      });
    }).on('error', reject);
  });
}

/**
 * Download file from URL
 */
function downloadFile(url, filepath, token) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(filepath);
    const options = {
      headers: {
        'Authorization': token ? `token ${token}` : undefined,
        'User-Agent': 'Logisty-Website-Build'
      }
    };

    // Remove undefined headers
    Object.keys(options.headers).forEach(key => {
      if (options.headers[key] === undefined) {
        delete options.headers[key];
      }
    });

    https.get(url, options, (response) => {
      if (response.statusCode === 200) {
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          resolve();
        });
      } else {
        reject(new Error(`Download failed: ${response.statusCode}`));
      }
    }).on('error', (error) => {
      fs.unlink(filepath, () => {}); // Delete the file on error
      reject(error);
    });
  });
}

/**
 * Get latest release for the private repository
 */
async function getLatestRelease(token) {
  const url = `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/releases/latest`;
  console.log(`Fetching latest release for ${REPO_OWNER}/${REPO_NAME}...`);
  
  try {
    const release = await fetchFromGitHub(url, token);
    console.log(`Found release: ${release.tag_name}`);
    return release;
  } catch (error) {
    console.error(`Error fetching release:`, error.message);
    throw error;
  }
}

/**
 * Find APK asset in release
 */
function findApkAsset(release) {
  const asset = release.assets.find(asset => APK_PATTERN.test(asset.name));
  if (!asset) {
    throw new Error(`No APK found matching pattern ${APK_PATTERN} in release ${release.tag_name}`);
  }
  return asset;
}

/**
 * Main function
 */
async function main() {
  console.log('🚀 Starting Logisty APK download process...');
  
  // Get GitHub token from environment variable
  const token = process.env.GITHUB_TOKEN;
  if (!token) {
    console.log('⚠️  No GITHUB_TOKEN found in environment variables');
    console.log('   This will work for public repos, but may fail for private repos');
  }
  
  try {
    // Get latest release
    const release = await getLatestRelease(token);
    
    // Find APK asset
    const apkAsset = findApkAsset(release);
    console.log(`Found APK: ${apkAsset.name} (${apkAsset.size} bytes)`);
    
    // Extract version from tag
    const versionMatch = release.tag_name.match(VERSION_PATTERN);
    const version = versionMatch ? versionMatch[1] : release.tag_name;
    
    // Download APK
    const apkPath = path.join(apksDir, `logisty-${version}.apk`);
    console.log(`Downloading ${apkAsset.name} to ${apkPath}...`);
    await downloadFile(apkAsset.browser_download_url, apkPath, token);
    
    // Generate version info
    const versionInfo = {
      generatedAt: new Date().toISOString(),
      logisty: {
        version: version,
        tag: release.tag_name,
        apkName: apkAsset.name,
        apkPath: `apks/logisty-${version}.apk`,
        downloadUrl: `/apks/logisty-${version}.apk`,
        publishedAt: release.published_at
      }
    };
    
    // Save version info
    const versionInfoPath = path.join(__dirname, '..', 'public', 'logisty-version.json');
    fs.writeFileSync(versionInfoPath, JSON.stringify(versionInfo, null, 2));
    
    console.log('✅ Logisty APK download completed successfully!');
    console.log(`📱 Downloaded: ${apkPath}`);
    console.log(`📄 Version info saved to: ${versionInfoPath}`);
    console.log(`🔗 Local download URL: /apks/logisty-${version}.apk`);
    
  } catch (error) {
    console.error('❌ Logisty APK download failed:', error.message);
    console.log('💡 Make sure GITHUB_TOKEN is set for private repository access');
    process.exit(1);
  }
}

// Run the script
main();
