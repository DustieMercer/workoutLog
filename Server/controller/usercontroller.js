let router = require("express").Router(); 
let User = require("../db").import("../models/user"); 
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const user = require("../models/user");


router.post('/create', (req, res) => {

    User.create({
        username: req.body.username,
        password: req.body.password
    })
    .then(
        function createUser(user) {
            res.json({
                user:user,
                message: 'Success!'
    });
        })
    .catch(err=> res.status(500).json({error:err}));
});

module.exports = router;  