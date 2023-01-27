import Carousel from 'react-bootstrap/Carousel';
import image1 from '../../src/assets/campang-jaya.jpg';
import image2 from '../../src/assets/foto-bersama-kkn-campang-jaya.jpeg'
import image3 from '../../src/assets/kelurahan-campang-jaya.png';

function CarouselFadeExample() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Selamat Datang</h3>
          <p>Desa Campang Jaya, Kecamatan Sukabumi</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Selamat Datang</h3>
          <p>Desa Campang Jaya, Kecamatan Sukabumi</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Selamat Datang</h3>
          <p>Desa Campang Jaya, Kecamatan Sukabumi</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;