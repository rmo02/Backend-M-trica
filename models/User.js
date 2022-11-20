const Sequelize = require('sequelize');
const db = require('./db');

//definindo os campos da tabela
const User = db.define('users', {
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
    }
});

//criar a tabela
//User.sync()

//exportando User
module.exports = User;