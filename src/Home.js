import React, { useState, useEffect, useRef } from 'react';
import LogoStickerGreen from './logostickergreen.png';
import LadyGun from './ladygun.png';
import WomenWrestling from './womenwrestlingfront.png';
import HitAndMs from './hitandms.png';
import WomenSleeve from './womenwrestlingsleeve.png';
import InstaGreen from './insta-green.png';

function Home() {
  const [image, setImage] = useState(0);
  const [page, setPage] = useState(0);

  const images = [LogoStickerGreen, LadyGun, WomenWrestling, HitAndMs]

  useInterval(() => {
    let num = image + 1 > images.length - 1 ? 0 : image + 1
    console.log(num)

    setImage(num)
  }, 6000);

  return (
  <div className="body">
    <div className="wrapper">
      {page == 0 ?
      <div class="sidebar">
        <img src={WomenSleeve} width="200px" align="right" zIndex="10" />
      </div>
      :
      <></>}
      <div className="content clearfix">
          <header className="site clearfix">
            <div className="col two">
              <h1 onClick={() => setPage(0)}>Archive Society</h1>
              <p>---------------------</p>
              <div className="link" onClick={() => setPage(0)}>Home</div>
              <div className="link"><a href="https://archivesociety.bigcartel.com/" className="link">Shop</a></div>
              <div className="link" onClick={() => setPage(1)}>Mission</div>
            </div>
          </header>

          
            {page == 0 ? 
            <>
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
            </>  
            :
            <div className="col one" id="image-gallery">
              <h2>The Aim</h2>
              
              <p>
              We are not a society.<br/>
              We are archivists of the society around us.<br/>
              We archive to understand our world, to shed light on obscured moments, and to increase
              comprehension of current events.<br/>
              We archive while remembering the unremembered, both ugly and beautiful.<br/>
              We give a second life to images that have faded into obscurity.<br/>
              We believe that the overlooked deserves another chance.
              </p>

              <h2>The Means</h2>
              <p>
              Our creations serve a dual purpose:<br/>
              1. To speak for themselves as up-front works of art.<br/>
              2. To convey a deeper meaning.<br/>
              We create provocative artworks by using easily digestible, appealing visuals that draw
              people in and then ask them to take another look.<br/>
              Our designs are open to the interpretation of all who encounter them.<br/>
              </p>

              <h2>The Antithesis</h2>
              <p>
              We want to deliver more than a fire design or a sick fit.<br/>
              We do not exist to appease the desires of a malleable audience that responds only to
              hype.<br/>
              You will never find us:<br/>
              1. Slapping a random image on a shirt and adding a logo. Archive Society images<br/>
              are nothing without the broader social commentary they imply.<br/>
              2. Releasing popular designs over and over again as a cash grab.<br/>
              3. Putting a box logo on a shirt or placing a word in “QUOTES” with no thought
              behind it.<br/>
              4. Basically, miss us with that shallow shit.
              </p>

              <h2>The Culture</h2>
              <p>
              More than makers or designers, we want to be providers.<br/>
              Our emphasis not on the elite, but on inclusivity.<br/>
              It is paramount that we can give others the opportunity to share in both our experiences
              and the mind-expanding conversations that come from discovering/recovering new art
              from the wellspring of history.<br/>
              We want to provide a community for people that are united by their love of the
              societally obscure, built on a catalogue that comes from a real and grounded place.
              To remain honest, Archive needs to be an organic entity that grows through cross
              pollination.<br/>
              If we grow, we want others to grow.<br/>
              If there’s a brand that we back, we want them to thrive along with us.<br/>
              Like all creators, validation and interaction keeps us going. But this validation can only
              from another honest source. A network of like-minded artists is the only thing that can
              defeat mainstream fashion, algorithms, fakes, and capitalism.
              </p>
            </div>
          }

          {page == 0 ? 
          <div className="div-wrapper" >
            <a className="button" href="https://www.instagram.com/archivesociety/" target="_blank">
              <img src={InstaGreen} width="30" alt="instagram"/>
            </a>
          </div> : <></>}  
          
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
