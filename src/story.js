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
      currentDirection: 'right',
      fadeOut: false
    };
    this.handleYearClick = this.handleYearClick.bind(this);
  }

  handleYearClick (year) {
    // animate year, fade slide out pictures
    this.setState({
      currentYear: year,
      // currentPhotoYear: '',
      currentDirection: (year < this.state.currentYear) ? 'right' : 'left',
      fadeOut: true
    });
    setTimeout(() => {
      // replace pictures
      this.setState({
        currentPhotoYear: year
      });
      setTimeout( () => {
        // fade slide pictures in
        this.setState({
          fadeOut: false
        });
      }, 1000);
    }, 1200);
  }

  setCurrentPhotos() {
    
  }


  render (){

    const {currentYear, currentPhotoYear, currentDirection, fadeOut} = this.state;
    const years = Object.keys(photos);

    let fabFive = [];
    if (currentPhotoYear) {
      let currentPhotos = [...photos[currentPhotoYear]];
      const curLen = currentPhotos.length;
      for(let i = 0; i < 5 && i < curLen; i++) {
        const randomIndex = Math.floor(Math.random()*currentPhotos.length);
        let randomPhoto = currentPhotos.splice(randomIndex, 1)[0];
        fabFive.push(randomPhoto);
      }
    }

    const photoItems = currentPhotoYear ?
      fabFive.map((photo, i) => {
        const randomClass = photoClasses[Math.floor(Math.random()*photoClasses.length)];
        return (
          <div key={i} className={`photo-wrapper ${randomClass} ${fadeOut?'fade-out':''}`}>
            <img className="photo" src={photo}/>
          </div>
        );
      }) : null;

    //
    return (
      <div id="couple" className="story">
        <div className={`photos ${currentDirection}`}>
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
