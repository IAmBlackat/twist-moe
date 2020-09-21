import React from 'react';
import ReactPlayer from 'react-player';
import { findDOMNode } from 'react-dom';

import screenfull from 'screenfull';

export default class VideoPlayer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isPlaying: true,
      isFullscreen: false,
      duration: 0,
      played: 0,
      seekedSeconds: 0,
      playedSeconds: 0,
    };
  }

  togglePlay = () => {
    this.setState((currState) => ({ isPlaying: !currState.isPlaying }));
  };

  toggleFullscreen = () => {
    screenfull.request(findDOMNode(this.player));
    this.setState((currState) => ({ isFullscreen: !currState.isFullscreen }));
  };

  formatDuration = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const correctedMinutes = minutes <= 9 ? `0${minutes}` : `${minutes}`;
    const correctedSeconds =
      (seconds - minutes * 60).toFixed(0) <= 9
        ? `0${(seconds - minutes * 60).toFixed(0)}`
        : `${(seconds - minutes * 60).toFixed(0)}`;
    return `${correctedMinutes}:${correctedSeconds}`;
  };

  onProgress = (progress) => {
    console.log(progress);
    this.setState({
      played: progress.played,
      playedSeconds: progress.playedSeconds,
    });
  };

  handleChange = (evnt) => {
    this.setState({ [evnt.target.name]: evnt.target.value });
  };

  ref = (player) => {
    this.player = player;
  };

  handleSeekMouseDown = (e) => {
    this.setState({ seeking: true });
  };

  handleSeekChange = (e) => {
    this.setState({ played: parseFloat(e.target.value) });
  };

  handleSeekMouseUp = (e) => {
    this.setState({ seeking: false });
    this.player.seekTo(parseFloat(e.target.value));
  };

  render() {
    return (
      <div className="flex flex-1 relative h-auto">
        <ReactPlayer
          ref={this.ref}
          height={'337px'}
          onProgress={this.onProgress}
          onDuration={(duration) => {
            this.setState({ duration: duration });
            console.log(duration);
          }}
          playing={this.state.isPlaying}
          url={this.props.src}
        />
        <div className="flex flex-col-reverse flex-1 absolute h-full w-full opacity-0 hover:opacity-100">
          <div
            className="flex text-white items-center h-10 px-2 w-full"
            style={{
              WebkitBoxShadow: 'inset 0px -36px 27px -30px #000000',
              boxShadow: 'inset 0px -36px 27px -30px #000000',
            }}
          >
            <button
              onClick={this.togglePlay}
              className="focus:outline-none flex"
            >
              <div className="w-6 h-6">
                {this.state.isPlaying ? (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                    <path
                      d="M12 38h8V10h-8v28zm16-28v28h8V10h-8z"
                      fill="currentColor"
                    />
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
            <span className=" text-twistorange-white font-body ml-1">
              {this.formatDuration(this.state.playedSeconds)}
            </span>
            <input
              className="w-full"
              type="range"
              min={0}
              max={0.999999}
              step="any"
              value={this.state.played}
              onMouseDown={this.handleSeekMouseDown}
              onChange={this.handleSeekChange}
              onMouseUp={this.handleSeekMouseUp}
            ></input>
            <span className=" text-twistorange-white font-body ml-1">
              {this.formatDuration(this.state.duration)}
            </span>
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
                    <path
                      d="M3 12.5h2.5V15H7v-4H3v1.5zm2.5-7H3V7h4V3H5.5v2.5zM11 15h1.5v-2.5H15V11h-4v4zm1.5-9.5V3H11v4h4V5.5h-2.5z"
                      fill="currentColor"
                    />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18">
                    <path d="M0 0h18v18H0z" fill="none" />
                    <path
                      d="M4.5 11H3v4h4v-1.5H4.5V11zM3 7h1.5V4.5H7V3H3v4zm10.5 6.5H11V15h4v-4h-1.5v2.5zM11 3v1.5h2.5V7H15V3h-4z"
                      fill="currentColor"
                    />
                  </svg>
                )}
              </div>
            </button>
          </div>
        </div>
      </div>
    );
  }
}
