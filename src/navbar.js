'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var smoothScroll = require('smooth-scroll');
var gumShoe = require('gumshoe');
var ReactAnimate = require('react-addons-css-transition-group');

class Navbar extends React.Component {

  constructor(props) {
    super(props);

    this.handleScroll = this.handleScroll.bind(this);

    this.state = {
      stick: ''
    };
  }

  handleScroll() {
    if (document.body.scrollTop > window.innerHeight - 45) {
      this.setState({stick: 'stick'});
    } else {
      this.setState({stick: ''});
    }
  }

  componentDidMount() {
      window.addEventListener('scroll', this.handleScroll);
      smoothScroll.init({
        speed: 1000,
        offset: 40
      });
      gumShoe.init({
        offset: 80
      });
  }

  componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
  }

  render() {

    return (
      <ReactAnimate
        component="nav"
        data-gumshoe-header
        ref="navbar"
        className={`navbar ${this.state.stick}`}
        transitionName="animate"
        transitionAppear={true}
        transitionAppearTimeout={2000}
        transitionEnterTimeout={0}
        transitionLeaveTimeout={0}
      >
        <ul data-gumshoe>
          <li><a data-scroll href="#wedding">the big day</a></li>
          <li><a data-scroll href="#venue">the venue</a></li>
          <li><a data-scroll href="#party">the wedding party</a></li>
          <li><a data-scroll href="#couple">the happy couple</a></li>
        </ul>
      </ReactAnimate>
    );
  }

}

module.exports = Navbar;
