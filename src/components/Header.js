import React from 'react';

export const Header = () => {
  return (
    <div className="relative py-5">
      <div className="w-16 h-16 m-auto mt-4">
        <svg viewBox="0 0 16 10">
          <polygon
            points="0,10 5,0 10,10 9,10 5,2 1,10"
            fill="#cdcece"
          ></polygon>
          <polygon
            points="11,10 6,0 16,0 15.5,1 7.5,1 11.5,9"
            fill="#FDCB67"
          ></polygon>
        </svg>
      </div>
      <div className="absolute right-0 inset-y-0 flex items-center px-4">
        <button className="focus:outline-none cursor-default bg-twistorange-800 w-10 h-10 rounded mr-2 border border-transparent transition duration-500 ease-in-out hover:border-twistorange-gray">
          <div className="w-5 h-5 m-auto text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.53 1.53 0 01-2.29.95c-1.37-.84-2.94.73-2.1 2.1.54.89.06 2.05-.95 2.3-1.56.37-1.56 2.6 0 2.97a1.53 1.53 0 01.95 2.29c-.84 1.37.73 2.94 2.1 2.1a1.53 1.53 0 012.3.95c.37 1.56 2.6 1.56 2.97 0a1.53 1.53 0 012.29-.95c1.37.84 2.94-.73 2.1-2.1a1.53 1.53 0 01.95-2.3c1.56-.37 1.56-2.6 0-2.97a1.53 1.53 0 01-.95-2.29c.84-1.37-.73-2.94-2.1-2.1a1.53 1.53 0 01-2.3-.95zM10 13a3 3 0 100-6 3 3 0 000 6z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </button>
        <button className="focus:outline-none cursor-default flex flex-row-reverse bg-twistorange-800 px-6 h-10 rounded border border-transparent transition duration-500 ease-in-out hover:border-twistorange-gray">
          <span className="text-gray-200 my-auto font-body">Show Chat</span>
          <div className="w-4 h-4 my-auto text-white mr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </div>
        </button>
      </div>
    </div>
  );
};
