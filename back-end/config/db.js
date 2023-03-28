const mongoose = require('mongoose')

mongoose.connect(process.env.DB)
    .then(() => { console.log('database is connected') })
    .catch(() => { console.log('database not connected') })
