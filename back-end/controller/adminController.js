const mongoose = require('mongoose')
const voyage = require('../models/voyage')
const users = require('../models/users')
const bcrypt = require('bcryptjs')


const statistique = async (req, res) => {
    const Allvoyage = await voyage.find().count()
    const AllUser = await users.find({ role: 'client' }).count()
    res.json({ Allvoyage, AllUser })

}
const profile = async (req, res) => {
    const AllUser = await users.find({ role: 'admin' })
    res.json({ AllUser })

}

const updatePassword = (req, res) => {
    const { body } = req;
    users.find({ role: 'admin' }).then((data) => {
        bcrypt.compare(body.password, data.password)

    })

    bcrypt.hash(req.body.password, 10).then((pass) => {
        users.updateOne({ role: "admin" }, { password: pass }).then(() => {
            res.send('forget success')
        })
    }).catch(() => {
        res.status(401).send('not forget')
    })
}
module.exports = { statistique, updatePassword, profile }