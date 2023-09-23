import React, { useState, Component } from 'react';
import Master from '../Master';
import axios from 'axios';

class MentorRequestDetail extends Component {
    constructor() {
      super();
      this.state = {
        data: [], // Untuk menyimpan data dari API
        profileImage: "../assets/profile/blank-profile.png",
      };
    }
  
    componentDidMount() {
      // Mengambil data dari API Anda menggunakan Axios (ganti dengan URL API yang sesuai)
      axios.get('URL_API_ANDA')
        .then((response) => {
          this.setState({ data: response.data });
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }
  
    render() {
      const { data } = this.state;
  
      return (
        <Master>
        <div>
        <img src="{profileImage}" className='w-100px' alt="" />
          <h4> <strong>Naya</strong></h4>
          <p>Mahasiswa Teknik Informatika</p>
          <p>Janji temu: 19 Sept 2023, pk.10.00</p>

          <button className='btn btn-primary py-2 px-4 '> Terima </button>
          <button className='btn btn-danger py-2 px-4 mx-4'> Tolak </button>
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
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi dicta impedit quas neque repellendus, nostrum iure tempora possimus cum officiis doloribus totam ratione. Deleniti eveniet minus molestiae accusantium adipisci culpa?</p>
        </div>

        </Master>
      );
    }
  }
export default MentorRequestDetail