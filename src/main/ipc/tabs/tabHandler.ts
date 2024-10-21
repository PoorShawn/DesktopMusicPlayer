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
      y: 100,
      width: 900,
      height: 570
    }
  )
  // windowManager.showWebContentView(tabData.uuid)

  // 更新主窗口的pinia数据
  windowManager.ipcMainWindow('add-tab-observer', tabData)
  // 更新新建窗口的pinia数据
  view.webContents.on('did-start-navigation', () => {
    const data = { layout_currentTab: tabData.uuid }
    view.webContents.send('set-views-store-observer', data)
  })

  //addViewsStore(_, JSON.stringify({ layout_tabs: tab.uuid }))
  return tabData.uuid
}

export function setActiveTab(_, tabId: string) {
  const tab = windowManager.findWebContentViewById(tabId)
  if (tab) {
    windowManager.showWebContentView(tabId)
    setViewsStore(_, { layout_activeTab: tabId })
    //updateViewsStore(_, JSON.stringify({ activeTab: tabId }))
  }
}

export function closeTab(_, tabId: string) {
  const tab = windowManager.findWebContentViewById(tabId)
  if (tab) {
    windowManager.closeWebContentView(tabId)
  }
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
