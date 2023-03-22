import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-dark text-center text-white">
        <div className="container p-4 pb-0">
            <section className="mb-4">
                <Link className="btn btn-outline-light btn-floating m-1" to={'#'} role="button"><i className="bi bi-facebook"></i></Link>
                <Link className="btn btn-outline-light btn-floating m-1" to={'#'} role="button"><i className="bi bi-twitter"></i></Link>
                <Link className="btn btn-outline-light btn-floating m-1" to={'#'} role="button"><i className="bi bi-google"></i></Link>
                <Link className="btn btn-outline-light btn-floating m-1" to={'#'} role="button"><i className="bi bi-instagram"></i></Link>
                <Link className="btn btn-outline-light btn-floating m-1" to={'#'} role="button"><i className="bi bi-linkedin"></i></Link>
                <Link className="btn btn-outline-light btn-floating m-1" to={'#'} role="button"><i className="bi bi-github"></i></Link>
            </section>
        </div>
        <div className="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
          &copy;  2023 Copyright : AZEDDINE MASLOUH
        </div>
    </footer>
  )
}

export default Footer