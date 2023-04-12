import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Fpackage from './Fpackage';
import Hpackage from './Hpackage';
import axios from 'axios'
import { API_URL } from '../../config';
import Tippy from '@tippyjs/react';


const OurPackage = () => {
  const navigate = useNavigate();
  const [packag, setPackag] = useState([])
  const getAll = () => {
    axios.get(`${API_URL}/voyage/getall`).then((element) => {
      setPackag(element.data)
    })
  }

  useEffect(() => {
    getAll()
  }, [])


  const [current, setCurrent] = useState(1)

  const product = 4
  const pages = Math.ceil(packag.length / product)
  const start = (current - 1) * product
  const finish = current * product


  const generatPage = [];
  for (let i = 1; i <= pages; i++) {
    generatPage.push(i);
  }

  return (
    <>
      <main>
        <Hpackage />
        <div className="py-4 bg-secondary">
          <Tippy arrow={false} animation='scale' placement='right' content="go back">
            <button className='btn btn-warning mx-5' onClick={() => navigate(-1)}><i className="bi bi-arrow-left fs-5 text-white"></i></button>
          </Tippy>
          <div className="container">
            <nav aria-label="Page navigation">
              <ul className="pagination justify-content-end">
                <button className="btn p-0 m-0 border-0 page-item" disabled={current === 1} onClick={() => setCurrent(prev => prev - 1)}><Link className="page-link" to="#">Previous</Link></button>
                {generatPage.map((p) => (
                  <div onClick={() => { setCurrent(p) }} className={current === p ? "page-item active" : "page-item"} key={p}><Link className="page-link" to="#">{p}</Link></div>
                ))}
                <button className="btn p-0 m-0 border-0 page-item" disabled={current === pages} onClick={() => setCurrent(prev => prev + 1)}><Link className="page-link" to="#">Next</Link></button>
              </ul>
            </nav>

            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3 mb-4">
              {packag.slice(start, finish).map((item) => (
                <div className="col" key={item._id}>
                  <div className="card shadow-sm">
                    <img src={`${API_URL}/` + item.image} className="bd-placeholder-img card-img-top" alt="..." />
                    <div className="card-body">
                      <p className="card-text">{item.description.slice(0, 86)}...</p>
                      <p className="card-text">{item.destination}</p>
                      <p className="card-text">{item.prix} DH</p>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                          <Link to={`/detail/${item._id}`} type="button" className="btn btn-sm btn-outline-secondary">View</Link>
                        </div>
                        <small className="text-muted">Départ : {item.datedepart}</small>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </main >
      <Fpackage />
    </>
  )
}

export default OurPackage