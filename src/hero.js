'use strict';

var React = require('react');
var ReactDOM = require('react-dom');

const backgroundClasses = [
  'first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh', 'eighth'
];

class Hero extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      backgroundIndex: 4,
      fadeOut: false
    };
  }

  componentDidMount () {
    setInterval( () => {
      // fade out
      this.setState({
        fadeOut: true
      });
      setTimeout( () => {
        // change image
        this.setState({
          backgroundIndex: Math.floor(Math.random()*8)
        });
        setTimeout( () => {
          // fade in
          this.setState({
            fadeOut: false
          });
        }, 1000);
      }, 1000);
    }, 8000);
  }

  render (){

    const {backgroundIndex, fadeOut} = this.state;
    const randomBackground = backgroundClasses[backgroundIndex];
    // just an empty div w/ a bg picture or video even
    return (
      <div className={`hero ${randomBackground} ${fadeOut ? 'fade-out' : ''}`}>
      </div>
    );
  }

}

module.exports = Hero;
