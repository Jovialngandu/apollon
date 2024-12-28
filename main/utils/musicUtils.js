
const mm = require('music-metadata');
const {readdir} = require('fs/promises');

async function getMusicPath(directory=process.env.Home+'/music',isrecursive=true) {

   const params= {
                  option:{
                           withFileTypes:true,
                           recursive:isrecursive
                  },
                   path:directory
         }

   musics=await readdir(params.path,params.option,);
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
         let {artists,album,title,picture,year,genre} = metadatas[index].common

         datas.push(
            {
               filename:musics[index][1],
               filePath:musics[index][0],
               // Duration:Math.floor(metadatas[index].format.duration/60)+'m'+(Math.floor(((metadatas[index].format.duration/60)%1)*60)),
               Duration:metadatas[index].format.duration,
               artistNames:artists,
               albumName:album,
               musicTitle:title,
               picture:picture,
               year:year,
               genre:genre
      
            }
         )
      }  
   
   }
   return datas

 }


 module.exports={extractMetadata,formatData,getMusicPath}


