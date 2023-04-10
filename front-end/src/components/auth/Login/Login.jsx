import React, { useState, useEffect } from 'react';
import { Link, useNavigate, Navigate } from 'react-router-dom';
import img from '../../images/bg.jpg';
import './login.css'
import { ToastContainer } from 'react-toastify';
import jwt from 'jwt-decode';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../../Action/auth';

const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const isloged = useSelector(state => state.auth.isLoggedIn)
  const data = useSelector(state => state.auth.data)
  // 

  const [user, setUser] = useState({})
  const handlchanger = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }
  // console.log();
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(login(user))

  }
  useEffect(() => {
    if (isloged && jwt(data).data.role === 'client') {
      // const token = jwt(data)

      // <Navigate to={'/clientpage'} />
      return navigate('/clientpage')
    } else if (isloged && jwt(data).data.role === 'admin') {
      // <Navigate to={'/statistique'} />
      return navigate('/statistique')

    }
  }, [isloged])





  return (
    <section className="vh-100" style={{ backgroundImage: `url(${img})`, backgroundSize: "cover" }}>
      <div className="w-100 h-100 d-flex align-items-center" style={{ backgroundColor: "#1E1F2459" }}>
        <main className="form-signin w-100 m-auto p-3 text-center rounded-4" style={{ maxWidth: 380, backgroundColor: "#f5f5f5" }}>
          <form method=''>
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
      <ToastContainer />
    </section>
  )
}

export default Login