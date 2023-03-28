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

module.exports = { register, login }
