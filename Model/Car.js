const sequelize = require('./bd');
const Sequelize = require('sequelize');
const Banco = sequelize.define('bancoJeff', {
        id:{
            type:Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        placa: {
                type: Sequelize.STRING
        },
        chassi: {
            type: Sequelize.STRING
        },
        renavam: {
            type: Sequelize.DATE
        },
        modelo: {
            type: Sequelize.FLOAT
        },
        marca: {
            type: Sequelize.STRING
        },
        ano: {
            type: Sequelize.INTEGER
        }
    }
);

module.exports = Banco;