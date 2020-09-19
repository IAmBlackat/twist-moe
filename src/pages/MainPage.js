import React from 'react';

import { animeList } from '../utils/animes';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';
import { Header } from '../components/Header';
import { Announcement } from '../components/Announcement';
import { Donate } from '../components/Donate';
import { AnimeSearchBar } from '../components/AnimeSearchBar';

export default class MainPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      animes: animeList(),
    };
  }

  filterAnime = (evnt) => {
    evnt.preventDefault();

    const newList = animeList().filter((anime) =>
      anime.title.toLowerCase().includes(evnt.target.value.toLowerCase())
    );

    this.setState({
      animes: newList,
    });
  };

  render() {
    return (
      <div className="main-content flex flex-col min-h-screen h-screen overflow-y-scroll bg-twistorange-900">
        <Header />
        <div className="flex flex-col flex-1">
          <Announcement />
          <div className="flex flex-col mx-auto w-2/6 py-2">
            <Donate />
            <AnimeSearchBar filterAnime={this.filterAnime} />
            <div className="flex flex-col w-full">
              {this.state.animes.map((anime) => (
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
          </div>
        </div>
      </div>
    );
  }
}
