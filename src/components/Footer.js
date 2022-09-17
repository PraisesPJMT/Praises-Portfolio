import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter, faFacebook, faInstagram, faGithub, faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import { socialLinks } from './data';
import './styles/Footer.css';

const Footer = () => {
  const FontAwesomeIcons = [faLinkedin, faGithub,
    faTwitter, faFacebook, faInstagram];
  const footerSocials = socialLinks.map((link) => (
    <a
      key={link.id}
      className="social-link"
      href={link.path}
      target="_blank"
      rel="noreferrer"
    >
      <FontAwesomeIcon
        className={link.className}
        icon={FontAwesomeIcons[link.id - 1]}
      />
    </a>
  ));
  return (
    <footer>
      <div className="footer">
        <span className="feedback">
          Your feedback is welcome 👍🏻
        </span>
        <p className="footer-name">
          Praises Tula
          <br />
          Full Stack Developer
        </p>
        <div className="footer-contact">
          <Link
            className="footer-email"
            to="mailto:praisesmusa@gmail.com"
          >
            praisesmusa@gmail.com
          </Link>
          <div className="footer-socials">
            { footerSocials }
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
