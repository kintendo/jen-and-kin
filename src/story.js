'use strict';

var React = require('react');
var ReactDOM = require('react-dom');

class Story extends React.Component {

  constructor() {
    super();
    this.state = {
      portraitIndex: 0,
      landscapeIndex: 0,
      facebookIndex: 0,
      instagramIndex: 0
    };
    this.portaitPhotos = [];
    this.landscapePhotos = [];
    this.facebookPhotos = [];
    this.instagramPhotos = [];
  }

  render (){
    const {portraitIndex, landscapeIndex, facebookIndex, instagramIndex} = this.state;
    return (
      <div className="story">
        <div className="portrait">
        </div>
        <div className="landscape">
        </div>
        <div className="facebook">
        </div>
        <div clasName="instagram">
        </div>
      </div>
    );
  }

}

module.exports = Story;
