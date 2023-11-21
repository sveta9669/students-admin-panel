const express = require('express')
const router = express.Router()
const MainService = require('../services/mainService')


router.get('/', MainService.student)
router.get('/new', MainService.newStudent)
router.get('/search', MainService.search)

router.get('/edit', MainService.editStudent)
router.get('/editById/:byid', MainService.editStudentById)

router.post('/addNewStudent', MainService.addNewStudent)

router.put('/update/:id', MainService.updateStudent)
 
module.exports = router 