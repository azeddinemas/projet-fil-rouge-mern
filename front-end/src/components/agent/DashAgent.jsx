import React from 'react';
import Sideagent from './Sideagent/Sideagent';
import { Outlet } from 'react-router-dom';
import NavAgent from './Sideagent/NavAgent';

const DashAgent = () => {
  return (
    <main className="container-fluid" style={{backgroundColor:"#eee"}}>
        <div className="row d-flex flex-nowrap">
            <Sideagent/>
            <div className="col">
                <div className="row">
                    <NavAgent/>
                </div>
                <Outlet/>
            </div>
        </div>
    </main>
  )
}

export default DashAgent