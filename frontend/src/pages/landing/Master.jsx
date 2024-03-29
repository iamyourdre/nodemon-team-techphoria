import React from 'react';
import {LandingNavbar} from '../../components/Navbar.jsx';

const Master = ({ children }) => {
  return (
    <React.Fragment>
      <LandingNavbar />
      <div className="container">
        <main>{children}</main>
      </div>
    </React.Fragment>
  );
};

export default Master;
