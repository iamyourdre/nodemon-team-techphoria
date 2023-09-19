import React from 'react';
import {SetupNavbar} from '../../components/Navbar.jsx';

const Master = ({ children }) => {
  return (
    <React.Fragment>
      <SetupNavbar />
      <div className="container">
        <main>{children}</main>
      </div>
    </React.Fragment>
  );
};

export default Master;
