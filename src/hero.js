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
      fadeOut: false,
      fadeIn: false
    };
  }

  componentDidMount () {
    // first fade in
    setTimeout( () => {
      this.setState({fadeIn: true});
      setInterval( () => {
        // fade out
        this.setState({
          fadeOut: true
        });
        setTimeout( () => {
          // change image
          let newIndex = Math.floor(Math.random()*8);
          while(newIndex === this.state.backgroundIndex){
            newIndex = Math.floor(Math.random()*8);
          }
          this.setState({
            backgroundIndex: newIndex
          });
          setTimeout( () => {
            // fade in
            this.setState({
              fadeOut: false
            });
          }, 1000);
        }, 1000);
      }, 8000);
    }, 500);
  }

  render (){

    const {backgroundIndex, fadeOut, fadeIn} = this.state;
    const randomBackground = backgroundClasses[backgroundIndex];
    // just an empty div w/ a bg picture or video even
    return (
      <div className={`hero ${randomBackground} ${fadeIn ? 'fade-in' : ''} ${fadeOut ? 'fade-out' : ''}`}>
      </div>
    );
  }

}

module.exports = Hero;
