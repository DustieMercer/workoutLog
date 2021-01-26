let express = require('express');
let router = express.Router(); 
let User = require('../db').import('../models/user');
let jwt = require('jsonwebtoken');
let bcrypt = require('bcryptjs');

/*****USER REGISTER*******/
router.post('/create', (req, res) => {
    User.create({
        username: req.body.user.username,
        passwordhash: bcrypt.hashSync(req.body.user.passwordhash, 13)
    })
    .then(
        function createSuccess(user)  {
        let token = jwt.sign({id: user.id}, process.env.JWT_SECRET, {expiresIn:60*60*24});

        res.json ({
            user:user,
            message:'User successfully created!',
            sessionToken: token
        })
        });
    });

/*****USER LOGIN*******/

router.post('/login', (req, res) => {
    User.findOne({
        where: {
            username: req.body.user.username 
        }
    })
     
    .then(function loginSuccess(user) {             
            if(user) {
                bcrypt.compare(req.body.user.passwordhash, user.passwordhash, function (err, matches) {
                    if (matches) {
                        let token = jwt.sign({id: user.id}, process.env.JWT_SECRET, {expiresIn: 60*60*24})

                       res.status(200).json({
                        user: user, 
                        message: "user successfully logged in",
                        sessionToken: token
                   })

                } else {
                    res.status(502).send({ error:'Login Failed'});
                }  
                });

            } else {
              res.status(500).json({error:"User not found."})  
            }
        })
        .catch(function (err) {
        res.status(500).json({error:err});
    });
});



module.exports = router