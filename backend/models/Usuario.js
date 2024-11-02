const Sequelize = require('sequelize')
const database = require('../db')

const Usuario = database.define('usuario', {
    idUsuario: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false
    },
    nome: {
        type: Sequelize.TEXT
    },
    email: {
        type: Sequelize.TEXT
    },
    senha: {
        type: Sequelize.TEXT
    }
})

module.exports = Usuario