import React, { useState, Component } from 'react';
import Master from '../Master';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const MentorRequestDetail = () => {





  return (
    <Master>

      <h2 className='my-5'><strong> Meet your <span className='text-danger'>mentee</span>!</strong></h2>
      <div className='text-center'>
        <div>
        <img src="https://i.pinimg.com/1200x/36/aa/f4/36aaf493b9b534111a1d03df2ca4a271.jpg" className='rounded-circle img-thumbnail' style={{ width: '200px', height: '200px' }} alt="" />

        </div>
        <div className='mt-3'>
        <h4 > <strong>Naya</strong></h4>
        <p>Mahasiswa Teknik Informatika </p>

        <h6><span class="badge bg-danger"><FontAwesomeIcon icon="fa-solid fa-user-tie" />&nbsp; Android Development</span></h6>
        <button className="btn btn-dark w-50"><FontAwesomeIcon icon="fa-solid fa-chalkboard-user" />&nbsp; 19.00, 25 Sept 2023</button>
        

        </div>
        {/* <ul>
            {data.map((item) => (
              <li key={item.id}>
                <img src={item.image_url} alt={item.name} />
                <h2>{item.name}</h2>
                <p>{item.janji_temu}</p>
                <p>{item.deskripsi}</p>
              </li>
            ))}
          </ul> */}


      </div>

      <div className='py-5'>
        <h6 className='strong'><strong>Materi atau pertanyaan <span className='text-danger'> yang ingin dibahas</span></strong></h6>
        <hr className='mb-2' />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi dicta impedit quas neque repellendus, nostrum iure tempora possimus cum officiis doloribus totam ratione. Deleniti eveniet minus molestiae accusantium adipisci culpa?</p>
      </div>

      <div className='text-center'>
        <h5 className='mb-3'> <strong>Do you want to attend?</strong></h5> <br />

<div className='d-flex justify-content-center align-items-center'>
        <button className='btn btn-primary py-2 px-4 '> Yes </button>
        <button className='btn btn-danger py-2 px-4 mx-4'> No </button>

</div>

      </div>


    </Master>
  );
}

export default MentorRequestDetail