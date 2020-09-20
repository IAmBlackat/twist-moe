import React from 'react';

import path from 'path';

export default class VideoPlayer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      format: path.extname(this.props.source),
    };

    console.log(this.state.format.substr(1, this.state.format.length));
  }

  render() {
    return (
      <video
        height="h-auto"
        autoPlay
        controls
        className="flex-none g-black w-full focus:outline-none"
      >
        <source
          src={this.props.source}
          type={`video/${this.state.format.substr(
            1,
            this.state.format.length
          )}`}
        ></source>
        Your browser does not support the video tag. Please try other browser or
        contact the developers
      </video>
    );
  }
}
