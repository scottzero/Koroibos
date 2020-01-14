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
    data =>{
      response.status(200).send(data)
    }
  ).catch(error => response.status(500).send(error));
})

// -----------------------------------
// EXPORTS
// -----------------------------------
module.exports = router;
