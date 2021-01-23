let express = require('express');
let router = express.Router();
let sequelize = require('./db');

let user = require('./controller/usercontroller');

sequelize.sync();

app.use('./user', user);

app.listen(3000, function(){
    console.log('App is listening on port 3000');
})

module.exports = router