const mongoose = require('mongoose')
const voyage = require('../models/voyage')


const addVoyage = (req, res) => {
    const { body } = req;
    const img = req.file.filename
    voyage.create({ ...body, image: img })
        .then((data) => {
            res.send(data)
        }).catch((error) => {
            res.send(error)
        })
}


const getall = (req, res) => {

    voyage.find()
        .then((data) => {
            res.send(data)
        }).catch((error) => {
            res.status(401).send(error)
        })
}

const getOne = (req, res) => {
    const { id } = req.params
    voyage.findOne({ _id: id }).then((data) => {
        res.send(data)
    }).catch((error) => {
        res.status(401).send(error)
    })
}

const editvoyage = (req, res) => {
    const { body } = req;
    const id = req.params.id;

    voyage.updateOne({ _id: id }, { ...body }).then(() => {
        res.send('update success')
    }).catch((error) => {
        res.status(401).send(error)
    })
}

const deletevoyage = (req, res) => {
    const { id } = req.params

    voyage.deleteOne({ _id: id }).then(() => {
        res.send('deleted success')
    }).catch((error) => {
        res.status(401).send(error)
    })
}


module.exports = { addVoyage, getall, getOne, editvoyage, deletevoyage }