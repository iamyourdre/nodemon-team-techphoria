import React, { useState } from 'react';
import Master from './Master';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink } from 'react-router-dom';



const MentorDashboard = () => {
  
  const mentoringRequest = [
    {
      imgSrc: "https://i.pinimg.com/1200x/36/aa/f4/36aaf493b9b534111a1d03df2ca4a271.jpg",
      name: "Naya",
      datetime: "25 Sep 2023 (19.00 WIB)",
      field: "Android Development",
    }
  ];  

  const mentoringSession = [
    {
      imgSrc: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80",
      name: "Nico",
      datetime: "24 Sep 2023 (15.00 WIB)",
      field: "Software Developer",
    },
    {
      imgSrc: "https://images.unsplash.com/photo-1576092727582-b2508a9867e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1475&q=80",
      name: "Adelia",
      datetime: "26 Sep 2023 (11.00 WIB)",
      field: "Android Development",
    },
    {
      imgSrc: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80",
      name: "Alexander",
      datetime: "26 Sep 2023 (11.00 WIB)",
      field: "Software Developer",
    },
  ];

  const mentoringRecord = [
    {
      imgSrc: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80",
      name: "Nico",
      datetime: "17 Sep 2023 (15.00 WIB)",
      field: "Software Developer",
    },
    {
      imgSrc: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80",
      name: "Alexander",
      datetime: "19 Sep 2023 (11.00 WIB)",
      field: "Software Developer",
    },
  ];

  return (
    <Master>

      <br />
      <div className="container my-5 py-5">

        <p className='h2 fw-bolder text-danger'>Hai, <span className='text-dark'>Mentor</span>!</p>
        <p className='h5'><strong>Selamat datang kembali.</strong></p>
        <p className='mb-5 small'>Ada permintaan mentoring yang menunggu konfirmasi anda.</p>
        <div className="row">
          {mentoringRequest.map((mentee, index) => (
            <div className="col-md-4 pb-3" key={index}>
              <div className="card border-1">
                <div className="card-body">
                  <div className="row">
                    <div className="col-3 ">
                      <img src={mentee.imgSrc} alt={mentee.name} className='w-100 rounded-2 mb-3'/>
                    </div>
                    <div className="col-9">
                      <p className="h6 fw-bolder m-0 p-0">{mentee.name}</p>
                      <hr className='my-2'/>
                      <h6><span class="badge bg-danger"><FontAwesomeIcon icon="fa-solid fa-user-tie" />&nbsp; {mentee.field}</span></h6>
                    </div>
                    <div className="">
                      <NavLink to={'/mentor/detail'}><button className='btn btn-danger w-100'>Lihat Detail</button></NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <hr className='my-4'/>
        
        <p className='small'>Ada sesi yang akan datang. Jangan lupa menghadirinya!</p>
        
        <div className="row">
          {mentoringSession.map((mentor, index) => (
            <div className="col-md-4 pb-3" key={index}>
              <div className="card border-1">
                <div className="card-body">
                  <div className="row">
                    <div className="col-3 ">
                      <img src={mentor.imgSrc} alt={mentor.name} className='w-100 rounded-2 mb-3'/>
                    </div>
                    <div className="col-9">
                      <p className="h6 fw-bolder m-0 p-0">{mentor.name}</p>
                      <hr className='my-2'/>
                      <h6><span class="badge bg-danger"><FontAwesomeIcon icon="fa-solid fa-user-tie" />&nbsp; {mentor.field}</span></h6>
                    </div>
                    <div className="col-12 pt-2">
                        <button className="btn btn-dark w-100"><FontAwesomeIcon icon="fa-solid fa-chalkboard-user" />&nbsp; {mentor.datetime}</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="col-12 pb-3">
            <button className="btn btn-light h-100 float-end"><FontAwesomeIcon icon="fa-solid fa-circle-chevron-down" />&nbsp; Tampilkan Lainnya</button>
          </div>
        </div>
        
        <hr className='my-4'/>
        
        <p className='h5 fw-bolder py-3'>Tonton ulang sesi sebelumnya</p>
        
        <div className="row">
          <div className="col-6 col-md-4 col-lg-3 pb-3">
            <NavLink>
              <div className="card rounded-3 bg-dark h-100">
                <div className="card-body">
                  <div className="d-flex flex-column h-100 justify-content-center text-light text-center">
                    <p><FontAwesomeIcon icon="fa-solid fa-circle-chevron-down" />&nbsp; Lihat Semua</p>
                  </div>
                </div>
              </div>
            </NavLink>
          </div>
          {mentoringRecord.slice().reverse().map((mentor, index) => (
            <div className="col-6 col-md-4 col-lg-3 pb-3" key={index}>
              <div className="card rounded-3">
                <div className="card-body p-0">
                  <div className="row">
                    <div className="col-12">
                      <div className="position relative">
                        <img src={mentor.imgSrc} alt="Hello" className="w-100 rounded-top-3 opacity-75"/>
                        <FontAwesomeIcon icon="fas fa-play-circle" className='position-absolute bottom-50 start-50 translate-middle h1 text-light'/>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="p-3">             
                        <p className="h6 fw-bolder m-0 p-0">{mentor.name}</p>
                        <hr className='my-2'/>
                        <h6><span class="badge bg-secondary">{mentor.datetime}</span></h6>
                        <h6><span class="badge bg-danger">{mentor.field}</span></h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div> 
         
       
        
        
  
    </Master>
  );
};


export default MentorDashboard