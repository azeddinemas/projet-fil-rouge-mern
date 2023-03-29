const mongoose = require('mongoose')
const voyage = require('../models/voyage')
const users = require('../models/users')


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
    const token = req.params.token
    const vrToken = jwt.verify(token, process.env.SECRET)
    bcrypt.hash(req.body.password, 10).then((pass) => {
        User.updateOne({ _id: vrToken._id }, { password: pass }).then(() => {
            res.send('forget success')
            res.redirect('http://localhost:3000/login')
        })
    }).catch(() => {
        res.status(401).send('not forget')
    })
}
module.exports = { statistique, updatePassword, profile }