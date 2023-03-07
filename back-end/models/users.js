const mongoose = require('mongoose');

const user = new mongoose.Schema({
    name : {
        type : String,
        require:true
    },
    email : {
        type : String,
        require : true
    },
    phone : {
        type : String,
    },
    password : {
        type : String,
        require : true
    }
},{timestamps:true})