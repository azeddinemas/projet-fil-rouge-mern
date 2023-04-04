import axios from 'axios'
import React, { useState } from 'react'
import { API_URL } from '../../config'
import { ToastContainer, toast } from 'react-toastify'
const Addvoyage = () => {
    const [pack, setPack] = useState({})

    const change = (e) => {
        setPack({ ...pack, [e.target.name]: e.target.value })
    }
    const handlePhoto = (e) => {
        setPack({ ...pack, image: e.target.files[0] })
    }

    const add = (e) => {
        e.preventDefault()
        const formData = new FormData();
        formData.append('destination', pack.destination)
        formData.append('description', pack.description)
        formData.append('datedepart', pack.datedepart)
        formData.append('prix', pack.prix)
        formData.append('image', pack.image)

        axios.post(`${API_URL}/voyage/add`, formData).then((element) => {
            toast.success('add voyage success')

        }).catch(error => {
            console.log(error)
        })
    }
    return (
        <div className='form'>
            <form method='POST' className='mt-2 d-flex justify-content-between' encType='multipart/form-data' id='form'>
                <div className="mb-3">
                    <label className="form-label">destination</label>
                    <input type="text" className="form-control" onChange={change} placeholder='destination' name="destination" />
                </div>
                <div className="mb-3">
                    <label className="form-label">description</label>
                    <input type="text" className="form-control" onChange={change} placeholder='description' name="description" />
                </div>
                <div className="mb-3">
                    <label className="form-label">price</label>
                    <input type="number" className="form-control" onChange={change} placeholder='price' name="prix" />
                </div>
                <div className="mb-3">
                    <label className="form-label">date depart</label>
                    <input type="date" className="form-control" onChange={change} placeholder='date' name="datedepart" />
                </div>
                <div className="mb-3">
                    <label className="form-label">image</label>
                    <input type="file" accept=".png, .jpg, .jpeg" className="form-control" onChange={handlePhoto} name="image" multiple />
                </div>
                <div className='mt-2'>
                    <button type="button" className="btn btn-info text-white mt-4" onClick={add}>AJOUTER</button>
                </div>
            </form>
            <hr />
            <ToastContainer />
        </div>
    )
}

export default Addvoyage