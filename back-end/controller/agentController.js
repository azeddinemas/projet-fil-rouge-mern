const bcrypt = require('bcryptjs');
const users = require('../models/users');
const mailer = require('./mailerController')
const ls = require('local-storage')


const getAll = (req, res) => {
    users.find({ role: 'agent' }).then((data) => {
        res.send(data)
    })
}

const addAgent = (req, res, next) => {
    const { body } = req;
    users.findOne({ email: body.email })
        .then((data) => {
            if (!data) {
                bcrypt.hash(body.password, 10)
                    .then((e) => {
                        ls('email', body.email)
                        mailer.main()
                        if (e) {
                            users.create({ ...body, password: e, role: 'agent' })
                                .then((data) => { res.send('created avec success') })
                        } else throw Error('password invalid')
                    }).catch((err) => { console.log(err) })
            } else throw Error('email already exist')
        }).catch((error) => { next(error) })
}


module.exports = { getAll, addAgent }
