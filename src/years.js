const React = require('react');

class Years extends React.Component {

  render () {
    const {years, currentYear, onYearClick} = this.props;
    const yearItems = years.map((year) => {
      return (year === currentYear) ? <span className="year-wrapper selected" key={year}>{year}</span> :
        <span className="year-wrapper" key={year} onClick={onYearClick.bind(null, year)}>
          <span className="year">{year}</span>
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
