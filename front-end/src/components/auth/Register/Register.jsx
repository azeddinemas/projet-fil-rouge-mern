import React, { useState } from 'react'
import img from '../../images/bg.jpg';
import { ToastContainer } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../../../Action/auth';

const Register = () => {
  const [user, setUser] = useState({})
  const handlchanger = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const reg = useSelector(state => state.auth.register)
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(register(user))
  }

  setTimeout(() => {
    if (reg) {
      navigate('/')
    }
  }, 2500);

  return (
    <main className="w-100 vh-100" style={{ backgroundImage: `url(${img})`, backgroundSize: 'cover' }}>
      <div className='w-100 h-100 d-flex justify-content-center align-items-center' style={{ backgroundColor: "#1E1F2459" }}>
        <section style={{ maxWidth: 500 }} className="p-4 shadow rounded-5 bg-white">
          <form className='text-center'>
            <img src={require('../../images/4206917.png')} className='w-50' alt='...' />
            <h2 className="text-center my-4" style={{ color: "#ff9847" }}>Sign <span style={{ color: "#ad59e8" }}>Up</span></h2>
            <div className="text-start d-sm-flex column-gap-3">
              <div className='col mb-3'>
                <label className="form-label">name</label>
                <input type="text" className="form-control" onChange={handlchanger} placeholder="Enter your first name" name='name' />
              </div>
              <div className='col mb-3'>
                <label className="form-label">last name</label>
                <input type="text" className="form-control" placeholder="Enter your last name" />
              </div>
            </div>
            <div className="mb-2 text-start">
              <label className="form-label">Email</label>
              <input type="email" className="form-control" onChange={handlchanger} placeholder="Enter your E-mail" name='email' />
            </div>
            <div className="mb-2 text-start">
              <label className="form-label">Phone</label>
              <input type="text" className="form-control" onChange={handlchanger} placeholder="phone" name='phone' />
            </div>
            <div className="mb-2 text-start">
              <label className="form-label">Password</label>
              <input type="password" className="form-control" onChange={handlchanger} placeholder="Enter your password" name='password' />
            </div>
            <div className="mb-2 text-start">
              <label className="form-label">Confirm Password</label>
              <input type="password" className="form-control" onChange={handlchanger} placeholder="confirme your password" name='confirmation' />
            </div>
            <div className="text-center d-grid mt-4">
              <button type="submit" name="submit" onClick={handleSubmit} className="btn bg-primary-subtle">Connexion</button>
            </div>
          </form>
          <p className="my-3 text-muted">Need an account? <Link to='/'>login</Link></p>
        </section>
      </div>
      <ToastContainer />
    </main>
  )
}

export default Register