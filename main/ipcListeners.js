//gestion des ecouteurs ipc 'findWhere','findFirst','findLast','delete','deleteWhere' ,'findAll','findbyId'
const { ipcMain } = require('electron');
const Model = require('../database/model');
const toHandleWithArgs=['findWhere','findById','insert','deleteById','deleteWhere','UpdateById','UpdateWhere'];//findWhere,delete,Update,deleteWhere
const toHandleWithouthArgs=['findAll','findFirst','findLast'];//findFirt,findLast,
const toOn=['createTable']
const tableName=['Music','Playlist','Readinglist','Music_Playlist','Setting']

async function setupIpcListeners(mainWin) {//on pourait avoir besoin d'effectuer des operztion sur la fenetre 

  tableName.forEach(tableName => {
    let tableLink= require('../app/model/'+tableName)

    toHandleWithArgs.forEach( handle=> {
      ipcMain.handle(tableName+':'+handle,async (event,args=[])=>{ 
        const datas=await tableLink[handle](...args) 
        return datas

      });

    });

    toHandleWithouthArgs.forEach( handle=> {
      ipcMain.handle(tableName+':'+handle,async (event)=>{
        
        const datas=await tableLink[handle]()
        return datas

      });

    });
    
  });

  ipcMain.handle('closeWindow',()=>mainWin.close());

   ipcMain.handle('minWindow',()=>mainWin.minimize())

  console.log('IpcListener Done.');
 
}

module.exports = setupIpcListeners;
