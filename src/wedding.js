'use strict';

var React = require('react');
var ReactDOM = require('react-dom');

class Wedding extends React.Component {
  constructor() {
    super();
    this.events = [
      {time: '9:30 a.m.', title: 'the tea ceremony',
        description: `
          An intimate ceremony attended exclusively by family, relatives, and close family friends.
          This ritual serves as the bride's symbolic introduction to the groom's family.
        `
      },
      {time: '4:30 p.m.', title: 'the wedding ceremony',
        description: `
          Taking place at the top of Janss steps in front of Shapiro fountain which overlooks UCLA’s two most iconic buildings, Royce Hall and Powell Library.
          Officiated by close friend and fellow UCLA alumni, Carrie Holmes.
          Jennifer and Kin have each prepared their own vows to exchange.
        `
      },
      {time: '5:30 p.m.', title: 'the cocktail hour',
        description: `
          Stroll over to Dickson Court North and begin the celebration with a magical hour of passed appetizers, select his & her cocktails, and craft beers.
        `
      },
      {time: '6:30 p.m.', title: 'the reception',
        description: `
          Continue the celebration with the newlyweds with a seven course family-style traditional Chinese banquet followed by wedding cake from King’s Hawaiian.
          Dinner is followed by dancing (mandatory per the groom’s request!).
          Look forward to an eclectic playlist curated by the wedding party.
          Keep the night going with lawn games, a flipbook booth, a full service open bar, and a coffee bar.
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
                  <h1>{curEvent.time}</h1>
                  <h2>{curEvent.title}</h2>
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
