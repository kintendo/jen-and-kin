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


class App extends React.Component {

  render (){

    return (
      <div>
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
