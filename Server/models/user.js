module.exports = (sequelize, DataTypes) => {
    let User = sequelize.define('user', {
        username: {
            type: DataTypes.STRING,
            allowNull: false
    },
        passwordhash: {
            type:DataTypes.STRING,
            allowNull: false,
        }
})
return User;
}