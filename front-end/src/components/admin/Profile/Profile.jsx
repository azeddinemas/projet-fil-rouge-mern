import React from 'react'
import RightTop from './RightTop'
import Left from './Left'
import RightButtom from './RightButtom'

const Profile = () => {
  return (
    <div className="container mt-4">
      <div className="row">
        <Left />
        <div className='col-lg-8'>
          <RightTop />
          <div className='row'>
            <RightButtom />
            <RightButtom />
          </div>
        </div>
      </div>
    </div>

  )
}

export default Profile