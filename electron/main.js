const { app, BrowserWindow, shell } = require("electron");
const path = require("path");
function createWindow() {
  const win = new BrowserWindow({
    width: 560, height: 900, minWidth: 380, minHeight: 600,
    backgroundColor: "#050A12", autoHideMenuBar: true, title: "Habit Tracker",
    icon: path.join(__dirname, "..", "build", "icon.png"),
    webPreferences: { contextIsolation: true, nodeIntegration: false }
  });
  win.loadFile(path.join(__dirname, "..", "www", "index.html"));
  win.webContents.setWindowOpenHandler(({ url }) => { shell.openExternal(url); return { action: "deny" }; });
}
app.whenReady().then(() => {
  createWindow();
  app.on("activate", () => { if (BrowserWindow.getAllWindows().length === 0) createWindow(); });
});
app.on("window-all-closed", () => { if (process.platform !== "darwin") app.quit(); });
