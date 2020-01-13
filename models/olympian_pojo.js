//olympian pojo
const database = require('../config')

class Olympian{
  constructor(){
  }
 getOlympians() {
   console.log("THISSSS");
    return database('olympians').columns(['name', 'sex', 'age', 'height', 'weight', 'team', 'games', 'sport', 'event', 'medal'])
  }

}
module.exports = Song
