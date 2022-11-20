const Sequelize = require('sequelize');

const sequelize =  new Sequelize("usuario", "root", "admin", {
    host: 'localhost',
    dialect: 'mysql'
} );

sequelize.authenticate()
.then(function(){
    console.log("Deu certo")
}).catch(function(){
    console.log("Error ")
})

module.exports = sequelize;