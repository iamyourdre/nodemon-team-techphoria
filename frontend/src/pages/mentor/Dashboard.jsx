import React, { useState } from 'react';
import Master from './Master';


const MentorDashboard = () => {

  return (
    <Master>
      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-md-6 py-5">
            <p className='h2 fw-bolder text-danger'>In <span className='text-dark'>Progress</span>.</p>
            <p>Be right back..</p>
          </div>
        </div>
      </div>
    </Master>
  );
};


export default MentorDashboard