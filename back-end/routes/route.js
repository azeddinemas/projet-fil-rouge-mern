const express = require('express')
const Router = express.Router()
const users = require('../controller/userController')
const main = require('../controller/mailerController')


Router.post('/register', users.register)
Router.post('/login', users.login)




Router.get('/confirmation/:token', main.confirm);


module.exports = Router;