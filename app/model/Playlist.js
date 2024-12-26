Model=require('../../database/model')

class Playlist extends Model {
    constructor() {
      super('playlist', {
        id: 'INTEGER PRIMARY KEY AUTOINCREMENT',
        name: 'TEXT NOT NULL',
        describtion: 'TEXT ',
        is_favorite:'BOOL'
      });
    }
  }
  
  module.exports = new Playlist();