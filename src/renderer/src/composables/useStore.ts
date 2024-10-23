import { updatePiniaStore } from '@renderer/store'

// 更新pinia中的数据
const setStoreData = (data: object) => {
  const storeKeysValues: [string, unknown][] = Object.entries(data)
  storeKeysValues.forEach(([key, value]) => {
    updatePiniaStore(key, value)
  })
}

export const getElectronStore = async () => {
  await window.electron.ipcRenderer.invoke('get-electron-store').then((data) => {
    const dataFormatted = JSON.parse(data)
    setStoreData(dataFormatted)
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

export const setViewsStore = (data: object) => {
  // const dataFormatted = JSON.stringify(data)
  window.electron.ipcRenderer.send('set-views-store', data)
}

export const setViewsStoreObserver = () => {
  window.electron.ipcRenderer.on('set-views-store-observer', (_, data: string) => {
    const dataFormatted: object = JSON.parse(data)
    setStoreData(dataFormatted)
  })
}

export const updateGlobalStore = (data: object) => {
  const dataFormatted = JSON.stringify(data)
  window.electron.ipcRenderer.send('update-global-store', dataFormatted)
}

export const updateGlobalStoreObserver = () => {
  window.electron.ipcRenderer.on('update-global-store-observer', (_, data: string) => {
    const dataFormatted = JSON.parse(data)
    setStoreData(dataFormatted)
  })
}
