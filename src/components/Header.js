import React from 'react';
import daddysImage from "./../img/daddy2.png";

function Header() {
  return (
    <React.Fragment>
      <h1>BEASTS OF WAR</h1>
      <p>WELCOME TO HELL</p>
      <img src={daddysImage} alt="shrek" />
      <br></br>
      <br></br>
    </React.Fragment>
  );
}



export default Header;