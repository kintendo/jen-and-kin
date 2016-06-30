const React = require('react');

class Years extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      displayYear: props.currentYear
    };
  }

  componentDidUpdate() {
    const targetYear = parseInt(this.props.currentYear, 10);

    if (targetYear) {
      const displayYear = parseInt(this.state.displayYear, 10);
      const newDisplayYear = (displayYear < targetYear) ? displayYear + 1 : displayYear - 1;
      if (displayYear != targetYear) {
        setTimeout(()=> {
          this.setState({
            displayYear: newDisplayYear.toString()
          });
        }, 100);
      }
    }
  }

  render () {
    const {years, currentYear, onYearClick} = this.props;
    const {displayYear} = this.state;

    const nextYear = currentYear < 2016 ? currentYear + 1 : 2016;
    const prevYear = currentYear > 2004 ? currentYear - 1 : 2004;

    const yearItems = years.map((year) => {
      const isSame = (displayYear === year);
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
