/* eslint-disable react/no-array-index-key */
import React from 'react';

import image1 from '../../assets/images/library-1.png';
import image2 from '../../assets/images/library-2.png';
import image3 from '../../assets/images/library-3.png';
import image4 from '../../assets/images/library-4.png';
import image5 from '../../assets/images/library-5.png';
import image6 from '../../assets/images/library-6.png';
import image7 from '../../assets/images/library-7.png';
import image8 from '../../assets/images/library-8.png';
import avatar1 from '../../assets/images/avatar-1.png';
import avatar2 from '../../assets/images/avatar-2.png';
import avatar3 from '../../assets/images/avatar-3.png';
import avatar4 from '../../assets/images/avatar-4.png';
import avatar5 from '../../assets/images/avatar-5.png';
import avatar6 from '../../assets/images/avatar-6.png';
import avatar7 from '../../assets/images/avatar-7.png';
import avatar8 from '../../assets/images/avatar-8.png';

import './LibraryGrid.styles.scss';
import LibraryItem from '../LibraryItem/LibraryItem.component';

const data = [
  {
    image: image1,
    imageAlt: '[descriptive alt text]',
    avatar: avatar1,
    avatarAlt: '[descriptive alt text]',
    title: 'Lake Inniscarra, Ireland—Pyramid',
    time: '30:53',
    distance: '6,248 M',
    link: '/#',
    workoutCount: 0,
  },
  {
    image: image2,
    imageAlt: '[descriptive alt text]',
    avatar: avatar2,
    avatarAlt: '[descriptive alt text]',
    title: 'Performance Series',
    time: null,
    distance: null,
    link: '/#',
    workoutCount: 9,
  },
  {
    image: image3,
    imageAlt: '[descriptive alt text]',
    avatar: avatar3,
    avatarAlt: '[descriptive alt text]',
    title: 'Slow Pulls and Fast Intervals',
    time: '44:13',
    distance: '9,948 M',
    link: '/#',
    workoutCount: 0,
  },
  {
    image: image4,
    imageAlt: '[descriptive alt text]',
    avatar: avatar4,
    avatarAlt: '[descriptive alt text]',
    title: '20 Minutes to Toned',
    time: null,
    distance: null,
    link: '/#',
    workoutCount: 12,
  },
  {
    image: image5,
    imageAlt: '[descriptive alt text]',
    avatar: avatar5,
    avatarAlt: '[descriptive alt text]',
    title: 'Charles Race, Boston, Massachusetts',
    time: '36:22',
    distance: '8,648 M',
    link: '/#',
    workoutCount: 0,
  },
  {
    image: image6,
    imageAlt: '[descriptive alt text]',
    avatar: avatar6,
    avatarAlt: '[descriptive alt text]',
    title: 'Full-Body HIIT Series',
    time: null,
    distance: null,
    link: '/#',
    workoutCount: 12,
  },
  {
    image: image7,
    imageAlt: '[descriptive alt text]',
    avatar: avatar7,
    avatarAlt: '[descriptive alt text]',
    title: 'Kafue River, Zambia—Power Stroke Pyramid',
    time: '22:22',
    distance: '4,660 M',
    link: '/#',
    workoutCount: 0,
  },
  {
    image: image8,
    imageAlt: '[descriptive alt text]',
    avatar: avatar8,
    avatarAlt: '[descriptive alt text]',
    title: 'Shred & Burn Series',
    time: null,
    distance: null,
    link: '/#',
    workoutCount: 16,
  },
];

const LibraryGrid = () => {
  return (
    <section className="library-grid">
      {data.map((item, index) => (
        <a href={item.link} className="library-grid__cell" key={index}>
          <LibraryItem item={item} />
        </a>
      ))}
    </section>
  );
};

export default LibraryGrid;
