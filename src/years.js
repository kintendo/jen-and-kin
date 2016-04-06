const React = require('react');

class Years extends React.Component {

  render () {
    const {years, currentYear, onYearClick} = this.props;
    const yearItems = years.map((year) => {
      return (year === currentYear) ? <span className="selected" key={year}>{year}</span> :
        <span key={year} onClick={onYearClick.bind(null, year)}>
          {year}
        </span>;
    });

    return (
      <div className="years">
        {yearItems}
      </div>
    );
  }
}
module.exports = Years;
