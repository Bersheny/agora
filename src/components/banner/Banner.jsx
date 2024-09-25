import React from 'react';
import logo from "../../assets/logo-banner.svg";
import './Banner.css';

const Banner = () => {

return(
    <div className="banner">
      <img className="agoraImg" src={logo} alt="Agora"></img>
    </div>
  );
};

export default Banner;