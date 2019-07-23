import React, { useState } from 'react';
import logo from './logo.svg';
import { Player, ControlBar, PlayToggle } from 'video-react';
import Home from './Home';
import './App.css';

function App() {
  const [seenVideo, setSeenVideo] = useState(false);

  return (
    <div className="App">
      <div className="overlay"></div>
      <div className="scanline"></div>
      { !seenVideo ?
        <Home/>
        :
        <div className="player">
          <video onEnded={() => setSeenVideo(true)} id="teaser" width="100%" poster={process.env.PUBLIC_URL+"/thumbnail.png"} controls autoPlay>
            <source src={process.env.PUBLIC_URL+"/archive_teaser.mp4"} type="video/mp4"></source>
            video not supported
          </video>
        </div>
      }

    </div>
  );
}

export default App;
