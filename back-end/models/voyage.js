const mongoose = require('mongoose');

const voyage = mongoose.Schema({
    destination: {
        type: String
    },
    datedepart: {
        type: String
    },
    prix: {
        type: Number
    },
    description: {
        type: String
    },
    image: {
        type: String
    }
});
module.exports = mongoose.model('voyage', voyage)