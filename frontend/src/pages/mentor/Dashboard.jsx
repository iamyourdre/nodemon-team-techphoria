import React, { useState } from 'react';
import Master from './Master';


const MentorDashboard = () => {

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
          <div className="col-md-6 py-5">
            <p className='h2 fw-bolder text-danger'>Welcome <span className='text-dark'>Mentor</span>.</p>

          </div>
        </div>

        <div className='h5 mx-10'><p><strong>Permintaan untuk Anda</strong></p></div>
        <p className='mb-5 small'>Para mentee ingin bertemu denganmu!</p>
        <div class="row mb-5">
          <div class="col-sm-4 mb-4">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Naya</h5>
                <p class="card-text">Android Development</p>
                <a href="#" class="btn btn-primary">Lihat Detail</a>
              </div>
            </div>
          </div>
          <div class="col-sm-4 mb-4">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Naya</h5>
                <p class="card-text">Android Development</p>
                <a href="#" class="btn btn-primary">Lihat Detail</a>
              </div>
            </div>
          </div>
          <div class="col-sm-4 mb-4">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Naya</h5>
                <p class="card-text">Android Development</p>
                <a href="#" class="btn btn-primary">Lihat Detail</a>
              </div>
            </div>
          </div>
        </div>
      
      
      <div className='h5 mx-10'><p><strong>Sesi yang akan datang</strong></p></div>
      <p className='mb-5 small'>Jangan lupa menghadiri sesi ini!</p>
        <div class="row mb-5">
          <div class="col-sm-4 mb-4">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Naya</h5>
                <p class="card-text">Android Development</p>
                <a href="#" class="btn btn-primary">Lihat Detail</a>
              </div>
            </div>
          </div>
          <div class="col-sm-4 mb-4">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Naya</h5>
                <p class="card-text">Android Development</p>
                <a href="#" class="btn btn-primary">Lihat Detail</a>
              </div>
            </div>
          </div>
          <div class="col-sm-4 mb-4">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Naya</h5>
                <p class="card-text">Android Development</p>
                <a href="#" class="btn btn-primary">Lihat Detail</a>
              </div>
            </div>
          </div>
        </div>

        <div className='h5 mx-10'><p><strong>Riwayat</strong></p></div>
        <p className='mb-5 small'>Lihat lagi sesi yang telah Anda lakukan sebelumnya</p>
        <div class="row">
          <div class="col-sm-4 mb-4">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Naya</h5>
                <p class="card-text">Android Development</p>
                <a href="#" class="btn btn-primary">Lihat Detail</a>
              </div>
            </div>
          </div>
          <div class="col-sm-4 mb-4">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Naya</h5>
                <p class="card-text">Android Development</p>
                <a href="#" class="btn btn-primary">Lihat Detail</a>
              </div>
            </div>
          </div>
          <div class="col-sm-4 mb-4">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Naya</h5>
                <p class="card-text">Android Development</p>
                <a href="#" class="btn btn-primary">Lihat Detail</a>
              </div>
            </div>
          </div>
        </div>
        </div>
      
    </Master>
  );
};


export default MentorDashboard