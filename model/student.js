module.exports = (sequelize, Sequelize) => {
    const Student = sequelize.define('student', {
        name:Sequelize.STRING,
        surname:Sequelize.STRING,
        username:Sequelize.STRING,
        email:Sequelize.STRING,
        password:Sequelize.STRING,
        
    })
    return Student
}