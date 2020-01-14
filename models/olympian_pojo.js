//olympian pojo
const database = require('../config')

class Olympian{
  constructor(){
  }
 static getOlympians() {
    return database('olympians').columns(['name', 'sex', 'age', 'height', 'weight', 'team', 'games', 'sport', 'event', 'medal'])
  }//end get olympians

 static getYoungest(){
   return database('olympians').min('age').then(function(data){
    return database('olympians').columns(['name', 'sex', 'age', 'team', 'sport', 'medal'])
     .where('age', data[0].min);
   })
 }//end get youngest

 static getOldest(){
   return database('olympians').max('age').then(function(data){
    return database('olympians').columns(['name', 'sex', 'age', 'team', 'sport', 'medal'])
     .where('age', data[0].max);
   })
 }//end get oldest

 // -----------------------------------
 // DETAILS FOR OLYMPIAN getSTATS()
 //------------------------------------
allOlympiansUnique(){
  //get all unique olympians
  return database('olympians').distinct('name').select('name');
 }
femaleOlympians(){
  //get female avg weight
  return database('olympians').where('sex', 'F').avg('weight');
}
maleOlympians(){
  //get male avg weight
  return database('olympians').where('sex', 'M').avg('weight');
}
averageAge(){
  return database('olympians').avg('age');
}
// -----------------------------------
// Generate return obj
//------------------------------------

 static getStats(){
   
 }
}//end class
module.exports = Olympian
