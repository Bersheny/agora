import React from 'react';
import logo from "../../assets/logo-login.svg";
import './LoginBanner.css';

const LoginBanner = () => {

return(
    <div>
      <img className="login-banner" src={logo} alt="Agora"></img>
    </div>
  );
};

export default LoginBanner;