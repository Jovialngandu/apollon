const music=require('../../app/model/Music');
const playlist= require('../../app/model/Playlist');
const readinglist= require('../../app/model/Readinglist');
const music_playlist=require('../../app/model/Music_Playlist');

async function initTables() {
  await music.createTable();
  await playlist.createTable();
  await readinglist.createTable();
  await music_playlist.createTable();
    
}

async function refreshMusics(...args) {
  
    args.forEach(mzik=>{
        let {filename,filePath, Duration,artistNames,albumName,musicTitle,picture,year,genre}= mzik;
       try {
            music.insert({
            file_name:filename,
            file_path:filePath,
            duration:Duration,
            artist_name:JSON.stringify(artistNames),
            album_name: albumName,
            title:musicTitle,
            have_picture:(picture) ? 1:0,
            year:year,
            genre:JSON.stringify(genre),
            is_favorite:0,
            is_reading:0,
            })
       } catch (error) {
            console.log(error)
       }
       
    })
  
}


module.exports={initTables,refreshMusics,}