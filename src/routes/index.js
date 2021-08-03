const { Router } = require('express');
const router = Router()

const routesNotes = require('../services/notes/routes.js')
const routesLogin = require('../services/login/routes.js')

router.use('/notes', routesNotes)
router.use('/login', routesLogin)


module.exports = router;