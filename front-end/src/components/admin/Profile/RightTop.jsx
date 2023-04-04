import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { API_URL } from '../../config';

const RightTop = () => {
    const [profil, setProfil] = useState({})

    const getAdmin = () => {
        axios.get(`${API_URL}/admin/getAdmin`).then((data) => {
            setProfil(data.data)
        })
    }

    useEffect(() => {
        getAdmin()
    }, [])

    return (
        <div className="card mb-2">
            <div className="card-body">
                <div className="row">
                    <div className="col-sm-3">
                        <p className="mb-0">Full Name</p>
                    </div>
                    <div className="col-sm-9">
                        <p className="text-muted mb-0">{profil.name}</p>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-sm-3">
                        <p className="mb-0">Email</p>
                    </div>
                    <div className="col-sm-9">
                        <p className="text-muted mb-0">{profil.email}</p>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-sm-3">
                        <p className="mb-0">Phone</p>
                    </div>
                    <div className="col-sm-9">
                        <p className="text-muted mb-0">{profil.phone}</p>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-sm-3">
                        <p className="mb-0">Mobile</p>
                    </div>
                    <div className="col-sm-9">
                        <p className="text-muted mb-0">(098) 765-4321</p>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-sm-3">
                        <p className="mb-0">password</p>
                    </div>
                    <div className="col-sm-9">
                        <h5 className="text-muted mb-0">. . . . . . . . . .</h5>
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-end m-2">
                <Link className='text-decoration-none' to={'/updateProfil'}>
                    <button type="button" className="btn btn-outline-primary">Modifie</button>
                </Link>
            </div>
        </div>
    )
}

export default RightTop