import React from 'react';

import Button from '../Button/Button.component';
import './MobileNav.styles.scss';

const MobileNav = () => {
  return (
    <div className="mobile-nav">
      <ul className="mobile-nav__menu">
        <li className="mobile-nav__item">
          <a href="/#" className="mobile-nav__link">
            Blog
          </a>
        </li>
        <li className="mobile-nav__item">
          <a href="/#" className="mobile-nav__link">
            Nourish
          </a>
        </li>
        <li className="mobile-nav__item">
          <a href="/#" className="mobile-nav__link">
            Shop
          </a>
        </li>
        <li className="mobile-nav__item">
          <a href="/#" className="mobile-nav__link">
            Exercise
          </a>
        </li>
        <li className="mobile-nav__item">
          <a href="/#" className="mobile-nav__link">
            Nutrition
          </a>
        </li>
        <li className="mobile-nav__item">
          <a href="/#" className="mobile-nav__link">
            Activity
          </a>
        </li>
        <li className="mobile-nav__item">
          <a href="/#" className="mobile-nav__link">
            Sleep
          </a>
        </li>
      </ul>

      <Button element="a" href="/#" className="button">
        Sign up
      </Button>
    </div>
  );
};

export default MobileNav;
