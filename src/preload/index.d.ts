//import { ElectronAPI } from '@electron-toolkit/preload'

interface store {
  tab: string;
  isAnonymous: boolean;
}

interface APIs {
  addTab: (path: string) => void;
  hideTab: () => void;
  setAnonymous: () => void;
  getElectronStore: () => store;
  getElectronStoreTabs: () => string[];
}

declare global {
  interface Window {
    electron: ElectronAPI
    api: APIs
  }
}
