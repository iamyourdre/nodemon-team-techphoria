import React from 'react'
import {NavLink} from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const LandingNavbar = () => {

  const navItems = [
    { text: 'Cari Mentor', link: '#' },
    { text: 'Menjadi Mentor', link: '#' },
  ];

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light border py-3">
      <div className="container">
        <NavLink className="navbar-brand fw-bolder h1" to="/">
        MyMento<span className="text-danger">.</span>
        </NavLink>

        {/* Navbar Toggle Button */}
        <button
          className="btn btn-light border-0 navbar-toggler px-2"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasExample"
          aria-controls="offcanvasExample"
        >
          <FontAwesomeIcon icon="fa-solid fa-bars" />
        </button>

        <div
          className="offcanvas offcanvas-start-lg bg-light"
          tabIndex={-1}
          id="offcanvasExample"
          aria-labelledby="offcanvasExampleLabel"
        >
          <div className="offcanvas-header d-flex d-lg-none">
            <h5 className="offcanvas-title text-dark" id="offcanvasExampleLabel">
              Navbar
            </h5>
            <NavLink
              // href="javascript:void(0)"
              className="text-reset p-0"
              data-bs-dismiss="offcanvas"
              aria-label="close"
            >
              <FontAwesomeIcon icon="fa-solid fa-xmark" />
            </NavLink>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav me-auto">
              {navItems.map((item, index) => (
                <li className="nav-item" key={index}>
                  <a className="nav-link active" aria-current="page" href={item.link}>
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
            {/* <div className="d-flex">
              <button class="btn btn-outline-dark px-4">Login</button>
              <button class="btn btn-dark px-4">Register</button>
            </div> */}
              <div class="row m-0">
                <div class="col-12 col-lg-6 p-0 pt-2 pt-lg-0 px-lg-1">
                  <NavLink to="/login">
                    <button class="btn btn-outline-dark px-5 py-2 w-100">Masuk</button>
                  </NavLink>
                </div>
                <div class="col-12 col-lg-6 p-0 pt-2 pt-lg-0 px-lg-1">
                  <NavLink to="/signup">
                    <button className="btn btn-dark px-5 py-2 w-100">Daftar</button>
                  </NavLink>
                </div>
              </div>
            <div className="justify-content-end">
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

const SetupNavbar = () => {

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light border py-3">
      <div className="container">
        <NavLink className="navbar-brand fw-bolder h1" to="/">
        MyMento<span className="text-danger">.</span>
        </NavLink>

        {/* Navbar Toggle Button */}
        <button
          className="btn btn-light border-0 navbar-toggler px-2"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasExample"
          aria-controls="offcanvasExample"
        >
          <FontAwesomeIcon icon="fa-solid fa-bars" />
        </button>

        <div
          className="offcanvas offcanvas-start-lg bg-light"
          tabIndex={-1}
          id="offcanvasExample"
          aria-labelledby="offcanvasExampleLabel"
        >
          <div className="offcanvas-header d-flex d-lg-none">
            <h5 className="offcanvas-title text-dark" id="offcanvasExampleLabel">
              Navbar
            </h5>
            <NavLink
              // href="javascript:void(0)"
              className="text-reset p-0"
              data-bs-dismiss="offcanvas"
              aria-label="close"
            >
              <FontAwesomeIcon icon="fa-solid fa-xmark" />
            </NavLink>
          </div>
          <div className="offcanvas-body">
          </div>
        </div>
      </div>
    </nav>
  )
}

const MenteeNavbar = () => {

  const navItems = [
    { text: 'Dasbor', link: '/mentee' },
    { text: 'Mentor Saya', link: '/mentee/my_mentor' },
  ];

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light border py-3 fixed-top">
      <div className="container">
        <NavLink className="navbar-brand fw-bolder h1" to="/">
        MyMento<span className="text-danger">.</span>
        </NavLink>

        {/* Navbar Toggle Button */}
        <button
          className="btn btn-light border-0 navbar-toggler px-2"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasExample"
          aria-controls="offcanvasExample"
        >
          <FontAwesomeIcon icon="fa-solid fa-bars" />
        </button>

        <div
          className="offcanvas offcanvas-start-lg bg-light"
          tabIndex={-1}
          id="offcanvasExample"
          aria-labelledby="offcanvasExampleLabel"
        >
          <div className="offcanvas-header d-flex d-lg-none">
            <h5 className="offcanvas-title text-dark" id="offcanvasExampleLabel">
              Navbar
            </h5>
            <NavLink
              // href="javascript:void(0)"
              className="text-reset p-0"
              data-bs-dismiss="offcanvas"
              aria-label="close"
            >
              <FontAwesomeIcon icon="fa-solid fa-xmark" />
            </NavLink>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav me-auto">
              {navItems.map((item, index) => (
                <li className="nav-item" key={index}>
                  <a className="nav-link active" aria-current="page" href={item.link}>
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export { LandingNavbar, SetupNavbar, MenteeNavbar };