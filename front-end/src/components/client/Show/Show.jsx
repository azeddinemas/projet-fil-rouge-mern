import React from 'react';
import show1 from '../../images/show1.jpg'
import show from '../../images/show.jpg'
import show2 from '../../images/show3.jpg'

const Show = () => {
  return (
    <div className="container-fluid container-lg px-4 mt-4" id="show">
      <h1 className="text-center fw-bolder" style={{fontSize: "4rem", color: "#444"}}>our <span>show</span></h1>
      <div className="overflow-auto mt-3">
          <div className="col-10 d-flex gap-2">
              <img src={show} className="w-100"/>
              <img src={show2} className="w-100"/>
              <img src={show1} className="w-100"/>
          </div>
      </div>
    </div>
  )
}

export default Show