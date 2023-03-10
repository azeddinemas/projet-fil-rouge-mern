import React from 'react'

const NavAgent = () => {
  return (
    <div className="col-md">
        <nav aria-label="breadcrumb" className="bg-light rounded-3 p-1 mb-2 d-flex justify-content-between">
            <label className="btn fs-4" htmlFor="menu"><i className="bi bi-arrow-right-circle"></i></label>
            <form className="d-flex my-2">
                <input className="me-2 form-control" type="search" id="myInput" placeholder="  🔍     Search...   "/>
                <button className="btn border-dark"><i className="bi bi-search"></i></button>
            </form>
        </nav>
    </div>
  )
}

export default NavAgent