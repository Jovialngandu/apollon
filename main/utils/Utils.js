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

   stat(path, async (err)=>{
      music=await require('../../app/model/Music').findWhere(path,'file_path')
     
      if (!err && music.length==0) {
   
         try {
            metadatas=await extractMetadata([[path]])//on recupere les metadatas
            dataFormat= await formatData([[path,path.split('\\').pop()]],metadatas)
            await require('../utils/dbUtils').refreshMusics(...dataFormat)
         } catch (error) {
            console.error(error)
         }

      }
   
     });
  
 }
module.exports={initDatas,addMusic}