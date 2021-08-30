import React from 'react';
import Form from './Components/Form/Form';
import Contacts from './Components/Contacts/Contacts';
import Filter from './Components/Filter/Filter';
import s from './App.module.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const App = () => {
  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  // useEffect(() => {
  //   const contacts = localStorage.getItem('contacts');
  //   const contactsPars = JSON.parse(contacts);
  //   if (contactsPars) {
  //     setContacts(contactsPars);
  //   }
  // }, []);

  return (
    <>
      <h1 className={s.Title}>PhoneBook</h1>
      <Form />
      <h2 className={s.Title}>Contacts</h2>
      <Filter />
      <Contacts />
      <ToastContainer />
    </>
  );
};
