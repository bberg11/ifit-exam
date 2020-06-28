import React from 'react';
import PropTypes from 'prop-types';

import Card from '../Card/Card.component';
import IconPlaylist from '../Icons/IconPlaylist.component';
import IconTimer from '../Icons/IconTimer.component';
import IconDistance from '../Icons/IconDistance.component';
import './LibraryItem.styles.scss';

const LibraryItem = ({ item }) => {
  return (
    <Card>
      <article className="library-item">
        <div className="library-item__header">
          <img
            src={item.image}
            alt={item.imageAlt}
            className="library-item__image"
          />
          {item.workoutCount > 0 && (
            <p className="library-item__workouts">
              <span className="library-item__workout-count">
                {item.workoutCount}
              </span>
              <span className="library-item__workout-copy">Workouts</span>
              <IconPlaylist />
            </p>
          )}
        </div>
        <div className="library-item__body">
          <img
            src={item.avatar}
            alt={item.avatarAlt}
            className="library-item__avatar"
          />
          <h3 className="library-item__title">{item.title}</h3>
          {item.time && item.distance && (
            <p className="library-item__stats">
              <IconTimer />
              <span className="library-item__stat">{item.time}</span>
              <IconDistance />
              <span className="library-item__stat">{item.distance}</span>
            </p>
          )}
          <p className="library-item__action">View Details</p>
        </div>
      </article>
    </Card>
  );
};

LibraryItem.propTypes = {
  item: PropTypes.shape({
    image: PropTypes.string,
    imageAlt: PropTypes.string,
    avatar: PropTypes.string,
    avatarAlt: PropTypes.string,
    title: PropTypes.string,
    time: PropTypes.string,
    distance: PropTypes.string,
    link: PropTypes.string,
    workoutCount: PropTypes.number,
  }).isRequired,
};

export default LibraryItem;
