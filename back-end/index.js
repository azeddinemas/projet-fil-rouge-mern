const express = require('express')
const app = express()
const routeUser = require('./routes/route')
const voyageRoute = require('./routes/voyageRoute')
const adminRouter = require('./routes/adminRouter')
const cors = require('cors')

require('dotenv').config()
const db = require('./config/db')



app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.use("/user/auth", routeUser)
app.use("/voyage", voyageRoute)
app.use("/admin", adminRouter)


app.listen(process.env.PORT, () => { console.log(`server is runing on port ${process.env.PORT}`) })