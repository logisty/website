import { useState, useEffect } from 'react';

interface LogistyVersionInfo {
  generatedAt: string;
  logisty: {
    version: string;
    tag: string;
    apkName: string;
    apkPath: string;
    downloadUrl: string;
    publishedAt: string;
  };
}

export function useLogistyVersion() {
  const [versionInfo, setVersionInfo] = useState<LogistyVersionInfo | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchVersionInfo = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const response = await fetch('/logisty-version.json');
        if (!response.ok) {
          throw new Error(`Failed to fetch version info: ${response.status}`);
        }
        
        const data: LogistyVersionInfo = await response.json();
        setVersionInfo(data);
      } catch (err) {
        console.error('Error fetching Logisty version info:', err);
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    };

    fetchVersionInfo();
  }, []);

  return { versionInfo, loading, error };
}
