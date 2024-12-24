//fonctionalité utilitaire
const db  = require('../database/database');
const mm = require('music-metadata');
const fs = require('fs');




async function initDatas() {

   //initialisation database
   musics=await getMusicPath()
   metadatas=await extractMetadata(musics)
   dataFormat= await formatData(musics,metadatas)

   console.log(dataFormat)
  
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
                   .map(file=>[file.parentPath+'/'+file.name,file.name] )
                   ;
   

   return compatibleFiles
   
}

async function extractMetadata(filePath) {
 
   
   try {
     
     const metadata = await mm.loadMusicMetadata();
     PromiseMetadata=filePath.map(path=>metadata.parseFile(path[0]))
     const datas=await Promise.all(PromiseMetadata)
     
     return datas;
   
   } catch (err) {
     console.error(err);
   }
 }

 async function formatData(musics,metadatas){
   datas=new Array()

   if(musics.length==metadatas.length){
      for (let index = 0; index < metadatas.length; index++) {
        
         datas.push(
            {
               filename:musics[index][1],
               filePath:musics[index][0],
               Duration:Math.floor(metadatas[index].format.duration/60)+'m'+(Math.floor(((metadatas[index].format.duration/60)%1)*60)),
               artistNames:metadatas[index].common.artists,
               albumName:metadatas[index].common.album,
               musicTitle:metadatas[index].common.title,
               picture:metadatas[index].common.picture,
               year:metadatas[index].common.year,
               genre:metadatas[index].common.genre
      
            }
         )
      }  
   
   }
   return datas

 }

module.exports={initDatas}