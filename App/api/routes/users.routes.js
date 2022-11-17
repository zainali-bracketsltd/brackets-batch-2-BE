const express = require('express')
const router = express.Router()
const multer = require('multer')

const upload = require('../middlewares/multer')

const UserController = require('../controllers/users.controllers')

const checkAuth = require('../middlewares/checkAuth')

router.post('/signup', UserController.signup)

router.post('/login', UserController.login)

router.patch('/:userId', checkAuth, UserController.updateUser)

router.patch(
  '/:userId/profileImage',
  upload.single('avatar'),
  UserController.uploadProfileImage
)

module.exports = router
