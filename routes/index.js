var express = require('express');
const webController = require('../controllers/webController');
var router = express.Router();

/* GET home page. */
router.get('/', webController.index);

module.exports = router;
