import React, { useState } from 'react';
import Master from './Master';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink } from 'react-router-dom';

const MentorRecommendation = () => {

  const mentors = [
    {
      imgSrc: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80",
      name: "César Rincón",
      price: "Rp50k",
      mentoringCount: "4x Mentoring",
      field: "Content Writing",
      startYear: "2019",
    },
    {
      imgSrc: "https://i.guim.co.uk/img/media/6b63ab55f6a583fc70ad661c2fca52ca4badd1d7/0_188_5472_3283/master/5472.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=b76e45616b43e3e5bb0638b13b464b33",
      name: "Magnus Carlsen",
      price: "Rp50k",
      mentoringCount: "4x Mentoring",
      field: "Data Analyst",
      startYear: "2019",
    },
    {
      imgSrc: "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80",
      name: "Julianne",
      price: "Rp50k",
      mentoringCount: "4x Mentoring",
      field: "Product Design",
      startYear: "2018",
    },
    {
      imgSrc: "https://media.gq.com/photos/5bb62b303b0da85f5d81be03/1:1/w_987,h_987,c_limit/Thom-Brown-FC-Barcelona-GQ-10042018_3x2.jpg",
      name: "Lionel Messi",
      price: "Rp50k",
      mentoringCount: "4x Mentoring",
      field: "Data Analyst",
      startYear: "2020",
    },
    {
      imgSrc: "https://media.newyorker.com/photos/5acd47ed4caa416a2118289c/1:1/w_4479,h_4479,c_limit/st-felix-zuckerberg-suit.JPG",
      name: "Mark Zuckerberg",
      price: "Rp50k",
      mentoringCount: "4x Mentoring",
      field: "Software Developer",
      startYear: "2004",
    },
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

      <div className="container my-5">
        <div className="row">
          <div className="col-md-6 pb-3">
            <div className="card border-1 h-100">
              <div className="card-body p-4">
                <div className="d-flex flex-column h-100 justify-content-center">
                  <p className='h2 fw-bolder text-danger'>Hai <span className='text-dark'>@username</span>!</p>
                  <p cl>Berdasarkan pilihan minat & bakat kamu, <b>MyMento</b> merekomendasikan beberapa mentor yang bisa kamu pilih.</p>
                </div>
              </div>
            </div>
          </div>
          {mentors.map((mentor, index) => (
            <div className="col-md-3 pb-3" key={index}>
              <NavLink to="/mentor/profile">
                <div className="card border-1">
                  <div className="card-body">
                    <img src={mentor.imgSrc} alt="Hello" className='w-100 rounded-2 mb-3'/>
                    <h5 className="fw-bolder text-center">{mentor.name}&nbsp;<FontAwesomeIcon icon="fa-solid fa-circle-info" className='text-danger'/></h5>
                    <hr />
                    <h6><span class="badge bg-danger">{mentor.price}</span> <span class="badge bg-secondary">{mentor.mentoringCount}</span></h6>
                    <p className="opacity-75 m-0"><small><FontAwesomeIcon icon="fa-solid fa-briefcase" />&nbsp;&nbsp; {mentor.field}</small></p>
                    <p className="opacity-75 m-0"><small><FontAwesomeIcon icon="fa-solid fa-clock" />&nbsp;&nbsp; Sejak {mentor.startYear}</small></p>
                    <div className="pt-2">
                      <button className="btn btn-dark w-100">Pilih Mentor</button>
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


export {MentorRecommendation}