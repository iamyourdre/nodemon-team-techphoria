import React from 'react';
import {MenteeNavbar} from '../../components/Navbar.jsx';

const Master = ({ children }) => {
  return (
    <React.Fragment>
      <MenteeNavbar />
      <div className="container">
        <main>{children}</main>
      </div>
    </React.Fragment>
  );
};

export default Master;
