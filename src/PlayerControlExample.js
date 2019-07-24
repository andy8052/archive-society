import React, { Component } from 'react';
import { Player, ControlBar } from 'video-react';

const sources = {
  sintelTrailer: 'http://media.w3.org/2010/05/sintel/trailer.mp4',
  bunnyTrailer: 'http://media.w3.org/2010/05/bunny/trailer.mp4',
  bunnyMovie: 'http://media.w3.org/2010/05/bunny/movie.mp4',
  test: 'http://media.w3.org/2010/05/video/movie_300.webm'
};

export default class PlayerControlExample extends Component {
  render() {
    return (
      <div>
        <Player
          autoPlay
        >
          <source src="http://media.w3.org/2010/05/bunny/movie.mp4" />
          <ControlBar autoHide={true} />
        </Player>

      </div>
    );
  }
}
