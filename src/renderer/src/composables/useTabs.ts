export const addTab = () => {
  window.electronAPI.addTab('home')
}

export const hideTab = () => {
  console.log('hhhhideTab')
  window.electronAPI.hideTab()
}
