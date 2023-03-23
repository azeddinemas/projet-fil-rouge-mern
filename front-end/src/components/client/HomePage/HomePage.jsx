import React from 'react';
import { Link } from 'react-router-dom';
import image from '../../images/home-img.svg'

const HomePage = () => {
    return (
        <main id="home">
            <div className="container-fluid container-lg mb-3">
                <div className="row d-flex justify-content-between align-items-center">
                    <div className="col-lg-6 col-md-6 col-sm-12 text-center text-md-start">
                        <img src={image} alt='...' id="img" style={{ maxWidth: 500 }} />
                    </div>
                    <div className="col-md text-center text-sm-start">
                        <h1 style={{ color: "#F79F1F" }}>Hello!</h1>
                        <div>
                            <p className="fs-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, minima architecto illum nam, temporibus quia qui eum enim quasi dignissimos quas iste alias eos dolore atque nihil repellat culpa officia!</p>
                            <Link to="#" className="btn text-white mt-3" style={{ background: "#F79F1F" }}>Login here</Link>
                        </div>
                        <hr />
                    </div>
                </div>
            </div>
        </main>
    )
}

export default HomePage