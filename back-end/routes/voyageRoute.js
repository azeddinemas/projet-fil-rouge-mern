const express = require('express')
const Router = express.Router()
const voyage = require('../controller/voyageController')
const upload = require('../middleware/upload')


Router.post('/add', upload.single('image'), voyage.addVoyage)
Router.get('/getall', voyage.getall)
Router.get('/getone/:id', voyage.getOne)
Router.post('/edit/:id', voyage.editvoyage)
Router.delete('/delete/:id', voyage.deletevoyage)

module.exports = Router;