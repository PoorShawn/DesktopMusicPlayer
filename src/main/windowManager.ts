import { is } from '@electron-toolkit/utils';
import { BrowserWindow, WebContentsView, Rectangle, shell } from 'electron';
import { join } from 'path';
import { v4 as generateKey } from 'uuid';

export default class WindowManager {
    private static instance: WindowManager;
    private mainWindow: BrowserWindow | null = null;
    private childWindows: Map<string, WebContentsView> = new Map();
    
    private constructor() {}

    static getInstance(): WindowManager {
        if (!WindowManager.instance) {
            WindowManager.instance = new WindowManager();
        }
        return WindowManager.instance;
    }

    createMainWindow(options: Electron.BrowserWindowConstructorOptions): number {
        this.mainWindow = new BrowserWindow(options);
        this.mainWindow.on('closed', () => {
            this.mainWindow = null;
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

        return this.mainWindow!.id;
    }

    getMainWindow(): BrowserWindow | null {
        return this.mainWindow;
    }

    closeMainWindow(): void {
        if(this.mainWindow){
            this.mainWindow.close();
        }
    }

    iterateWebContentView(callback: (view: WebContentsView, winId: string) => void): void {
        this.childWindows.forEach((view, winId) => callback(view, winId));
    }

    createWebContentView(url: string, bounds: Rectangle): string {
        const view = new WebContentsView();
        view.setBounds(bounds);
        view.webContents.loadURL(url);

        const winId = generateKey();
        this.mainWindow?.contentView.addChildView(view);
        this.childWindows.set(winId, view);

        // view.webContents.openDevTools();
        // view.setVisible(true);

        this.mainWindow?.on('resize', () => {
            const contentSize = this.mainWindow?.getContentSize();
            if(contentSize){
                const [width, height] = contentSize;
                view.setBounds({
                    x: 0, y: height / 2,
                    width: width, height: height / 2
                    })
            }
        })

        return winId;
    }

    showWebContentView(winId: string): void {
        const view = this.childWindows.get(winId);
        if(view){
            // Hide all WebContentViews
            this.iterateWebContentView((_, winId) => {
                this.hideWebContentView(winId);
              })
            
            // Show the specific WebContentView
            view.setVisible(true);
        }
    }

    hideWebContentView(winId: string): void {
        const view = this.childWindows.get(winId);
        if(view){
            view.setVisible(false);
        }
    }

    closeWebContentView(winId: string): void {
        const view = this.childWindows.get(winId);
        if(view){
            view.webContents.close();
            this.childWindows.delete(winId);
        }
    }
}
