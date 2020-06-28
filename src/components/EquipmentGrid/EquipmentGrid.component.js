import React, { useState, useEffect, useRef } from 'react';
import classNames from 'classnames';

import treadmillImage from '../../assets/images/treadmill.png';
import bikesImage from '../../assets/images/bikes.png';
import ellipticalsImage from '../../assets/images/ellipticals.png';
import strengthImage from '../../assets/images/strength.png';

import Card from '../Card/Card.component';
import './EquipmentGrid.styles.scss';

const EquipmentGrid = () => {
  const [isVisible, setVisible] = useState(true);
  const domRef = useRef();

  useEffect(() => {
    const element = domRef.current;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting));
    });

    observer.observe(element);

    return () => observer.unobserve(element);
  }, []);

  return (
    <section className="equipment-grid">
      <h2 className="equipment-grid__heading">
        Interested in our exciting iFit-enabled equipment?
      </h2>
      <div
        className={classNames({
          'equipment-grid__items': true,
          'equipment-grid__items--is-visible': isVisible,
        })}
        ref={domRef}
      >
        <a href="/#" className="equipment-grid__item">
          <Card>
            <div className="equipment-grid__content">
              <img
                src={treadmillImage}
                alt="Treadmill"
                className="equipment-grid__image"
              />
              <h3 className="equipment-grid__title">Treadmills</h3>
            </div>
          </Card>
        </a>
        <a href="/#" className="equipment-grid__item">
          <Card>
            <div className="equipment-grid__content">
              <img
                src={bikesImage}
                alt="Stationary Bike"
                className="equipment-grid__image"
              />
              <h3 className="equipment-grid__title">Bikes</h3>
            </div>
          </Card>
        </a>
        <a href="/#" className="equipment-grid__item">
          <Card>
            <div className="equipment-grid__content">
              <img
                src={ellipticalsImage}
                alt="Elliptical"
                className="equipment-grid__image"
              />
              <h3 className="equipment-grid__title">Ellipticals</h3>
            </div>
          </Card>
        </a>
        <a href="/#" className="equipment-grid__item">
          <Card>
            <div className="equipment-grid__content">
              <img
                src={strengthImage}
                alt="Weight lifting machine"
                className="equipment-grid__image"
              />
              <h3 className="equipment-grid__title">Strength</h3>
            </div>
          </Card>
        </a>
      </div>
    </section>
  );
};

export default EquipmentGrid;
