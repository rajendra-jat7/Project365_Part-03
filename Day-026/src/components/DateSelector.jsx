import PropTypes from 'prop-types';

const DateSelector = ({ date, handleDateChange }) => {
  return (
    <input
      type="date"
      value={date}
      onChange={(e) => handleDateChange(e.target.value)}
    />
  );
};

DateSelector.propTypes = {
  date: PropTypes.node.isRequired,
  handleDateChange: PropTypes.node.isRequired,
};

export default DateSelector;