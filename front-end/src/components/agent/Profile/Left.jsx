import React from 'react'

const Left = () => {
  return (
    <div className="col-lg-4">
        <div className="card mb-2 py-3">
            <div className="card-body text-center">
                <img src={require('../../images/ava3.webp')} className="rounded-circle img-fluid" style={{width: 150}}/>
                <h5 className="my-3">John Smith</h5>
                <p className="text-muted mb-1">Full Stack Developer</p>
                <p className="text-muted mb-2">Bay Area, San Francisco, CA</p>
            </div>
        </div>
        <div className="card mb-2">
            <div className="card-body p-0">
                <ul className="list-group list-group-flush rounded-3">
                    {/* <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                        <i className="bi bi-globe fs-4 text-warning"></i>
                        <p className="mb-0">https://mdbootstrap.com</p>
                    </li> */}
                    <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                        <i className="bi bi-github fs-4" style={{color: "#333333"}}></i>
                        <p className="mb-0">mdbootstrap</p>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                        <i className="bi bi-twitter fs-4" style={{color: "#55acee"}}></i>
                        <p className="mb-0">@mdbootstrap</p>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                        <i className="bi bi-instagram fs-4" style={{color: "#ac2bac"}}></i>
                        <p className="mb-0">mdbootstrap</p>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                        <i className="bi bi-facebook fs-4" style={{color: "#3b5998"}}></i>
                        <p className="mb-0">mdbootstrap</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Left