import React from 'react';
import HomePage from './HomePage/HomePage'
import Packages from './Packages/Packages'
import Show from './Show/Show'
import Services from './Services/Services'
import Review from './Review/Review'
import Contact from './Contact/Contact'
import Footer from './Footer/Footer'

const Page = () => {
  return (
    <>
      <HomePage/>
      <Packages/>
      <Show/>
      <Services/>
      <Review/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default Page