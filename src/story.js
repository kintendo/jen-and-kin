'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var ReactAnimate = require('react-addons-css-transition-group');
var photos = require('../lib/photos.js');
var Years = require('./years.js');

class Story extends React.Component {

  constructor() {
    super();
    this.state = {
      currentYear: '2016'
    };
    this.handleYearClick = this.handleYearClick.bind(this);
  }

  handleYearClick (year) {
    this.setState({
      currentYear: ''
    });
    setTimeout(() => {
      this.setState({
        currentYear: year
      });
    }, 600);
  }

  render (){

    const {currentYear} = this.state;
    const years = Object.keys(photos);

    const photoItems = photos[currentYear] ?
      photos[currentYear].map((photo, i) => {
        return (
          <div key={i} className="photo-wrapper">
            <img className="photo" src={photo}/>
          </div>
        );
      }) : null;
    return (
      <div id="couple" className="story">
        <ReactAnimate
          component="div"
          transitionName="animate"
          transitionEnterTimeout={300}
          transitionLeaveTimeout={300}
          className="photos"
        >
          {photoItems}
        </ReactAnimate>
        <Years
          years={years}
          currentYear={currentYear}
          onYearClick={this.handleYearClick}
        />
      </div>
    );
  }

}

module.exports = Story;
