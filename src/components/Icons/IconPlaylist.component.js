import React from 'react';

const IconPlaylist = () => {
  return (
    <svg width="20" height="13" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <path
          d="M2 7h17V6H2v1zm0 4h17v-1H2v1zm15 8l5-3-5-3v6zm1-4.234L20.057 16 18 17.233v-2.467zM2 15h13v-1.001H2V15z"
          id="a"
        />
      </defs>
      <g transform="translate(-2 -6)" fill="none" fillRule="evenodd">
        <path d="M0 0h24v24H0z" />
        <mask id="b" fill="#fff">
          <use xlinkHref="#a" />
        </mask>
        <use fill="#231F20" xlinkHref="#a" />
        <g mask="url(#b)" fill="#FFF">
          <path d="M0 0h24v24H0z" />
        </g>
      </g>
    </svg>
  );
};

export default IconPlaylist;
