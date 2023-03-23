import React from 'react'

const NavAdmin = () => {
  return (
    <div className="col-md d-flex justify-content-between" style={{ backgroundColor: "#ededed" }}>
      <label className="btn fs-4" htmlFor="menu"><i className="bi bi-arrow-right-circle"></i></label>
      <form className="d-flex my-2">
        <input className="me-2 form-control" type="search" id="myInput" placeholder="  🔍     Search...   " />
        <button className="btn border-dark"><i className="bi bi-search"></i></button>
      </form>
    </div>
  )
}

export default NavAdmin