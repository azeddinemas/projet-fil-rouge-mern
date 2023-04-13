import React, { useEffect, useState } from 'react'
import './Side.css'
import { NavLink } from 'react-router-dom'
import img from '../../images/pic-1.png';
import Tippy from '@tippyjs/react';
import axios from 'axios';
import { API_URL } from '../../config';
import { useDispatch } from 'react-redux';
import { logout } from '../../../Action/auth';

const SideAdmin = () => {
    const [p, setP] = useState({})

    const getAdmin = () => {
        axios.get(`${API_URL}/admin/getAdmin`).then((data) => {
            setP(data.data)
        })
    }
    useEffect(() => {
        getAdmin()
    }, [])

    const dispatch = useDispatch()
    const signout = () => {
        dispatch(logout)
        window.location.reload()
    }

    return (
        <>
            <input type="checkbox" id="menu" className='d-none' />
            <div style={{ background: "#EDEDED" }} id="sid" className="col-auto col-xl-2 min-vh-100 text-center">
                <label htmlFor="menu" id="label" className="btn float-sm-end mt-1"><i className="bi bi-arrow-left-circle fs-5"></i></label>
                <h3 className="text-start mt-1 d-none d-sm-block">
                    <span className="text-info">|</span>Voyageons
                </h3>
                <br />
                <img className="rounded rounded-circle w-50 d-none d-sm-inline" src={img} alt='...' />
                <h4 className='d-none d-sm-block'>{p.name}</h4>
                <p className="text-info mt-5 mt-sm-0">{p.role}</p>
                <hr />
                <nav id='active' className="text-sm-start mt-5 mt-sm-0 p-sm-2">
                    <NavLink className="nav-link p-1 p-sm-2" to={"/statistique"}>
                        <Tippy arrow={false} animation='scale' placement='right' content='Dashboard'>
                            <i className="bi bi-speedometer2 fs-5 me-sm-2"></i>
                        </Tippy>
                        <span className='d-none d-sm-inline'>Dashboard</span>
                    </NavLink>
                    <br />
                    <NavLink className="nav-link p-1 p-sm-2" to={"/voyage"}>
                        <Tippy arrow={false} animation='scale' placement='right' content="voyage">
                            <i className="bi bi-grid fs-5 me-sm-2"></i>
                        </Tippy>
                        <span className="d-none d-sm-inline">voyage</span>
                    </NavLink>
                    <br />
                    <NavLink className="nav-link p-1 p-sm-2" to={"/agent"}>
                        <Tippy arrow={false} animation='scale' placement='right' content="Agent">
                            <i className="bi bi-person-vcard fs-5 me-sm-2"></i>
                        </Tippy>
                        <span className="d-none d-sm-inline">Agent</span>
                    </NavLink>
                    <br />
                    <NavLink className="nav-link p-1 p-sm-2" to={"/client"}>
                        <Tippy arrow={false} animation='scale' placement='right' content='Client'>
                            <i className="bi bi-people me-sm-2 fs-5"></i>
                        </Tippy>
                        <span className='d-none d-sm-inline'>Client</span>
                    </NavLink>
                    <br />
                    <NavLink className="nav-link p-1 p-sm-2" to={"/reservation"}>
                        <Tippy arrow={false} animation='scale' placement='right' content='Réservation'>
                            <i className="bi bi-sliders2 me-sm-2 fs-5"></i>
                        </Tippy>
                        <span className='d-none d-sm-inline'>Réeservation</span>
                    </NavLink>
                    <br />
                    <NavLink className="nav-link p-1 p-sm-2" to={"/profile"}>
                        <Tippy arrow={false} animation='scale' placement='right' content='Profil'>
                            <i className="bi bi-person me-sm-2 fs-5"></i>
                        </Tippy>
                        <span className='d-none d-sm-inline'>Profil</span>
                    </NavLink>
                    <br />
                </nav>
                <button onClick={signout} className="p-2 mt-5 mt-sm-0 border-0 mx-auto">
                    <Tippy arrow={false} placement='right' content='Déconnexion'>
                        <i className="bi bi-box-arrow-right me-sm-2 fs-5"></i>
                    </Tippy>
                    <span className='d-none d-sm-inline'>Logout</span>
                </button>
            </div>
        </>
    )
}

export default SideAdmin