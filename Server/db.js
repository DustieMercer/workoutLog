let Sequelize = require('sequelize');
let sequelize = new Sequelize('workout_log', 'postgres', 'password', {
    host: 'localhost',
    dialect: 'postgres'
});

 sequelize.authenticate().then (
     function () {
        console.log('Connected to workout_log postgres database');
    },
    function(err) {
        console.log(err);
    }
);

module.exports = sequelize;