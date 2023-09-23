import React, { useState } from 'react';
import Master from './Master';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink } from 'react-router-dom';



const MenteeDashboard = () => {
  
  const mentoringSession = [
    {
      imgSrc: "https://i.guim.co.uk/img/media/6b63ab55f6a583fc70ad661c2fca52ca4badd1d7/0_188_5472_3283/master/5472.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=b76e45616b43e3e5bb0638b13b464b33",
      name: "Magnus Carlsen",
      datetime: "23 Sept 2023 (13.00 WIB)",
      field: "Data Analyst",
    }
  ];  
  
  return (
    <Master>
      {/* <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-md-6 py-5">
            <p className='h2 fw-bolder text-danger'>In <span className='text-dark'>Progress</span>.</p>
            <p>Be right back..</p>
          </div>
        </div>
      </div> */}

      <br />
      <div className="container my-5 vh-100 pt-5">
        <p className='h2 fw-bolder text-danger'>Hai, <span className='text-dark'>Adrian</span>!</p>
        <p className='small'>Ada sesi yang akan datang. Jangan lupa menghadirinya!</p>
        
        <div className="row mb-5">
          {mentoringSession.map((mentor, index) => (
            <div className="col-md-4 pb-3" key={index}>
              <NavLink to="/mentor/profile">
                <div className="card border-1">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-4 ">
                        <img src={mentor.imgSrc} alt="Hello" className='w-100 rounded-2 mb-3'/>
                      </div>
                      <div className="col-8">
                        <p className="h6 fw-bolder m-0 p-0">{mentor.name}</p>
                        <hr className='my-2'/>
                        <h6><span class="badge bg-danger">{mentor.datetime}</span> <span class="badge bg-secondary">{mentor.mentoringCount}</span></h6>
                        <p className="opacity-75 m-0"><small><FontAwesomeIcon icon="fa-solid fa-briefcase" />&nbsp;&nbsp; {mentor.field}</small></p>
                      </div>
                        <div className="col-12 pt-2">
                          <div className="btn-group w-100">
                            <button className="btn btn-danger w-25"><FontAwesomeIcon icon="fa-solid fa-message" /></button>
                            <button className="btn btn-dark w-75"><FontAwesomeIcon icon="fa-solid fa-chalkboard-user" />&nbsp; Segera</button>
                          </div>
                        </div>
                    </div>
                  </div>
                </div>
              </NavLink>
            </div>
          ))}
        </div>
      
      </div>
      
    </Master>
  );
};


export default MenteeDashboard