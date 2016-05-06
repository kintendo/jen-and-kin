'use strict';

var React = require('react');
var ReactDOM = require('react-dom');

class Venue extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      pointerEvents: 'none'
    };
    this.enableFrameClick = this.enableFrameClick.bind(this);
    this.disableFrameClick = this.disableFrameClick.bind(this);
  }

  enableFrameClick () {
    this.setState({
      pointerEvents: 'auto'
    });
  }

  disableFrameClick () {
    if (this.state.pointerEvents === 'auto') {
      this.setState({
        pointerEvents: 'none'
      });
    }
  }

  render (){

    const enableClick = {
      pointerEvents: this.state.pointerEvents
    };

    return (
      <div id="venue" className="venue" onClick={this.disableFrameClick}>
        <img src="../img/ucla_banner.png"></img>
        <div className="content-wrapper">
          <h1>U<span className="gold">C</span>LA</h1>
          <div className="school-banner"></div>
          <p>
            {`The ceremony will be taking place at the summit of Janss Steps.
            It will overlook two of the most iconic buildings at UCLA, Royce Hall & Powell Library.
            Shortly after, the event will transition to a cocktail hour steps away at Dickson Court North,
            known to students as the "sunken garden".`}
          </p>
          <h2>{`Directions to UCLA`}</h2>
          <div>
            <p>10745 Dickson Court<br/>
            Los Angeles, CA 90095</p>
          </div>
          <h3>{`From 405 North`}</h3>
            <ul>
              <li>{`Exit Sunset Blvd and head East`}</li>
              <li>{`Make a right on Hilgard Ave and head South`}</li>
              <li>{`Make a right on Westholme Ave`}</li>
              <li>{`Make a left on Charles E Young Dr`}</li>
              <li>{`Parking structure 2 is on the left`}</li>
            </ul>
          <h3>{`From 405 South`}</h3>
            <ul>
              <li>{`Exit Wilshire Blvd and head East`}</li>
              <li>{`Make a left on Westwood Blvd`}</li>
              <li>{`Make an immediate right onto Lindbrook Dr`}</li>
              <li>{`Make a slight left onto Hilgard Ave and head North`}</li>
              <li>{`Make a left on Westholme Ave`}</li>
              <li>{`Make a left on Charles E Young Dr`}</li>
              <li>{`Parking structure 2 is on the left`}</li>
            </ul>
            <div onClick={this.enableFrameClick} onMouseLeave={this.disableFrameClick}>
              <iframe style={enableClick} src="https://www.google.com/maps/d/u/0/embed?mid=z2VcF8lpIRrI.k_CspSbNLam8"></iframe>
            </div>
          </div>
      </div>
    );
  }

}

module.exports = Venue;
