const mysql = require('mysql2')
const { Sequelize } = require('sequelize')
const sequelize = new Sequelize('students', 'root', '', {
    host: 'localhost',
    port: 3306,
    dialect: 'mysql'
})

const Student = require('./student')(sequelize, Sequelize)

sequelize.sync()

module.exports = { Student, sequelize }