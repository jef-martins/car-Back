const sequelize = require('./bd');
const Sequelize = require('sequelize');
const Banco = sequelize.define('cars', {
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
            type: Sequelize.STRING
        },
        modelo: {
            type: Sequelize.STRING
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