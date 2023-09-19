import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Master from './Master';

const Login = () => {
  // Initialize state variables for form fields
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate()

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);
    
    navigate('/role_type')
  };

  return (
    <Master>
      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-md-6 py-5">
            <h1 className='fw-bolder text-danger'>Selamat Datang di <span className='text-dark'>MyMento</span>.</h1>
            <p>Daftar sekarang untuk mulai terhubung bersama mentor & mentee dari berbagai daerah.</p>
          </div>
          <div className="col-md-6">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control p-3"
                  id="email"
                  placeholder="Masukkan email Anda"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Kata Sandi</label>
                <input
                  type="password"
                  className="form-control p-3"
                  id="password"
                  placeholder="Masukkan kata sandi Anda"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="confirm-password" className="form-label">Konfirmasi Kata Sandi</label>
                <input
                  type="password"
                  className="form-control p-3"
                  id="confirm-password"
                  placeholder="Masukkan ulang kata sandi Anda"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <div className="d-flex align-items-center">
                  <button type="submit" className="btn btn-danger p-3 w-100">Lanjutkan</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Master>
  );
};

export default Login;
