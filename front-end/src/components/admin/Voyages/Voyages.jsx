import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import Addvoyage from './Addvoyage';
import { API_URL } from '../../config'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'

const Voyages = () => {
    const [voyage, setVoyage] = useState([])
    const Allvoyage = () => {
        axios.get(`${API_URL}/voyage/getall`).then((e) => {
            setVoyage(e.data)
        })
    }
    useEffect(() => {
        Allvoyage()
    }, [])

    function deleted(id, name) {
        const result = window.confirm(`are you sure to deleted ${name}`)
        if (result) {
            axios.delete(`${API_URL}/voyage/delete/${id}`)
                .then(() => {
                    Allvoyage()
                })
        }
    }



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
        formData.append('currentprix', pack.currentprix)
        formData.append('image', pack.image)

        axios.post(`${API_URL}/voyage/add`, formData).then((element) => {
            toast.success('add voyage success')
            Allvoyage()

        }).catch(error => {
            console.log(error)
        })
    }

    return (
        <div className="container-fluid">
            <div className="row mt-4">
                <div className="col-md d-flex justify-content-between">
                    <div className="">
                        <h3>Voyage List</h3>
                    </div>
                    <div className="">
                        <i className="bi bi-eject text-info me-2 fs-5"></i>
                        <label htmlFor="adds" className='btn btn-info text-white'>ADD NEW VOYAGE</label>
                    </div>
                </div>
            </div>
            <hr />
            <input type="checkbox" className="d-none" id="adds" />
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
                        <label className="form-label">current price</label>
                        <input type="number" className="form-control" onChange={change} placeholder='current price' name="currentprix" />
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
            </div>
            <div style={{ width: "99%", height: "70vh", margin: "auto" }} className="row overflow-auto">
                <table className="table" id="myTable">
                    <thead>
                        <tr style={{ color: "#acacac" }}>
                            <th scope='col'>image</th>
                            <th scope="col">name</th>
                            <th scope="col">description</th>
                            <th scope='col'>price</th>
                            <th scope='col'>current price</th>
                            <th scope='col'>date depart</th>
                            <th className="text-center">operation</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white overflow-auto">
                        {voyage.map((item) => (
                            <tr className="align-middle" key={item._id}>
                                <td><img width={100} alt='...' src={"http://localhost:8080/" + item.image} /></td>
                                <td className='text-nowrap'>{item.destination}</td>
                                <td >{item.description}</td>
                                <td>{item.prix}</td>
                                <td>{item.currentprix}</td>
                                <td>{item.datedepart}</td>
                                <td className="d-flex  justify-content-end">
                                    <Link to={'/updateVoyage/' + item._id} className='btn btn-outline-info me-1'><i className="bi bi-pencil-square"></i></Link>
                                    <button className="btn btn-outline-danger" onClick={() => deleted(item._id, item.destination)}><i className="bi bi-trash"></i></button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <ToastContainer />
        </div>
    )
}

export default Voyages