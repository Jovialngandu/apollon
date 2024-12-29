//fonctionalité utilitaire
const {getConfig}=require('../utils/configUtils')
const {extractMetadata,getMusicPath,formatData}=require('../utils/musicUtils')
const {stat}=require('fs/promises')
async function initDatas() {

   //initialisation database
   musics= await  getMusicPath()
   metadatas=await extractMetadata(musics)
   dataFormat= await formatData(musics,metadatas)
   configs=await getConfig()
   console.log(configs) 
   if(JSON.parse(configs.datas).firstRun){
      await require('../utils/dbUtils').initTables()
      await require('../utils/dbUtils').refreshMusics(...dataFormat)
   }
//    // require('../utils/dbUtils').refreshMusics(...dataFormat)
   await require('../utils/musicUtils').watchDir()
  

 }

 async function addMusic(path){
  console.log( path)
 }
module.exports={initDatas,addMusic}