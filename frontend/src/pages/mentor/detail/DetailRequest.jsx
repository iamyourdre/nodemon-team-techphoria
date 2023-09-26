import React, { useState, Component } from 'react';
import Master from '../Master';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const MentorRequestDetail = () => {
  return (
    <Master>

      <br />
      <div className="container my-5 py-5">
        <p className='h2 fw-bolder pb-3'>Permintaan <span className='text-danger'>Mentoring</span></p>
        <div className='d-flex align-items-center'>
          <img src="https://i.pinimg.com/1200x/36/aa/f4/36aaf493b9b534111a1d03df2ca4a271.jpg" className='rounded-circle img-thumbnail' style={{ width: '200px', height: '200px' }} alt="" />
          <div className='mt-3 mx-5'>
            <h4><strong>Naya</strong></h4>
            <p>Mahasiswa Teknik Informatika</p>
            <h6><span className="badge bg-danger"><FontAwesomeIcon icon="fa-solid fa-user-tie" />&nbsp; Android Development</span></h6>
            <h6><span className="badge bg-dark"><FontAwesomeIcon icon="fa-solid fa-clock" />&nbsp; 25 Sep 2023 (19.00 WIB)</span></h6>
          </div>
        </div>
        <div className='my-4'>
          <h6 className='strong'><strong>Materi atau pertanyaan <span className='text-danger'> yang ingin dibahas:</span></strong></h6>
          <p>Dear, Mr. Mentor. I currently need a mentor in the field of Android development. I really appreciate it if you are willing to be my mentor. Thank you for your ongoing support and mentorship.</p>
        </div>
        <hr/>
        <div class="btn-group">
          <btn class="btn btn-dark p-3 px-5"><FontAwesomeIcon icon="fa-solid fa-xmark" />&nbsp; Tolak</btn>
          <btn class="btn btn-danger p-3 px-5"><FontAwesomeIcon icon="fa-solid fa-check" />&nbsp; Terima</btn>
        </div>
      </div>

    </Master>
  );
}

export default MentorRequestDetail