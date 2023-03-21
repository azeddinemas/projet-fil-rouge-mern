import React from 'react';
import img from '../../images/p-5.jpg'

const Packages = () => {
  return (
    <div className="mt-4" id="packages">
        <h1 className="text-center fw-bolder" style={{fontSize: "4rem",color: "#444"}}>our <span>Packages</span></h1>
        <div className="container-fluid container-lg row d-flex flex-wrap mx-auto mt-3 p-3 justify-content-center">
            <div className="col-xl-3 col-lg-3 col-md-4 col">
                <div className="card shadow p-2 mb-5 rounded" >
                    <img src={img} className="card-img-top rounded-3"/>
                    <p className="position-absolute ms-2 mt-1 text-white bg-black bg-opacity-50 p-1 rounded-3 fs-5"><i className="bi bi-geo fs-3 align-middle text-warning"></i>essaouira</p>
                    <div className="card-body">
                        <h5 className="card-title fs-3">4DH&nbsp;<span className="text-decoration-line-through text-secondary fs-5 fw-lighter">4</span></h5>
                        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique adipisci distinctio</p>
                        <form method="POST">
                            <button type="submit" name="addreservation" style={{background: "#F79F1F"}} className="btn text-white">go somewhere</button>
                        </form>
                    </div>
                </div>
            </div>            
        </div>
    </div>
  )
}

export default Packages