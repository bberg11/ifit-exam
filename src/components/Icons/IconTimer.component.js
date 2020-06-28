import React from 'react';

const IconTimer = () => {
  return (
    <svg width="10" height="10" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <path
          d="M10 6.5c0-2.205-1.794-4-4-4-2.205 0-4 1.795-4 4 0 2.206 1.795 4 4 4 2.206 0 4-1.794 4-4zm.5 0C10.5 8.981 8.481 11 6 11a4.505 4.505 0 01-4.5-4.5C1.5 4.019 3.519 2 6 2a4.48 4.48 0 012.905 1.07l.716-.716.354.353-.708.708A4.479 4.479 0 0110.5 6.5zm-6-5h3V1h-3v.5zM5.75 7h.5V4h-.5v3z"
          id="a"
        />
      </defs>
      <g transform="translate(-1 -1)" fill="none" fillRule="evenodd">
        <path d="M0 0h12v12H0z" />
        <mask id="b" fill="#fff">
          <use xlinkHref="#a" />
        </mask>
        <use fill="#2E3134" xlinkHref="#a" />
        <g mask="url(#b)" fill="#2E3134">
          <path d="M0 0h12v12H0z" />
        </g>
      </g>
    </svg>
  );
};

export default IconTimer;
