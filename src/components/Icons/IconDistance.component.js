import React from 'react';

const IconDistance = () => {
  return (
    <svg width="11" height="11" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <path
          d="M7.333 5.274L4.851 7.463a.51.51 0 01-.342.127.51.51 0 01-.38-.162.457.457 0 01.037-.662l2.482-2.189a.518.518 0 01.342-.127c.086 0 .25.021.38.163a.459.459 0 01-.037.661zm.405-1a1.017 1.017 0 00-.748-.324c-.248 0-.487.09-.672.252L3.835 6.391a.96.96 0 00-.074 1.375c.19.207.463.325.748.325.249 0 .488-.09.672-.253L7.664 5.65a.96.96 0 00.074-1.376zm-.207 3.599l-1.15 1.013a2.83 2.83 0 01-1.872.704 2.828 2.828 0 01-1.89-.719l-.105-.094.434-.381.082.072c.407.358.933.555 1.48.555.546 0 1.072-.198 1.478-.556L7.141 7.45l.39.423zm2.964-2.772a3.375 3.375 0 01-1.154 2.372l-2.485 2.19a3.549 3.549 0 01-2.346.879 3.554 3.554 0 01-2.611-1.135 3.378 3.378 0 01.256-4.836L4.642 2.38a3.545 3.545 0 012.348-.882A3.55 3.55 0 019.6 2.634c.625.679.943 1.555.895 2.467zM6.99 1c-.992 0-1.943.357-2.678 1.005L1.825 4.196a3.872 3.872 0 00-.294 5.549 4.052 4.052 0 002.98 1.295c.99 0 1.94-.356 2.675-1.002l2.485-2.19a3.876 3.876 0 00.298-5.552A4.055 4.055 0 006.989 1z"
          id="a"
        />
      </defs>
      <g transform="translate(0 -1)" fill="none" fillRule="evenodd">
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

export default IconDistance;
