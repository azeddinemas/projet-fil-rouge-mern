import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { API_URL } from '../../config'
import { ToastContainer, toast } from 'react-toastify'
import Tippy from '@tippyjs/react';

const UpdateProfil = () => {
  const navigate = useNavigate();
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
      axios.post(`${API_URL}/admin/updateprofile`, pr).then((d) => {

        toast.success(d.data)
      }).catch(err => { toast.warning(err.response.data.message) })
    } else toast.warning('confirmation incorrect')

  }
  return (
    <div className="container">
      <div className="row my-4">
        <div className="col-md-8 mx-auto">
          <div className="card">
            <div className="card-header">Modifier votre profile</div>
            <div className="card-body bg-light">
              <Tippy arrow={false} animation='scale' placement='right' content="go back">
                <button onClick={() => navigate(-1)} className="btn btn-sm btn-info m-2"><i className="bi bi-arrow-left fs-5 text-white"></i></button>
              </Tippy>
              <form>
                <div className="form-group">
                  <label htmlFor="">name</label>
                  <input type="text" name="name" placeholder="name" onChange={handleChange} value={pr.name || ''} className="form-control" />
                </div>
                <div className="form-group">
                  <label htmlFor="">email</label>
                  <input type="text" name="email" placeholder="email" onChange={handleChange} value={pr.email || ''} className="form-control" />
                </div>
                <div className="form-group">
                  <label htmlFor="">Phone</label>
                  <input type="tel" name="phone" placeholder="phone" onChange={handleChange} value={pr.phone || ''} className="form-control" />
                </div>
                <div className="form-group">
                  <label htmlFor="">current password</label>
                  <input type="password" name="currentPassword" placeholder="current password" onChange={handleChange} className="form-control" />
                </div>
                <div className="form-group">
                  <label htmlFor="">new password</label>
                  <input type="password" name="newPassword" placeholder="new password" onChange={handleChange} className="form-control" />
                </div>
                <div className="form-group">
                  <label htmlFor="">confirmation</label>
                  <input type="password" name="cpassword" placeholder="confirmation password" onChange={handleChange} className="form-control" />
                </div>

                <div className="form-group mt-2">
                  <button type="submit" name="submit" onClick={handelSubmit} className="btn btn-outline-info">Modifié</button>
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