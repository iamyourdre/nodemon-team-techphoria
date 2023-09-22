import React, { useState } from 'react';
import Master from './Master';



const MenteeDashboard = () => {
  
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
        <div className="row mb-5">
          <div className="col-sm-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Naya</h5>
                <p className="card-text">Android Development</p>
                <a href="#" className="btn btn-danger">Lihat Detail</a>
              </div>
            </div>
          </div>
          <div className="col-sm-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Naya</h5>
                <p className="card-text">Android Development</p>
                <a href="#" className="btn btn-danger">Lihat Detail</a>
              </div>
            </div>
          </div>
          <div className="col-sm-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Naya</h5>
                <p className="card-text">Android Development</p>
                <a href="#" className="btn btn-danger" >Lihat Detail</a>
              </div>
            </div>
          </div>
        </div>
      
      
      <div className='h5 mx-10'><p><strong>Sesi yang akan datang</strong></p></div>
      <p className='mb-5 small'>Jangan lupa menghadiri sesi ini!</p>
        <div className="row mb-5">
          <div className="col-sm-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Naya</h5>
                <p className="card-text">Android Development</p>
                <a href="#" className="btn btn-danger">Lihat Detail</a>
              </div>
            </div>
          </div>
          <div className="col-sm-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Naya</h5>
                <p className="card-text">Android Development</p>
                <a href="#" className="btn btn-danger">Lihat Detail</a>
              </div>
            </div>
          </div>
          <div className="col-sm-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Naya</h5>
                <p className="card-text">Android Development</p>
                <a href="#" className="btn btn-danger">Lihat Detail</a>
              </div>
            </div>
          </div>
        </div>

        <div className='h5 mx-10'><p><strong>Riwayat</strong></p></div>
        <p classNameName='mb-5 small'>Lihat lagi sesi yang telah Anda lakukan sebelumnya</p>
        <div className="row">
          <div className="col-sm-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Naya</h5>
                <p className="card-text">Android Development</p>
                <a href="#" className="btn btn-danger">Lihat Detail</a>
              </div>
            </div>
          </div>
          <div className="col-sm-4 mb-4">
            <div class="card">
              <div className="card-body">
                <h5 className="card-title">Naya</h5>
                <p className="card-text">Android Development</p>
                <a href="#" className="btn btn-danger">Lihat Detail</a>
              </div>
            </div>
          </div>
          <div className="col-sm-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Naya</h5>
                <p className="card-text">Android Development</p>
                <a href="#" className="btn btn-danger">Lihat Detail</a>
              </div>
            </div>
          </div>
        </div>
        </div>
      
    </Master>
  );
};


export default MenteeDashboard