'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var smoothScroll = require('smooth-scroll');
var gumShoe = require('gumshoe');

class Navbar extends React.Component {

  constructor(props) {
    super(props);

    this.handleScroll = this.handleScroll.bind(this);

    this.state = {
      stick: ''
    };
  }

  handleScroll() {
    if (document.body.scrollTop > window.innerHeight - 50) {
      this.setState({stick: 'stick'});
    } else {
      this.setState({stick: ''});
    }
  }

  componentDidMount() {
      window.addEventListener('scroll', this.handleScroll);
      smoothScroll.init({
        speed: 1000,
        offset: 55
      });
      gumShoe.init();
  }

  componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
  }

  render() {

    return (
      <div data-gumshoe-header ref="navbar" className={`navbar ${this.state.stick}`}>
        <ul data-gumshoe>
          <li><a data-scroll href="#couple">the happy couple</a></li>
          <li><a data-scroll href="#wedding">the big day</a></li>
          <li><a data-scroll href="#venue">the venue</a></li>
        </ul>
      </div>
    );
  }

}

module.exports = Navbar;
