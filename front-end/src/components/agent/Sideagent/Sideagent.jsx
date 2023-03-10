import React from 'react';
import { Link,NavLink } from 'react-router-dom';
import Tippy from '@tippyjs/react';

const Sideagent = () => {
  return (
    <>
        <input type="checkbox" id="menu" className='d-none'/>
        <div id="sid" className="col-auto col-xl-2 min-vh-100 text-center bg-white">
            <label htmlFor="menu" id="label" className="btn float-sm-end mt-1"><i className="bi bi-arrow-left-circle fs-5"></i></label>
            <h3 className="text-start mt-1 d-none d-sm-flex">
                <span className="text-info">|</span>Voyageons
            </h3>
            <br />
            <img className="rounded rounded-circle d-none d-sm-inline w-50" src={require('../../images/avatar5.jpg')}/>
            <h4 className='d-none d-sm-block'>Azeddine</h4>
            <p className="text-info mt-5 mt-sm-0">Agent</p>
            <hr />
            <nav className="text-sm-start mt-5 mt-sm-3 pb-5 p-sm-2">
                <NavLink className="nav-link p-1 p-sm-2" to={"/statistiqueagent"}>
                    <Tippy arrow={false} animation='scale' placement='right' content='Dashboard'>
                        <i className="bi bi-speedometer2 fs-5 me-sm-2"></i>
                    </Tippy>
                    <span className='d-none d-sm-inline'>Dashboard</span>
                </NavLink>
                <br />
                <NavLink className="nav-link p-1 p-sm-2" to={"/voyage"}>
                    <Tippy arrow={false} placement='right' content="voyage">
                        <i className="bi bi-grid fs-5 me-sm-2"></i>  
                    </Tippy>
                    <span className="d-none d-sm-inline">voyage</span>
                </NavLink>
                <br />
                <NavLink className="nav-link p-1 p-sm-2" to={"/reservation"}>
                    <Tippy arrow={false} placement='right' content='Client'>
                        <i className="bi bi-check2-square me-sm-2 fs-5"></i> 
                    </Tippy>
                    <span className='d-none d-sm-inline'>Réservation</span>
                </NavLink>
                <br/>
                <NavLink className="nav-link p-1 p-sm-2" to={"/profile"}>
                    <Tippy arrow={false} placement='right' content='Client'>
                        <i className="bi bi-person me-sm-2 fs-5"></i> 
                    </Tippy>
                    <span className='d-none d-sm-inline'>Profile</span>
                </NavLink>
                <br />
                <NavLink className="nav-link p-1 p-sm-2" to={"/#"}>
                    <Tippy arrow={false} placement='right' content='Client'>
                        <i className="bi bi-sliders2 me-sm-2 fs-5"></i> 
                    </Tippy>
                    <span className='d-none d-sm-inline'>Settings</span>
                </NavLink>
                <br />
            </nav>
            <Link to={"#"} className="nav-link p-2 mt-5 mt-sm-0">
                <Tippy arrow={false} placement='right' content='Déconnexion'>
                    <i className="bi bi-box-arrow-right me-sm-2 fs-5"></i>
                </Tippy>
                <span className='d-none d-sm-inline'>Logout</span>
            </Link>
        </div>
      </>
  )
}

export default Sideagent