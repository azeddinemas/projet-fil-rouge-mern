const express = require('express')
const app = express()
require('dotenv').config()
const db = require('./config/db')

app.use('/',(req,res)=>{
    res.send('hello lmalik')
})

app.listen(process.env.PORT,()=>{console.log(`server is runing in port ${process.env.PORT}`)})