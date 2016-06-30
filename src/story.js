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
      fadeOut: false,
      currentInterval: 0,
      sexySix: []
    };
    this.handleYearClick = this.handleYearClick.bind(this);
    this.setCurrentPhotos = this.setCurrentPhotos.bind(this);
  }

  componentWillMount () {
    this.setCurrentPhotos(this.state.currentYear);
  }

  handleYearClick (year) {

    if (year === this.state.currentYear) {
        return;
    }

    // animate year, fade & slide out pictures
    this.setState({
      currentYear: year,
      fadeOut: true
    });
    setTimeout(() => {
      clearInterval(this.state.currentInterval);
      // replace pictures
      this.setCurrentPhotos(year);
      setTimeout( () => {
        // fade slide pictures in
        this.setState({
          fadeOut: false
        });
      }, 500);
    }, 800);
  }

  setCurrentPhotos(year) {
    let sexySix = [];
    if (year) {
      let currentPhotos = [...photos[year]];
      // grab 6 photos
      for (let i = 0; i < 6 || currentPhotos.length <= 1 ; i++) {
        let randomPhotoIndex = Math.floor(Math.random()*currentPhotos.length);
        sexySix.push(currentPhotos.splice(randomPhotoIndex, 1)[0]);
      }
    }

    this.setState({
      sexySix: sexySix
    });
  }

  render (){

    const {
      currentYear,
      sexySix,
      fadeOut
    } = this.state;
    const years = Object.keys(photos);

    const photoItems = sexySix.map((photo, i) => {
        return (
            <div key={i} className={`photo-wrapper animated`}>
                <div className="photo" style={{backgroundImage: `url(${photo})`}}>
                </div>
            </div>
        );
    })

    return (
      <div id="couple" className="story">
        <div className="story-wrapper">
            <div className="prologue">
              <h4>One Dozen Years</h4>
              <p>
                {`Jen and Kin are finally tying the knot after twelve wonderful years together.
                Click the years below to get a blast from the past
                and see the happy couple through the many years.`}
              </p>
            </div>
            <div className="years-wrapper">
              <Years
                years={years}
                currentYear={currentYear}
                onYearClick={this.handleYearClick}
              />
            </div>
            <div className={`photos animated ${fadeOut?'fadeOut':'fadeIn'}`}>
              {photoItems}
            </div>
        </div>
      </div>
    );
  }

}

module.exports = Story;
