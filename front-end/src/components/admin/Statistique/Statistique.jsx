import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { API_URL } from '../../config'

const Statistique = () => {
    const [state, setState] = useState({})

    const dash = () => {
        axios.get(`${API_URL}/admin/Allstatistique`).then((e) => {
            setState(e.data)
        })
    }
    useEffect(() => {
        dash()
    }, [])

    return (
        <div className="container-fluid">
            <div className="row mt-5">
                <div className="col-md col-sm-6 p-2">
                    <div className="p-2 rounded-4 bg-primary-subtle border border-primary" style={{ background: "#ee94cb" }}>
                        <i className="bi bi-person fs-3" style={{ color: "#f33d9e" }}></i>
                        <p>Client</p>
                        <p className="text-end fw-bold fs-5">{state.Allclient}</p>
                    </div>
                </div>
                <div className="col-md col-sm-6 p-2">
                    <div className="p-2 bg-success-subtle border border-success rounded-4" style={{ background: "#FF8303" }}>
                        <i className="bi bi-person-vcard fs-3" style={{ color: "#198754" }}></i>
                        <p>Agent</p>
                        <p className="text-end fw-bold fs-5">{state.agent}</p>
                    </div>
                </div>
                <div className="col-md col-sm-6 p-2">
                    <div className="p-2 rounded-4 bg-info bg-opacity-10 border border-info">
                        <i className="bi bi-ui-checks-grid fs-3" style={{ color: "#0a58ca" }}></i>
                        <p>Voyages</p>
                        <p className="text-end fw-bold fs-5">{state.Allvoyage}</p>
                    </div>
                </div>
                <div className="col-md col-sm-6 p-2">
                    <div className="p-2 rounded-4 border border-dark text-white" style={{ backgroundColor: "#6495ed" }} >
                        <i className="bi bi-people fs-3" style={{ color: "#FB8C00" }}></i>
                        <p>Users</p>
                        <p className="text-end fw-bold fs-5">{state.AllUsers}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Statistique