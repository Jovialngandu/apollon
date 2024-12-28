//fonctionalité utilitaire

const {getConfig}=require('../utils/configUtils')
const {extractMetadata,getMusicPath,formatData}=require('../utils/musicUtils')

async function initDatas() {

   //initialisation database
   musics= await  getMusicPath()
   metadatas=await extractMetadata(musics)
   dataFormat= await formatData(musics,metadatas)
   configs=await getConfig()
   console.log(configs)

 }

module.exports={initDatas}