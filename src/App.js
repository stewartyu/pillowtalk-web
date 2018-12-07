import React, { Component } from 'react';
import logo from '../public/logo.png';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.videos = [
      {
        thumbnail: `https://s3.amazonaws.com/casper-sleep-spa-958020687612-us-east-1/pillowtalk/pillow-thumbnail.jpg`,
        url: `https://s3.amazonaws.com/casper-sleep-spa-958020687612-us-east-1/pillowtalk/pillow.mp4`,
        title: `The Casper Pillow`
      },
      {
        thumbnail: `https://s3.amazonaws.com/casper-sleep-spa-958020687612-us-east-1/pillowtalk/sheets-thumbnail.jpg`,
        url: `https://s3.amazonaws.com/casper-sleep-spa-958020687612-us-east-1/pillowtalk/sheets.mp4`,
        title: `The Cool Supima Sheets`
    },
      {
        thumbnail: `https://s3.amazonaws.com/casper-sleep-spa-958020687612-us-east-1/pillowtalk/dog-mattress-thumbnail.jpg`,
        url: `https://s3.amazonaws.com/casper-sleep-spa-958020687612-us-east-1/pillowtalk/dog-mattress.mp4`,
        title: `The Casper Dog Mattress`
      },
      {
        thumbnail: `https://s3.amazonaws.com/casper-sleep-spa-958020687612-us-east-1/pillowtalk/bedtime-story-thumbnail.jpg`,
        url: `https://s3.amazonaws.com/casper-sleep-spa-958020687612-us-east-1/pillowtalk/bedtime-story.mp4`,
        title: `Bedtime Story`
      },
    ];

    this.state = {
      isVideoPlaying: false,
      currentVideo: 0,
    };

    this.closeVideo = this.closeVideo.bind(this);
    this.selectVideo = this.selectVideo.bind(this);
  }

  closeVideo() {
    this.setState({
      isVideoPlaying: false,
    });
  }

  selectVideo(i) {
    this.setState({
      isVideoPlaying: true,
      currentVideo: i,
    });
  }

  renderList() {
    return (
      <ul className="App-list">
        {this.videos.map((video, i) => {
          return (
            <li
              className="App-list-item"
              key={`${video.thumbnail}${i}`}
              onClick={this.selectVideo.bind(this, i)}
            >
              <div className="App-thumbnail-container">
                <img
                  alt={video.title}
                  className="App-thumbnail"
                  src={video.thumbnail}
                />
                <div className="App-button" />
              </div>
              <p className="App-video-title">{video.title}</p>
            </li>
          );
        })}
      </ul>
    );
  }

  renderHome() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p className="App-intro">An immersive ASMR experience</p>
        </div>
        {this.renderList()}
      </div>
    );
  }

  renderVideo() {
    return (
      <div
        className="App-video-container"
        onClick={this.closeVideo}
      >
        <video
          autoPlay
          className="App-video"
          src={this.videos[this.state.currentVideo].url}
          controls
        />
      </div>
    );
  }

  render() {
    return this.state.isVideoPlaying ? this.renderVideo() : this.renderHome();
  }
}

export default App;
