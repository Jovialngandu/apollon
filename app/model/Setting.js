Model=require('../../database/model')

class Setting extends Model {
    constructor() {
      super('setting', {
        id: 'INTEGER PRIMARY KEY AUTOINCREMENT',
        datas: 'JSON',
              
      });
    }
  }
  
  module.exports = new Setting();