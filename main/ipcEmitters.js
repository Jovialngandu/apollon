//gestion des emmissions ipc et autres
const { EventEmitter } =require ('node:events');
const myEmitter = new EventEmitter();
function setupIpcEmitters(mainWin) {
    // Exemple : Envoyer un événement lorsqu'une action spécifique est effectuée
    mainWin.webContents.once('did-finish-load', () => {
        mainWin.webContents.send('app:ready', { message: 'Application prête !' });
    });
  
    console.log('ipcEmitters done.');
  }
  
  module.exports = { setupIpcEmitters,myEmitter};
  