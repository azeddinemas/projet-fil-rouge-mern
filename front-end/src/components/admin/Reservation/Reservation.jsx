import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { API_URL } from '../../config'

const Reservation = () => {
    const [reservation, setReservation] = useState([])
    function getAll() {
        axios.get(`${API_URL}/voyage/getReservation`).then((e) => {
            setReservation(e.data)
            console.log(e)
        })
    }
    useEffect(() => {
        getAll()
    }, [])
    
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
            <div style={{ width: "99%", height: "70vh", margin: "auto" }} className="row overflow-auto">
                <table className="table" id="myTable">
                    <thead>
                        <tr style={{ color: "#acacac" }}>
                            <th scope="col">name</th>
                            <th scope="col">email</th>
                            <th scope='col'>phone</th>
                            <th scope='col'>destination</th>
                            <th scope='col'>Price</th>
                            <th scope="col">place</th>
                            <th scope='col'>Total</th>
                        </tr>
                    </thead>
                    <tbody className="overflow-auto">
                        {reservation.map(item => (
                            <tr className="" key={item._id}>
                                <td className='text-nowrap'>{item.name}</td>
                                <td >{item.email}</td>
                                <td>{item.phone}</td>
                                <td>{item.dest}</td>
                                <td>{item.price}DH</td>
                                <td>{item.counter}</td>
                                <td>{item.counter*item.price}DH</td>
                                
                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>
        </div>
  )
}

export default Reservation