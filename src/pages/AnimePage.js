import React from 'react';

export const AnimePage = ({ title, episodeCount, description }) => {
  return (
    <div className="main-content flex justify-center min-h-screen h-screen overflow-y-scroll bg-gray-900">
      {title}
    </div>
  );
};
