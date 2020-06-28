import React, { useEffect } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './Drawer.styles.scss';

const Drawer = ({ closeHandler, visible, children }) => {
  useEffect(() => {
    const htmlEl = document.querySelector('html');

    if (visible) {
      htmlEl.classList.add('no-scroll');
    } else {
      htmlEl.classList.remove('no-scroll');
    }
  }, [visible]);

  return (
    <div
      className={classNames({
        drawer: 'true',
        'drawer--is-visible': visible,
      })}
    >
      <button type="button" className="drawer__overlay" onClick={closeHandler}>
        Close Drawer
      </button>
      <div className="drawer__content">
        <div className="drawer__header">
          <button
            type="button"
            className="drawer__close"
            aria-label="Close Menu"
            onClick={closeHandler}
          >
            <span className="drawer__close-line drawer__close-line--top" />
            <span className="drawer__close-line drawer__close-line--middle" />
            <span className="drawer__close-line drawer__close-line--bottom" />
          </button>
        </div>
        <div className="drawer__body">{children}</div>
      </div>
    </div>
  );
};

Drawer.defaultProps = {
  visible: false,
};

Drawer.propTypes = {
  closeHandler: PropTypes.func.isRequired,
  visible: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default Drawer;
