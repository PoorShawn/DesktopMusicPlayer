import { is } from '@electron-toolkit/utils'
import { BrowserWindow, WebContentsView, Rectangle, shell } from 'electron'
import { join } from 'path'

export default class WindowManager {
  private static instance: WindowManager
  mainWindow: BrowserWindow | null = null
  private childWindows: Map<string, WebContentsView> = new Map()

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private constructor() {}

  static getInstance(): WindowManager {
    if (!WindowManager.instance) {
      WindowManager.instance = new WindowManager()
    }
    return WindowManager.instance
  }

  getAllWindows(): (BrowserWindow | WebContentsView)[] {
    const windows: (BrowserWindow | WebContentsView)[] = []

    // 如果存在主窗口，则添加其到数组
    if (this.mainWindow) {
      windows.push(this.mainWindow)
    }

    // 添加所有子窗口到数组
    this.childWindows.forEach((view) => {
      windows.push(view)
    })

    return windows
  }

  createMainWindow(options: Electron.BrowserWindowConstructorOptions): number {
    this.mainWindow = new BrowserWindow(options)
    this.mainWindow.webContents.openDevTools()

    this.mainWindow.on('closed', () => {
      this.mainWindow = null
    })

    this.mainWindow.on('ready-to-show', () => {
      this.mainWindow?.show()
    })

    this.mainWindow.webContents.setWindowOpenHandler((details) => {
      shell.openExternal(details.url)
      return { action: 'deny' }
    })

    if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
      this.mainWindow.loadURL(process.env['ELECTRON_RENDERER_URL'])
    } else {
      this.mainWindow.loadFile(join(__dirname, '../renderer/index.html'))
    }

    return this.mainWindow!.id
  }

  ipcWindow(channel: string, value) {
    if (this.childWindows) {
      this.iterateWebContentView((childWindow) => {
        childWindow?.webContents.send(channel, value)
      })
    }
    this.mainWindow?.webContents.send(channel, value)
  }

  showMainWindow(): void {
    this.mainWindow?.show()
  }

  getMainWindow(): BrowserWindow | null {
    return this.mainWindow
  }

  closeMainWindow(): void {
    if (this.mainWindow) {
      this.mainWindow.close()
    }
  }

  findWebContentViewById(id: string): WebContentsView | null {
    return this.childWindows.get(id) || null
  }

  iterateWebContentView(callback: (view?: WebContentsView, winId?: string) => void): void {
    this.childWindows.forEach((view, winId) => callback(view, winId))
  }

  createWebContentView(url: string, tabId: string, bounds: Rectangle): string {
    const view = new WebContentsView({
      webPreferences: {
        preload: join(__dirname, '../preload/index.js'),
        sandbox: false,
        contextIsolation: true
      }
    })
    view.setBounds(bounds)
    view.webContents.loadURL(url)

    const winId = tabId
    this.mainWindow?.contentView.addChildView(view)
    this.childWindows.set(winId, view)

    view.webContents.openDevTools()
    // view.setVisible(true);

    this.mainWindow?.on('resize', () => {
      const contentSize = this.mainWindow?.getContentSize()
      if (contentSize) {
        const [width, height] = contentSize
        view.setBounds({
          x: 0,
          y: height / 2,
          width: width,
          height: height / 2
        })
      }
    })

    return winId
  }

  showWebContentView(winId: string): void {
    const view = this.childWindows.get(winId)
    if (view) {
      // Hide all WebContentViews
      this.iterateWebContentView((_, winId) => {
        if (winId) {
          this.hideWebContentView(winId)
        }
      })

      // Show the specific WebContentView
      view.setVisible(true)
    }
  }

  hideWebContentView(winId: string): void {
    const view = this.childWindows.get(winId)
    if (view) {
      view.setVisible(false)
    }
  }

  closeWebContentView(winId: string): void {
    const view = this.childWindows.get(winId)
    if (view) {
      view.webContents.close()
      this.childWindows.delete(winId)
    }
  }

  hideAllWebContentView() {
    this.iterateWebContentView((_, winId) => {
      if (winId) {
        this.hideWebContentView(winId)
      }
    })
  }
}
