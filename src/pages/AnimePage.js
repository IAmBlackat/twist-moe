import React from 'react';
import { NavLink } from 'react-router-dom';
import { Donate } from '../components/Donate';

import { Header } from '../components/Header';
import VideoPlayer from '../components/VideoPlayer';

export const AnimePage = ({ title, episodeCount, description }) => {
  return (
    <div className="main-content flex flex-col min-h-screen h-screen overflow-y-scroll bg-twistorange-900">
      <Header />
      <div className="flex flex-col flex-1">
        <div className="flex flex-col mx-auto w-2/6">
          <div className="flex pb-4 mb-2 border-b border-twistorange-800">
            <VideoPlayer source="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" />
          </div>
          <div className="flex flex-col pb-4 mb-2 border-b border-twistorange-800">
            <span className="font-body text-2xl text-twistorange-white">
              {title}
            </span>
            <span className="text-twistorange-white text-xs">
              Episode 1 · Season 1
            </span>
          </div>

          <div className="flex flex-col pb-4 mb-2 border-b border-twistorange-800">
            <label className="flex items-center cursor-pointer">
              <input type="checkbox" className="plus-minus" />
              <span className="ml-2 text-twistorange-white hover:text-white text-sm">
                Completed Episode
              </span>
            </label>
            <div className="flex flex-row w-full mt-6 ">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((episode) => (
                <NavLink
                  activeClassName="mr-2 focus:outline-none cursor-default flex w-16 py-1 bg-twistorange-800 rounded border border-twistorange-gray"
                  to="/1"
                  className="mr-2 focus:outline-none cursor-default flex w-16 py-1 bg-twistorange-800 rounded border border-transparent transition duration-500 ease-in-out hover:border-twistorange-gray"
                >
                  <span className="m-auto text-twistorange-white">
                    {episode}
                  </span>
                </NavLink>
              ))}
            </div>
          </div>
          <Donate />
        </div>
      </div>
    </div>
  );
};
