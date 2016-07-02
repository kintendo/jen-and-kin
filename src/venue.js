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
            <div>
              <h1>U<span className="gold">C</span>LA</h1>
              <div className="school-banner"></div>
              <p>
                {`The ceremony will be taking place at the summit of Janss Steps.
                It will overlook two of the most iconic buildings at UCLA, Royce Hall & Powell Library.
                Shortly after, the event will transition to a cocktail hour steps away at Dickson Court North,
                known to students as the "Sunken Garden".`}
              </p>
            </div>

            <div className="directions-wrapper">
              <div className="directions">
                  <h2>{`Directions`}</h2>
                  <div>
                    <p>10745 Dickson Court<br/>
                    Los Angeles, CA 90095</p>
                    <p>Both the ceremony and reception will be right at pickup/dropoff address above.</p>
                    <p>Directions to free parking can be found below and is just an 8 minute walk from the venue.</p>
                  </div>
                  <h3>{`From 405 North`}</h3>
                    <ul>
                      <li><p>{`Exit Sunset Blvd and head East`}</p></li>
                      <li><p>{`Make a right on Hilgard Ave and head South`}</p></li>
                      <li><p>{`Make a right on Westholme Ave`}</p></li>
                      <li><p>{`Entrance to parking structure 2 is immediately on the left`}</p></li>
                    </ul>
                  <h3>{`From 405 South`}</h3>
                  <ul>
                    <li><p>{`Exit Wilshire Blvd and head East`}</p></li>
                    <li><p>{`Make a left on Westwood Blvd`}</p></li>
                    <li><p>{`Make an immediate right onto Lindbrook Dr`}</p></li>
                    <li><p>{`Make a slight left onto Hilgard Ave and head North`}</p></li>
                    <li><p>{`Make a left on Westholme Ave`}</p></li>
                    <li><p>{`Entrance to parking structure 2 is immediately on the left`}</p></li>
                  </ul>
              </div>
              <div className="map">
                <div onClick={this.enableFrameClick} onMouseLeave={this.disableFrameClick}>
                  <iframe style={enableClick} src="https://www.google.com/maps/d/u/0/embed?mid=z2VcF8lpIRrI.k_CspSbNLam8"></iframe>
                </div>
              </div>
            </div>
        </div>
      </div>
    );
  }

}

module.exports = Venue;
