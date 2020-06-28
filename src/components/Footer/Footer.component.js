import React from 'react';

import SocialLinks from '../SocialLinks/SocialLinks.component';
import Select from '../Select/Select.component';
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
        <div className="footer__language">
          <Select title="Select a language">
            <option value="de">Deutsch</option>
            <option value="en" selected>
              English
            </option>
            <option value="es">Español</option>
            <option value="fr">Français</option>
            <option value="it">Italiano</option>
            <option value="nb_NO">Norsk</option>
            <option value="nl">Nederlands</option>
            <option value="ru">Русский</option>
            <option value="zh_CN">中文(简体)</option>
          </Select>
        </div>
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
