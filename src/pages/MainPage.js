import React from 'react';

import { animeList } from '../utils/animes';
import { Header } from '../components/Header';
import { Announcement } from '../components/Announcement';
import { Donate } from '../components/Donate';
import { AnimeSearchBar } from '../components/AnimeSearchBar';
import { AnimeListing } from '../components/AnimeListing';
import { Footer } from '../components/Footer';

export default class MainPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      animes: animeList(),
      searchTerm: '',
    };
  }

  filterAnime = (evnt) => {
    evnt.preventDefault();

    const newList = animeList().filter((anime) =>
      anime.title.toLowerCase().includes(evnt.target.value.toLowerCase())
    );

    this.setState({
      animes: newList,
      [evnt.target.name]: evnt.target.value,
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
            <AnimeSearchBar
              filterAnime={this.filterAnime}
              name="searchTerm"
              value={this.state.searchTerm}
            />
            {this.state.animes.length !== 0 ? (
              <AnimeListing animes={this.state.animes} />
            ) : (
              <div className="flex flex-col items-center mt-2">
                <span className="font-body text-twistorange-white">
                  No results for{' '}
                  <span className="text-twistorange-red">
                    {this.state.searchTerm}
                  </span>{' '}
                  in English
                </span>
              </div>
            )}
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}
