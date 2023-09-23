import React, { useState } from 'react';
import Master from './Master';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink } from 'react-router-dom';



const MenteeDashboard = () => {
  
  const mentoringSession = [
    {
      imgSrc: "https://i.guim.co.uk/img/media/6b63ab55f6a583fc70ad661c2fca52ca4badd1d7/0_188_5472_3283/master/5472.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=b76e45616b43e3e5bb0638b13b464b33",
      name: "Magnus Carlsen",
      datetime: "23 Sep 2023 (13.00 WIB)",
      field: "Data Analyst",
    },
    {
      imgSrc: "https://media.newyorker.com/photos/5acd47ed4caa416a2118289c/1:1/w_4479,h_4479,c_limit/st-felix-zuckerberg-suit.JPG",
      name: "Mark Zuckerberg",
      datetime: "25 Sep 2023 (09.00 WIB)",
      field: "Software Developer",
    },
    {
      imgSrc: "https://i.guim.co.uk/img/media/6b63ab55f6a583fc70ad661c2fca52ca4badd1d7/0_188_5472_3283/master/5472.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=b76e45616b43e3e5bb0638b13b464b33",
      name: "Magnus Carlsen",
      datetime: "30 Sep 2023 (13.00 WIB)",
      field: "Data Analyst",
    },
  ];  
  
  const mentoringRecord = [
    {
      imgSrc: "https://i.guim.co.uk/img/media/6b63ab55f6a583fc70ad661c2fca52ca4badd1d7/0_188_5472_3283/master/5472.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=b76e45616b43e3e5bb0638b13b464b33",
      name: "Magnus Carlsen",
      datetime: "16 Sep 2023 (13.00 WIB)",
      field: "Data Analyst",
    },
    {
      imgSrc: "https://media.newyorker.com/photos/5acd47ed4caa416a2118289c/1:1/w_4479,h_4479,c_limit/st-felix-zuckerberg-suit.JPG",
      name: "Mark Zuckerberg",
      datetime: "18 Sep 2023 (09.00 WIB)",
      field: "Software Developer",
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

      <br />
      <div className="container my-5 py-5">

        <p className='h2 fw-bolder text-danger'>Hai, <span className='text-dark'>Adrian</span>!</p>
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


      {/* Chat Box Trigger Button */}
      <div class="position-fixed bottom-0 end-0 m-5">
        <button type="button" class="btn btn-danger p-3 shadow-sm" data-bs-toggle="modal" data-bs-target="#exampleModal">
          <FontAwesomeIcon icon="fa-solid fa-message" />&nbsp; Chat
        </button>
      </div>

      {/* Chat Box */}
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-xl">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel"><FontAwesomeIcon icon="fa-solid fa-message" />&nbsp; Chat</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            
            <div className="row clearfix">
              <div className="col-lg-12">
                <div className="card chat-app">
                  <div id="plist" className="people-list overflow-auto">
                    <div class="input-group mb-3">
                      <span class="input-group-text" id="basic-addon1">
                        <FontAwesomeIcon icon="fa-solid fa-search" />
                      </span>
                      <input type="text" className="form-control" placeholder="Cari Chat..." />
                    </div>
                    <ul className="list-unstyled chat-list mt-2 mb-0">
                      {/* <li className="clearfix">
                        <img
                          src="https://bootdey.com/img/Content/avatar/avatar1.png"
                          alt="avatar"
                        />
                        <div className="about">
                          <div className="name">Vincent Porter</div>
                          <div className="status">
                            {" "}
                            <i className="fa fa-circle offline" /> left 7 mins ago{" "}
                          </div>
                        </div>
                      </li> */}
                      <li className="clearfix active">
                        <img
                          src="https://i.guim.co.uk/img/media/6b63ab55f6a583fc70ad661c2fca52ca4badd1d7/0_188_5472_3283/master/5472.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=b76e45616b43e3e5bb0638b13b464b33"
                          alt="avatar"
                        />
                        <div className="about">
                          <div className="name">Magnus Carlsen</div>
                          <div className="status">
                            {" "}
                            <i className="fa fa-circle online" /> online{" "}
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="chat">
                    <div className="chat-header clearfix">
                      <div className="row overflow-auto">
                        <div className="col-lg-6">
                          <img
                            src="https://i.guim.co.uk/img/media/6b63ab55f6a583fc70ad661c2fca52ca4badd1d7/0_188_5472_3283/master/5472.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=b76e45616b43e3e5bb0638b13b464b33"
                            alt="avatar"
                          />
                          <div className="chat-about">
                            <h6 className="m-b-0">Magnus Carlsen</h6>
                            <small>Online</small>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="chat-history">
                      <ul className="m-b-0">
                        <li className="clearfix">
                          <div className="message-data">
                            <span className="message-data-time">15:25</span>
                          </div>
                          <div className="message my-message">Hai, Adrian. Jangan lupa untuk mengikuti sesi mentoring besok ya!</div>
                        </li>
                        <li className="clearfix">
                          <div className="message-data text-right">
                            <span className="message-data-time">15.25</span>
                          </div>
                          <div className="message other-message float-right">
                            {" "}
                            Baik Pak, terimakasih.{" "}
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="chat-message clearfix">
                      <div className="input-group mb-0">
                        <input type="text" class="form-control" placeholder="Tulis pesan..." aria-describedby="button-addon2"/>
                        <button class="btn btn-danger" type="button" id="button-addon2"><FontAwesomeIcon icon="fa-solid fa-paper-plane" /></button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>
      
    </Master>
  );
};


export default MenteeDashboard