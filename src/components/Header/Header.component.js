import React from 'react';

import Button from '../Button/Button.component';
import logo from '../../assets/images/ifit-coach-logo.svg';
import './Header.styles.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="header__row">
        <div className="header__wrapper">
          <ul className="header__utility-nav header__list">
            <li className="header__utility-item">
              <a href="/#" className="header__list-link">
                Blog
              </a>
            </li>
            <li className="header__utility-item">
              <a href="/#" className="header__list-link">
                Nourish
              </a>
            </li>
            <li className="header__utility-item">
              <a href="/#" className="header__list-link">
                Shop
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="header__row">
        <div className="header__wrapper header__wrapper--centered">
          <div className="header__logo">
            <img src={logo} alt="iFit Coach" />
          </div>
          <ul className="header__nav header__list">
            <li className="header__nav-item">
              <a href="/#" className="header__list-link">
                Exercise
              </a>
            </li>
            <li className="header__nav-item">
              <a href="/#" className="header__list-link">
                Nutrition
              </a>
            </li>
            <li className="header__nav-item">
              <a href="/#" className="header__list-link">
                Activity
              </a>
            </li>
            <li className="header__nav-item">
              <a href="/#" className="header__list-link">
                Sleep
              </a>
            </li>
          </ul>
          <div className="header__auth">
            <Button element="a" href="/#" className="button">
              Sign up
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
