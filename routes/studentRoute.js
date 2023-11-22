const express = require('express')
const router = express.Router()

const StudentService = require('../services/studentService')

router.get('/',
  StudentService.student
)
router.get('/new',
  StudentService.newStudent
)
router.get('/search',
  StudentService.search
)
router.get('/edit',
  StudentService.editStudent
)
router.get('/editById',
  StudentService.editStudentById
)
router.post('/addNewStudent',
  StudentService.addNewStudent
)
router.get('/search',
  StudentService.student
)
router.put('/student/:id',
  StudentService.updateStudent
)

module.exports = router 