const express = require('express')
const router = express.Router()
const MainController = require('../controller/mainController')


router.get('/', MainController.student)
router.get('/new', MainController.newStudent)
router.get('/search', MainController.search)
router.post('/addNewStudent', MainController.addNewStudent)
router.post('/update/:id', MainController.updateStudent)
router.get('/edit', MainController.editStudent)
 
module.exports = router 