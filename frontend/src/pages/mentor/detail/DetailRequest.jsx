import React, { useState, Component } from 'react';
import Master from '../Master';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const MentorRequestDetail = () => {





  return (
    <Master>

      <h2 className='my-5'><strong> Meet your <span className='text-danger'>mentee</span>!</strong></h2>
      <div className='d-flex align-items-center'>
  <div>
    <img src="https://i.pinimg.com/1200x/36/aa/f4/36aaf493b9b534111a1d03df2ca4a271.jpg" className='rounded-circle img-thumbnail' style={{ width: '200px', height: '200px' }} alt="" />
  </div>
  <div className='mt-3 mx-5'>
    <h4><strong>Naya</strong></h4>
    <p>Mahasiswa Teknik Informatika</p>
    <h6><span className="badge bg-danger"><FontAwesomeIcon icon="fa-solid fa-user-tie" />&nbsp; Android Development</span></h6>
    <button className="btn btn-dark w-30"><FontAwesomeIcon icon="fa-solid fa-chalkboard-user" />&nbsp; 19.00, 25 Sept 2023</button>
  </div>
</div>

      <div className='py-5'>
        <h6 className='strong'><strong>Materi atau pertanyaan <span className='text-danger'> yang ingin dibahas</span></strong></h6>
        <hr className='mb-2' />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi dicta impedit quas neque repellendus, nostrum iure tempora possimus cum officiis doloribus totam ratione. Deleniti eveniet minus molestiae accusantium adipisci culpa?</p>
      </div>

      <div className='mb-5'>
        <h5 className=''> <strong>Do you want to <span className='text-danger'>attend</span>?</strong></h5>

        <div className='mt-3'>
          <button className='btn btn-danger' style={{ width: "100px", height: '35px'}}> Yes </button>
          <button className='btn btn-dark  mx-5' style={{ width: "100px", height: '35px'}}> No </button>
        </div>

      </div>


    </Master>
  );
}

export default MentorRequestDetail