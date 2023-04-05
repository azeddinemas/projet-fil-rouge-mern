import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { API_URL } from '../../config';
import axios from 'axios';

const Packages = (props) => {
    const [pack, setPack] = useState([])
    const getLimit = () => {
        axios.get(`${API_URL}/voyage/getpackage`).then((element) => {
            setPack(element.data)
        })
    }

    useEffect(() => {
        getLimit()
    }, [])

    return (
        <div className="mt-4" id="packages" style={props.name}>
            <h1 className="text-center fw-bolder" style={{ fontSize: "4rem", color: "#444" }}>our <span>Packages</span></h1>
            <div className="container-fluid container-lg row d-flex flex-wrap mx-auto mt-3 p-3 justify-content-center">
                <Link className='text-end fw-bold mb-2' to={'/ourPackage'}>Get more &rarr;</Link>
                {pack.map((items) => (
                    <div className="col-xl-3 col-lg-3 col-md-4 col" key={items._id}>
                        <div className="card shadow p-2 mb-5 rounded" >
                            <img src={'http://localhost:8080/' + items.image} alt='...' className="card-img-top rounded-3" />
                            <p className="position-absolute ms-2 mt-1 text-white bg-black bg-opacity-50 p-1 rounded-3 fs-5"><i className="bi bi-geo fs-3 align-middle text-warning"></i>{items.destination}</p>
                            <div className="card-body">
                                <h5 className="card-title fs-3">{items.prix}DH&nbsp;<span className="text-decoration-line-through text-secondary fs-5 fw-lighter">{items.currentprix}</span></h5>
                                <p className="card-text">{items.description}</p>
                                <p>date de depart : {items.datedepart}</p>
                                <form>
                                    <button type="submit" name="addreservation" style={{ background: "#F79F1F" }} className="btn text-white">go somewhere</button>
                                </form>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Packages