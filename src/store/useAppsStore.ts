import { create } from 'zustand';

export interface AppInfo {
  version: string;
  repo: string;
}

interface AppsState {
  apps: Record<string, AppInfo>;
  loading: boolean;
  fetchApps: () => Promise<void>;
}

export const useAppsStore = create<AppsState>((set) => ({
  apps: {},
  loading: true,
  fetchApps: async () => {
    set({ loading: true });
    try {
    const res = await fetch('/apps.json');
      const data: Record<string, AppInfo> = await res.json();
      set({ apps: data });
    } catch (err) {
      console.error('Failed to fetch apps.json', err);
    } finally {
      set({ loading: false });
    }
  },
}));
