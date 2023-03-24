import React from 'react';
import pic1 from '../../images/pic-1.png'
import pic2 from '../../images/pic-2.png'
import pic3 from '../../images/pic-3.png'
import pic4 from '../../images/pic-4.png'

const Review = (props) => {
    return (
        <div className="container-fluid container-lg mt-4" id="review" style={props.name}>
            <h1 className="text-center fw-bolder" style={{ fontSize: "4rem", color: "#444" }}>Client's Review</h1>
            <div className="p-3">
                <div className="d-flex overflow-auto gap-5">
                    <div className="col-6 col-md-4 shadow-lg p-3 mb-5 bg-body rounded-3">
                        <img src={pic1} className="rounded-circle mx-auto d-block" width={100} alt='...' />
                        <p className="mt-5 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga incidunt consequatur reprehenderit quo nulla eaque vitae facilis nemo ipsa corporis harum voluptatum nostrum molestias, aspernatur, nihil dolor eveniet quis aut.</p>
                    </div>
                    <div className="col-6 col-md-4 shadow-lg p-3 mb-5 bg-body rounded-4">
                        <img src={pic2} className="rounded-circle mx-auto d-block" width={100} alt='...' />
                        <p className="mt-5 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga incidunt consequatur reprehenderit quo nulla eaque vitae facilis nemo ipsa corporis harum voluptatum nostrum molestias, aspernatur, nihil dolor eveniet quis aut.</p>
                    </div>
                    <div className="col-6 col-md-4 shadow-lg p-3 mb-5 bg-body rounded-4">
                        <img src={pic3} className="rounded-circle mx-auto d-block" width={100} alt='...' />
                        <p className="mt-5 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga incidunt consequatur reprehenderit quo nulla eaque vitae facilis nemo ipsa corporis harum voluptatum nostrum molestias, aspernatur, nihil dolor eveniet quis aut.</p>
                    </div>
                    <div className="col-6 col-md-4 shadow-lg p-3 mb-5 bg-body rounded-4">
                        <img src={pic3} className="rounded-circle mx-auto d-block" width={100} alt='...' />
                        <p className="mt-5 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga incidunt consequatur reprehenderit quo nulla eaque vitae facilis nemo ipsa corporis harum voluptatum nostrum molestias, aspernatur, nihil dolor eveniet quis aut.</p>
                    </div>
                    <div className="col-6 col-md-4 shadow-lg p-3 mb-5 bg-body rounded-4">
                        <img src={pic4} className="rounded-circle mx-auto d-block" width={100} alt='...' />
                        <p className="mt-5 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga incidunt consequatur reprehenderit quo nulla eaque vitae facilis nemo ipsa corporis harum voluptatum nostrum molestias, aspernatur, nihil dolor eveniet quis aut.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Review