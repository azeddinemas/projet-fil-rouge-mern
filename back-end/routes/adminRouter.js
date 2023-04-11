const express = require('express')
const Router = express.Router()
const admin = require('../controller/adminController')

Router.get('/Allstatistique', admin.statistique)
Router.get('/allclient', admin.getAllClient)
Router.post('/updateprofile', admin.updatePassword)
Router.get('/getAdmin', admin.getAdmin)

module.exports = Router;