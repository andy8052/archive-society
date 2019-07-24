import React, { Component } from 'react';

export default class Video extends Component {
  render() {
    return (
        <video width="100%" poster={process.env.PUBLIC_URL+"/thumbnail.png"} controls autoplay>
          <source src={process.env.PUBLIC_URL+"/archive_teaser.mp4"} type="video/mp4"></source>
          video not supported
        </video>
    );
  }
}
