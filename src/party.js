'use strict';

var React = require('react');
var ReactDOM = require('react-dom');

class Party extends React.Component {
  constructor() {
    super();
  }

  render (){
    return (
      <div id="party" className="party">
      </div>
    );
  }

}

module.exports = Party;
