import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Addvoyage from './Addvoyage';
import { API_URL } from '../../config'
import axios from 'axios'

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
            <Addvoyage />
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
        </div>
    )
}

export default Voyages