'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var ReactAnimate = require('react-addons-css-transition-group');

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
    this.years = ['2004', '2005', '2016'];
  }

  render (){
    const {portraitIndex, landscapeIndex, facebookIndex, instagramIndex} = this.state;
    return (
      <div id="couple" className="story">
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
