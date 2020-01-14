const express = require('express');
const app = express();
const router= express.Router();
const database = require('../../../config');
const olympian = require('../../../models/olympian_pojo');
// -----------------------------------
// HANDLE OLYMPIAN STATS
// -----------------------------------
router.get('/', (request, response)=> {
  olympian.getStats()
})
module.exports = router;
