import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <main className="container">
      <section style={{width:400}} className="mt-5 p-4 mx-auto shadow rounded-5">
        <form>
            <img src={require('../../images/4206917.jpg')} className='w-50 rounded-cercle' alt=""/>
            <h2 className="text-center">Sign In</h2>
            <div className="mb-3">
                <label className="form-label">Email</label>
                <input type="email" className="form-control" placeholder="Enter your email"/>
            </div>
            <div className="mb-3">
                <label className="form-label">Password</label>
                <input type="password" className="form-control" placeholder="Enter your password" />
            </div>
            <div class="form-check mb-3">
              <input class="form-check-input" type="checkbox" id="f"/>
              <label class="form-check-label" for="f">Remember me</label>
            </div>
            <div className="text-center d-grid">
                <button type="submit" name="submit" className="btn btn-outline-dark fw-bold">Connexion</button>
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