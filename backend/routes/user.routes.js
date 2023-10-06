const Router = require('express')
const router = new Router()
const UserController = require('../controller/user.controller.js')

router.get('/posts', UserController.getUsers)

module.exports = router