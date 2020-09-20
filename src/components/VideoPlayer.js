import React from 'react';
import ReactPlayer from 'react-player';

export default class VideoPlayer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isPlaying: false,
    };
  }

  togglePlay = () => {
    this.setState((currState) => ({ isPlaying: !currState.isPlaying }));
  };

  render() {
    return (
      <div className="relative flex">
        <div className="z-0">
          <ReactPlayer
            width="w-full"
            style={{ height: '100%', outline: 'none' }}
            playing={this.state.isPlaying}
            url={this.props.src}
          />
        </div>
        <div className="flex absolute z-10 bottom-0 left-0 mb-3 w-full bg-gray-300">
          <button onClick={this.togglePlay} className="focus:outline-none flex">
            <div className="w-5 h-5">
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
        </div>
      </div>
    );
  }
}
