const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

router.post('/', function(req, res, next) {

    const user = { // exemple en attendant un vrai username et passwd
        id: 1,
        username: 'admin',
        pass: 'admincipher'
    };

    jwt.sign(user, 'secretkey', { expiresIn: '30s' }, function(err, token) {
        res.json({
            'Status' : 'ok',
            'token' : token
        });
    });
});

module.exports = router;
