/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';

import chevron from '../../assets/images/chevron-down.svg';
import './Select.styles.scss';

const Select = ({ children, ...otherProps }) => {
  return (
    <select
      className="select"
      style={{ backgroundImage: `url(${chevron})` }}
      {...otherProps}
    >
      {children}
    </select>
  );
};

Select.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Select;
