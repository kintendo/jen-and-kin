'use strict';

var React = require('react');
var ReactDOM = require('react-dom');

class Wedding extends React.Component {
  constructor() {
    super();
    this.events = [
      {time: '9:30 a.m.', title: 'the tea ceremony',
        description: `
          Both of us will be participating in a traditional Chinese/Vietnamese tea ceremony.
        `
      },
      {time: '4:30 p.m.', title: 'the wedding ceremony',
        description: `
          We would love the pleasure of your company in celebrating our marriage.
          Taking place in the most iconic location at UCLA, officiated by fellow alumni and good friend Carrie Holmes.
        `
      },
      {time: '5:30 p.m.', title: 'the cocktail hour',
        description: `
          Enjoy a magical hour with us and celebrate with fresh craft cocktails & beer.
        `
      },
      {time: '6:30 p.m.', title: 'the reception',
        description: `
          Join us for traditional Chinese banquet dinner, catered by Capital Seafood.
          Dancing will be mandatory.
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
