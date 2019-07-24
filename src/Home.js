import React, { Component } from 'react';
import LogoStickerGreen from './logostickergreen.png';
import InstaGreen from './insta-green.png';

export default class Home extends Component {
  render() {
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
            <div className="col one">
              <img src={LogoStickerGreen} alt="Archive Society" width="1500" id="logo-v" />
            </div>
            <div>
              <p id="timer2" align="center"></p>
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
}
