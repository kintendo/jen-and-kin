'use strict';

var React = require('react');
var ReactDOM = require('react-dom');

class Navbar extends React.Component {

  render (){

    let text = 'Navbar';

    return (
      <div className="navbar">
        <ul>
          <li><a>the happy couple</a></li>
          <li><a>the big day</a></li>
          <li><a>the venue</a></li>
        </ul>
      </div>
    );
  }

}

module.exports = Navbar;
