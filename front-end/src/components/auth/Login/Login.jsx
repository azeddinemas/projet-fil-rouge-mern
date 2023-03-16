import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../images/bg.jpg'

const Login = () => {
  return (
    <main className="w-100 vh-100 d-flex justify-content-center align-items-center" style={{backgroundImage:`url(${img})`,backgroundSize:'cover'}}>
      <section style={{maxWidth:400}} className="p-4 shadow rounded-5 bg-white">
        <form className='text-center'>
            <img src={require('../../images/4206917.png')} className='w-50'/>
            <h2 className="text-center mt-2" style={{color:"#ff9847"}}>Sign <span style={{color:"#ad59e8"}}>In</span></h2>
            <div className="mb-3 text-start">
                <label className="form-label">Email</label>
                <input type="email" className="form-control" placeholder="Enter your email"/>
            </div>
            <div className="mb-3 text-start">
                <label className="form-label">Password</label>
                <input type="password" className="form-control" placeholder="Enter your password" />
            </div>
            <div className="form-check mb-3 text-start">
              <input className="form-check-input" type="checkbox" id="f"/>
              <label className="form-check-label" htmlFor="f">Remember me</label>
            </div>
            <div className="text-center d-grid">
                <button type="submit" name="submit"  className="btn bg-warning-subtle">Connexion</button>
            </div>
            <hr/>
            <div className="text-center">
                <p>Need an account? <Link to={'/register'}>sign up</Link></p>
            </div>
        </form>
      </section>
    </main>
  )
}

export default Login