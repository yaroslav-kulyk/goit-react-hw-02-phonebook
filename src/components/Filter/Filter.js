import PropTypes from 'prop-types';
import s from './Filter.module.css';

const Filter = ({ value, onChange }) => (
  <label className={s.filter}>
    Find contacts by name
    <input
      type="text"
      value={value}
      onChange={onChange}
      className={s.filterInput}
    ></input>
  </label>
);

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default Filter;
