Model=require('../../database/model')

class Readinglist extends Model {
    constructor() {
      super('readinglist', {
        id: 'INTEGER PRIMARY KEY AUTOINCREMENT',
        music_id: 'TEXT NOT NULL',
        repeat_number: 'INTEGER',
        
      });
    }
  }
  
  module.exports = new Readinglist();