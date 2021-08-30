import React from 'react';
import PropTypes from 'prop-types';
import s from './Contacts.module.css';
import { connect } from 'react-redux';
import action from '../../redux/contacts/contacts-action';

const Contacts = ({ contacts, deleteFunction }) => {
  return (
    <div>
      <ul>
        {contacts &&
          contacts.map(contact => {
            return (
              <li className={s.List} key={contact.id}>
                {contact.name}: {contact.number}
                <button
                  className={s.Button}
                  type="button"
                  onClick={() => {
                    deleteFunction(contact.id);
                  }}
                >
                  Delete
                </button>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

const mapStateToProps = state => {
  const { contacts, filter } = state;
  const visibleContact = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase()),
  );

  return {
    contacts: visibleContact,
  };
};

const mapDispatchToProp = dispatch => {
  return {
    deleteFunction: id => {
      return dispatch(action.handleDelete(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProp)(Contacts);

Contacts.propTypes = {
  contacts: PropTypes.array.isRequired,
  deleteFunction: PropTypes.func.isRequired,
};
