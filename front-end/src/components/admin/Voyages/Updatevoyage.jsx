import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import axios from "axios";
import { API_URL } from '../../config';

const Updatevoyage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [edit, setEdit] = useState({})
    function getOne() {
        axios.get(`${API_URL}/voyage/getone/${id}`)
            .then((e) => {
                setEdit(e.data)
            }).catch((err) => {
                console.log(err)
            })
    }
    useEffect(() => {
        getOne()
    }, [])

    const handlechange = (e) => {
        setEdit({ ...edit, [e.target.name]: e.target.value })
    }

    const handleSubmit = () => {
        axios.post(`${API_URL}/voyage/edit/${id}`, edit)
            .then((e) => {
                toast.success('update success')
                navigate('/voyage')
            }).catch((err) => {
                console.log(err)
            })
    }
    return (
        <div className='col-8 mx-auto mt-5'>
            <form method='POST' className='mt-2'>
                <div className="mb-3">
                    <label className="form-label">destination</label>
                    <input type="text" className="form-control" onChange={handlechange} value={edit.destination || ''} placeholder='destination' name="destination" />
                </div>
                <div className="mb-3">
                    <label className="form-label">description</label>
                    <input type="text" className="form-control" onChange={handlechange} value={edit.description || ''} placeholder='description' name="description" />
                </div>
                <div className="mb-3">
                    <label className="form-label">price</label>
                    <input type="number" className="form-control" onChange={handlechange} value={edit.prix || ''} placeholder='price' name="prix" />
                </div>
                <div className="mb-3">
                    <label className="form-label">date depart</label>
                    <input type="date" className="form-control" onChange={handlechange} placeholder='date' name="datedepart" />
                </div>
                <div className="mb-3">
                    <label className="form-label">image</label>
                    <input type="file" accept=".png, .jpg, .jpeg" className="form-control" onChange={handlechange} name="image" multiple />
                </div>
                <div className='mt-2'>
                    <button type="button" className="btn btn-info text-white mt-4" onClick={handleSubmit}>modifie</button>
                </div>
            </form>
            <hr />
            <ToastContainer />
        </div>
    )
}

export default Updatevoyage