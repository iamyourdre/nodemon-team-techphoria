import React, { useState } from 'react';
import Master from './Master';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'




const MentorDashboard = () => {
  const mentoringSession = [
    {
      imgSrc: "https://media.newyorker.com/photos/5acd47ed4caa416a2118289c/1:1/w_4479,h_4479,c_limit/st-felix-zuckerberg-suit.JPG",
      name: "Naya",
      datetime: "23 Sep 2023 (13.00 WIB)",
      field: "Data Analyst",
    },
    {
      imgSrc: "https://media.newyorker.com/photos/5acd47ed4caa416a2118289c/1:1/w_4479,h_4479,c_limit/st-felix-zuckerberg-suit.JPG",
      name: "Monica",
      datetime: "25 Sep 2023 (09.00 WIB)",
      field: "Software Developer",
    },
    {
      imgSrc: "https://i.guim.co.uk/img/media/6b63ab55f6a583fc70ad661c2fca52ca4badd1d7/0_188_5472_3283/master/5472.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=b76e45616b43e3e5bb0638b13b464b33",
      name: "Panjul",
      datetime: "30 Sep 2023 (13.00 WIB)",
      field: "Data Analyst",
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
        <div className="row ">
          <div className="col-md-6 ">
            <p className='h2 fw-bolder text-danger'>Welcome <span className='text-dark'>Mentor</span>.</p>

          </div>
        </div>

        <div className='h5 mx-10 mt-5'><p><strong>Permintaan untuk Anda</strong></p></div>
        <p className='mb-5 small'>Para mentee ingin bertemu denganmu!</p>
        <div className="row">
          {mentoringSession.map((mentee, index) => (
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
                    <div className="col-12 pt-2">
                        <button className="btn btn-dark w-100"><FontAwesomeIcon icon="fa-solid fa-chalkboard-user" />&nbsp; {mentee.datetime}</button>
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

         
        </div>
        <hr className='my-4'/>
      
      <div className='h5 mx-10'><p><strong>Sesi yang akan datang</strong></p></div>
      <p className='mb-5 small'>Jangan lupa menghadiri sesi ini!</p>
      <div className="row">
          {mentoringSession.map((mentee, index) => (
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
                    <div className="col-12 pt-2">
                        <button className="btn btn-dark w-100"><FontAwesomeIcon icon="fa-solid fa-chalkboard-user" />&nbsp; {mentee.datetime}</button>
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

        <div className='h5 mx-10'><p><strong>Riwayat</strong></p></div>
        <p classNameName='mb-5 small'>Lihat lagi sesi yang telah Anda lakukan sebelumnya</p>
        <div className="row">
          {mentoringSession.map((mentee, index) => (
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
                    <div className="col-12 pt-2">
                        <button className="btn btn-dark w-100"><FontAwesomeIcon icon="fa-solid fa-chalkboard-user" />&nbsp; {mentee.datetime}</button>
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
        
         
       
        
        
  
    </Master>
  );
};


export default MentorDashboard