const { app } = require('electron/main')
const createWindow = require('./windows')
const setupIpcListeners = require('./ipcListeners')
const {setupIpcEmitters,myEmitter }= require('./ipcEmitters')
const { addMusic,initDatas,removeMusic, } = require('./utils/Utils')
let mainWin;

app.whenReady().then(async() => { 

  initDatas()
  mainWin= await createWindow()  //recuperation de la fenetre principale
  setupIpcEmitters(mainWin) //configuration des emetteurs
  setupIpcListeners(mainWin)  //configuration des ecouteurs
  myEmitter.on('addMusic',(...args)=>addMusic(...args))
  myEmitter.on('removeMusic',(...args)=>removeMusic(...args))
  // myEmitter.on('updateMusic',(...args)=>updateMusic(...args))
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()     
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})


