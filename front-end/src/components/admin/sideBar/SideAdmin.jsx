import React from 'react'
import './Side.css'
import { Link,NavLink } from 'react-router-dom'
import img from '../../images/pic-1.png';
import Tippy from '@tippyjs/react';
import 'tippy.js/animations/scale.css';

const SideAdmin = () => {
  return (
      <>
        <input type="checkbox" id="menu" className='d-none'/>
        <div style={{ background: "#EDEDED"}} id="sid" className="col-auto col-xl-2 min-vh-100 text-center">
            <label htmlFor="menu" id="label" className="btn float-sm-end mt-1"><i className="bi bi-arrow-left-circle fs-5"></i></label>
            <h3 className="text-start mt-1 d-none d-sm-block">
                <span className="text-info">|</span>Voyageons
            </h3>
            <br />
            <img className="rounded rounded-circle w-50 d-none d-sm-inline" src={img} />
            <h4 className='d-none d-sm-block'>Azeddine</h4>
            <p className="text-info mt-5 mt-sm-0">Admin</p>
            <hr />
            <nav className="text-sm-start p-sm-2">
                <NavLink className="nav-link p-1" to={"/statistique"}>
                    <Tippy arrow={false} animation='scale' placement='right' content='Dashboard'>
                        <i className="bi bi-speedometer2 fs-5 me-sm-2"></i>
                    </Tippy>
                    <span className='d-none d-sm-inline'>Dashboard</span>
                </NavLink>
                <br />
                <NavLink className="nav-link p-1" to={"/users"}>
                    <Tippy arrow={false} placement='right' content="Agent">
                        <i className="bi bi-bicycle fs-5 me-sm-2"></i>  
                    </Tippy>
                    <span className="d-none d-sm-inline">Agent</span>
                </NavLink>
                <br />
                <NavLink className="nav-link p-1" to={"/repas"}>
                    <Tippy arrow={false} placement='right' content='Dashboard'>
                        <i className="bi bi-grid fs-5 me-sm-2"></i>
                    </Tippy>
                    <span className='d-none d-sm-inline'>repas</span>
                </NavLink>
                <br />
                <NavLink className="nav-link p-1 text-nowrap" to={"/commands"}>
                    <Tippy arrow={false} placement='right' content='Dashboard'>
                        <i className="bi bi-cart2 fs-5 me-sm-2"></i>
                    </Tippy>
                    <span className='d-none d-sm-inline'>commandes</span>
                </NavLink>
                <br />
                <NavLink className="nav-link p-1 text-nowrap" to={"/categories"}>
                    <Tippy arrow={false} placement='right' content='Dashboard'>
                        <i className="bi bi-menu-button-wide-fill fs-5 me-sm-2"></i>
                    </Tippy>
                    <span className='d-none d-sm-inline'>Categories</span>
                </NavLink>
                <br />
                <NavLink className="nav-link p-1" to={"/client"}>
                    <Tippy arrow={false} placement='right' content='Client'>
                        <i className="bi bi-people me-sm-2 fs-5"></i> 
                    </Tippy>
                    <span className='d-none d-sm-inline'>Client</span>
                </NavLink>
                <br />
            </nav>
            <Link to={"#"} className="nav-link p-1 mt-5 mt-sm-0">
                <Tippy arrow={false} placement='right' content='Déconnexion'>
                    <i className="bi bi-box-arrow-right me-sm-2 fs-5"></i>
                </Tippy>
                    <span className='d-none d-sm-inline'>Logout</span>
            </Link>
        </div>
      </>
  )
}

export default SideAdmin