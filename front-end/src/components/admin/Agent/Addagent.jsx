import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { API_URL } from '../../config'
import { toast, ToastContainer } from "react-toastify";

const Addagent = () => {
    const [first, setFirst] = useState({})

    const change = (e) => {
        setFirst({ ...first, [e.target.name]: e.target.value })
    }

    const addAgent = () => {
        axios.post(`${API_URL}/organism/add`, first)
            .then(() => {
                toast.success('added success')
                window.location.reload()
            }).catch((err) => {
                console.log(err.response)
            })
    }
    return (
        <div className='form'>
            <form className='mt-2 d-flex justify-content-between' encType='multipart/form-data' id='form'>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input type="text" className="form-control" onChange={change} placeholder='name' name="name" />
                </div>
                <div className="mb-3">
                    <label className="form-label">E-mail</label>
                    <input type="email" className="form-control" onChange={change} placeholder='email' name="email" />
                </div>
                <div className="mb-3">
                    <label className="form-label">phone</label>
                    <input type="text" className="form-control" onChange={change} placeholder='phone' name="phone" />
                </div>

                <div className='mt-2'>
                    <button type="button" onClick={addAgent} className="btn btn-info text-white mt-4">AJOUTER</button>
                </div>
            </form>
            <hr />
            <ToastContainer />
        </div>
    )
}

export default Addagent