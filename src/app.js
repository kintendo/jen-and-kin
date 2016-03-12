'use strict';

var React = require('react');
var ReactDOM = require('react-dom');

class App extends React.Component {

  render (){

    let text = 'Hello again, world!';

    return (
      <div>
        {text}
        {/**/}
      </div>
    );
  }

}

module.exports = App;
