import React from 'react'

const Services = (props) => {
  return (
    <div className="mt-4" id="services" style={props.name}>
      <h1 className="text-center fw-bolder" style={{ fontSize: "4rem", color: "#444" }}>our <span>Services</span></h1>
      <div className="container-fluid container-xl row p-3 mx-auto">
        <div className="col-lg-3 col-md-4 col-sm-6">
          <div className="card shadow p-2 mb-5 rounded" style={{ minWidth: "240px" }}>
            <div className="d-flex justify-content-between align-items-center p-2">
              <i className="fas fa-hotel fs-2 rounded-circle text-white p-3" style={{ backgroundColor: "#F79F1F" }}></i>
              <h1 className="fw-bolder" style={{ fontSize: "57px", color: "#666" }}>01</h1>
            </div>
            <div className="card-body">
              <h3 className="card-title fw-bolder">Affordable Hotels</h3>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6">
          <div className="card shadow p-2 mb-5 rounded" style={{ minWidth: "240px" }}>
            <div className="d-flex justify-content-between align-items-center p-2">
              <i className="fas fa-plane fs-2 rounded-circle text-white p-3" style={{ backgroundColor: "#F79F1F" }}></i>
              <h1 className="fw-bolder" style={{ fontSize: "57px", color: "#666" }}>02</h1>
            </div>
            <div className="card-body">
              <h3 className="card-title fw-bolder">Fastest Travel</h3>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6">
          <div className="card shadow p-2 mb-5 rounded" style={{ minWidth: "240px" }}>
            <div className="d-flex justify-content-between align-items-center p-2">
              <i className="fas fa-utensils fs-2 rounded-circle text-white p-3" style={{ backgroundColor: "#F79F1F" }}></i>
              <h1 className="fw-bolder" style={{ fontSize: "57px", color: "#666" }}>03</h1>
            </div>
            <div className="card-body">
              <h3 className="card-title fw-bolder">Food And Drinks</h3>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6">
          <div className="card shadow p-2 mb-5 rounded" style={{ minWidth: "240px" }}>
            <div className="d-flex justify-content-between align-items-center p-2">
              <i className="fas fa-globe fs-2 rounded-circle text-white p-3" style={{ backgroundColor: "#F79F1F" }}></i>
              <h1 className="fw-bolder" style={{ fontSize: "57px", color: "#666" }}>04</h1>
            </div>
            <div className="card-body">
              <h3 className="card-title fw-bolder">all over the country</h3>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6">
          <div className="card shadow p-2 mb-5 rounded" style={{ minWidth: "240px" }}>
            <div className="d-flex justify-content-between align-items-center p-2">
              <i className="fas fa-hiking fs-2 rounded-circle text-white p-3" style={{ backgroundColor: "#F79F1F" }}></i>
              <h1 className="fw-bolder" style={{ fontSize: "57px", color: "#666" }}>05</h1>
            </div>
            <div className="card-body">
              <h3 className="card-title fw-bolder">Card title</h3>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6">
          <div className="card shadow p-2 mb-5 rounded" style={{ minWidth: "240px" }}>
            <div className="d-flex justify-content-between align-items-center p-2">
              <i className="fas fa-bullhorn fs-2 rounded-circle text-white p-3" style={{ backgroundColor: "#F79F1F" }}></i>
              <h1 className="fw-bolder" style={{ fontSize: "57px", color: "#666" }}>06</h1>
            </div>
            <div className="card-body">
              <h3 className="card-title fw-bolder">Card title</h3>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services