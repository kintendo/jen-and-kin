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
    const yearItems = years.map((year) => {
      return (
        <li className="year-wrapper" key={year} onClick={onYearClick.bind(null, year)}>
          <span className="year">{year}</span>
        </li>
      );
    });


    const multiplier = 2016 - parseInt(currentYear, 10) + 1;
    const offset = (window.innerWidth < 1000 ? 57 : 77) * multiplier;
    const currentYearStyle = {
      left: `-${offset}px`
    };

    return (
      <ul className="years">
        {yearItems}
        <li className="current-year" style={currentYearStyle}>{displayYear}</li>
      </ul>
    );
  }
}
module.exports = Years;
