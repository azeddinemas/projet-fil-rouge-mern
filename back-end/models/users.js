const mongoose = require('mongoose');

const user = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    phone: {
        type: String,
    },
    role: {
        type: String,
    },
    confirmed: {
        type: Boolean,
        default: false
    },
    active: {
        type: Boolean,
        default: true
    },
    password: {
        type: String,
        require: true
    }
}, { timestamps: true })

module.exports = mongoose.model('user', user)