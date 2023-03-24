import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header/Header'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

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
          <label className={darkMode ? 'text-white form-check-label' : 'form-check-label'} htmlFor="kDefault"><i class="bi bi-moon-stars"></i></label>
          <input className="form-check-input" onClick={() => setdarkMode(!darkMode)} type="checkbox" role="switch" id="kDefault" />
          <label className={darkMode ? 'text-white form-check-label' : 'form-check-label'} htmlFor="kDefault"><i class="bi bi-brightness-high"></i></label>
        </h5>
        <Outlet />
      </main>
    </>

  )
}

export default Leandinpage