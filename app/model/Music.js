Model=require('../../database/model')

class Music extends Model {
    constructor() {
      super('music', {
        id: 'INTEGER PRIMARY KEY AUTOINCREMENT',
        file_name: 'VARCHAR NOT NULL',
        file_path:'TEXT NOT NULL',
        duration:'DOUBLE',
        artist_name:'JSON',
        album_name: 'TEXT ',
        title:'TEXT',
        have_picture:'BOOL',
        year:'INTEGER',
        genre:'JSON',
        read_at:'DATETIME',
        is_favorite:'BOOL',
        is_reading:'BOOL',

      });
    }
  }
  
  module.exports = new Music();
