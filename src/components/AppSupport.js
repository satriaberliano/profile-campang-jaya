import React from "react";
import logo1 from '../assets/logo-unila.png';
import logo2 from '../assets/logo-kkn-unila.png';
import logo3 from '../assets/logo-kota-bandar-lampung.png';
import logo4 from '../assets/kampus-merdeka-logo.png';

function AppSupport(){
  return(
    <div className="appsupport">
      <div className="appsupport-title">
        <h2>SUPPORTS BY</h2>
      </div>
      <div className="appsupport-container">
        <div><img src={logo1} alt="Gambar logo universitas lampung"></img></div>
        <div><img src={logo2} alt="Gambar logo kkn universitas lampung"></img></div>
        <div><img src={logo3} alt="Gambar logo kota bandar lampung"></img></div>
        <div><img src={logo4} alt="Gambar logo kampus merdeka"></img></div>
      </div>
    </div>
  );
}

export default AppSupport;