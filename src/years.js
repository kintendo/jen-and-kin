const React = require('react');

class Years extends React.Component {

  render () {
    const {years, currentYear, onYearClick} = this.props;

    const nextYear = currentYear < 2015 ? currentYear + 1 : 2015;
    const prevYear = currentYear > 2004 ? currentYear - 1 : 2004;

    const yearItems = years.map((year) => {
      const isSame = (currentYear === year);
      return (
        <li className={`year-wrapper ${isSame?'current-year':''}`} key={year} onClick={onYearClick.bind(null, year)}>
          <span className="year">{year}</span>
        </li>
      );
    });

    return (
      <ul className="years">
        <li className="year-wrapper year-direction" onClick={onYearClick.bind(null, prevYear)}>{'<'}</li>
        {yearItems}
        <li className="year-wrapper year-direction" onClick={onYearClick.bind(null, nextYear)}>{'>'}</li>
      </ul>
    );
  }
}
module.exports = Years;
