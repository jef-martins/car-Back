const Sequelize = require('sequelize');
const sequelize = new Sequelize('car', 'root', '', {
    host: "127.0.0.1",
    port: "5433",
    //schema: "teste2",
    dialect: "mariadb"
});
 module.exports = sequelize;