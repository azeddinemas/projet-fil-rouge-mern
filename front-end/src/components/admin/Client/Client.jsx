import React, { useEffect, useState } from 'react'
import { API_URL } from '../../config'
import axios from 'axios'
import { toast } from 'react-toastify'

const Client = () => {
    const [client, setClient] = useState([])
    function getAll() {
        axios.get(`${API_URL}/admin/allclient`).then((e) => {
            setClient(e.data)
            console.log(e.data)
        })
    }

    useEffect(() => {
        getAll()
    }, [])

    function banie(id) {
        axios.put(`${API_URL}/user/auth/banie/${id}`).then((data) => {
            toast.success(data.data)
            getAll()
        })

    }

    return (
        <div className="container-fluid">
            <div className="row mt-4">
                <div className="col-md d-flex justify-content-between">
                    <div className="">
                        <h3>Client List</h3>
                    </div>
                    <div className="">
                        <i className="bi bi-eject text-info me-2 fs-5"></i>
                    </div>
                </div>
            </div>
            <hr />
            <div style={{ width: "99%", margin: "auto" }} className="row overflow-auto">
                <table className="table" id="myTable">
                    <thead>
                        <tr style={{ color: "#acacac" }}>
                            <th scope="col">name</th>
                            <th scope="col">email</th>
                            <th scope='col'>phone</th>
                            <th scope='col'>status</th>
                            <th className="text-center">operation</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white">
                        {client.map(cli => (
                            <tr className="align-middle" key={cli._id}>
                                <td className='text-nowrap'>{cli.phone}</td>
                                <td >{cli.email}</td>
                                <td>{cli.phone}</td>
                                <td>{cli.active ? <span className="badge text-bg-success">Activé</span> : <span className="badge text-bg-danger">Désactivé</span>}</td>
                                <td className="d-flex flex-row justify-content-end">
                                    <button className="btn btn-outline-warning" onClick={() => { banie(cli._id) }}>{cli.active ? 'désactive' : 'active'}</button>
                                </td>
                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Client