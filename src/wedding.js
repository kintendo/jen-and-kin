'use strict';

var React = require('react');
var ReactDOM = require('react-dom');

class Wedding extends React.Component {
  constructor() {
    super();
    this.events = [
      {time: '9:30 a.m.', title: 'tea ceremony',
        description: `
          An intimate ceremony attended exclusively by family, relatives, and close family friends.
          This ritual serves as the bride's symbolic introduction to the groom's family.
        `
      },
      {time: '4:30 p.m.', title: 'wedding ceremony',
        description: `
          The ceremony will be taking place at the top of Janss steps overlooking UCLA’s two most iconic buildings,
          Royce Hall and Powell Library.
          It will be officiated by close friend and fellow UCLA alumni, Carrie Holmes.
          Come witness as Jennifer and Kin have each prepared their own vows to exchange.
        `
      },
      {time: '5:30 p.m.', title: 'cocktail hour',
        description: `
          At the conlcusion of the ceremony,
          stroll on over to Dickson Court North and begin the celebration with a magical hour of passed appetizers,
          select his & her cocktails,
          and craft beers.
        `
      },
      {time: '6:30 p.m.', title: 'reception',
        description: `
          Continue the celebration with the newlyweds with a seven course family-style traditional Chinese banquet followed by a wedding cake from King’s Hawaiian.
          Dinner will be followed by dancing (mandatory per the groom’s request!).
          Look forward to an eclectic playlist curated by the wedding party.
          Keep the night going with lawn games, full service open bars, a flipbook booth, and a coffee bar.
        `
      }
    ];
  }

  render (){
    return (
      <div id="wedding" className="wedding">
        <ul>
          {
            this.events.map( (curEvent, i) => {
              return (
                <li key={i}>
                  <h2>{curEvent.time}<span className="divider">&nbsp;|&nbsp;&nbsp;&nbsp;</span><span className="title">{curEvent.title}</span></h2>
                  <p>{curEvent.description}</p>
                </li>
              );
            })
          }
        </ul>
      </div>
    );
  }

}

module.exports = Wedding;
