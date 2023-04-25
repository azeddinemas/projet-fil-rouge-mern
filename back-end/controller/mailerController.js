const nodemailer = require('nodemailer')
const ls = require('local-storage')
const jwt = require('jsonwebtoken');
const User = require('../models/users');


let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: 'maslouhazeddine@gmail.com',
        pass: 'dyunlrjhnzgcfcea'
    }
});

const main = () => {
    const email = ls('email')
    const emt = jwt.sign({ email }, process.env.SECRET)
    const link = `${process.env.API_URL}/user/auth/confirmation/${emt}`

    let info = {
        from: '"azeddine 👻" <maslouhazeddine@gmail.com>',
        to: email,
        subject: "email verification ✔",
        text: "Hello world?",
        html: '<b>Hello we just got a request to create an account with this email, please verify in this link <a href=' + link + '>confirm it</a></b>',
    };
    transporter.sendMail(info)
}

function confirm(req, res) {
    const token = req.params.token
    const eml = jwt.verify(token, process.env.SECRET)
    User.findOneAndUpdate({ email: eml.email }, { confirmed: true }).then(() => {
        // res.send('email confirmed avec success')
        res.redirect('http://localhost:3000/')
    }).catch(() => {
        console.log('not confirmed')
    })
}

module.exports = { main, confirm }