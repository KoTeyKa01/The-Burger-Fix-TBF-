import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import burgerLogo from '../../assets/img/burgerLogo.png';


import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer" id='footer'>
      <div className="footer__socials">
        <div className="footer__icon">
          <TelegramIcon />
          <span>TELEGRAM</span>
        </div>
        <div className="footer__icon">
          <FacebookIcon />
          <span>FACEBOOK</span>
        </div>
        <div className="footer__icon">
          <InstagramIcon/>
          <span>INSTAGRAM</span>
        </div>
        <div className="footer__icon">
          <LinkedInIcon />
          <span>LINKEDIN</span>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="footer__info">
          <div className="footer__logo"><img src={burgerLogo} alt="" /></div> {/* Replace with SVG if needed */}
          <p>Your city, Your street</p>
          <p className='num'>(+x) xx–xxx–xx–x <br />Calls: 9:00 - 18:00</p>
          <button className="footer__button">Contact us</button>
        </div>

        <div className="footer__links">
          <div className="footer__column">
            <p>FAQ</p>
            <ul>
              <li>Contacts</li>
              <li>Menu</li>
            </ul>
          </div>
          <div className="footer__column">
            <p>Else</p>
            <ul>
              <li>Advertisement</li>
              <li>Job openings</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;