import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import Fpackage from './Fpackage';
import Hpackage from './Hpackage';
import axios from 'axios'
import { API_URL } from '../../config';
import p1 from '../../images/p-1.jpg';
import p2 from '../../images/p-2.jpeg';
import p3 from '../../images/p-3.jpg';
import p4 from '../../images/p-4.jpg';
import p5 from '../../images/p-5.jpg';
import p6 from '../../images/p-6.jpeg';

const OurPackage = () => {
  const [packag, setPackag] = useState([])
  const getAll = () => {
    axios.get(`${API_URL}/voyage/getall`).then((element) => {
      setPackag(element.data)
    })
  }

  useEffect(() => {
    getAll()
  }, [])

  return (
    <>
      <main>
        <Hpackage />
        <div className="py-5 bg-secondary">
          <div className="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3 mb-4">
              {packag.map((item) => (
                <div className="col">
                  <div className="card shadow-sm">
                    <img src={'http://localhost:8080/' + item.image} className="bd-placeholder-img card-img-top" alt="..." />
                    <div className="card-body">
                      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                          <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                          <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                        </div>
                        <small className="text-muted">9 mins</small>
                      </div>
                    </div>
                  </div>
                </div>

              ))}
              <div className="col">
                <div className="card shadow-sm">
                  <img src={p1} className="bd-placeholder-img card-img-top" alt="..." />
                  <div className="card-body">
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                        <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                      </div>
                      <small className="text-muted">9 mins</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card shadow-sm">
                  <img src={p2} className="bd-placeholder-img card-img-top" alt="..." />
                  <div className="card-body">
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                        <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                      </div>
                      <small className="text-muted">9 mins</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card shadow-sm">
                  <img src={p3} className="bd-placeholder-img card-img-top" alt="..." />
                  <div className="card-body">
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                        <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                      </div>
                      <small className="text-muted">9 mins</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card shadow-sm">
                  <img src={p4} className="bd-placeholder-img card-img-top" alt="..." />
                  <div className="card-body">
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                        <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                      </div>
                      <small className="text-muted">9 mins</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card shadow-sm">
                  <img src={p5} className="bd-placeholder-img card-img-top" alt="..." />
                  <div className="card-body">
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                        <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                      </div>
                      <small className="text-muted">9 mins</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card shadow-sm">
                  <img src={p6} className="bd-placeholder-img card-img-top" alt="..." />
                  <div className="card-body">
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                        <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                      </div>
                      <small className="text-muted">9 mins</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <nav aria-label="Page navigation">
              <ul className="pagination justify-content-end">
                <li className="page-item"><Link className="page-link" to="#">Previous</Link></li>
                <li className="page-item"><Link className="page-link" to="#">1</Link></li>
                <li className="page-item"><Link className="page-link" to="#">2</Link></li>
                <li className="page-item"><Link className="page-link" to="#">3</Link></li>
                <li className="page-item"><Link className="page-link" to="#">Next</Link></li>
              </ul>
            </nav>
          </div>
        </div>
      </main>
      <Fpackage />


    </>
  )
}

export default OurPackage