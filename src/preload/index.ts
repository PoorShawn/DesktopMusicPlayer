import { contextBridge, ipcRenderer } from 'electron/renderer'
import { electronAPI } from '@electron-toolkit/preload'

contextBridge.exposeInMainWorld('electron', electronAPI)

contextBridge.exposeInMainWorld('api', {
  setAnonymous: (isAnonymous: boolean) => ipcRenderer.send('set-anonymous', isAnonymous),

  addTab: (path: string) => ipcRenderer.send('add-tab', path),
  hideTab: () => ipcRenderer.send('hide-tab'),
  getElectronStoreTabs: () => ipcRenderer.invoke('get-electron-store-tabs'),
  setActiveTab: (activeTab: string) => ipcRenderer.send('set-active-tab', activeTab)
})

contextBridge.exposeInMainWorld('store', {
  getElectronStore: () => ipcRenderer.invoke('get-electron-store'),
  updatePiniaStore: (callback: (value: object) => void) =>
    ipcRenderer.on('update-pinia-store', (_event, value: object) => callback(value)),
})
