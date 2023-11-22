const { Sequelize } = require('sequelize')
const sequelize = new Sequelize(process.env.MYSQL_DBNAME, process.env.MYSQL_USER, process.env.MYSQL_PASSWORD, {
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT,
    dialect: process.env.MYSQL_DIALECT,
    logging: false
})

const Student = require('./student')(sequelize, Sequelize)
sequelize.sync()

module.exports = { Student, sequelize }