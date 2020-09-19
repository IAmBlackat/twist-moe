import React from 'react';

import { animeList } from './animes';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';

import slugify from 'slugify';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      animes: animeList().map((anime) => {
        return { title: anime, id: uuidv4() };
      }),
    };
  }

  filterAnime = (evnt) => {
    evnt.preventDefault();

    const newList = animeList().filter((anime) =>
      anime.toLowerCase().includes(evnt.target.value.toLowerCase())
    );

    this.setState({
      animes: newList.map((anime) => {
        return { title: anime, id: uuidv4() };
      }),
    });
  };

  render() {
    return (
      <div className="main-content flex flex-col min-h-screen h-screen overflow-y-scroll bg-twistorange-900">
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
        <div className="flex flex-col flex-1">
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
                  This Summer season we're adding over 27 new ongoing to shows
                  to AT, you can find the full list over here:{' '}
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
          <div className="flex flex-col mx-auto w-2/6 py-2">
            <div className="flex flex-col">
              <span className="body-font text-twistorange-lightgray">
                Please donate to keep the site up & running, ad-free, and
                subscription free. We need your help!
              </span>
              <div
                className="rounded-full my-2 bg-twistorange-gray"
                style={{ height: '4px' }}
              >
                <div
                  className="h-full rounded-full bg-twistorange-red"
                  style={{
                    width: '55.5779527557%',
                  }}
                ></div>
              </div>
              <div className="flex flex-row-reverse">
                <button className="focus:outline-none cursor-default bg-twistorange-800 px-4 h-10 self-start rounded border border-transparent transition duration-500 ease-in-out hover:border-twistorange-gray">
                  <span className="font-body text-gray-300">
                    Sure, I'll donate
                  </span>
                </button>
                <span className="mr-2 my-auto text-twistorange-lightgray font-body">
                  $352.92 / $635.00 for September
                </span>
              </div>
            </div>
            <form>
              <input
                onChange={this.filterAnime}
                placeholder="SEARCH"
                className="mt-16 rounded w-full focus:outline-none p-3 text-white placeholder-twistorange-redlight text-sm bg-twistorange-red"
              ></input>
            </form>
            <div className="flex flex-col w-full">
              {this.state.animes.map((anime) => {
                const link = slugify(anime.title, {
                  lower: true,
                  strict: true,
                });
                console.log(link);
                return (
                  <Link
                    key={anime.id}
                    className="border-b border-twistorange-800 p-3"
                  >
                    <span className="text-gray-300 font-body hover:text-gray-100">
                      {anime.title}
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
