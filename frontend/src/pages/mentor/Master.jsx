import React from 'react';
import {MentorNavbar} from '../../components/Navbar.jsx';

const Master = ({ children }) => {
  return (
    <React.Fragment>
      <MentorNavbar />
      <div className="container">
        <main>{children}</main>
      </div>
    </React.Fragment>
  );
};

export default Master;
