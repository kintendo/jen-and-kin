'use strict';

var React = require('react');
var ReactDOM = require('react-dom');

// sub components
var Navbar = require('./navbar.js');
var Story = require('./story.js');
var Wedding = require('./wedding.js');
var Party = require('./party.js');
var Venue = require('./venue.js');
var Hero = require('./hero.js');

const preloadedPhotos = [
  '../img/engagement_photo1.jpg',
  '../img/engagement_photo2.jpg',
  '../img/engagement_photo3.jpg',
  '../img/engagement_photo4.jpg',
  '../img/engagement_photo5.jpg'
];

class App extends React.Component {

  render (){

    return (
      <div>
        <div className="preloader"></div>
        <Hero />
        <Navbar />
        <Wedding />
        <Venue />
        <Party />
        <Story />
      </div>
    );
  }

}

module.exports = App;
