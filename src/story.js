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
      currentDirection: 'right',
      fadeOut: false
    };
    this.handleYearClick = this.handleYearClick.bind(this);
    this.setCurrentPhotos = this.setCurrentPhotos.bind(this);
  }

  componentWillMount () {
    this.setCurrentPhotos(this.state.currentYear);
  }

  handleYearClick (year) {
    // animate year, fade slide out pictures
    const currentDirection = (year < this.state.currentYear) ? 'right' : 'left';
    const oppositeDirection = (year < this.state.currentYear) ? 'left' : 'right';

    this.setState({
      currentYear: year,
      currentDirection: currentDirection,
      fadeOut: true
    });
    setTimeout(() => {
      // replace pictures & classes & flip direction
      this.setCurrentPhotos(year, oppositeDirection);
      setTimeout( () => {
        // fade slide pictures in
        this.setState({
          fadeOut: false,
          currentDirection: ''
        });
      }, 800);
    }, 1000);
  }

  setCurrentPhotos(year, direction) {
    // set current photos in state
    // set current photo classes in state
    let fabFive = [];
    let randomClasses = [];
    if (year) {
      let currentPhotos = [...photos[year]];
      const curLen = currentPhotos.length;
      for(let i = 0; i < 5 && i < curLen; i++) {
        // random photo
        const randomPhotoIndex = Math.floor(Math.random()*currentPhotos.length);
        let randomPhoto = currentPhotos.splice(randomPhotoIndex, 1)[0];
        fabFive.push(randomPhoto);
        //random photo class
        const randomClassIndex = Math.floor(Math.random()*photoClasses.length);
        randomClasses.push(photoClasses[randomClassIndex]);
      }
    }
    this.setState({
      currentPhotos: fabFive,
      currentClasses: randomClasses,
      currentDirection: direction
    });
  }

  render (){

    const {
      currentYear,
      currentDirection,
      currentPhotos,
      currentClasses,
      fadeOut
    } = this.state;
    const years = Object.keys(photos);

    const photoItems = currentPhotos.map((photo, i) => {
      return (
        <div key={i} className={`photo-wrapper ${currentClasses[i]} `}>
          <img className="photo" src={photo}/>
        </div>
      );
    });

    return (
      <div id="couple" className="story">
        <div className={`photos ${fadeOut?'fade-out':''} ${currentDirection}`}>
          {photoItems}
        </div>
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
