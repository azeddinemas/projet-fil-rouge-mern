import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header/Header'

const Leandinpage = () => {
  return (
    <>
      <Header/>
      <main style={{backgroundColor: '#eee'}} className='vh-100'>
        <Outlet/>
      </main>
    </>
    
  )
}

export default Leandinpage