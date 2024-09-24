import React from 'react';
import logo from "../../assets/logo-banner.svg";
import s from "./style.module.css";

const Banner = () => {

return(
    <div className={s.banner}>
      <img className={s.agoraImg} src={logo}></img>
    </div>
  );
};

export default Banner;