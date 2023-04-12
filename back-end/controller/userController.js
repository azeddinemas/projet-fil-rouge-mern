const bcrypt = require('bcryptjs');
const users = require('../models/users');
const mailer = require('./mailerController')
const ls = require('local-storage');
const jwt = require('jsonwebtoken');

const register = (req, res, next) => {
    const { body } = req;
    users.findOne({ email: body.email })
        .then((data) => {
            if (!data) {
                bcrypt.hash(body.password, 10)
                    .then((e) => {
                        ls('email', body.email)
                        mailer.main()
                        if (e) {
                            users.create({ ...body, password: e, role: 'client' })
                                .then((data) => { res.send('created avec success') })
                        } else throw Error('password invalid')
                    }).catch((err) => { throw Error })
            } else throw Error('email already exist')
        }).catch((error) => { next(error); })
}

const login = async (req, res, next) => {
    const { body } = req;
    try {
        const data = await users.findOne({ email: body.email })
        if (data) {
            const pass = await bcrypt.compare(body.password, data.password)
            if (pass) {
                if (data.confirmed) {
                    if (data.active) {
                        const logged_in = jwt.sign({ data }, process.env.SECRET)
                        res.send(logged_in)
                    } else throw Error('votre compte banie')
                } else {
                    throw Error('consulter votre email')
                }
            } else throw Error('password incorrect')
        } else throw Error('email incorrect')
    } catch (error) {
        next(error)
    }

}

const banieCompte = async (req, res, next) => {
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
        next(error)
    }
}

module.exports = { register, login, banieCompte }
