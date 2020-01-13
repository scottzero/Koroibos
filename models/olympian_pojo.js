//olympian pojo
const database = require('../config')

class Olympian{
  constructor(){
  }
 static getOlympians() {
    return database('olympians').columns(['name', 'sex', 'age', 'height', 'weight', 'team', 'games', 'sport', 'event', 'medal'])
  }

 static getYoungest(){
   return database('olympians').min('age').then(function(data){
    return database('olympians').columns(['name', 'sex', 'age', 'team', 'sport', 'medal'])
     .where('age', data[0].min);
   })
 }
}
module.exports = Olympian
