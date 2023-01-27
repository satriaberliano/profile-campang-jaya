import React from "react";
import logo from '../../src/assets/logo-kota-bandar-lampung.png';
import AppSupport from "../components/AppSupport";
import CarouselFadeExample from "../components/Carousel";

function HomePage(){
  return(
    <>
      <CarouselFadeExample />
      <div className="content-home">
        <h2>Kelurahan Campang Jaya</h2>
        <p>Jalan P.Tirtayasa, Gang HMS Beringin, Campang Raya, Tj. Karang Tim., Kota Bandar Lampung, Lampung 35122, Indonesia</p>
        <div className="content-home-container-flex">
          <div className="content-home-container-image">
            <img src={logo} alt="Logo kota bandar lampung"></img>
          </div>
          <div className="content-home-container-text">
            <h2>Visi dan Misi</h2>
            <div className="content-home-visi">
              <h3>Visi</h3>
              <p>Terwujudnya Peningkatan Pelayanan Umum, Tertib Administrasi, Pemerintahan, Pembangunan, Ketentraman, Ketertiban Umum, Kebersihan Lingkungan, Kemasyarakatan, Serta Administrasi Tata Pemerintahan Kelurahan Yang Baik Dalam Rangka Mendukung Pelaksanaan Otonomi Daerah</p>
            </div>
            <div className="content-home-misi">
              <h3>Misi</h3>
              <p>Meningkatkan kualitas pelayanan umum kepada masyarakat</p>
              <ol type="1">
                <li>Meningkatkan kualitas pelayanan umum kepada masyarakat</li>
                <li>Mengkoordinasikan kegiatan pemberdayaan masyarakat dan mengingkatkan upaya kebersihan lingkungan</li>
                <li>Meningkatkan koordinasi dalam penyusunan program kerja dan kebijakan teknis baik dalam pemerintahan, pembangunan, dan pembinaan masyarakat</li>
                <li>Meningkatkan dalam upaya penyelenggaraan ketentraman dan ketertiban umum dalam menerapkan, menegakkan peraturan perundang-undangan termasuk Perda Kota Bandar Lampung</li>
                <li>Mengkoordinasikan penyelenggaraan kegiatan pemerintahan di tingkat kelurahan dan melaksanakan pembinaan</li>
                <li>Meningkatkan Pendapatan asli daerah (Pad)</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      <AppSupport />
  </>
  );
}

export default HomePage;