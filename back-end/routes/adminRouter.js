const express = require('express')
const Router = express.Router()
const admin = require('../controller/adminController')

Router.get('/Allvoyage', admin.statistique)
Router.get('/allclient', admin.getAllClient)
Router.get('/profile', admin.profile)
Router.post('/updateprofile', admin.updatePassword)

module.exports = Router;