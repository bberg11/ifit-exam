import React, { useEffect, useState } from 'react';
import classNames from 'classnames';

import Button from '../Button/Button.component';
import heroImage from '../../assets/images/hero.png';
import './Hero.styles.scss';

const Hero = () => {
  const [textIsVisible, setTextIsVisible] = useState(false);

  useEffect(() => {
    window.setTimeout(() => {
      setTextIsVisible(true);
    }, 500);
  }, []);

  return (
    <section className="hero">
      <div
        className="hero__background"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="hero__content">
        <h1
          className={classNames({
            hero__heading: 'true',
            'hero__heading--is-visible': textIsVisible,
          })}
        >
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
