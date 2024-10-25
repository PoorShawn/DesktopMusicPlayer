import WindowManager from '../../windowManager'
import { setViewsStore } from '../store/storeHandler'
// import { WebContentsView } from 'electron'
//import { addViewsStore, updateViewsStore } from '../store/storeHandler'

const windowManager = WindowManager.getInstance()

export function addTab(_, data: string) {
  const tabData = JSON.parse(data)
  const view = windowManager.createWebContentView(
    'http://localhost:5173/#' + tabData.path,
    tabData.uuid,
    {
      x: 0,
      y: 61,
      width: 900,
      height: 570
    }
  )
  // windowManager.showWebContentView(tabData.uuid)

  // 更新主窗口的pinia数据
  // console.log('addTab: ', data)
  windowManager.ipcMainWindow('add-tab-observer', data)
  // 更新新建窗口的pinia数据
  view.webContents.on('did-finish-load', () => {
    const data = { layout_currentTabId: tabData.uuid }
    // console.log('View addTabObserver: ', data)
    const dataFormatted = JSON.stringify(data)
    view.webContents.send('set-views-store-observer', dataFormatted)
  })

  //addViewsStore(_, JSON.stringify({ layout_tabs: tab.uuid }))
  return tabData.uuid
}

export function setActiveTab(_, tabId: string) {
  // const tab = windowManager.findWebContentViewById(tabId)
  // if (tab) {
  windowManager.showWebContentView(tabId)
  const data = { layout_activeTabId: tabId }
  const dataFormatted = JSON.stringify(data)
  setViewsStore(_, dataFormatted)
  // }
}

export function closeTab(_, tabId: string) {
  windowManager.closeWebContentView(tabId)
  windowManager.ipcMainWindow('close-tab-observer', tabId)
}

export function closeAllTabs() {
  //windowManager.closeAllWebContentView()
}

export function showMainWindow() {
  console.log('showMainWindow')
  windowManager.showMainWindow()
  windowManager.iterateWebContentView((view) => {
    view.setVisible(false)
  })
}
