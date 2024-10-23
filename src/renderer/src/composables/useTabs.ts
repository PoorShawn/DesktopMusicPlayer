import layout from '@renderer/store/layout'
const layoutStore = layout()

export const addTab = (data: object) => {
  const dataFormatted = JSON.stringify(data)
  window.electron.ipcRenderer.send('add-tab', dataFormatted)
}

// 监听 'add-tab-observer' 频道，更新pinia中的tabs数据
export const addTabObserver = () => {
  window.electron.ipcRenderer.on('add-tab-observer', (_, data: string) => {
    const dataFormatted: { uuid: string; path: string } = JSON.parse(data)

    // 把tabs的信息存入pinia中
    if (layoutStore.tabs === null) {
      layoutStore.setTabs([dataFormatted])
    } else {
      const isTabPresent = layoutStore.tabs.find((tab) => tab.uuid === dataFormatted.uuid)
      if (!isTabPresent) {
        const tabs = [...layoutStore.tabs, dataFormatted]
        layoutStore.setTabs(tabs)
      }
    }
  })
}

export const setActiveTab = (tabId: string) => {
  window.electron.ipcRenderer.send('set-active-tab', tabId)
}

export const closeTab = (tabId: string) => {
  window.electron.ipcRenderer.send('close-tab', tabId)
}

// 监听 'close-tab-observer' 频道，更新pinia中的tabs数据
export const closeTabObserver = async () => {
  let tab: string
  await window.electron.ipcRenderer.on('close-tab-observer', (_, tabId: string) => {
    const newTabs = layoutStore.tabs.filter((tab) => tab.uuid !== tabId)
    layoutStore.setTabs(newTabs)
    tab = tabId
  })
  return tab
}

export const closeAllTabs = () => {
  window.electron.ipcRenderer.send('close-all-tabs')
}

export const showMainWindow = () => {
  window.electron.ipcRenderer.send('show-main-window')
}
