// to generate bundle:
// browserify -t [ babelify --presets [ react ] ] main.js -o bundle.js

// main.js

var React = require('react');
var ReactDOM = require('react-dom');
// var App = require('App.js');

ReactDOM.render(
  <h1>Hello, world!</h1>,
  document.getElementById('app')
);
