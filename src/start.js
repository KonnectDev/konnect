const electron = require('electron');
const app = electron.app;
const path = require('path');
const isDev = require('electron-is-dev');
require('electron-reload');
const BrowserWindow = electron.BrowserWindow;
const Splashscreen  = require('@trodi/electron-splashscreen');


let mainWindow;

function createWindow() {
     mainWindow = new BrowserWindow({
        width: 1080,
        height: 920,
        webPreferences: {
            nodeIntegration: true,
        },
    });

    mainWindow.loadURL(
        isDev
            ? 'http://localhost:3000'
            : `file://${path.join(__dirname, '../build/index.html')}`,
    );

    mainWindow.on('closed', () => {
        mainWindow = null
    });

    mainWindow.maximize()
}

app.on('ready', () => {
    let windowOptions = {
        width: 500,
        height: 375,
        show: false,
    };
    let ret = Splashscreen.initDynamicSplashScreen({
        windowOpts: windowOptions,
        templateUrl: path.join(__dirname, "..", "logo-animation.html"),
        delay: 0,
        minVisible: 1500,
        splashScreenOpts: {
            height: 500,
            width: 500,
            transparent: true,
            },
    });

    window = ret.main;
    /** Send information to the splashscreen. */
    let update = function (i) {
        ret.splashScreen.webContents.send("update", i);
        if (i > 0) {
            setTimeout(function () { return update(i - 1); }, 500);
        }
        else {
            // Done sending updates to mock progress while loading window, so
            // go ahead and load the main window.
            window.loadURL(
                isDev
                    ? 'http://localhost:3000'
                    : `file://${path.join(__dirname, '../build/index.html')}`,
            );

            window.maximize()
        }
    };
    update(5);
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
});

app.on('activate', () => {
    if (mainWindow === null) {
        createWindow()
    }
});
