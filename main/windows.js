//gestion des fenetres
const { BrowserWindow } = require('electron');
const path = require('node:path');

function createWindow(){
    const win = new BrowserWindow({
      width: 1200,
      height: 600,
      autoHideMenuBar:true,
      contextIsolation:false,
    
      enableRemoteModule:false,
      nodeIntegration:false,//desactivation de l'acces direct à node dans le renderer
      webPreferences: 
      {
        preload: path.join(__dirname, '../preload/index.js'),
        webSecurity:false,
      },
     
      frame:false ,
      minWidth:800,
      resizable:false,
    })
  
    win.loadURL('http://localhost:3000');

     // Open the DevTools.
    // win.webContents.openDevTools()
     return win
  }

function close(win){
    win.close()
}

function maximize(win){
    (win.fullScreen)?win.setSize(1000,1000):win.maximize()
}

module.exports = {createWindow}


