const mongoose = require('mongoose')
const voyage = require('../models/voyage')
const users = require('../models/users')


const statistique = async (req, res) => {
    const Allvoyage = await voyage.find().count()
    const AllUser = await users.find({ role: 'client' }).count()
    res.json({ Allvoyage, AllUser })

}
module.exports = { statistique }