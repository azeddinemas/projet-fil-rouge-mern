const express = require('express')
const app = express()
const routeUser = require('./routes/auth')
const voyageRoute = require('./routes/voyageRoute')
const adminRouter = require('./routes/adminRouter')
const agentRouter = require('./routes/agentRouter')
const cors = require('cors')

require('dotenv').config()
const db = require('./config/db')
const ErrorHandler = require('./middleware/ErrorHandler')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))
app.use(cors())

app.use("/user/auth", routeUser)
app.use("/voyage", voyageRoute)
app.use("/admin", adminRouter)
app.use("/agent", agentRouter)
app.use(ErrorHandler)


app.listen(process.env.PORT, () => { console.log(`server is runing on port ${process.env.PORT}`) })