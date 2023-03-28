const express = require('express')
const app = express()
const routeUser = require('./routes/route')
require('dotenv').config()
const db = require('./config/db')
const cors = require('cors')


app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use("/user", routeUser)


app.listen(process.env.PORT, () => { console.log(`server is runing on port ${process.env.PORT}`) })