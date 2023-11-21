const { DataTypes } = require('sequelize')
module.exports = (sequelize, Sequelize) => {
   const Student = sequelize.define('student', {
      id:{
         type: DataTypes.INTEGER,
         primaryKey:true,
         autoIncrement:true,
         allowNull: false,
      },
      generatedId: {
         type: DataTypes.BIGINT,
         allowNull: false,
      },
      name: {
         type: DataTypes.STRING,
         allowNull: false,
      },
      surname: {
         type: DataTypes.STRING,
         allowNull: false,
      },
      username: {
         type: DataTypes.STRING,
         allowNull: false,
      },
      email: {
         type: DataTypes.STRING,
         allowNull: false,
      },
      password: {
         type: DataTypes.STRING,
         allowNull: false,
      }
   })
   return Student
}