'use strict';

const React = require('react');
const ReactDOM = require('react-dom');
const ReactAnimate = require('react-addons-css-transition-group');
const photos = require('../lib/photos.js');
const Years = require('./years.js');

const photoClasses = [
  'rotate-left',
  'rotate-right',
  'none'
];

class Story extends React.Component {

  constructor() {
    super();
    this.state = {
      currentYear: '2016',
      currentPhotoYear: '2016',
      currentDirection: 'right'
    };
    this.handleYearClick = this.handleYearClick.bind(this);
  }

  handleYearClick (year) {
    this.setState({
      currentYear: year,
      currentPhotoYear: '',
      currentDirection: (year < this.state.currentYear) ? 'right' : 'left'
    });

    // animate photo items leaving
    // change year to get new photos
    // animate photo items coming in
      // for each photo
        // set class for that photo to come in from left or right
        // set rotation for that photo to be random
    setTimeout(() => {
      this.setState({
        currentPhotoYear: year
      });
    }, 1000);

  }

  render (){

    const {currentYear, currentPhotoYear, currentDirection} = this.state;
    const years = Object.keys(photos);

    const photoItems = photos[currentPhotoYear] ?
      photos[currentPhotoYear].map((photo, i) => {
        const randomClass = photoClasses[Math.floor(Math.random()*photoClasses.length)];
        return (
          <div key={i} className={`photo-wrapper ${randomClass}`}>
            <img className="photo" src={photo}/>
          </div>
        );
      }) : null;

    //
    return (
      <div id="couple" className="story">
        <ReactAnimate
          component="div"
          transitionName={`animate-${currentDirection}`}
          transitionEnterTimeout={1000}
          transitionLeaveTimeout={1000}
          className="photos"
        >
          {photoItems}
        </ReactAnimate>
        <div className="years-wrapper">
          <Years
            years={years}
            currentYear={currentYear}
            onYearClick={this.handleYearClick}
          />
        </div>
      </div>
    );
  }

}

module.exports = Story;
