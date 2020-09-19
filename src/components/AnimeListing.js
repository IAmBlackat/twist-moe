import React from 'react';

import { Link } from 'react-router-dom';

export const AnimeListing = ({ animes }) => {
  return (
    <div className="flex flex-col w-full">
      {animes.map((anime) => (
        <Link
          to={anime.url}
          key={anime.id}
          className="border-b border-twistorange-800 p-3"
        >
          <span className="text-gray-300 font-body hover:text-gray-100">
            {anime.title}
          </span>
        </Link>
      ))}
    </div>
  );
};
