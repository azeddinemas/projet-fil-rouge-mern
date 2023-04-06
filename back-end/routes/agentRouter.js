const express = require('express')
const Router = express.Router()
const agent = require('../controller/agentController')




Router.post('/add', agent.addAgent)
Router.get('/get', agent.getAll)


module.exports = Router;