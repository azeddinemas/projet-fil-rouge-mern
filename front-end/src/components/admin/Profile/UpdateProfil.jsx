import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { API_URL } from '../../config'
import { ToastContainer, toast } from 'react-toastify'

const UpdateProfil = () => {
  const [pr, setPr] = useState({})

  const getAdmin = () => {
    axios.get(`${API_URL}/admin/getAdmin`).then((data) => {
      setPr(data.data)
    })
  }

  useEffect(() => {
    getAdmin()
  }, [])
  const handleChange = (e) => {
    setPr({ ...pr, [e.target.name]: e.target.value })
  }
  const handelSubmit = (e) => {
    e.preventDefault()
    if (pr.cpassword === pr.newPassword) {
      axios.post(`${API_URL}/admin/updateprofile`).then((d) => {
        // toast.success(e.data)
        console.log(d)
      }).catch(err => { console.log(err) })
    } else toast.warning('confirmation incorrect')

  }
  return (
    <div className="container">
      <div className="row my-4">
        <div className="col-md-8 mx-auto">
          <div className="card">
            <div className="card-header">Modifier votre profile</div>
            <div className="card-body bg-light">
              <Link to="/profile" className="btn btn-sm btn-info m-2"><i className="bi bi-house text-white"></i></Link>
              <form>
                <div className="form-group" key={pr._id}>
                  <label htmlFor="">name</label>
                  <input type="text" name="name" placeholder="name" onChange={handleChange} value={pr.name} className="form-control" />
                </div>
                <div className="form-group">
                  <label htmlFor="">email</label>
                  <input type="text" name="email" placeholder="email" onChange={handleChange} value={pr.email} className="form-control" />
                </div>
                <div className="form-group">
                  <label htmlFor="">Phone</label>
                  <input type="tel" name="phone" placeholder="phone" onChange={handleChange} value={pr.phone} className="form-control" />
                </div>
                <div className="form-group">
                  <label htmlFor="">current password</label>
                  <input type="password" name="password" placeholder="password" onChange={handleChange} className="form-control" />
                </div>
                <div className="form-group">
                  <label htmlFor="">new password</label>
                  <input type="password" name="newPassword" placeholder="password" onChange={handleChange} className="form-control" />
                </div>
                <div className="form-group">
                  <label htmlFor="">confirmation</label>
                  <input type="password" name="cpassword" placeholder="password" onChange={handleChange} className="form-control" />
                </div>

                <div className="form-group mt-2">
                  <button type="submit" name="submit" onClick={handelSubmit} className="btn btn-outline-info">Réservé</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  )
}

export default UpdateProfil