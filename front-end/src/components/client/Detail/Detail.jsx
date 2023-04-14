import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { API_URL } from '../../config';
import Tippy from '@tippyjs/react';
import jwt from 'jwt-decode';
import { ToastContainer, toast } from 'react-toastify';

const Detail = () => {

    const { id } = useParams();
    const navigate = useNavigate()
    const [detail, setDetail] = useState({})
    const getOne = () => {
        axios.get(`${API_URL}/voyage/getone/${id}`)
            .then((d) => {
                setDetail(d.data)
            }).catch((err) => {
                console.log(err)
            })
    }


    useEffect(() => {
        getOne()
    }, [])



    const name = JSON.parse(localStorage.getItem('user'))
    const d = jwt(name)

    const [quantity, setQuantity] = useState({})
    const chang = (e) => {
        setQuantity({ ...quantity, counter: e.target.value, price: detail.prix, name: d.data.name, phone: d.data.phone, dest: detail.destination, email: d.data.email })
    }
    const sub = (e) => {
        e.preventDefault()
        axios.post(`${API_URL}/voyage/addReservation`, quantity)
            .then((element) => {
                toast.success('reserve avec success')
            }).catch((err) => {
                toast.warning(err.response.data.message)
            })
    }


    return (
        <div className="container w-100 vh-100">
            <div className="row h-75 d-flex align-items-center justify-content-center">
                <div className="col-md-6">
                    <img src={`${API_URL}/${detail.image}`} alt="..." className="img-fluid" />
                </div>
                <div className="col-md-6">
                    <Tippy arrow={false} animation='scale' placement='right' content="Go back">
                        <button onClick={() => { navigate(-1) }} className="btn btn-sm m-2" style={{ backgroundColor: '#ffab6f' }}><i className="bi bi-arrow-left fs-4 text-white"></i></button>
                    </Tippy>
                    <h2 className='my-3'>{detail.destination}</h2>
                    <h3 className='my-3'>price : {detail.prix} DH </h3>
                    <p className='fs-5 text-muted'> current price : <span className='text-decoration-line-through'>{detail.currentprix}</span></p>

                    <p className='my-3'>{detail.description}</p>
                    <p className='my-3'>date de depart : {detail.datedepart}</p>
                    <form>
                        <div className="form-group">
                            <label htmlFor="quantity" className='form-label'>Quantity:</label>
                            <input type="number" className="form-control" name='counter' min={1} onChange={chang} />
                        </div>
                        <div className="text-right mt-3">
                            <h3 name='azert'>Total: {quantity.counter ? detail.prix * quantity.counter : 0} DH</h3>
                        </div>
                        <button className="btn mt-4 text-white" onClick={sub} style={{ backgroundColor: '#f79f1f' }}>Add to Cart</button>
                    </form>
                </div>
            </div>
            <ToastContainer />
        </div>
    )
}

export default Detail
