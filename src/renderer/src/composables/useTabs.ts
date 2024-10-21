//import { showMainWindow } from "src/main/ipc/tabs/tabHandler"

export const addTab = (data) => {
  const dataFormatted = JSON.stringify(data)
  window.electron.ipcRenderer.send('add-tab', dataFormatted)
}

export const addTabObserver = (callback) => {
  window.electron.ipcRenderer.on('add-tab-observer', (_, data: { uuid: string; path: string }) => {
    callback(data)
  })
}

export const setActiveTab = (tabId: string) => {
  window.electron.ipcRenderer.send('set-active-tab', tabId)
}

export const closeTab = (data) => {
  window.electron.ipcRenderer.send('close-tab', data)
}

export const closeAllTabs = () => {
  window.electron.ipcRenderer.send('close-all-tabs')
}

export const showMainWindow = () => {
  window.electron.ipcRenderer.send('show-main-window')
}

// export const addTab = (path) => {
//   window.api.addTab(path)
// }
//
// export const hideTab = () => {
//   window.api.hideTab()
// }
//
// export const setActiveTab = (activeTab) => {
//   window.api.setActiveTab(activeTab)
//   window.electron.ipcRenderer()
// }
