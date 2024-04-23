var express = require('express');
const webController = require('../controllers/webController');
var router = express.Router();

/* GET home page. */
router.get('/', webController.index);
router.get('/process', webController.proccessForm);

module.exports = router;
