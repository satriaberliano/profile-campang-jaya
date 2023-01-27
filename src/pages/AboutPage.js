import React from "react";
import Card from 'react-bootstrap/Card';
import user from '../assets/user.png';
import lurah from '../assets/alfredo.jpeg';

function AboutPage(){
  return(
    <>
      <div className="aboutpage-information">
        <h3>Struktur Organisasi dan Tata Kerja Pemerintah</h3>
        <p>Jalan Pangeran Tirtayasa, Kecamatan Sukabumi, Kota Bandar Lampung</p>
        <div>
          <Card style={{ width: '14rem' }}>
            <Card.Img variant="top" src={user} />
            <Card.Body>
              <Card.Title>Camat</Card.Title>
              <Card.Text>
                M. RAHMAT, S.Ag.MM
                <br></br>NIP 197603122006041001
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card style={{ width: '14rem' }}>
            <Card.Img variant="top" src={lurah} />
            <Card.Body>
              <Card.Title>Lurah</Card.Title>
              <Card.Text>
                ALFREEDO VERGARA, SE.MM
                <br></br>NIP 198510282011011005
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card style={{ width: '14rem' }}>
            <Card.Img variant="top" src={user} />
            <Card.Body>
              <Card.Title>Sekertaris Lurah</Card.Title>
              <Card.Text>
                MUHAMMAD YUSUF, S,Sos
                <br></br>NIP 197809142009021002
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="structural-container">
          <div>
            <Card style={{ width: '14rem' }}>
              <Card.Img variant="top" src={user} />
              <Card.Body>
                <Card.Title>Kasih Pemerintah Dan Pelayanan Umum</Card.Title>
                <Card.Text>
                  Yenni Heryanti
                  <br></br>NIP 196701161992032008
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div>
            <Card style={{ width: '14rem' }}>
              <Card.Img variant="top" src={user} />
              <Card.Body>
                <Card.Title>Kasih Pembangunan Dan Pemberdayaan Masyarakat</Card.Title>
                <Card.Text>
                  -
                  <br></br>-
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div>
            <Card style={{ width: '14rem' }}>
              <Card.Img variant="top" src={user} />
              <Card.Body>
                <Card.Title>Kasi Trantib</Card.Title>
                <Card.Text>
                  -
                  <br></br>-
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutPage;