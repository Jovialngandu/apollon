//fonctionalité utilitaire
const db  = require('../database/database');
const mm = require('music-metadata');
const fs = require('fs');
const setting=require('../app/model/Setting')
const {join } = require('path');

async function initDatas() {

   //initialisation database
   musics=await getMusicPath()
   metadatas=await extractMetadata(musics)
   dataFormat= await formatData(musics,metadatas)
   configs=await getConfig()

   // console.log(JSON.parse(configs))

  
 }

 async function getConfig()  {
   if (fs.existsSync(join(__dirname,'../',db.dbName))){
             
         if(await setting.ModelExists()){
            setConfig({firstRun:0,a:12})
            
            return await setting.findLast();
          
           
         }else{
            await createConfig()
            return  {
                     id: 1,
                     datas: '{"mode":0,"defaultPath":"C:\\\\Users\\\\DELL/music","firstRun":1}'
                     }
            // return await setting.findLast();
            
         }
   }
      
 }

 async function setConfig(...args) {
  
   const dataConfig=await setting.findLast()
   if(dataConfig){
       json=JSON.parse(dataConfig.datas)
       lastKeys=Object.keys(json)
       newKeys=Object.keys(args[0])
       newKeys.map(key=>{
         json[key]=args[0][key]
       })
       
       newDatas=json
       await setting.UpdateById({datas:JSON.stringify(newDatas)},dataConfig.id)
   }else{
       newDatas=args[0]
       await setting.insert({datas:JSON.stringify(newDatas)})
   }

  }

 async function createConfig() {

   await setting.createTable() 
   await setting.insert({datas:JSON.stringify({
      mode:0,//0=systeme,1=claire,2=sombre
      defaultPath:process.env.Home+'/music',
      firstRun:1,
   })})
 
 }

async function getMusicPath(directory=process.env.Home+'/music',isrecursive=true) {

   const params= {
                  option:{
                           withFileTypes:true,
                           recursive:isrecursive
                  },
                   path:directory
         }

   musics=await fs.promises.readdir(params.path,params.option,);
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


module.exports={initDatas}