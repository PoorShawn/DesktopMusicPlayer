export const addTab = () => {
  window.electronAPI.addTab('home')
}

export const hideTab = () => {
  window.electronAPI.hideTab()
}
