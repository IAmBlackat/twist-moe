import React from 'react';
import ReactPlayer from 'react-player';
import { findDOMNode } from 'react-dom';

import screenfull from 'screenfull';

export default class VideoPlayer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isPlaying: false,
      isFullscreen: false,
    };
  }

  togglePlay = () => {
    this.setState((currState) => ({ isPlaying: !currState.isPlaying }));
  };

  toggleFullscreen = () => {
    screenfull.request(findDOMNode(this.refs.player));

    this.setState((currState) => ({ isFullscreen: !currState.isFullscreen }));
  };

  render() {
    return (
      <div className="relative flex">
        <div className="z-0" ref="player">
          <ReactPlayer
            width="w-full"
            style={{ height: '100%', outline: 'none' }}
            playing={this.state.isPlaying}
            url={this.props.src}
          />
        </div>
        <div className="flex items-center absolute z-10 bottom-0 left-0 mb-3 h-10 px-2 w-full">
          <button onClick={this.togglePlay} className="focus:outline-none flex">
            <div className="w-6 h-6">
              {this.state.isPlaying ? (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                  <path d="M12 38h8V10h-8v28zm16-28v28h8V10h-8z" />
                  <path d="M0 0h48v48H0z" fill="none" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" fill="currentColor" />
                  <path d="M0 0h24v24H0z" fill="none" />
                </svg>
              )}
            </div>
          </button>
          <span className=" text-twistorange-white font-body ml-1">00:01</span>
          <div
            className="w-full rounded-full my-2 bg-twistorange-gray"
            style={{ height: '4px' }}
          >
            <div
              className="h-full rounded-full bg-twistorange-red"
              style={{
                width: '9.724%',
              }}
            ></div>
          </div>
          <span className=" text-twistorange-white font-body ml-1">00:01</span>
          <div
            className="w-24 rounded-full my-2 bg-twistorange-gray"
            style={{ height: '4px' }}
          >
            <div
              className="h-full rounded-full bg-twistorange-red"
              style={{
                width: '9.724%',
              }}
            ></div>
          </div>
          <button
            onClick={this.toggleFullscreen}
            className="focus:outline-none flex"
          >
            <div className="w-6 h-6">
              {this.state.isPlaying ? (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18">
                  <path d="M0 0h18v18H0z" fill="none" />
                  <path d="M3 12.5h2.5V15H7v-4H3v1.5zm2.5-7H3V7h4V3H5.5v2.5zM11 15h1.5v-2.5H15V11h-4v4zm1.5-9.5V3H11v4h4V5.5h-2.5z" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18">
                  <path d="M0 0h18v18H0z" fill="none" />
                  <path d="M4.5 11H3v4h4v-1.5H4.5V11zM3 7h1.5V4.5H7V3H3v4zm10.5 6.5H11V15h4v-4h-1.5v2.5zM11 3v1.5h2.5V7H15V3h-4z" />
                </svg>
              )}
            </div>
          </button>
        </div>
      </div>
    );
  }
}
