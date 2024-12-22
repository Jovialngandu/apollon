//fonctionalité utilitaire
const db  = require('../database/database');
const mm = require('music-metadata');
const fs = require('fs');
const a=require('mime')




async function initDatas() {

   //initialisation database
   musics=await getMusicPath()
   metadatas=await extractMetadata(musics)
   console.log(metadatas)
   
 }

async function getMusicPath(directory=process.env.Home+'/music',isrecursive=true) {

   const params= {

      option:{
               
               withFileTypes:true,
               recursive:isrecursive
      },
      path:directory
   }

   musics=fs.readdirSync(params.path,params.option,)
   compatibleFiles=(await musics.filter(file=>file.isFile()&& 
                   (file.name.includes('.mp3',file.name.length-4)|| 
                   (file.name.includes('.mp4',file.name.length-4))  )))
                   .map(file=>file.parentPath+'/'+file.name)
                   ;
   
  
   return compatibleFiles
   
}

async function extractMetadata(filePath) {
 
   
   try {
     
     const metadata = await mm.loadMusicMetadata();
     PromiseMetadata=filePath.map(path=>metadata.parseFile(path))
     const datas=await Promise.all(PromiseMetadata)
     
     return datas;
   
   } catch (err) {
     console.error(err);
   }
 }

 function formatData(musics,metadatas){

 }

module.exports={initDatas}