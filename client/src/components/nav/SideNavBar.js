import React from 'react';
import './Nav.css'

const SideNavBar = () => {
  return (
    <div className="mySidenav">
      <ul>
        <a href='/'>Home</a>
        <a href='/games'>Games</a>
        <a href='/games/new'>New Games</a>
     </ul> 
    </div>
  );
};

export default SideNavBar;