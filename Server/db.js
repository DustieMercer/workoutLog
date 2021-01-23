const Sequelize = require('sequelize');
const sequelize = new Sequelize('workout_log', 'postgres', 'password', {
    host:'local host', 
    dialect:'postgres'
});

sequelize.authenticate()
.then (
    function(){
        console.log('Connected to Workout_Log postgres database');
        },
        function (err) {
            console.log(err);
        }
);
module.exports = sequelize;