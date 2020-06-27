/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';

import './Button.styles.scss';

const Button = ({ children, element, ...otherProps }) => {
  const Element = element || 'button';

  return <Element {...otherProps}>{children}</Element>;
};

Button.defaultProps = {
  element: 'button',
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  element: PropTypes.string,
};

export default Button;
