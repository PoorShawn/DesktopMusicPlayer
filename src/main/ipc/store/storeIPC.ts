import { ipcMain } from 'electron'
import {
  getElectronStore,
  getElectronStoreByKey,
  setElectronStore,
  updateGlobalStore,
  setViewsStore
} from './storeHandler'

export default function () {
  ipcMain.handle('get-electron-store', getElectronStore)
  ipcMain.handle('get-electron-store-by-key', getElectronStoreByKey)

  ipcMain.on('set-electron-store', setElectronStore)
  // ipcMain.on('add-electron-store', addElectronStore)

  ipcMain.on('set-views-store', setViewsStore)
  // ipcMain.on('add-views-store', addViewsStore)

  ipcMain.on('update-global-store', updateGlobalStore)
}
