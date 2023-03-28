const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const users = require('../models/users');

const register = (req, res) => {
    const { body } = req;
    users.findOne({ email: body.email })
        .then((data) => {
            if (!data) {
                bcrypt.hash(body.password, 10)
                    .then((e) => {
                        if (e) {
                            users.create({ ...body, password: e, role: 'admin' })
                                .then((data) => { res.send(data) })
                                .catch((error) => { console.log(error) })
                        } else res.send('nadi')
                    }).catch((err) => { console.log(err) })
            } else res.status(400).send('email already exist')
        }).catch((error) => { console.log(error); })
}

const login = async (req, res) => {
    const { body } = req;
    try {
        const data = await users.findOne({ email: body.email })
        if (data) {
            const pass = await bcrypt.compare(body.password, data.password)
            if (pass) {
                res.send('login succes')
            } else res.send('login field')
        } else res.send('email incorrect')
    } catch (error) {
        console.log(error)
    }

}

const getAllAgent = async (req, res) => {
    try {
        const data = await users.find({ role: 'agent' })
        res.send(data)
    } catch (error) {
        res.send(error)
    }
}

const banieCompte = async (req, res) => {
    try {
        const id = req.params.id
        const data = await users.findById({ _id: id })
        if (data.active) {
            const e = await users.updateOne({ _id: id }, { active: false })
            res.send('desactive avec success')
        } else {
            const e = await users.updateOne({ _id: id }, { active: true })
            res.send('active success')
        }
    } catch (error) {
        res.send(error)
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
module.exports = { register, login }
