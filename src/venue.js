'use strict';

var React = require('react');
var ReactDOM = require('react-dom');

class Venue extends React.Component {

  render (){


    return (
      <div id="venue" className="venue">
        <h1>UCLA</h1>
        <div className="school-banner"></div>
        <p>
          The ceremony is going to take place at the beautiful Janss Steps.
          It will overlook two of the most iconic buildings at UCLA, Royce Hall & Powell Library.
          Shortly after, the event will transition to a cocktail hour steps away at Dickson Court North,
          known to students as the "sunken garden".
        </p>
        <h2>Directions to UCLA</h2>
        <h3>From 405 North</h3>
          <ul>
            <li>Exit Sunset Blvd and head East</li>
            <li>Make a right on Hilgard Ave and head South</li>
            <li>Make a right on Westholme Ave</li>
            <li>Make a left on Charles E Young Dr</li>
            <li>Parking structure 2 is on the left</li>
          </ul>
        <h3>From 405 South</h3>
          <ul>
            <li>Exit Wilshire Blvd and head East</li>
            <li>Make a left on Westwood Blvd</li>
            <li>Make an immediate right onto Lindbrook Dr</li>
            <li>Make a slight left onto Hilgard Ave and head North</li>
            <li>Make a left on Westholme Ave</li>
            <li>Make a left on Charles E Young Dr</li>
            <li>Parking structure 2 is on the left</li>
          </ul>
        <iframe src="https://www.google.com/maps/d/u/0/embed?mid=z2VcF8lpIRrI.k_CspSbNLam8" width="640" height="480"></iframe>
      </div>
    );
  }

}

module.exports = Venue;
