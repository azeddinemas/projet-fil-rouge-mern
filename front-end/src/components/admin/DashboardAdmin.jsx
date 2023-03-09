import React from 'react'
import {Outlet} from 'react-router-dom'
import NavAdmin from './sideBar/NavAdmin/NavAdmin'
import SideAdmin from './sideBar/SideAdmin'


const DashboardAdmin = () => {
  return (
    <main className="container-fluid bg-white">
            <div className="row d-flex flex-nowrap">
                <SideAdmin/>
                <div className="col">
                    <div className="row">
                        <NavAdmin />
                    </div>
                    <Outlet/>
                </div>
            </div>
        </main>
  )
}

export default DashboardAdmin