import React from 'react';

import SocialLinks from '../SocialLinks/SocialLinks.component';
import './Footer.styles.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__menus">
        <div className="footer__menu">
          <h3 className="footer__menu-heading">Company</h3>
          <ul className="footer__menu-items">
            <li className="footer__menu-item">
              <a href="/#" className="footer__menu-link">
                About
              </a>
            </li>
            <li className="footer__menu-item">
              <a href="/#" className="footer__menu-link">
                Contact Us
              </a>
            </li>
            <li className="footer__menu-item">
              <a href="/#" className="footer__menu-link">
                Careers
              </a>
            </li>
          </ul>
        </div>

        <div className="footer__menu">
          <h3 className="footer__menu-heading">Account</h3>
          <ul className="footer__menu-items">
            <li className="footer__menu-item">
              <a href="/#" className="footer__menu-link">
                Log In
              </a>
            </li>
            <li className="footer__menu-item">
              <a href="/#" className="footer__menu-link">
                Create Account
              </a>
            </li>
          </ul>
        </div>

        <div className="footer__menu">
          <h3 className="footer__menu-heading">Support</h3>
          <ul className="footer__menu-items">
            <li className="footer__menu-item">
              <a href="/#" className="footer__menu-link">
                Help Center
              </a>
            </li>
            <li className="footer__menu-item">
              <a href="/#" className="footer__menu-link">
                Accessibility
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer__social">
        <SocialLinks />
      </div>

      <div className="footer__meta">
        <p className="footer__copyright">© iFit.com. All Rights Reserved.</p>
        <a href="/#" className="footer__legal">
          Privacy Policy
        </a>
        <a href="/#" className="footer__legal">
          Terms of Use
        </a>
      </div>
    </footer>
  );
};

export default Footer;
