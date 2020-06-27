import React from 'react';

import Button from '../Button/Button.component';
import heroImage from '../../assets/images/hero.png';
import './Hero.styles.scss';

const Hero = () => {
  return (
    <section className="hero">
      <div
        className="hero__background"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="hero__content">
        <h1 className="hero__heading">
          The best personal training, right in your own home
        </h1>
        <div className="hero__action">
          <Button element="a" className="button button--large">
            Join iFit coach
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
