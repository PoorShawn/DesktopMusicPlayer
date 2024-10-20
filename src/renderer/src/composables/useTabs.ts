export const addTab = (tab) => {
  const dataFormatted = JSON.stringify(tab)
  window.electron.ipcRenderer.send('add-tab', dataFormatted)
}

export const setActiveTab = () => {
  window.electron.ipcRenderer.send('set-active-tab')
}

export const closeTab = (data) => {
  window.electron.ipcRenderer.send('close-tab', data)
}

export const closeAllTabs = () => {
  window.electron.ipcRenderer.send('close-all-tabs')
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
