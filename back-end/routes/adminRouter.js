const express = require('express')
const Router = express.Router()
const admin = require('../controller/adminController')

Router.get('/Allvoyage', admin.statistique)
Router.get('/profile', admin.profile)
module.exports = Router;