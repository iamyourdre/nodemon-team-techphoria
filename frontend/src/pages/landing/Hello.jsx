import React from 'react'
import Master from './Master'

const Dashboard = () => {
  return (
    <Master>
      <div class="d-flex row">
        <div class="col-12 col-lg-6 pt-5">
          <div class="row">
            <div class="col-3 mb-3">
              <div class="list-group list-group-horizontal" id="list-tab" role="tablist">
                <a class="list-group-item list-group-item-action active text-dark col-6" id="list-mentee-list" data-bs-toggle="list" href="#list-mentee" role="tab" aria-controls="list-mentee">Mentee</a>
                <a class="list-group-item list-group-item-action col-6" id="list-mentor-list" data-bs-toggle="list" href="#list-mentor" role="tab" aria-controls="list-mentor">Mentor</a>
              </div>
            </div>
            <div class="col-12">
              <div class="tab-content" id="nav-tabContent">
                <div class="tab-pane fade show active" id="list-mentee" role="tabpanel" aria-labelledby="list-mentee-list">
                  <p className='fs-1 fw-black'>Eksplor Kemampuanmu Bersama <span className='text-danger'>Mentor Pilihan</span>.</p>
                  <p>Cari dan berlangganan dengan mentor pilihan untuk meningkatkan keahlianmu.</p><br />
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Cari berdasarkan bidang kamu.."
                      aria-describedby="button-addon2"
                    />
                    <button class="btn btn-danger px-5 py-3">Cari</button>
                  </div>
                </div>
                <div class="tab-pane fade" id="list-mentor" role="tabpanel" aria-labelledby="list-mentor-list">
                  <p className='fs-1 fw-black'>Jangkau Duniamu, dan Bagikan <span className='text-danger'>Keahlianmu</span>.</p>
                  <p>Daftar menjadi partner kami, dan dapatkan pengalaman mentoring yang tidak terlupakan.</p><br />
                  <button class="btn btn-danger px-5 py-3">Bergabung Sekarang</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-lg-6">
          <img src="/assets/img/dazzle-line-online-language-learning.gif" alt="Hello" className='w-100'/>
        </div>
      </div>
    </Master>
  )
}

export default Dashboard;