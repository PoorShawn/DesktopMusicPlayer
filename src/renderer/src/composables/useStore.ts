// import useProfileStore from '@renderer/store/profile'
// import useLayoutStore from '@renderer/store/layout'
import { getElectronStore } from '../../../main/ipc/store/storeHandler'

// 只处理 electronStore
export const getElectronStore = async (callback) => {
  await window.electron.ipcRenderer.invoke('get-electron-store').then((data) => {
    callback(data)
  })
}

export const getElectronStoreByKey = async (callback) => {
  await window.electron.ipcRenderer.invoke('get-electron-store-by-key').then((data) => {
    callback(data)
  })
}

export const setElectronStore = () => {
  window.electron.ipcRenderer.send('set-electron-store')
}

export const addElectronStore = () => {
  window.electron.ipcRenderer.send('add-electron-store')
}

// 只处理 Pinia Store
export const updateViewsStore = () => {
  window.electron.ipcRenderer.send('update-views-store')
}

export const addViewsStore = () => {
  window.electron.ipcRenderer.send('add-views-store')
}

export const addViewsStoreObserver = (callback) => {
  window.electron.ipcRenderer.on('add-views-store-observer', (_, data) => {
    callback(data)
  })
}

// 同时处理electronStore 和 Pinia Store
export const updateGlobalStore = (data) => {
  const dataFormatted = JSON.stringify(data)
  //console.log('updateGlobalStore: ', data)
  //console.log('updateGlobalStore: ', dataFormatted)
  window.electron.ipcRenderer.send('update-global-store', dataFormatted)
}

export const updateGlobalStoreObserver = (callback) => {
  window.electron.ipcRenderer.on('update-global-store-observer', (_, data) => {
    callback(data)
  })
}

// // Ipc invoke
// export const syncWithElectronStore = () => {
//   window.store.getElectronStore().then((data: object) => {
//     const profileStore = useProfileStore()
//
//     // anonymous set for pinia
//     profileStore.setIsAnonymous(data['isAnonymous'])
//   })
//
//   window.electron.ipcRenderer.invoke('update-pinia-store', getElectronStore())
// }
//
// // Ipc on
// export const updatePiniaStore = () => {
//   window.store.updatePiniaStore((data) => {
//     const profileStore = useProfileStore()
//
//     // anonymous for pinia
//     profileStore.setIsAnonymous(data['isAnonymous'])
//   })
//
//   // others
// }
//
// export const setAnonymous = (isAnonymous: boolean) => {
//   window.api.setAnonymous(isAnonymous)
// }
//
// export const getElectronStoreTabs = async () => {
//   const layoutStore = useLayoutStore()
//   await window.api.getElectronStoreTabs().then((data: string[]) => {
//     layoutStore.setTabs(data)
//     console.log('pinia store tabs loaded:', layoutStore.tabs)
//   })
//
//   return layoutStore.tabs
// }
