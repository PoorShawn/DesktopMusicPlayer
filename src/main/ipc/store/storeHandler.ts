import Store from 'electron-store'
import WindowManager from '../../windowManager'

const storeHandler = new Store()
const windowManager = WindowManager.getInstance()

// 只处理 electronStore
export function getElectronStore() {
  return JSON.stringify(storeHandler.store)
}

export function getElectronStoreByKey(_, key: string) {
  return storeHandler.get(key)
}

export function setElectronStore(_, data: string) {
  const dataFormatted = JSON.parse(data)
  console.log('setElectronStore', dataFormatted)
  return storeHandler.set(dataFormatted)
}

// 替换每一个窗口的pinia-store
export function setViewsStore(_, data: string) {
  // const dataFormatted = JSON.parse(data)

  windowManager.getAllWindows().forEach((view) => {
    // console.log('window: ', view)
    view.webContents.send('set-views-store-observer', data)
  })
}

// 同时更新electron-store和pinia中的数据存储
export function updateGlobalStore(_, data: string) {
  const dataFormatted: object = JSON.parse(data)

  storeHandler.set(dataFormatted)
  console.log('updateGlobalStore: ', dataFormatted)

  windowManager.getAllWindows().forEach((view) => {
    view.webContents.send('update-global-store-observer', data)
  })
}

// export const setTab = (tab: string) => {
//   const tabs: string[] = storeHandler.get('tabs', []) as string[]
//   if (!tabs.includes(tab)) {
//     tabs.push(tab)
//     storeHandler.set('tabs', tabs)
//   }
//   // console.log('set-tab: ', tabs)
// }}
//
// export const setActiveTab = (activeTab: string) => {
//   storeHandler.set('activeTab', activeTab)
// }
//
// export const getTabs = () => {
//   return storeHandler.get('tabs', []) as string[]
// }
//
// export const setAnonymous = (isAnonymous: boolean) => {
//   storeHandler.set('isAnonymous', isAnonymous)
// }
//
// export const getElectronStore = () => {
//   // console.log('getElectronStore:::', { ...storeHandler.storeHandler })
//   // return { ...storeHandler.storeHandler }
//   // 使用 JSON 方法进行深拷贝
//   return JSON.parse(JSON.stringify(storeHandler.storeHandler))
// }
