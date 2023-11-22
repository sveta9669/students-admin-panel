const { Student } = require('../models/index')
const { Op } = require("sequelize");
const bcrypt = require('bcrypt')
const Joi = require('joi')

class StudentService {
    static async student(req, res) {
        try {
            let students = await Student.findAll()
            res.render('allStudent', { students })
        } catch (err) {
            console.log(err)
        }
    }
    static async newStudent(req, res) {
        try {
            res.render('newStudent',
                {
                    message: req.flash('message'),
                    error: req.flash('error')
                })
        } catch (err) {
            console.log(err)
        }
    }
    static async addNewStudent(req, res) {
        try {
            const { name, surname, username, email, password } = req.body

            const userSchema = Joi.object().keys({
                name: Joi.string().alphanum().min(3).max(30).required(),
                surname: Joi.string().alphanum().min(3).max(30).required(),
                username: Joi.string().min(3).max(60).required(),
                email: Joi.string().email().required(),
                password: Joi.string().min(8).regex(/^[a-zA-Z0-9]{8,}$/).required()
            })

            const result = userSchema.validate({ name, surname, username, email, password })

            if (!result.error) {
                const date = new Date()
                const id = "" + Math.floor(Math.random() * 100000) + date.getMilliseconds() + date.getDate() + (date.getMonth() + 1) + date.getFullYear()
                const hash = bcrypt.hashSync(password, 10)

                await Student.create({ generatedId: id, name, surname, username, email, password: hash })
                req.flash('message', "Student added successfully")
            } else {
                console.log(result.error.details.message)
                req.flash('error', `${result.error.details.message}`)
            }
            res.redirect('/new')
        } catch (err) {
            console.log(err)
        }
    }
    static async updateStudent(req, res) {
        try {
            const { name, surname, username, email } = req.body
            const { id } = req.params
            await Student.update({ name, surname, username, email }, {
                where: { id }
            })
            res.redirect('/edit')
        } catch (err) {
            console.log(err)
        }
    }
    static async editStudent(req, res) {
        try {
            const students = await Student.findAll()
            res.render('editStudent', { students })
        } catch (err) {
            console.log(err)
        }
    }
    static async editStudentById(req, res) {
        try {
            const { id } = req.query
            const students = await Student.findAll({ where: { id } })
            res.render('editStudent', { students })
        } catch (err) {
            console.log(err)
        }
    }
    static async search(req, res) {
        try {
            const { search } = req.query

            const src = search.match(/\b\w+\b/g)

            if (src.length == 0) {
                var students = await Student.findAll()
            } else if (src.length == 1) {
                var students = await Student.findAll({
                    where: {
                        [Op.or]: [
                            { surname: { [Op.like]: `%${src[0]}%` } },
                            { name: { [Op.like]: `%${src[0]}%` } }
                        ]
                    }
                })
            } else if (src.length > 1) {
                var students = await Student.findAll({
                    where: {
                        [Op.or]: [
                            {
                                [Op.and]: [
                                    { surname: { [Op.like]: `%${src[0]}%` } },
                                    { name: { [Op.like]: `%${src[1]}%` } }
                                ]
                            },
                            {
                                [Op.and]: [
                                    { surname: { [Op.like]: `%${src[1]}%` } },
                                    { name: { [Op.like]: `%${src[0]}%` } }
                                ]
                            },
                        ]
                    }
                })
            }
            res.render('allStudent', { students })
        } catch (err) {
            console.log(err)
        }
    }
}

module.exports = StudentService