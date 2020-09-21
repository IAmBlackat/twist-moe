import React from 'react';
import ReactPlayer from 'react-player';
import { Donate } from '../components/Donate';
import { Footer } from '../components/Footer';

import { Header } from '../components/Header';
import VideoPlayer from '../components/VideoPlayer';

export default class AnimePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentEpisode: this.props.currentEpisode,
    };
  }

  selectEpisode = (ep) => {
    this.setState({ currentEpisode: ep });
  };

  render() {
    return (
      <div className="main-content flex flex-col min-h-screen h-screen overflow-y-scroll bg-twistorange-900">
        <Header />
        <div className="flex flex-col flex-1">
          <div className="flex flex-col mx-auto" style={{ width: '600px' }}>
            <VideoPlayer src="https://storage.googleapis.com/fasdsg/8ER394X2WTFQ/23a_1600584785_145569.mp4" />

            <div className="flex flex-col pb-4 mb-2 mt-3 border-b border-t border-twistorange-800">
              <span className="font-body text-2xl text-twistorange-white">
                {this.props.title}
              </span>
              <span className="text-twistorange-white text-xs">
                Episode {this.state.currentEpisode} · Season 1
              </span>
            </div>

            <div className="flex flex-col pb-4 mb-2 border-b border-twistorange-800">
              <label className="flex items-center cursor-pointer">
                <input type="checkbox" className="plus-minus" />
                <span className="ml-2 text-twistorange-white hover:text-white text-sm">
                  Completed Episode
                </span>
              </label>
              <div className="flex flex-wrap justify-between w-full mt-6 ">
                {this.props.episodes.map((episode) => (
                  <button
                    onClick={() => this.selectEpisode(episode)}
                    className={`mr-2 mb-2 focus:outline-none cursor-default flex w-16 py-1 bg-twistorange-800 rounded border ${
                      episode === this.state.currentEpisode
                        ? 'border-twistorange-gray'
                        : 'border-transparent'
                    } transition duration-500 ease-in-out hover:border-twistorange-gray`}
                  >
                    <span className="m-auto text-twistorange-white">
                      {episode === this.state.currentEpisode ? (
                        <div className="w-5 h-5">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                          >
                            <path d="M8 5v14l11-7z" fill="currentColor" />
                            <path d="M0 0h24v24H0z" fill="none" />
                          </svg>
                        </div>
                      ) : (
                        episode
                      )}
                    </span>
                  </button>
                ))}
              </div>
            </div>
            <Donate />
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}
