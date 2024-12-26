Model=require('../../database/model')

class Music_Playlist extends Model {
    constructor() {
      super('music_playlist', {
        id: 'INTEGER PRIMARY KEY AUTOINCREMENT',
        music_id: 'INTEGER',
        playlist_id:'INTEGER'
      },
        `,FOREIGN KEY (music_id) REFERENCES music(id) ON DELETE CASCADE ON UPDATE CASCADE
        ,FOREIGN KEY (playlist_id) REFERENCES playlist(id) ON DELETE CASCADE ON UPDATE CASCADE`//ne pas oublier la virgule avant
    
    );
    }
  }
  
  module.exports = new Music_Playlist();
