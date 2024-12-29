const { app } = require('electron/main')
const createWindow = require('./windows')
const setupIpcListeners = require('./ipcListeners')
const {setupIpcEmitters,myEmitter }= require('./ipcEmitters')
const { addMusic,initDatas } = require('./utils/Utils')
let mainWin;

app.whenReady().then(async() => { 

  initDatas()
  // mainWin= await createWindow()  //recuperation de la fenetre principale
  // setupIpcEmitters(mainWin) //configuration des emetteurs
  // setupIpcListeners(mainWin)  //configuration des ecouteurs
  myEmitter.on('addMusic',(...args)=>addMusic(...args))
  myEmitter.on('removeMusic',(...args)=>console.log(...args,'rem'))
  myEmitter.on('updateMusic',(...args)=>console.log(...args,'update'))
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


