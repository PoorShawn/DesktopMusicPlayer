import { ipcMain } from 'electron'
import { getElectronStore, setAnonymous, setTab } from '../store/store'
import WindowManager from '../windowManager'

const windowManager = WindowManager.getInstance()

export default function setIpcEvent() {
  ipcMain.on('add-tab', (_, path) => {
    const view3 = windowManager.createWebContentView('http://localhost:5173/#' + path, {
      x: 0,
      y: 100,
      width: 900,
      height: 570
    })
    setTab(view3)
    windowManager.showWebContentView(view3)
  })

  ipcMain.on('hide-tab', () => {
    //windowManager.closeWebContentView(view)
    windowManager.hideAllWebContentView()
    windowManager.showMainWindow()

    setAnonymous(false)
    // 通知主程序
    windowManager.ipcWindow('update-pinia-store', getElectronStore())
  })

  ipcMain.on('set-anonymous', (_, isAnonymous) => {
    setAnonymous(isAnonymous)
    // 通知主程序
    windowManager.ipcWindow('update-pinia-store', getElectronStore())
  })

  ipcMain.handle('get-electron-store', () => {
    return getElectronStore()
  })
}
