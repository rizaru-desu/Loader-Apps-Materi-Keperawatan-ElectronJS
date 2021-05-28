const { app, BrowserWindow } = require("electron");

function splashWindow() {
  const win = new BrowserWindow({
    width: 450,
    height: 275,
    frame: false,
    maximizable: false,
    resizable: false,
    title: "Splash Screen",
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true,
      plugins: true,
    },
  });

  const menuWin = new BrowserWindow({
    width: 1024,
    height: 576,
    maximizable: false,
    resizable: false,
    title: "Menu",
    frame: false,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true,
      plugins: true,
    },
  });

  // Or load a local HTML file
  win.loadURL(`file://${__dirname}/data/splashscreen.html`);
  menuWin.loadURL(`file://${__dirname}/data/menu.html`);
  //menuWin.webContents.openDevTools();

  menuWin.hide();
  setTimeout(function () {
    win.hide();
    menuWin.show();
  }, 5000);
}

app.whenReady().then(splashWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
