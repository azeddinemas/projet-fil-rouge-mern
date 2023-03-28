const mongoose = require('mongoose');

const voyage = mongoose.Schema({
    destiantion: {
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
    },
    idagent: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    }
});
module.exports = mongoose.model('voyage', voyage)