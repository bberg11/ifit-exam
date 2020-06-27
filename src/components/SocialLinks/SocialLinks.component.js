import React from 'react';

import './SocialLinks.styles.scss';

const SocialLinks = () => {
  return (
    <ul className="social-links">
      <li className="social-links__item">
        <a
          href="https://www.youtube.com/user/iFitLive"
          target="_blank"
          rel="noreferrer"
          className="social-links__link"
        >
          <svg className="social-links__icon" viewBox="0 0 24 24">
            <title>YouTube</title>
            <path
              d="M10 16.5v-9l6 4.5m4-7.6c-.6-.2-4.3-.4-8-.4s-7.4.2-8 .4c-1.6.5-2 4-2 7.6 0 3.6.4 7.1 2 7.6.6.2 4.3.4 8 .4s7.4-.2 8-.4c1.6-.5 2-4 2-7.6 0-3.6-.4-7.1-2-7.6"
              fillRule="evenodd"
              style={{ fill: 'rgb(255, 255, 255)' }}
            />
          </svg>
        </a>
      </li>
      <li className="social-links__item">
        <a
          href="https://pinterest.com/ifit"
          target="_blank"
          rel="noreferrer"
          className="social-links__link"
        >
          <svg className="social-links__icon" viewBox="0 0 24 24">
            <title>Pinterest</title>
            <path
              d="M13 17.2c-1 0-2-.4-2.6-1.1l-1.2 4-.1.3c-.3.4-.7.6-1.2.6-.8 0-1.4-.6-1.4-1.4v-.2l.1-.2 2.3-6.9s-.2-.8-.2-1.8c0-2.1 1.2-2.8 2.1-2.8.9 0 1.8.3 1.8 1.6 0 1.7-1.1 2.5-1.1 3.7 0 .9.8 1.7 1.7 1.7 2.9 0 4-2.2 4-4.2 0-2.7-2.4-4.9-5.2-4.9-2.9 0-5.2 2.2-5.2 4.9 0 .8.2 1.7.7 2.4.1.2.2.4.2.6 0 .7-.6 1.2-1.2 1.2-.4 0-.8-.2-1.1-.6C4.3 13 4 11.7 4 10.4 4 6.3 7.5 3 11.8 3s7.8 3.3 7.8 7.4c-.1 3.3-2.1 6.8-6.6 6.8"
              fillRule="evenodd"
              style={{ fill: 'rgb(255, 255, 255)' }}
            />
          </svg>
        </a>
      </li>
      <li className="social-links__item">
        <a
          href="https://www.facebook.com/ifit"
          target="_blank"
          rel="noreferrer"
          className="social-links__link"
        >
          <svg className="social-links__icon" viewBox="0 0 24 24">
            <title>Facebook</title>
            <path
              d="M17 3v3.6h-1.8c-.6 0-.9.7-.9 1.3v2.2H17v3.6h-2.7V21h-3.6v-7.2H8v-3.6h2.7V6.6c0-2 1.6-3.6 3.6-3.6H17"
              fillRule="evenodd"
              style={{ fill: 'rgb(255, 255, 255)' }}
            />
          </svg>
        </a>
      </li>
      <li className="social-links__item">
        <a
          href="https://twitter.com/ifit"
          target="_blank"
          rel="noreferrer"
          className="social-links__link"
        >
          <svg className="social-links__icon" viewBox="0 0 24 24">
            <title>Twitter</title>
            <path
              d="M22 6.8c-.7.3-1.5.5-2.2.6.8-.5 1.4-1.2 1.7-2.1-.8.4-1.6.7-2.5.9-.7-.8-1.7-1.2-2.9-1.2-2.1 0-3.8 1.7-3.8 3.8 0 .3 0 .6.1.9-3.2-.2-6.1-1.7-8-4-.4.6-.6 1.2-.6 1.9 0 1.3.7 2.5 1.7 3.1-.6 0-1.2-.2-1.8-.4 0 1.8 1.3 3.4 3.1 3.7-.3.1-.7.1-1 .1-.2 0-.5 0-.7-.1.5 1.5 1.9 2.6 3.6 2.6-1.3 1-3 1.6-4.8 1.6-.3 0-.6 0-.9-.1C4.7 19.4 6.8 20 9 20c7.2 0 11.1-5.8 11.1-10.8v-.5c.7-.5 1.4-1.2 1.9-1.9"
              fillRule="evenodd"
              style={{ fill: 'rgb(255, 255, 255)' }}
            />
          </svg>
        </a>
      </li>
      <li className="social-links__item">
        <a
          href="https://instagram.com/ifit"
          target="_blank"
          rel="noreferrer"
          className="social-links__link"
        >
          <svg className="social-links__icon" viewBox="0 0 24 24">
            <title>Instagram</title>
            <path
              d="M12 2.1c-2.7 0-3.1 0-4.1.1-1.1 0-1.8.2-2.4.5-.7.2-1.3.6-1.8 1.1-.6.6-.9 1.1-1.2 1.8-.2.6-.4 1.4-.4 2.4C2 9.1 2 9.4 2 12.1c0 2.7 0 3.1.1 4.1 0 1.1.2 1.8.5 2.4.3.7.6 1.2 1.2 1.8.6.6 1.1.9 1.8 1.2.6.2 1.4.4 2.4.5h4c2.7 0 3.1 0 4.1-.1 1.1 0 1.8-.2 2.4-.5.7-.3 1.2-.6 1.8-1.2.6-.6.9-1.1 1.2-1.8.2-.6.4-1.4.5-2.4 0-1.1.1-1.4.1-4.1 0-2.7 0-3.1-.1-4.1 0-1.1-.2-1.8-.5-2.4-.3-.7-.6-1.2-1.2-1.8-.6-.6-1.1-.9-1.8-1.2-.6-.2-1.4-.4-2.4-.5-1 .2-1.4.1-4.1.1m0 1.8c2.7 0 3 0 4 .1 1 0 1.5.2 1.9.3.5.2.8.4 1.1.8.3.3.6.7.7 1.1.2.4.4.9.4 1.9 0 1.1.1 1.4.1 4 0 2.7 0 3-.1 4 0 1-.2 1.5-.3 1.9-.2.5-.4.8-.7 1.1-.3.3-.7.6-1.1.7-.5.3-1 .4-2 .5-1.1 0-1.4.1-4 .1s-3 0-4-.1c-1 0-1.5-.2-1.9-.3-.5-.2-.8-.4-1.1-.7-.3-.3-.6-.7-.7-1.1-.1-.4-.3-.9-.3-1.9 0-1.1-.1-1.4-.1-4 0-2.7 0-3 .1-4 0-1 .2-1.5.3-1.9.1-.6.3-1 .7-1.3.3-.3.7-.6 1.1-.7C6.5 4.2 7 4 8 4c1 0 1.3-.1 4-.1m0 11.6c-1.8 0-3.3-1.5-3.3-3.3 0-1.8 1.5-3.3 3.3-3.3 1.8 0 3.3 1.5 3.3 3.3 0 1.8-1.5 3.3-3.3 3.3M12 7c-2.8 0-5.1 2.3-5.1 5.1s2.3 5.1 5.1 5.1 5.1-2.3 5.1-5.1S14.8 7 12 7m6.5-.2c0 .7-.5 1.2-1.2 1.2s-1.2-.5-1.2-1.2.5-1.2 1.2-1.2 1.2.5 1.2 1.2"
              fillRule="evenodd"
              style={{ fill: 'rgb(255, 255, 255)' }}
            />
          </svg>
        </a>
      </li>
    </ul>
  );
};

export default SocialLinks;
