import React from 'react';

import { Header } from '../components/Header';
import { Announcement } from '../components/Announcement';

export const AnimePage = ({ title, episodeCount, description }) => {
  return (
    <div className="main-content flex flex-col min-h-screen h-screen overflow-y-scroll bg-twistorange-900">
      <Header />
      <div className="flex flex-col flex-1">
        <div className="flex flex-col mx-auto w-2/6 py-2">
          <div className="flex flex justify-center bg-twistorange-700 py-8">
            <span className="text-3xl font-body font-bold text-gray-300">
              {title}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
