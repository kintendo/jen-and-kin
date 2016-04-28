'use strict';

const React = require('react');
const ReactDOM = require('react-dom');
const ReactAnimate = require('react-addons-css-transition-group');
const photos = require('../lib/photos.js');
const Years = require('./years.js');

const photoClasses = [
  'rotate-left',
  'rotate-slight-left',
  'rotate-major-left',
  'rotate-right',
  'rotate-slight-right',
  'rotate-major-left',
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

    setTimeout(() => {
      this.setState({
        currentPhotoYear: year
      });
    }, 1000);

  }


  render (){

    const {currentYear, currentPhotoYear, currentDirection} = this.state;
    const years = Object.keys(photos);

    let fabFive = [];
    if (currentPhotoYear) {
      const currentPhotos = photos[currentPhotoYear]
      for(let i = 0; i < 5; i++) {
        let randomPhoto = currentPhotos[Math.floor(Math.random()*photoClasses.length)];
        fabFive.push(randomPhoto);
        // TODO: check for dupes!
      }
    }

    const photoItems = currentPhotoYear ?
      fabFive.map((photo, i) => {
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
