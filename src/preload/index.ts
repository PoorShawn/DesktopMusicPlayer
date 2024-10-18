import { contextBridge, ipcRenderer } from 'electron/renderer'

contextBridge.exposeInMainWorld('api', {
  addTab: (path: string) => ipcRenderer.send('add-tab', path),
  hideTab: () => ipcRenderer.send('hide-tab'),
  setAnonymous: (isAnonymous: boolean) => ipcRenderer.send('set-anonymous', isAnonymous),
  getElectronStore: () => ipcRenderer.invoke('get-electron-store'),
  updatePiniaStore: (callback: (value: object) => void) => ipcRenderer.on('update-pinia-store', (_event, value: object) => callback(value))
})
