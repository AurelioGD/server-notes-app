const { Router } = require('express');
const router = Router()

const controllers = require('./controllers.js')


router.get('/all', controllers.getAllNotes)


module.exports = router;