const voyage = require('../models/voyage')
const users = require('../models/users')
const bcrypt = require('bcryptjs')


const statistique = async (req, res) => {
    const Allvoyage = await voyage.find().count()
    const Allclient = await users.find({ role: 'client' }).count()
    const agent = await users.find({ role: 'agent' }).count()
    const AllUsers = await users.find().count()
    res.json({ Allvoyage, Allclient, agent, AllUsers })

}

const getAdmin = (req, res) => {
    users.findOne({ role: 'admin' }).then((data) => {
        res.send(data)
    })
}

const updatePassword = async (req, res, next) => {
    try {
        const { body } = req;
        const data = await users.findOne({ role: 'admin' });
        const isMatch = await bcrypt.compare(body.currentPassword, data.password);
        if (isMatch) {
            const nPass = await bcrypt.hash(body.newPassword, 10)
            if (nPass) {
                const editePass = await users.findOneAndUpdate({ role: 'admin' }, { password: nPass })
                if (editePass) {
                    res.send('edite password avec success')
                } else throw Error('not edit')
            } else throw Error('err bcrypt')
        } else throw Error('current password incorrect')
    } catch (err) {
        next(err)
    }
}

const getAllClient = async (req, res) => {
    try {
        const data = await users.find({ role: 'client' })
        res.send(data)
    } catch (error) {
        res.send(error)
    }
}
module.exports = { statistique, updatePassword, getAllClient, getAdmin }