import { ipcMain } from 'electron'
import { addTab, closeAllTabs, closeTab, setActiveTab } from './tabHandler'

export default function () {
  ipcMain.on('add-tab', addTab)
  ipcMain.on('set-active-tab', setActiveTab)
  ipcMain.on('close-tab', closeTab)
  ipcMain.on('close-all-tabs', closeAllTabs)

  // ipcMain.on('add-tab', (_, path) => {
  //   console.log('path: ', path)
  //   const view = windowManager.createWebContentView('http://localhost:5173/#' + path, {
  //     x: 0,
  //     y: 100,
  //     width: 900,
  //     height: 570
  //   })
  //   // setTab(view)
  //   // windowManager.showWebContentView(view)
  //
  //   // send updated tabs info to every windows
  //   windowManager.ipcWindow('update-pinia-store', ['tabs', { view, path }])
  // })

  // ipcMain.on('set-activeTab', (_, winId) => {
  //   setActiveTab(winId)
  //   windowManager.showWebContentView(winId)
  // })

  // ipcMain.on('hide-tab', () => {
  //   //windowManager.closeWebContentView(view)
  //   windowManager.hideAllWebContentView()
  //   windowManager.showMainWindow()
  //
  //   setAnonymous(false)
  //   // 通知主程序
  //   windowManager.ipcWindow('update-pinia-store', getElectronStore())
  // })
}
