'use strict';

var React = require('react');
var ReactDOM = require('react-dom');

// sub components
var Navbar = require('./navbar.js');
var Story = require('./story.js');
var Wedding = require('./wedding.js');
var Venue = require('./venue.js');
var Hero = require('./hero.js');

class App extends React.Component {

  render (){

    return (
      <div>
        <div className="hero-container">
          <Hero />
          <Navbar />
        </div>
        <Wedding />
        <Venue />
        <Story />
      </div>
    );
  }

}

module.exports = App;
