import { ElectronAPI } from '@electron-toolkit/preload'

interface APIs {
  addTab: (path: string) => void;
}

declare global {
  interface Window {
    electron: ElectronAPI
    api: APIs
  }
}
