const mongoose = require('mongoose');

const reservation = new mongoose.Schema({
    name: {
        type: String
    },
   
    phone: {
        type: String,
    },
   
    dest: {
        type: String
    },
    counter: {
       type: String
    },
    price: {
        type: String
    },
    email:{
        type:String
    }
})

module.exports = mongoose.model('reservation', reservation)