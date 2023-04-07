import React from 'react'
import { Link } from 'react-router-dom'

const Hpackage = () => {
  return (
    <section className="py-2 text-center container">
      <div className="row py-lg-5">
        <div className="col-lg-6 col-md-8 mx-auto">
          <h1 className="fw-light">Album des Voyages</h1>
          <p className="lead text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos non provident sunt odit ad? omnis minima saepe enim voluptatem, doloremque perferendis! Mollitia quibusdam.</p>
          <Link to="/clientpage" className="btn btn-warning my-2">Main call to action</Link>
        </div>
      </div>
    </section>
  )
}

export default Hpackage