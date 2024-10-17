import { app, ipcMain } from 'electron'
import { join } from 'path'
import { electronApp, optimizer } from '@electron-toolkit/utils'
import icon from '../../resources/icon.png?asset'
import WindowManager from './windowManager'
import { setAnonymous, setTab, getElectronStore } from './store/store'

app.whenReady().then(() => {
  // Set app user model id for windows
  electronApp.setAppUserModelId('com.electron')

  // Default open or close DevTools by F12 in development
  // and ignore CommandOrControl + R in production.
  // see https://github.com/alex8088/electron-toolkit/tree/master/packages/utils
  app.on('browser-window-created', (_, window) => {
    optimizer.watchWindowShortcuts(window)
  })

  // IPC test
  //ipcMain.on('ping', () => console.log('pong'));

  const windowManager = WindowManager.getInstance()
  windowManager.createMainWindow({
    width: 900,
    height: 670,
    show: false,
    autoHideMenuBar: true,
    ...(process.platform === 'linux' ? { icon } : {}),
    webPreferences: {
      preload: join(__dirname, '../preload/index.js'),
      sandbox: true,
      contextIsolation: true
    }
  })

  // 创建几个 WebContentsView 子窗口
  //const view1 = windowManager.createWebContentView('https://bilibili.com', { x: 0, y: 335, width: 900, height: 335 });
  //const view2 = windowManager.createWebContentView('http://localhost:5173/#home', { x: 450, y: 0, width: 450, height: 670 });

  //windowManager.showWebContentView(view2);
  //windowManager.showWebContentView(view1);

  ipcMain.on('add-tab', (_, path) => {
    const view3 = windowManager.createWebContentView('http://localhost:5173/#' + path, {
      x: 450,
      y: 0,
      width: 450,
      height: 670
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

  // app.on('activate', function () {
  //   // On macOS it's common to re-create a window in the app when the
  //   // dock icon is clicked and there are no other windows open.
  //   if (BrowserWindow.getAllWindows().length === 0) createWindow()
  // })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
