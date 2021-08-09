const { Router } = require('express');
const JWTGetUser = require('../../middlewares/JWTGetUser.js');
const router = Router()

const controllers = require('./controllers.js')



router.get('/all',JWTGetUser, controllers.getAllNotes)
router.get('/favorites',JWTGetUser, controllers.getFavoriteNotes)


module.exports = router;