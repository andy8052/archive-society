import React, { useState } from 'react';
import logo from './logo.svg';
import { Player, ControlBar, PlayToggle } from 'video-react';
import Home from './Home';
import './App.css';

function App() {
  const [seenVideo, setSeenVideo] = useLocalStorage('promo video', false);

  return (
    <div className="App">
      <div className="overlay"></div>
      <div className="scanline"></div>
      { seenVideo ?
        <Home/>
        :
        <div className="player">
          <video onEnded={() => setSeenVideo('promo video', true)} id="teaser" width="100%" poster={process.env.PUBLIC_URL+"/thumbnail.png"} controls autoPlay>
            <source src={process.env.PUBLIC_URL+"/archive_teaser.mp4"} type="video/mp4"></source>
            video not supported
          </video>
        </div>
      }

    </div>
  );
}

// Hook
function useLocalStorage(key, initialValue) {
  // State to store our value
  // Pass initial state function to useState so logic is only executed once
  const [storedValue, setStoredValue] = useState(() => {
    try {
      // Get from local storage by key
      const item = window.localStorage.getItem(key);
      // Parse stored json or if none return initialValue
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      // If error also return initialValue
      console.log(error);
      return initialValue;
    }
  });

  // Return a wrapped version of useState's setter function that ...
  // ... persists the new value to localStorage.
  const setValue = value => {
    try {
      // Allow value to be a function so we have same API as useState
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      // Save state
      setStoredValue(valueToStore);
      // Save to local storage
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      // A more advanced implementation would handle the error case
      console.log(error);
    }
  };

  return [storedValue, setValue];
}

export default App;
