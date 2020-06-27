import React from 'react';
import PropTypes from 'prop-types';

import './Card.styles.scss';

const Card = ({ children }) => {
  return <section className="card">{children}</section>;
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Card;
