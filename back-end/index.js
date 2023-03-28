const express = require('express')
const app = express()
const routeUser = require('./routes/route')
const voyageRoute = require('./routes/voyageRoute')

require('dotenv').config()
const db = require('./config/db')
const cors = require('cors')


app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use("/user/auth", routeUser)
app.use("/voyage", voyageRoute)


app.listen(process.env.PORT, () => { console.log(`server is runing on port ${process.env.PORT}`) })