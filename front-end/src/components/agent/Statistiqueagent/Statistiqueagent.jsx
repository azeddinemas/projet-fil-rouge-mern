import React from 'react'

const Statistiqueagent = () => {
  return (
    <div className="container-fluid">
      <div className="row mt-5">
          <div className="col-md col-sm-6 p-2">
              <div className="p-2 rounded-4" style={{background: "#badff8"}}>
                  <i className="bi bi-grid fs-3" style={{color: "#31a2e4"}}></i>
                  <p>voyage</p>
                  <p className="text-end fw-bold fs-5">20</p>
              </div>
          </div>
          <div className="col-md col-sm-6 p-2">
              <div className="p-2 rounded-4" style={{background: "#ee94cb"}}>
                  <i className="bi bi-file-earmark-bar-graph fs-3" style={{color: "#f33d9e"}}></i>
                  <p>Réservation</p>
                  <p className="text-end fw-bold fs-5">30</p>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Statistiqueagent