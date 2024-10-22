// import useProfileStore from '@renderer/store/profile'
// import useLayoutStore from '@renderer/store/layout'
//import { getElectronStore } from '../../../main/ipc/store/storeHandler'

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

export const setElectronStore = (data) => {
  window.electron.ipcRenderer.send('set-electron-store', data)
}

// export const addElectronStore = () => {
//   window.electron.ipcRenderer.send('add-electron-store')
// }

// 只处理 Pinia Store
export const setViewsStore = () => {
  window.electron.ipcRenderer.send('set-views-store')
}

export const setViewsStoreObserver = (callback) => {
  window.electron.ipcRenderer.on('set-views-store-observer', (_, data: object) => {
    // console.log('set-views-store-observer', data)
    callback(data)
  })
}

// export const addViewsStore = (data) => {
//   const dataFormatted = JSON.stringify(data)
//   window.electron.ipcRenderer.send('add-views-store', dataFormatted)
// }
//
// export const addViewsStoreObserver = (callback) => {
//   window.electron.ipcRenderer.on('add-views-store-observer', (_, data: object) => {
//     callback(data)
//   })
// }

// 同时处理electronStore 和 Pinia Store
export const updateGlobalStore = (data: object) => {
  const dataFormatted = JSON.stringify(data)
  //console.log('updateGlobalStore: ', data)
  //console.log('updateGlobalStore: ', dataFormatted)
  window.electron.ipcRenderer.send('update-global-store', dataFormatted)
}

export const updateGlobalStoreObserver = (callback) => {
  window.electron.ipcRenderer.on('update-global-store-observer', (_, data: object) => {
    // console.log('update-global-store-observer: ', data)
    callback(data)
  })
}
