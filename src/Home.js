import React, { useState, useEffect, useRef } from 'react';
import LogoStickerGreen from './logostickergreen.png';
import LadyGun from './ladygun.png';
import WomenWrestling from './womenwrestlingfront.png';
import HitAndMs from './hitandms.png';
import InstaGreen from './insta-green.png';

function Home() {
  const [image, setImage] = useState(0);

  const images = [LogoStickerGreen, LadyGun, WomenWrestling, HitAndMs]

  useInterval(() => {
    let num = image + 1 > images.length - 1 ? 0 : image + 1
    console.log(num)

    setImage(num)
  }, 6000);

  return (
  <div className="body">
    <div className="wrapper">
      <div className="content clearfix">
          <header className="site clearfix">
            <div className="col two">
              <h1>Archive Society</h1>
              <p>---------------------</p>
              <p>Coming Soon</p>
            </div>
          </header>

          <div className="col one" id="image-gallery">
            <img src={images[image]} alt="Archive Society" id="logo-v" />
          </div>

          <form>
            <div>
                <label>Email >></label><input type="text" />
                <div id="test">
                  <input type="submit" value="Submit" />
                </div>
            </div>
          </form>
          <div className="div-wrapper">
            <a className="button" href="https://www.instagram.com/archivesociety/" target="_blank">
              <img src={InstaGreen} width="30" alt="instagram"/>
            </a>
          </div>
        </div>
      </div>
    </div>
  );

}

function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

export default Home;
