'use strict';

const React = require('react');
const ReactDOM = require('react-dom');
const ReactAnimate = require('react-addons-css-transition-group');
const photos = require('../lib/photos.js');
const Years = require('./years.js');

const SIDES = ['leftPhoto', 'rightPhoto'];

class Story extends React.Component {

  constructor() {
    super();
    this.state = {
      currentYear: '2016',
      currentDirection: 'right',
      fadeOut: false,
      currentInterval: 0,
      leftPhoto: '',
      rightPhoto: '',
      leftPhotoClass: '',
      rightPhotoClass: ''
    };
    this.handleYearClick = this.handleYearClick.bind(this);
    this.setCurrentPhotos = this.setCurrentPhotos.bind(this);
    this.pickNewPhoto = this.pickNewPhoto.bind(this);
  }

  componentWillMount () {
    this.setCurrentPhotos(this.state.currentYear);
  }

  handleYearClick (year) {
    // animate year, fade & slide out pictures
    const currentDirection = (year < this.state.currentYear) ? 'Right' : 'Left';
    const oppositeDirection = (year < this.state.currentYear) ? 'Left' : 'Right';
    this.setState({
      currentYear: year,
      currentDirection: currentDirection,
      fadeOut: true
    });
    setTimeout(() => {
      clearInterval(this.state.currentInterval);
      // replace pictures
      this.setCurrentPhotos(year, oppositeDirection);
      setTimeout( () => {
        // fade slide pictures in
        this.setState({
          fadeOut: false,
          currentDirection: oppositeDirection
        });
          // every 3 seconds
          const newInterval = setInterval(()=> {
            // pick a side
            const currentSide = SIDES[Math.floor(Math.random()*2)];
            // flip out
            this.setState({
              [`${currentSide}Class`]: 'flipOutX'
            });
            setTimeout(() => {
              // pick new photo & flip in
              this.setState({
                [`${currentSide}Class`]: 'flipInX',
                [currentSide]: this.pickNewPhoto()
              });
            }, 1000);
          }, 3000);
          this.setState({currentInterval: newInterval});
      }, 500);
    }, 800);
  }

  pickNewPhoto() {
    const {currentYear, leftPhoto, rightPhoto} = this.state;
    const currentPhotos = photos[currentYear];
    let retries = 0;
    let randomPhoto = '';
    do {
      if (retries > 10) break;
      randomPhoto = currentPhotos[Math.floor(Math.random()*currentPhotos.length)];
      retries++;
    } while (randomPhoto === leftPhoto || randomPhoto === rightPhoto);
    return randomPhoto;
  }

  setCurrentPhotos(year, direction) {

    let leftPhoto = '';
    let rightPhoto = '';
    if (year) {
      let currentPhotos = [...photos[year]];

      // grab a photo
      let randomPhotoIndex = Math.floor(Math.random()*currentPhotos.length);
      leftPhoto = currentPhotos.splice(randomPhotoIndex, 1)[0];

      // grab another
      randomPhotoIndex = Math.floor(Math.random()*currentPhotos.length);
      rightPhoto = currentPhotos.splice(randomPhotoIndex, 1)[0];
    }

    this.setState({
      leftPhoto: leftPhoto,
      rightPhoto: rightPhoto,
      //currentDirection: direction
    });
  }

  render (){

    const {
      currentYear,
      currentDirection,
      leftPhoto,
      leftPhotoClass,
      rightPhoto,
      rightPhotoClass,
      fadeOut
    } = this.state;
    const years = Object.keys(photos);

    const photoItems = [
      <div key="left-photo" className={`photo-wrapper animated ${leftPhotoClass}`}>
        <img className="photo" src={leftPhoto}/>
      </div>,
      <div key="right-photo" className={`photo-wrapper animated ${rightPhotoClass}`}>
        <img className="photo" src={rightPhoto}/>
      </div>
    ];

    return (
      <div id="couple" className="story">
        <div className={`photos animated ${fadeOut?'fadeOut':'fadeIn'}${currentDirection}`}>
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
