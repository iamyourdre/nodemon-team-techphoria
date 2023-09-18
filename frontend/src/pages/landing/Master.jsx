import React from 'react';
import Navbar from '../../components/guest/Navbar.jsx';

const Master = ({ children }) => {
  return (
    <React.Fragment>
      <Navbar />
      <div className="container">
        <main>{children}</main>
      </div>
    </React.Fragment>
  );
};

export default Master;
