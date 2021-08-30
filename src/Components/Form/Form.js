import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import s from './Form.module.css';
import { connect } from 'react-redux';
import action from '../../redux/contacts/contacts-action';

const Form = ({ submitMethod }) => {
  Form.propTypes = {
    submitMethod: PropTypes.func.isRequired,
  };

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [id, setId] = useState('');

  const uniqId = uuidv4();

  const handleClick = event => {
    const { value, name, id } = event.target;

    switch (name) {
      case 'name':
        setName(value.trim());
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }

    setId(id);
  };

  const handleSubmit = event => {
    event.preventDefault();
    submitMethod({ name, number, id });
    resetState();
  };

  const resetState = () => {
    setName('');
    setNumber('');
    setId('');
  };

  return (
    <div className={s.Container}>
      <form className={s.Form} onSubmit={handleSubmit}>
        <label className={s.Label} htmlFor={uniqId}>
          Name
          <input
            className={s.Input}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            value={name}
            onChange={handleClick}
            id={uuidv4()}
          />
        </label>

        <label>
          Number
          <input
            type="tel"
            className={s.Input}
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            onChange={handleClick}
            value={number}
            id={uuidv4()}
          />
        </label>
        <button type="submit" className={s.Button}>
          Отправить
        </button>
      </form>
    </div>
  );
};

const mapDispatchToProp = dispatch => {
  return {
    submitMethod: ({ name, number, id }) =>
      dispatch(action.getSubmitData({ name, number, id })),
  };
};

export default connect(null, mapDispatchToProp)(Form);
