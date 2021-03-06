// -----------------------------------
// IMPORTS
// -----------------------------------
const express = require('express');
const app = express();
const router= express.Router();
const database = require('../../../config');
const olympian = require('../../../models/olympian_pojo');
// -----------------------------------
// HANDLE OLYMPIAN STATS
// -----------------------------------
router.get('/', (request, response)=> {
  var statResolver = olympian.getStats().then(
    data => {
      if(data.length){
      response.status(200).send(data[0])
    }else{
      response.status(404).send("No olympian stats found. Nothing in the database.")
      }
    }
  ).catch(error => response.status(500).send(error));
})

// -----------------------------------
// EXPORTS
// -----------------------------------
module.exports = router;
