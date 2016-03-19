'use strict';

var React = require('react');
var ReactDOM = require('react-dom');

class Venue extends React.Component {

  render (){

    let text = 'Info about the venue';

    return (
      <div className="venue-info">
        {text}
      </div>
    );
  }

}

module.exports = Venue;
