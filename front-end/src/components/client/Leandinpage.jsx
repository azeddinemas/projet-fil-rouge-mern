import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header/Header'

const style = {
  color: "#000",
  backgroundColor: "RGBA(33,37,41,var(--bs-bg-opacity,1))",
}
const style2 = {
  backgroundColor: '#eee'
}

const Leandinpage = () => {

  const [darkMode, setdarkMode] = useState(false)
  return (
    <>
      <Header />
      <main style={darkMode ? style : style2}>
        <h5 className="form-check form-switch float-end mt-2 pe-3">
          <input className="form-check-input" onClick={() => setdarkMode(!darkMode)} type="checkbox" role="switch" id="kDefault" />
          <label className={darkMode ? 'text-white form-check-label' : 'form-check-label'} htmlFor="kDefault">{darkMode ? 'Light' : 'Dark'}</label>
        </h5>
        <Outlet />
      </main>
    </>

  )
}

export default Leandinpage