import React from "react";
import { HiOutlineLocationMarker, HiOutlineMail } from 'react-icons/hi';
import { IoIosCall } from 'react-icons/io'

function ContactPage(){
  return(
    <>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22146.96088754562!2d105.30690359228386!3d-5.415072116886669!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e40dc79ebde2ba5%3A0xacf1b4a59e17b1e!2sCampang%20Raya%2C%20Kec.%20Sukabumi%2C%20Kota%20Bandar%20Lampung%2C%20Lampung!5e0!3m2!1sid!2sid!4v1674711056276!5m2!1sid!2sid" title="Campang Jaya Maps" width="600" height="450" style={{border: 0}} loading="lazy"></iframe>
      <div className="contactpage-information">
        <div className="contactpage-information-item">
          <div className="contactpage-information-item-icon">
            <HiOutlineLocationMarker />
          </div>
          <div className="contactpage-information-item-text">
            <h5>Lokasi</h5>
            <p>
              Jalan Pangeran Tirtayasa<br></br>
              Kecamatan Sukabumi<br></br>
              Kota Bandar Lampung
            </p>
          </div>
        </div>
        <div className="contactpage-information-item">
          <div className="contactpage-information-item-icon">
            <HiOutlineMail />
          </div>
          <div className="contactpage-information-item-text">
            <h5>Email</h5>
            <p>desa.campangjaya@gmail.com</p>
          </div>
        </div>
        <div className="contactpage-information-item">
          <div className="contactpage-information-item-icon">
            <IoIosCall />
          </div>
          <div className="contactpage-information-item-text">
            <h5>Telepon</h5>
            <p>
              +62xxx-xxxx-xxxx
            </p>
          </div>
        </div>
      </div>    
    </>
  );
};

export default ContactPage;