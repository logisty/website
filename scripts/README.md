# Logisty APK Download Script

This script automatically downloads the latest Logisty APK from the private GitHub repository during the build process and serves it from your GitHub Pages.

## How it works

1. **Fetches latest release** from the private `logisty/Logisty` repository using GitHub API
2. **Downloads APK file** to `public/apks/` directory with versioned filename
3. **Generates version info** in `public/logisty-version.json` with download URL pointing to your GitHub Pages
4. **Updates the website** to use the local APK download link

## Setup Requirements

### GitHub Token
You need a GitHub Personal Access Token with access to the private `logisty/Logisty` repository:

1. Go to GitHub Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Generate a new token with `repo` scope (full control of private repositories)
3. Add the token as a repository secret named `GITHUB_TOKEN`

### Repository Access
The token must have access to the private `logisty/Logisty` repository. Make sure the token owner has access to this repository.

## Usage

### Manual execution
```bash
# Set your GitHub token
export GITHUB_TOKEN=your_token_here

# Download APK
npm run download-apk
```

### During build (automatic)
```bash
npm run build
```

### Build without APK download
```bash
npm run build:no-apk
```

## Output

- **APK file**: Downloaded to `public/apks/logisty-{version}.apk`
- **Version info**: Generated as `public/logisty-version.json`
- **Download URL**: Points to `/apks/logisty-{version}.apk` (served from GitHub Pages)

## GitHub Actions Integration

The script runs automatically during the GitHub Actions build process:
1. Checkout code
2. Setup Node.js
3. Install dependencies
4. Download Logisty APK and build (with GITHUB_TOKEN)
5. Deploy to GitHub Pages

## File Structure

```
public/
├── apks/
│   └── logisty-{version}.apk    # Downloaded APK file
└── logisty-version.json         # Version information
```

## Error Handling

- Falls back to hardcoded version if API calls fail
- Continues build process even if APK download fails
- Provides detailed error messages for debugging
- Works without token for public repositories (with limited functionality)

## Security Notes

- The GitHub token is only used during build time
- APK files are served directly from GitHub Pages (public)
- No sensitive information is stored in the repository
- Token is passed as environment variable, not stored in code
