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
    res.send(AllUser)

}

const getAdmin = (req, res) => {
    users.findOne({ role: 'admin' }).then((data) => {
        res.send(data)
    })
}

const updatePassword = (req, res) => {
    const { body } = req;
    users.findOne({ role: 'admin' })
        .then((data) => {
            bcrypt.compare(body.password, data.password)
                .then((e) => {
                    if (e) {
                        bcrypt.hash(body.newPassword, 10)
                            .then((pass) => {
                                users.updateOne({ role: 'admin' }, { password: pass })
                                    .then(() => {
                                        res.send('edite password avec success')
                                    }).catch((error) => { res.send(error) })
                            }).catch((err) => {
                                res.status(401).send(err)
                            })
                    } else res.send('Current password incorrect')
                }).catch(err => { console.log(err) })
        }).catch((err) => { res.send(err) })
}

const getAllClient = async (req, res) => {
    try {
        const data = await users.find({ role: 'client' })
        res.send(data)
    } catch (error) {
        res.send(error)
    }
}
module.exports = { statistique, updatePassword, profile, getAllClient, getAdmin }