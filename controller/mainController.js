const { Student } = require('../model/index')
const { Sequelize, Op } = require("sequelize");
const path = require('path');
const bcrypt = require('bcrypt')
const Joi = require('joi')

const userSchema = Joi.object().keys({
    name: Joi.string().alphanum().min(3).max(30).required(),
    surname: Joi.string().alphanum().min(3).max(30).required(),
    username: Joi.string().alphanum().min(3).max(60).required(),
    email: Joi.string().email().required(),
    password: Joi.string().regex(/^[a-zA-Z0-9]{8,}$/).required()
})

class MainController {
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
            res.render('newStudent')
        } catch (err) {
            console.log(err)
        }
    }
    static async addNewStudent(req, res) {
        try {
            const { name, surname, username, email, password } = req.body
            // console.log(name, surname, username, email)
            // let date = new Date()
            // if(name.length==0){
            //     req.flash('error', "Please enter name and email and position");
            // res.redirect('/new')

            // }
            // const id = "" + date.getMilliseconds() + date.getDay() +""+ date.getMonth() + date.getFullYear()

            const { body } = req
            userSchema.validate
            const result = userSchema.validate({ name, surname, username, email, password })
            console.log(result.error==null)
            // console.log("aaaaaaaaaaaaaaaaaaaa")
            console.log(result.error)

            const hash = bcrypt.hashSync(password, 10)
            // await Student.create({ id: 18, name, surname, username, email, password: hash })
            res.redirect('/new')
        } catch (err) {
            console.log(err)
        }
    }
    static async updateStudent(req, res) {
        try {
            const { id, name, surname, username, email } = req.body
            // const { id } = req.params
            console.log(id, name, surname, username, email)
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
            let students = await Student.findAll()
            res.render('editStudent', { students })
        } catch (err) {
            console.log(err)
        }
    }
    static async search(req, res) {
        try {
            // const url = req.originalUrl
            // console.log(url)
            const { search } = req.query
            let src = search.trim()
            const s = src.split(" ")
            if (s.length == 0) {
                var students = await Student.findAll()
            } else if (s.length == 1) {
                var students = await Student.findAll({
                    where: {
                        [Op.or]: [
                            { surname: { [Op.like]: `%${s[0]}%` } },
                            { name: { [Op.like]: `%${s[0]}%` } }
                        ]
                    }
                })
            } else if (s.length > 1) {
                var students = await Student.findAll({
                    where: {
                        [Op.or]: [
                            {
                                [Op.and]: [
                                    { surname: { [Op.like]: `%${s[0]}%` } },
                                    { name: { [Op.like]: `%${s[1]}%` } }
                                ]
                            },
                            {
                                [Op.and]: [
                                    { surname: { [Op.like]: `%${s[1]}%` } },
                                    { name: { [Op.like]: `%${s[0]}%` } }
                                ]
                            },
                        ]
                    }
                })
            }
            // console.log(arr) 
            // let students = await Student.findAll()

            res.render('allStudent', { students })
        } catch (err) {
            console.log(err)
        }
    }
}

module.exports = MainController