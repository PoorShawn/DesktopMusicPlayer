import WindowManager from '../../windowManager'
import { addViewsStore, updateViewsStore } from '../store/storeHandler'

const windowManager = WindowManager.getInstance()

export function addTab(_, data: string) {
  const tab = JSON.parse(data)
  const view = windowManager.createWebContentView('http://localhost:5173/#' + tab.path, tab.uuid, {
    x: 0,
    y: 100,
    width: 900,
    height: 570
  })

  windowManager.showWebContentView(view)
  addViewsStore(_, JSON.stringify({ layout_tabs: tab.uuid }))

  return view
}

export function setActiveTab(_, tabId: string) {
  const tab = windowManager.findWebContentViewById(tabId)
  if (tab) {
    windowManager.showWebContentView(tabId)
    updateViewsStore(_, JSON.stringify({ activeTab: tabId }))
  }
}

export function closeTab(_, tabId: string) {
  const tab = windowManager.findWebContentViewById(tabId)
  if (tab) {
    windowManager.closeWebContentView(tabId)
  }
}

export function closeAllTabs() {
  windowManager.hideAllWebContentView()
}
