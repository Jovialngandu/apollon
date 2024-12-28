//fonctionalité utilitaire
const {join } = require('path');
const {existsSync} = require('fs');
const setting=require('../../app/model/Setting')
const db  = require('../../database/database');
const {extractMetadata,getMusicPath,formatData}=require('../utils/musicUtils')

async function initDatas() {

   //initialisation database
   musics= await  getMusicPath()
   metadatas=await extractMetadata(musics)
   dataFormat= await formatData(musics,metadatas)
   configs=await getConfig()
   console.log(configs)

  
 }

 async function getConfig()  {
   if (existsSync(join(__dirname,'../../',db.dbName))){
             
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

 
module.exports={initDatas}