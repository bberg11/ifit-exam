import React, { useState } from 'react';
import classNames from 'classnames';

import Button from '../Button/Button.component';
import logo from '../../assets/images/ifit-coach-logo.svg';
import Drawer from '../Drawer/Drawer.component';
import MobileNav from '../MobileNav/MobileNav.component';
import './Header.styles.scss';

const Header = () => {
  const [showNav, setShowNav] = useState(false);

  const openNav = () => {
    setShowNav(!showNav);
  };

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

          <button
            type="button"
            className={classNames({
              'header__nav-button': true,
              'header__nav-button--is-open': showNav,
            })}
            aria-label="Open main menu"
            onClick={openNav}
          >
            <span className="header__nav-button-line header__nav-button-line--top" />
            <span className="header__nav-button-line header__nav-button-line--middle" />
            <span className="header__nav-button-line header__nav-button-line--bottom" />
          </button>

          <div className="header__auth">
            <Button element="a" href="/#" className="button">
              Sign up
            </Button>
          </div>
        </div>
      </div>

      <Drawer visible={showNav} closeHandler={() => setShowNav(false)}>
        <MobileNav />
      </Drawer>
    </header>
  );
};

export default Header;
