'use strict';

var React = require('react');
var ReactDOM = require('react-dom');

class Wedding extends React.Component {
  constructor() {
    super();
    this.events = [
      {time: '9:30 a.m.', title: 'the tea ceremony',
        description: `
          Both the bride and groom will participate in a traditional Chinese/Vietnamese tea ceremony.
          A Buddhist monk has referenced the Chinese farmer's almanac.
          Based on our Chinese Zodiac signs, the monk has the determined the most auspicious times to start and end the ceremony.
        `
      },
      {time: '4:30 p.m.', title: 'the wedding ceremony',
        description: `
          Celebrating our alma mater, proctored by fellow alumni and good friend Carrie Holmes.
        `
      },
      {time: '5:30 p.m.', title: 'the cocktail hour',
        description: `
          Join us for a magical hour with fresh craft cocktails & beer.
          Prepare for some surprises up our sleeves.
        `
      },
      {time: '6:30 p.m.', title: 'the reception',
        description: `
          Join us for a traditional Chinese banquet dinner, catered by Capital Seafood.
        `
      }
    ];
  }

  render (){
    return (
      <div className="wedding-info">
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
