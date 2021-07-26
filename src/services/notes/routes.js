const { Router } = require('express');
const router = Router()

const { getnotes } = require('./controllers.js')


router.get('/getnotes', getnotes)


module.exports = router;