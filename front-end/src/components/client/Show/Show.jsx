import React from 'react';
import show1 from '../../images/show1.jpg'
import show from '../../images/show.jpg'
import banner1 from '../../images/banner-tour-1.jpg'
import banner2 from '../../images/banner-tour-2.jpg'
import banner3 from '../../images/banner-tour-3.jpg'
import banner4 from '../../images/banner-tour-4.jpg'
import banner5 from '../../images/banner-tour-5.jpg'

const Show = () => {
  return (
    <div className="container-fluid container-lg m mx-auto p-3 m-0 border-0 bd-example" id="show">
      <div id="car" className="carousel slide my-5" data-bs-ride="carousel">
        <div className="overflow-auto">
          <div className="carousel-inner ">
            <div className="carousel-item active">
              <img src={banner1} height="350" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={banner2} height="350" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={banner3} height="350" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={banner4} height="350" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={banner5} height="350" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={show} height="350" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={show1} height="350" alt="..." />
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#car" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#car" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  )
}

export default Show