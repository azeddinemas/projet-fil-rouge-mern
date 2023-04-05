import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import Fpackage from './Fpackage';
import Hpackage from './Hpackage';
import axios from 'axios'
import { API_URL } from '../../config';

const OurPackage = () => {
  const [packag, setPackag] = useState([])
  const getAll = () => {
    axios.get(`${API_URL}/voyage/pagination`).then((element) => {
      setPackag(element.data.data)
      console.log(packag.length);
    })
  }

  useEffect(() => {
    getAll()
  }, [])


  const [current, setCurrent] = useState(1)

  const product = 5
  const pages = Math.ceil(packag.length / product)
  const start = (current - 1) * product
  const finish = current * product
  // let order = packag.slice(start, finish)


  const generatPage = [];
  for (let i = 1; i <= pages; i++) {
    generatPage.push(i);
  }

  return (
    <>
      <main>
        <Hpackage />
        <div className="py-5 bg-secondary">
          <div className="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3 mb-4">
              {packag.slice(start, finish).map((item) => (
                <div className="col" key={item._id}>
                  <div className="card shadow-sm">
                    <img src={'http://localhost:8080/' + item.image} className="bd-placeholder-img card-img-top" alt="..." />
                    <div className="card-body">
                      <p className="card-text">{item.description}</p>
                      <p className="card-text">{item.destination}</p>
                      <p className="card-text">{item.prix} DH</p>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                          <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                          <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                        </div>
                        <small className="text-muted">date depart : {item.datedepart}</small>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <nav aria-label="Page navigation">
              <ul className="pagination justify-content-end">
                <li className="page-item" onClick={() => setCurrent(prev => prev - 1)}><Link className="page-link" to="#">Previous</Link></li>
                {generatPage.map((p) => (
                  <div onClick={() => { setCurrent(p) }} className={current === p ? "page-item active" : "page-item"} key={p}><Link className="page-link" to="#">{p}</Link></div>
                ))}
                <li className="page-item" onClick={() => setCurrent(prev => prev + 1)}><Link className="page-link" to="#">Next</Link></li>
              </ul>
            </nav>
          </div>
        </div>
      </main >
      <Fpackage />


    </>
  )
}

export default OurPackage