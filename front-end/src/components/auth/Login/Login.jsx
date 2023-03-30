import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import img from '../../images/bg.jpg';
import './login.css'
import axios from 'axios'
import { API_URL } from '../../config';

const Login = () => {
  const [user, setUser] = useState({})
  const handlchanger = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(user)
    axios.post(`${API_URL}/user/auth/login`, user)
      .then((data) => {
        console.log(data)
      }).catch((error) => {
        console.log(error)
      })

  }
  return (
    <section className="vh-100" style={{ backgroundImage: `url(${img})`, backgroundSize: "cover" }}>
      <div className="w-100 h-100 d-flex align-items-center" style={{ backgroundColor: "#1E1F2459" }}>
        <main className="form-signin w-100 m-auto p-3 text-center rounded-4" style={{ maxWidth: 380, backgroundColor: "#f5f5f5" }}>
          <form>
            <img className="mb-4" src={require('../../images/4206917.png')} alt="..." width="130" />
            <h1 className="h3 mb-3 fw-normal">Please <span style={{ color: "#ff9847" }}>sign</span><span style={{ color: "#ad59e8" }}>in</span></h1>

            <div className="form-floating">
              <input type="email" className="form-control rounded-bottom-0" onChange={handlchanger} name='email' style={{ marginBottom: -1 }} id="flo" placeholder="name@example.com" />
              <label htmlFor="flo">Email address</label>
            </div>
            <div className="form-floating">
              <input type="password" className="form-control rounded-top-0 mb-3" onChange={handlchanger} name='password' id="word" placeholder="Password" />
              <label htmlFor="word">Password</label>
            </div>
            <div className="mb-3">
              <label>
                <input type="checkbox" /> Remember me
              </label>
            </div>
            <button className="w-100 btn btn-lg bg-primary bg-opacity-50 text-white" onClick={handleSubmit} type="submit">Sign in</button>
            <p className="mt-5 mb-3 text-muted">Need an account? <Link to="/register">sign up</Link></p>
          </form>
        </main>
      </div>
    </section>
  )
}

export default Login