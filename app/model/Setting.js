Model=require('../../database/model')

class Setting extends Model {
    constructor() {
      super('setting', {
        values: 'JSON',
              
      });
    }
  }
  
  module.exports = new Setting();