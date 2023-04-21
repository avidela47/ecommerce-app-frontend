import React from 'react';
import './Footer.css';
import { BsFacebook, BsInstagram, BsTwitter, BsYoutube, BsTiktok, BsWhatsapp } from 'react-icons/bs';
import { GrMail } from 'react-icons/gr';
import Logo from "../logo.png";
import { Nav } from 'react-bootstrap';

export default function Footer() {
  return (
    <>
      <div className='footer1'>
        <h3 className='h3'>Contactanos</h3>
        <div className='footer'>
          <div className='wrapper'>
            <div className='button2'>
              <Nav.Link className='icon' href='https://api.whatsapp.com/send?phone=3512890110&text=Hola'><BsWhatsapp className='i' /></Nav.Link>
              <span>3512890110</span>
            </div>
            <div className='button2'>
              <Nav.Link href='mailto:horusanteria@gmail.com' className='icon'><GrMail className='i' /></Nav.Link >
              <span>Email</span>
            </div>
          </div>
        </div>

        <h3 className='h3'>Seguinos</h3>
        <div className='footer'>
          <div className='wrapper'>
            <div className='button'>
              <Nav.Link href='https://www.facebook.com/profile.php?id=100092032953301' className='icon'><BsFacebook className='i' /></Nav.Link>
              <span>Facebook</span>
            </div>
            <div className='button'>
              <Nav.Link href='https://www.instagram.com/horusanteria/?next=%2F' className='icon'><BsInstagram className='i' /></Nav.Link>
              <span>Instagram</span>
            </div>
            <div className='button'>
              <Nav.Link href='https://twitter.com/?lang=es' className='icon'><BsTwitter className='i' /></Nav.Link>
              <span>Twitter</span>
            </div>
            <div className='button'>
              <Nav.Link href='https://www.youtube.com/' className='icon'><BsYoutube className='i' /></Nav.Link>
              <span>Youtube</span>
            </div>
            <div className='button'>
              <Nav.Link href='https://www.tiktok.com/foryou' className='icon'><BsTiktok className='i' /></Nav.Link>
              <span>TikTok</span>
            </div>
          </div>
        </div>
      </div>

      <div className='sb_footer_below'>
        <div className='sb_footer_copyright'>
          <p className='logos'>
            @{new Date().getFullYear()} Horus Santeria
            <img src={Logo} alt="" width={50} />
          </p>
        </div>
      </div>
    </>
  );
}