import Store from 'electron-store'
import WindowManager from '../../windowManager'

const storeHandler = new Store()
const windowManager = WindowManager.getInstance()

// 只处理 electronStore
export function getElectronStore() {
  console.log('getElectronStore: ', storeHandler.store)
  console.log('getElectronStore: ', JSON.stringify(storeHandler.store))
  return JSON.stringify(storeHandler.store)
}

export function getElectronStoreByKey(_, key: string) {
  return storeHandler.get(key)
}

export function setElectronStore(_, data: string) {
  const dataFormatted = JSON.parse(data)
  return storeHandler.set(dataFormatted)
}

export function addElectronStore(_, key: string, data: string) {
  const dataFormatted = JSON.parse(data)
  const oldValue = _.cloneDeep(storeHandler.get(key))
  const newValue = _.cloneDeep([...oldValue, dataFormatted])
  return storeHandler.set(key, newValue)
}

// 只处理 Pinia Store
export function updateViewsStore(_, data: string) {
  const dataFormatted = JSON.parse(data)
  windowManager.getAllWindows().forEach((view) => {
    view.webContents.send('update-views-store', dataFormatted)
  })
}

export function addViewsStore(_, data: string) {
  const dataFormatted = JSON.parse(data)
  //console.log('addViewsStore: ', dataFormatted)
  windowManager.getAllWindows().forEach((view) => {
    view.webContents.send('add-views-store-observer', dataFormatted)
  })
}

// 同时处理electronStore 和 Pinia Store
export function updateGlobalStore(_, data: string) {
  const dataFormatted = JSON.parse(data)
  // console.log('updateGlobalStore: ', data)
  // console.log('updateGlobalStore: ', dataFormatted)
  // const storeKeyValues = Object.entries(dataFormatted)
  // console.log('storeKeyValues: ', storeKeyValues)
  // storeKeyValues.forEach(([key, value]) => {
  //   console.log('key: ', key)
  //   console.log('value: ', value)
  //   storeHandler.set(key, value)
  // })
  storeHandler.set(dataFormatted)
  windowManager.getAllWindows().forEach((view) => {
    view.webContents.send('update-global-store-observer', dataFormatted)
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
