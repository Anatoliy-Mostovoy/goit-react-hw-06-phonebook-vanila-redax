import React from 'react';
import PropTypes from 'prop-types';
import s from './Filter.module.css';
import { connect } from 'react-redux';
import action from '../../redux/contacts/contacts-action';

const Filter = ({ value, onChange }) => {
  return (
    <label className={s.Label}>
      Фильтр по имени:
      <input
        className={s.Input}
        type="text"
        value={value}
        onChange={onChange}
      />
    </label>
  );
};

const mapStateToProps = state => {
  return {
    value: state.filter,
  };
};

const mapDispatchToProp = dispatch => {
  return {
    onChange: evt => dispatch(action.changeFilterValue(evt.target.value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProp)(Filter);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
