import React from 'react'
import Master from './Master'

const SignUp = () => {
  return (
    <Master>
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6 py-5">
            <h1 className='fw-bolder text-danger'>Selamat Datang di <span className='text-dark'>MyMento</span>.</h1>
            <p>Daftar sekarang untuk mulai terhubung bersama mentor & mentee dari berbagai daerah.</p>
        </div>
        <div className="col-md-6">
            <form>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control p-3" id="email" placeholder="Masukkan email Anda" />
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Kata Sandi</label>
                <input type="password" className="form-control p-3" id="password" placeholder="Masukkan kata sandi Anda" />
            </div>
            <div className="mb-3">
                <label htmlFor="confirm-password" className="form-label">Konfirmasi Kata Sandi</label>
                <input type="password" className="form-control p-3" id="confirm-password" placeholder="Masukkan ulang kata sandi Anda" />
            </div>
            <div className="mb-3">
                <div className="d-flex align-items-center">
                <button type="submit" className="btn btn-danger p-3 w-100">Lanjutkan</button>
                {/* <button className="btn btn-light">
                    <i className="fab fa-google me-2"></i> Daftar dengan Google
                </button> */}
                </div>
            </div>
            </form>
        </div>
      </div>
    </div>
    </Master>
  )
}

export default SignUp;