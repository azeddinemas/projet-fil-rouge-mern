import React from 'react';
import { Link } from 'react-router-dom';

const Reservation = () => {
  return (
    <div className="container-fluid">
      <div className="row mt-4">
          <div className="col-md d-flex justify-content-between">
              <div className="">
                  <h3>Réservation List</h3>
              </div>
              <div className="">
                  <i className="bi bi-eject text-info me-2 fs-5"></i>
                  <label htmlFor="adds" className='btn btn-info text-white'>ADD NEW REPAS</label>
              </div>
          </div>
      </div>
      <hr/>
      <div style={{width: "99%", margin: "auto"}} className="row overflow-auto">
          <table className="table" id="myTable">
              <thead>
                  <tr style={{color: "#acacac"}}>
                      <th scope='col'>image</th>
                      <th scope="col">name</th>
                      <th scope="col">description</th>
                      <th scope='col'>price</th>
                      <th scope='col'>categorie</th>
                      <th className="text-center">operation</th>
                  </tr>
              </thead>
              <tbody className="bg-white">
                  <tr className="align-middle">
                      <td><img width={100} src={"#"} alt='...'/></td>
                      <td className='text-nowrap'>name</td>
                      <td >Lorem ipsum, dolor sit amet consectetur adipisicing elit</td>
                      <td>200</td>
                      <td>nadi</td>
                      <td className="d-flex flex-row justify-content-end">
                          <div className='text-nowrap'>
                              <Link to={`#`} className='btn btn-outline-info me-1'><i className="bi bi-pencil-square"></i></Link>
                              <button className="btn btn-outline-danger"><i className="bi bi-trash"></i></button>
                          </div>
                      </td>
                  </tr>                   
              </tbody>
          </table>
      </div>
    </div>
  )
}

export default Reservation