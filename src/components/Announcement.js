import React from 'react';

export const Announcement = () => {
  return (
    <div className="flex flex-row justify-center bg-twistorange-700">
      <div className="w-2/6 py-3 relative">
        <p className="flex flex-col mr-12 text-gray-300">
          <u>
            <b className="font-body">
              <span role="img" aria-label="sun">
                🌞
              </span>{' '}
              Summer Season has started
            </b>
          </u>
          <span className="font-body">
            This Summer season we're adding over 27 new ongoing to shows to AT,
            you can find the full list over here:{' '}
            <a className="underline" href="https://bit.ly/303jpVH">
              https://bit.ly/303jpVH
            </a>
          </span>
        </p>
        <button className="focus:outline-none cursor-default absolute top-0 right-0 mt-2 bg-twistorange-800 shadow w-8 h-8 self-start rounded border border-transparent transition duration-500 ease-in-out hover:border-twistorange-gray">
          <div className="w-3 h-3 m-auto text-white">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
                fill="currentColor"
              />
              <path d="M0 0h24v24H0z" fill="none" />
            </svg>
          </div>
        </button>
      </div>
    </div>
  );
};
