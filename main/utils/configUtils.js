
const {join } = require('path');
const {existsSync} = require('fs');
const db  = require('../../database/database');
const setting=require('../../app/model/Setting');

async function getConfig()  {
  
    if (existsSync(join(__dirname,'../../',db.dbName))){

          if(await setting.ModelExists()){

             await setConfig({firstRun:0,Path:["C:\\Users\\DELL\\Documents\\GitHub","C:\\Users\\DELL\\Documents\\css"]})//Path:["C:\\Users\\DELL\\Documents\\GitHub","C:\\Users\\DELL\\Documents\\css"]
      
          }else{
             await createConfig()
          }datas

          do {
             settings =await setting.findLast();
             settings =await setting.findLast();
             
          } while ((typeof settings) =='undefined');
                 
          return settings;   
    }
    
  }
 
  async function setConfig(...args) {
   
    const dataConfig=await setting.findLast()
    if(dataConfig){
        json=JSON.parse(dataConfig.datas)// lastKeys=Object.keys(json)   
        newKeys=Object.keys(args[0])
        newKeys.map(key=>{
          if(typeof json[key]=='object'){
              json[key]=[...new Set([...json[key],... args[0][key]])]//sup doublons
              
          }else{
            json[key]=args[0][key]
          }
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
       Path:[process.env.Home+'/music'],
       firstRun:1,
    })})
   
  }

  module.exports={createConfig,getConfig,setConfig}