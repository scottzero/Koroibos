//olympian pojo
const database = require('../config')

class Olympian{
  constructor(){
  }
 static getOlympians() {
    return database('olympians').columns(['name', 'sex', 'age', 'height', 'weight', 'team', 'games', 'sport', 'event', 'medal'])
  }

}
module.exports = Olympian
