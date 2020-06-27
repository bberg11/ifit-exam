import React from 'react';

import Card from '../Card/Card.component';
import wiredLogo from '../../assets/images/wired-logo.svg';
import mashableLogo from '../../assets/images/mashable-logo.svg';
import gearJunkieLogo from '../../assets/images/gear-junkie-logo.svg';
import './MediaSlider.styles.scss';

const MediaSlider = () => {
  return (
    <section className="media-slider">
      <div className="media-slider__slide">
        <Card>
          <a href="/#" className="media-slider__content">
            <img
              src={gearJunkieLogo}
              alt="Gear Junkie Logo"
              className="media-slider__logo"
            />
            <p className="media-slider__copy">
              “You focus on putting in the work, and the technology handles the
              rest.”
            </p>
          </a>
        </Card>
      </div>
      <div className="media-slider__slide">
        <Card>
          <a href="/#" className="media-slider__content">
            <img
              src={wiredLogo}
              alt="Wired Logo"
              className="media-slider__logo"
            />
            <p className="media-slider__copy">
              “Literally transports you from home to wherever you choose to
              run.”
            </p>
          </a>
        </Card>
      </div>
      <div className="media-slider__slide">
        <Card>
          <a href="/#" className="media-slider__content">
            <img
              src={mashableLogo}
              alt="Mashable Logo"
              className="media-slider__logo"
            />
            <p className="media-slider__copy">
              “Breathes new life into a tired, old running routine.”
            </p>
          </a>
        </Card>
      </div>

      <div className="media-slider__slide">
        <Card>
          <a href="/#" className="media-slider__content">
            <img
              src={gearJunkieLogo}
              alt="Gear Junkie Logo"
              className="media-slider__logo"
            />
            <p className="media-slider__copy">
              “COPY - You focus on putting in the work, and the technology
              handles the rest.”
            </p>
          </a>
        </Card>
      </div>
      <div className="media-slider__slide">
        <Card>
          <a href="/#" className="media-slider__content">
            <img
              src={wiredLogo}
              alt="Wired Logo"
              className="media-slider__logo"
            />
            <p className="media-slider__copy">
              “COPY - Literally transports you from home to wherever you choose
              to run.”
            </p>
          </a>
        </Card>
      </div>
      <div className="media-slider__slide">
        <Card>
          <a href="/#" className="media-slider__content">
            <img
              src={mashableLogo}
              alt="Mashable Logo"
              className="media-slider__logo"
            />
            <p className="media-slider__copy">
              “COPY - Breathes new life into a tired, old running routine.”
            </p>
          </a>
        </Card>
      </div>
    </section>
  );
};

export default MediaSlider;
