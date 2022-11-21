const express = require('express')
const router = express.Router()

const upload = require('../middlewares/multer')

const UserController = require('../controllers/users.controllers')

const checkAuth = require('../middlewares/checkAuth')

router.post('/signup', UserController.signup)

router.post('/login', UserController.login)

router.patch('/:userId', checkAuth, UserController.updateUser)

router.get('/logout', checkAuth, UserController.logout)

router.patch(
  '/:userId/profileImage',
  checkAuth,
  upload.single('avatar'),
  UserController.uploadProfileImage
)

module.exports = router
