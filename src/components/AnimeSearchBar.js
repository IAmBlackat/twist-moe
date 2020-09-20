import React from 'react';

export const AnimeSearchBar = ({ filterAnime, name, value }) => {
  return (
    <form>
      <input
        onChange={filterAnime}
        placeholder="SEARCH"
        className="mt-16 rounded w-full focus:outline-none p-3 text-white placeholder-twistorange-redlight text-sm bg-twistorange-red"
        name={name}
        value={value}
      ></input>
    </form>
  );
};
