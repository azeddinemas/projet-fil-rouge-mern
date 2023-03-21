import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../images/bg.jpg';
import './login.css'

const Login = () => {
  return (
    <section className="text-center vh-100 d-flex align-items-center shadow-lg" style={{backgroundImage: `url(${img})`,backgroundSize: "cover"}}>
      <main className="form-signin w-100 m-auto p-3 text-center rounded-4" style={{maxWidth: 380,backgroundColor: "#f5f5f5"}}>
        <form>
          <img className="mb-4" src={require('../../images/4206917.png')} alt="" width="130" />
          <h1 className="h3 mb-3 fw-normal">Please <span style={{color:"#ff9847"}}>sign</span><span style={{color: "#ad59e8"}}>in</span></h1>

          <div className="form-floating">
            <input type="email" className="form-control rounded-bottom-0" style={{marginBottom: -1}} id="floatingInput" placeholder="name@example.com"/>
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating">
            <input type="password" className="form-control rounded-top-0 mb-3" id="floatingPassword" placeholder="Password"/>
            <label htmlFor="floatingPassword">Password</label>
          </div>

          <div className="mb-3">
            <label>
              <input type="checkbox" value="remember-me"/> Remember me
            </label>
          </div>
          <button className="w-100 btn btn-lg bg-primary bg-opacity-50 text-white" type="submit">Sign in</button>
          <p className="mt-5 mb-3 text-muted">Need an account? <Link to="/register">sign up</Link></p>
        </form>
      </main>
    </section>
  )
}

export default Login