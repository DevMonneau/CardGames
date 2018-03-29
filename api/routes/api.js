var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.json({register: true, status: 'ok', log: 'Welcome in our api'});
});

module.exports = router;