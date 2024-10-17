// import { contextBridge } from 'electron'
//import { electronAPI } from '@electron-toolkit/preload'
import { contextBridge, ipcRenderer } from 'electron/renderer'
//import { ipcRenderer, contextBridge } from 'electron/renderer'

// Custom APIs for renderer
//const api = {}

// contextBridge.exposeInMainWorld('electron', electronAPI)
contextBridge.exposeInMainWorld('api', {
  addTab: (path: string) => ipcRenderer.send('add-tab', path),
  hideTab: () => ipcRenderer.send('hide-tab'),
  setAnonymous: (isAnonymous: boolean) => ipcRenderer.send('set-anonymous', isAnonymous),
  getElectronStore: () => ipcRenderer.invoke('get-electron-store'),
  updatePiniaStore: (callback) => ipcRenderer.on('update-pinia-store', (_event, value: object) => callback(value))
})

// Use `contextBridge` APIs to expose Electron APIs to
// renderer only if context isolation is enabled, otherwise
// just add to the DOM global.
// if (process.contextIsolated) {
//   try {
//     //contextBridge.exposeInMainWorld('electron', electronAPI)
//     //contextBridge.exposeInMainWorld('api', api)

//     contextBridge.exposeInMainWorld('electronAPI', {
//       addTab: (path: string) => ipcRenderer.send('add-tab', path)
//     })

//   } catch (error) {
//     console.error(error)
//   }
// } else {
//   // @ts-ignore (define in dts)
//   window.electron = electronAPI
//   // @ts-ignore (define in dts)
//   window.api = api
// }
