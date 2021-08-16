const { Router } = require('express');
const JWTGetUser = require('../../middlewares/JWTGetUser.js');
const router = Router()

const controllers = require('./controllers.js')



router.get('/all',JWTGetUser, controllers.getAllNotes)
router.get('/favorites',JWTGetUser, controllers.getFavoriteNotes)
router.post('/newnote',JWTGetUser, controllers.createNewNote)
router.post('/togglefavorite',JWTGetUser, controllers.toggleFavorite)
router.post('/updatenote',JWTGetUser, controllers.updateNote)
router.post('/delete',JWTGetUser, controllers.deleteNote)


module.exports = router;