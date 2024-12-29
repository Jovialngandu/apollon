//fonctionalité utilitaire
const { constants } = require('buffer')
const {getConfig}=require('../utils/configUtils')
const {extractMetadata,getMusicPath,formatData}=require('../utils/musicUtils')
const {stat}=require('fs/promises')
async function initDatas() {

   //initialisation database
   musics= await  getMusicPath()
   metadatas=await extractMetadata(musics)
   dataFormat= await formatData(musics,metadatas)
   configs=await getConfig()
   if(JSON.parse(configs.datas).firstRun){
      await require('../utils/dbUtils').initTables()
      await require('../utils/dbUtils').refreshMusics(...dataFormat)
      await require('../utils/musicUtils').watchDir(JSON.parse(configs.datas).path)
   }else{
      await require('../utils/musicUtils').watchDir(JSON.parse(configs.datas).Path)

   }
 }

 async function addMusic(path){
  console.log( path,'add')
 }
module.exports={initDatas,addMusic}