import React from 'react'
import Master from './Master'
import {NavLink} from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const RoleType = () => {
  return (
    <Master>
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-lg-5 py-5">
            <h1 className='fw-bolder text-dark'>Pilih <span className='text-danger'>Role Kamu</span>.</h1>
            <p>Daftar sekarang untuk mulai terhubung bersama mentor & mentee dari berbagai daerah.</p>
        </div>
        <div className="col-lg-7 row p-0">
          <div className="col-6">
            <NavLink to="/setup/mentee/1">
              <div className="card border-1 rounded-0 h-100">
                <div className="card-body">
                  <img src="/assets/img/dazzle-line-boy-watching-education-video-on-the-laptop.png" alt="Hello" className='w-100'/>
                  <h5 className="fw-bolder text-center">Mentee</h5>
                  <hr />
                  <p className="opacity-75 m-0"><small><FontAwesomeIcon icon="fa-solid fa-check" />&nbsp;&nbsp; Jadwalkan mentoring</small></p>
                  <p className="opacity-75 m-0"><small><FontAwesomeIcon icon="fa-solid fa-check" />&nbsp;&nbsp; Belajar bersama mentor</small></p>
                  <p className="opacity-75 m-0"><small><FontAwesomeIcon icon="fa-solid fa-check" />&nbsp;&nbsp; Tingkatkan kemampuanmu</small></p>
                </div>
              </div>
            </NavLink>
          </div>
          <div className="col-6">
            <NavLink to="/setup/mentor/1">
              <div className="card border-1 rounded-0">
                <div className="card-body">
                  <img src="/assets/img/bendy-inclusive-education-and-diversity-in-the-classroom.png" alt="Hello" className='w-100'/>
                  <h5 className="fw-bolder text-center">Mentor</h5>
                  <hr />
                  <p className="opacity-75 m-0"><small><FontAwesomeIcon icon="fa-solid fa-check" />&nbsp;&nbsp; Jadwalkan mentoring</small></p>
                  <p className="opacity-75 m-0"><small><FontAwesomeIcon icon="fa-solid fa-check" />&nbsp;&nbsp; Belajar bersama mentor</small></p>
                  <p className="opacity-75 m-0"><small><FontAwesomeIcon icon="fa-solid fa-check" />&nbsp;&nbsp; Tingkatkan kemampuanmu</small></p>
                </div>
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
    </Master>
  )
}

export default RoleType;