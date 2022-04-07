const Sequelize = require('sequelize');
const sequelize = new Sequelize('car', 'root', '', {
    host: "127.0.0.1",
    port: "3306",
    dialect: "mariadb"
});
 module.exports = sequelize;