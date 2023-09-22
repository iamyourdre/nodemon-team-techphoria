import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Select from 'react-select'; // Import react-select
import Master from './Master';

const MenteeStep1 = () => {
  const [profileImage, setProfileImage] = useState("/assets/profile/blank-profile.png");
  const [gender, setGender] = useState(''); // State untuk jenis kelamin
  const [country, setCountry] = useState(''); // State untuk negara
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Profile Image:', profileImage);
    console.log('Gender:', gender);
    console.log('Country:', country);
    
    navigate('/setup/mentee/2');
  };

  const handleImageChange = (e) => {
    const imageFile = e.target.files[0];
    if (imageFile) {
      const imageUrl = URL.createObjectURL(imageFile);
      setProfileImage(imageUrl);
    }
  };

  return (
    <Master>
      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-md-6 py-5">
            <p className="opacity-75"><small>Langkah 1 / 5</small></p>
            <p className='h2 fw-bolder text-danger'>Mohon Lengkapi <span className='text-dark'>Profil Anda</span>.</p>
            <p>Daftar sekarang untuk mulai terhubung bersama mentor & mentee dari berbagai daerah.</p>
          </div>
          <div className="col-md-6">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="profile-image" className="form-label">
                  <span className="form-label">Atur Foto Profil</span>
                  {profileImage && (
                    <img
                      src={profileImage}
                      alt="Pratinjau Gambar Profil"
                      style={{ width: '100px', height: '100px', display: 'block' }}
                      className="img-thumbnail rounded-circle border-0 p-0 m-0 mt-2"
                    />
                  )}
                </label>
                <input
                  type="file"
                  className="form-control d-none"
                  id="profile-image"
                  accept="image/*"
                  onChange={handleImageChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="gender" className="form-label">Jenis Kelamin</label>
                <select
                  className="form-select p-3"
                  id="gender"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                >
                  <option value="" disabled>Pilih jenis kelamin Anda</option>
                  <option value="male">Laki-Laki</option>
                  <option value="female">Perempuan</option>
                </select>
              </div>

              <div className="mb-3">
                <label htmlFor="country" className="form-label">Negara</label>
                <select
                  className="form-select p-3"
                  id="country"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                >
                  <option value="" disabled>Pilih negara Anda</option>
                  <option value="id">Indonesia</option>
                  <option value="us">United States</option>
                  <option value="uk">United Kingdom</option>
                  {/* Tambahkan opsi negara menggunakan API */}
                </select>
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

const MenteeStep2 = () => {
  const [company, setCompany] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [experienceYears, setExperienceYears] = useState('');
  const [professionalSite, setProfessionalSite] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Perusahaan/Instansi:', company);
    console.log('Jabatan Anda:', jobTitle);
    console.log('Tahun Pengalaman Profesional:', experienceYears);
    console.log('Situs Profesional:', professionalSite);

    // Simpan data ini atau lakukan langkah lain sesuai kebutuhan Anda

    // Kemudian, navigasikan pengguna ke langkah berikutnya
    navigate('/setup/mentee/3');
  };
  
  const handleBack = () => {
    // Gunakan fungsi navigate untuk kembali ke langkah sebelumnya
    navigate('/setup/mentee/1');
  };

  return (
    <Master>
      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-md-6 py-5">
            <p className="opacity-75"><small>Langkah 2 / 5</small></p>
            <p className='h2 fw-bolder text-danger'>Pilih <span className='text-dark'>Pengalaman Profesional Anda</span>.</p>
            <p>Bagikan secara publik terkait pengalaman profesional Anda.</p>
          </div>
          <div className="col-md-6">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="company" className="form-label">Perusahaan/Instansi</label>
                <input
                  type="text"
                  className="form-control p-3"
                  id="company"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="jobTitle" className="form-label">Jabatan Anda</label>
                <input
                  type="text"
                  className="form-control p-3"
                  id="jobTitle"
                  value={jobTitle}
                  onChange={(e) => setJobTitle(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="professionalSite" className="form-label">Situs Profesional (Portofolio/LinkedIn)</label>
                <input
                  type="url"
                  className="form-control p-3"
                  id="professionalSite"
                  value={professionalSite}
                  onChange={(e) => setProfessionalSite(e.target.value)}
                  required
                />
              </div>
              <div className="row m-0 mb-3">
                <div className="col-4 p-0">
                  <button type="button" className="btn btn-dark p-3 me-3" onClick={handleBack}>Kembali</button>
                </div>
                <div className="col-8 p-0">
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

const MenteeStep3 = () => {
  const [primarySkill, setPrimarySkill] = useState(null); // Set nilai awal ke null
  const [additionalSkills, setAdditionalSkills] = useState([]); // Set nilai awal ke array kosong
  const [softSkills, setKeterampilan] = useState([]); // Set nilai awal ke array kosong
  const [toolSkills, setSoftware] = useState([]); // Set nilai awal ke array kosong
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Keahlian Utama:', primarySkill);
    console.log('Keahlian Lainnya:', additionalSkills);
    console.log('Keterampilan:', softSkills);
    console.log('Alat yang Dikuasai:', toolSkills);

    // Simpan data ini atau lakukan langkah lain sesuai kebutuhan Anda

    // Kemudian, navigasikan pengguna ke langkah berikutnya
    navigate('/setup/mentee/4');
  };

  const handleBack = () => {
    // Gunakan fungsi navigate untuk kembali ke langkah sebelumnya
    navigate('/setup/mentee/2');
  };

  const keahlian_utama = [
    { value: 'content_writing', label: 'Content Writing' },
    { value: 'data_science', label: 'Data Science' },
    { value: 'design', label: 'Design' },
    { value: 'marketing', label: 'Marketing' },
    { value: 'no_low_code', label: 'No/Low Code' },
    { value: 'product', label: 'Product' },
    { value: 'product_research', label: 'Product Research' },
    { value: 'sales', label: 'Sales' },
    { value: 'talent_acquisition', label: 'Talent Acquisition' },
  ];

  const keterampilan = [
    { value: 'komunikasi', label: 'Komunikasi' },
    { value: 'kolaborasi', label: 'Kolaborasi' },
    { value: 'problem_solving', label: 'Problem Solving' },
    { value: 'leadership', label: 'Leadership' },
    { value: 'adaptabilitas', label: 'Adaptabilitas' },
    { value: 'kreativitas', label: 'Kreativitas' },
    { value: 'analisis_data', label: 'Analisis Data' },
    { value: 'pemrograman', label: 'Pemrograman' },
    // Tambahkan keterampilan lainnya di sini sesuai kebutuhan Anda
  ];

  const software = [
    { value: 'microsoft_office', label: 'Microsoft Office' },
    { value: 'adobe_photoshop', label: 'Adobe Photoshop' },
    { value: 'adobe_illustrator', label: 'Adobe Illustrator' },
    { value: 'adobe_indesign', label: 'Adobe InDesign' },
    { value: 'autocad', label: 'AutoCAD' },
    { value: 'adobe_premiere_pro', label: 'Adobe Premiere Pro' },
    { value: 'final_cut_pro', label: 'Final Cut Pro' },
    { value: 'tableau', label: 'Tableau' },
    { value: 'excel', label: 'Microsoft Excel' },
    // Tambahkan alat (software) lainnya di sini sesuai kebutuhan Anda
  ];

  return (
    <Master>
      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-md-6 py-5">
            <p className="opacity-75"><small>Langkah 3 / 5</small></p>
            <p className='h2 fw-bolder text-danger'>Lengkapi <span className='text-dark'>Minat & Bakat Anda</span>.</p>
            <p>Tunjukkan fokus bidang yang Anda minati.</p>
          </div>
          <div className="col-md-6">
            <form onSubmit={handleSubmit}>

              <div className="mb-3">
                <label htmlFor="primarySkill" className="form-label">Pilih bidang utama</label>
                <Select
                  id="primarySkill"
                  options={keahlian_utama}
                  value={primarySkill} // Tidak perlu mencari nilai default lagi karena sudah sesuai
                  onChange={(selectedOption) => setPrimarySkill(selectedOption)} // Set langsung objek terpilih
                  isSearchable
                  isClearable
                  placeholder="Pilih keahlian utama Anda"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="additionalSkills" className="form-label">Pilih bidang lain yang juga anda minati</label>
                <Select
                  id="additionalSkills"
                  options={keahlian_utama}
                  isMulti
                  value={additionalSkills.map((value) =>
                    keahlian_utama.find((option) => option.value === value)
                  )}
                  onChange={(selectedOptions) =>
                    setAdditionalSkills(selectedOptions.map((opt) => opt.value))
                  }
                  isSearchable
                />
              </div>

              <div className="mb-3">
                <label htmlFor="softSkills" className="form-label">Apa keterampilan yang anda kuasai</label>
                <Select
                  id="softSkills"
                  options={keterampilan}
                  isMulti
                  value={softSkills.map((value) =>
                    keterampilan.find((option) => option.value === value)
                  )}
                  onChange={(selectedOptions) =>
                    setKeterampilan(selectedOptions.map((opt) => opt.value))
                  }
                  isSearchable
                />
              </div>

              <div className="mb-3">
                <label htmlFor="toolSkills" className="form-label">Apa saja alat yang anda kuasai</label>
                <Select
                  id="toolSkills"
                  options={software}
                  isMulti
                  value={toolSkills.map((value) =>
                    software.find((option) => option.value === value)
                  )}
                  onChange={(selectedOptions) =>
                    setSoftware(selectedOptions.map((opt) => opt.value))
                  }
                  isSearchable
                />
              </div>

              <div className="row m-0 mb-3">
                <div className="col-4 p-0">
                  <button type="button" className="btn btn-dark p-3 me-3" onClick={handleBack}>Kembali</button>
                </div>
                <div className="col-8 p-0">
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

const MenteeStep4 = () => {
  const [bio, setBio] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Bio Anda:', bio);

    // Simpan data ini atau lakukan langkah lain sesuai kebutuhan Anda

    // Kemudian, navigasikan pengguna ke langkah berikutnya
    navigate('/setup/mentee/5');
  };

  const handleBack = () => {
    // Gunakan fungsi navigate untuk kembali ke langkah sebelumnya
    navigate('/setup/mentee/3');
  };

  // Contoh bio untuk alert
  const exampleBio = `Saya adalah seorang mahasiswa Ilmu Komputer di Universitas XYZ yang memiliki pengalaman selama 5 tahun dalam industri teknologi. 
  Saya memiliki latar belakang dalam pengembangan perangkat lunak dan berfokus pada pengembangan web. 
  Saya berharap dapat menemukan mentor yang bisa membantu untuk mencapai tujuan akademis saya.`;

  return (
    <Master>
      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-md-6 py-5">
            <p className="opacity-75"><small>Langkah 4 / 5</small></p>
            <p className='h2 fw-bolder text-danger'>Isi <span className='text-dark'>Bio Anda</span>.</p>
            <p>Deskripsi singkat tentang diri Anda dan latar belakang profesional Anda.</p>
          </div>
          <div className="col-md-6">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="bio" className="form-label">Bio Anda</label>
                <textarea
                  rows="5"
                  className="form-control p-3"
                  id="bio"
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                  required
                />
              </div>
              <div className="alert alert-info">
                <strong>Contoh Bio:</strong>
                <br />
                {exampleBio}
              </div>
              <div className="row m-0 mb-3">
                <div className="col-4 p-0">
                  <button type="button" className="btn btn-dark p-3 me-3" onClick={handleBack}>Kembali</button>
                </div>
                <div className="col-8 p-0">
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

const MenteeStep5 = () => {
  const navigate = useNavigate();

  const handleFinish = () => {
    navigate('/mentee/my_mentor');
  };

  return (
    <Master>
      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-md-6 py-5">
            <p className="opacity-75"><small>Langkah 5 / 5</small></p>
            <p className='h2 fw-bolder text-danger'><span className='text-dark'>Terima Kasih</span>!</p>
            <p>Anda telah berhasil mendaftar sebagai mentor.</p>
            <p>Dengan bergabung sebagai mentor, Anda memiliki kesempatan untuk berbagi pengetahuan dan pengalaman Anda dengan mentee yang mencari bimbingan.</p>
            <p>Silakan kunjungi <a href="/ketentuan-layanan">Ketentuan Layanan</a> kami untuk memahami lebih lanjut mengenai persyaratan dan aturan yang berlaku.</p>
            <div className="mt-4">
              <button type="button" className="btn btn-danger p-3 w-100" onClick={handleFinish}>Selesai</button>
            </div>
          </div>
        </div>
      </div>
    </Master>
  );
};


export {MenteeStep1, MenteeStep2, MenteeStep3, MenteeStep4, MenteeStep5};
