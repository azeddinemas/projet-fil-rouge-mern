const express = require('express')
const Router = express.Router()
const users = require('../controller/userController')


Router.post('/register', users.register)

Router.post('/login', users.login)


module.exports = Router;