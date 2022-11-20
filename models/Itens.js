const Sequelize = require('sequelize');
const db = require('./db');

//definindo os campos da tabela
const Item = db.define('itens', {
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
    description: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    value: {
        type: Sequelize.STRING,
        allowNull: false,
    }
});

//criar a tabela
//Item.sync()

//exportando User
module.exports = Item;