import React from 'react';

import { animeList } from '../utils/animes';
import { Header } from '../components/Header';
import { Announcement } from '../components/Announcement';
import { Donate } from '../components/Donate';
import { AnimeSearchBar } from '../components/AnimeSearchBar';
import { AnimeListing } from '../components/AnimeListing';

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
            <AnimeListing animes={this.state.animes} />
          </div>
        </div>
      </div>
    );
  }
}
