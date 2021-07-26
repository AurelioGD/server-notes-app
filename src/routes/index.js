const { Router } = require('express');
const router = Router()

const routesNotes = require('../services/notes/routes.js')

router.use('/notes', routesNotes)


module.exports = router;