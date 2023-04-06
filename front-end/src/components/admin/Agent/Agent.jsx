import React, { useEffect, useState } from 'react'
import Addagent from './Addagent';
import { Link } from 'react-router-dom';
import axios from 'axios'
import './agent.css'
import { API_URL } from '../../config';

const Agent = () => {

    const [agent, setAgent] = useState([])
    const allAgent = () => {
        axios.get(`${API_URL}/agent/get`).then((e) => {
            setAgent(e.data)
        })
    }
    useEffect(() => {
        allAgent()
    }, [])
    return (
        <div className="container-fluid">
            <div className="row mt-4">
                <div className="col-md d-flex justify-content-between">
                    <div className="">
                        <h3>Agent List</h3>
                    </div>
                    <div className="">
                        <i className="bi bi-eject text-info me-2 fs-5"></i>
                        <label htmlFor="adds" className='btn btn-info text-white'>ADD NEW AGENT</label>
                    </div>
                </div>
            </div>
            <hr />
            <input type="checkbox" className="d-none" id="adds" />
            <Addagent />
            <div style={{ width: "99%", margin: "auto" }} className="row overflow-auto">
                <table className="table" id="myTable">
                    <thead>
                        <tr style={{ color: "#acacac" }}>
                            <th scope="col">name</th>
                            <th scope="col">email</th>
                            <th scope="col">phone</th>
                            <th scope='col'>pis</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white">
                        {agent.map((item) => (
                            <tr className="align-middle" key={item._id}>
                                <td className='text-nowrap'>{item.name}</td>
                                <td >{item.email}</td>
                                <td >{item.phone || ''}</td>
                                <td className="d-flex flex-row justify-content-end">
                                    <div className='text-nowrap'>
                                        <Link to={`#`} className='btn btn-outline-info me-1'><i className="bi bi-eye"></i></Link>
                                    </div>
                                </td>
                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Agent