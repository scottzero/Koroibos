const express = require('express');
const app = express();
const router= express.Router();
const database = require('../../../config');
const olympian = require('../../../models/olympian_pojo');


router.get('/', (request, response)=>{
  // -----------------------------------
  // HANDLE YOUNGEST OLYMPIAN, USE CASE STATEMENT
  // -----------------------------------
  if(request.query.age == "youngest"){
    olympian.getYoungest().then(
      data => {
        if (data.length) {
          response.status(200).send(data)
        } else {
          response.status(404).send({message: "Could not find youngest olympian. Probably none in the db."})
        }
      }
    ).catch(error => response.status(500).send(error));

  }else if(request.query.age == "oldest"){
    // -----------------------------------
    // HANDLE OLDEST OLYMPIAN
    // ----------------------------------
    olympian.getOldest().then(
      data => {
        if (data.length) {
          response.status(200).send(data)
        } else {
          response.status(404).send({message: "Could not find oldest olympian. Probably none in the db."})
        }
      }
    ).catch(error => response.status(500).send(error));

  }else{
  // -----------------------------------
  // HANDLE ALL OLYMPIANS
  // -----------------------------------
  olympian.getOlympians()
      .then(
        data => {
          if (data.length) {
            response.status(200).send(data)
          } else {
            response.status(404).send({message: "No olympians seeded in db."})
          }
        }
      ).catch(error => response.status(500).send(error));
  }});


module.exports = router;
