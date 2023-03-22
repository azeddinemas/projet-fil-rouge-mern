import React from 'react'
import { Link } from 'react-router-dom'

const Hpackage = () => {
  return (
    <section className="py-5 text-center container">
        <div className="row py-lg-5">
            <div className="col-lg-6 col-md-8 mx-auto">
                <h1 className="fw-light">Album example</h1>
                <p className="lead text-muted">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don’t simply skip over it entirely.</p>
                <Link to="#" className="btn btn-primary my-2">Main call to action</Link>
                <Link to="#" className="btn btn-secondary my-2">Secondary action</Link>
            </div>
        </div>
    </section>
  )
}

export default Hpackage