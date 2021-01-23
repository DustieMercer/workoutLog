let express = require('express');
let router = express.Router(); 
let User = require('../db').import('../models/user');

/*****USER REGISTER*******/
router.post('/create', (req, res) => {
    User.create({
        username: req.body.user.username,
        passwordhash: req.body.user.passwordhash
    })
    .then(
        res.send('user/create endpoint')
        );
    });

/*****USER LOGIN*******/

module.exports = router