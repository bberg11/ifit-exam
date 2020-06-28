/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from 'react';

import IconChevronLeft from '../Icons/IconChevronLeft.component';
import IconChevronRight from '../Icons/IconChevronRight.component';
import Card from '../Card/Card.component';
import wiredLogo from '../../assets/images/wired-logo.svg';
import mashableLogo from '../../assets/images/mashable-logo.svg';
import gearJunkieLogo from '../../assets/images/gear-junkie-logo.svg';
import './MediaSlider.styles.scss';

const data = [
  {
    url: '/#',
    image: gearJunkieLogo,
    imageAlt: 'Gear Junkie Logo',
    copy:
      '“You focus on putting in the work, and the technology handles the rest.”',
  },
  {
    url: '/#',
    image: wiredLogo,
    imageAlt: 'Wired Logo',
    copy: '“Literally transports you from home to wherever you choose to run.”',
  },
  {
    url: '/#',
    image: mashableLogo,
    imageAlt: 'Mashable Logo',
    copy: '“Breathes new life into a tired, old running routine.”',
  },
  {
    url: '/#',
    image: gearJunkieLogo,
    imageAlt: 'Gear Junkie Logo',
    copy:
      '“COPY - You focus on putting in the work, and the technology handles the rest.”',
  },
  {
    url: '/#',
    image: wiredLogo,
    imageAlt: 'Wired Logo',
    copy:
      '“COPY - Literally transports you from home to wherever you choose to run.”',
  },
  {
    url: '/#',
    image: mashableLogo,
    imageAlt: 'Mashable Logo',
    copy: '“COPY - Breathes new life into a tired, old running routine.”',
  },
];

const MediaSlider = () => {
  const [currentPosition, setCurrentPosition] = useState(0);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      setCurrentPosition(0);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const showPreviousButton = () => {
    return currentPosition > 0;
  };

  const showNextButton = () => {
    return width < 768
      ? currentPosition < data.length - 1
      : currentPosition < data.length - 3;
  };

  const translateValue = () => {
    if (width < 768) {
      return `-${100 * currentPosition}%`;
    }

    if (width < 1024) {
      return `-${50 * currentPosition}%`;
    }

    return `-${33.33 * currentPosition}%`;
  };

  return (
    <section className="media-slider">
      {showPreviousButton() && (
        <button
          type="button"
          className="media-slider__button media-slider__button--previous"
          onClick={() => setCurrentPosition(currentPosition - 1)}
        >
          <IconChevronLeft />
        </button>
      )}
      <div
        className="media-slider__slides"
        style={{ transform: `translateX(${translateValue()})` }}
      >
        {data.map((slide, index) => (
          <div className="media-slider__slide" key={index}>
            <Card>
              <a href={slide.url} className="media-slider__content">
                <img
                  src={slide.image}
                  alt={slide.imageAlt}
                  className="media-slider__logo"
                />
                <p className="media-slider__copy">{slide.copy}</p>
              </a>
            </Card>
          </div>
        ))}
      </div>
      {showNextButton() && (
        <button
          type="button"
          className="media-slider__button media-slider__button--next"
          onClick={() => setCurrentPosition(currentPosition + 1)}
        >
          <IconChevronRight />
        </button>
      )}
    </section>
  );
};

export default MediaSlider;
