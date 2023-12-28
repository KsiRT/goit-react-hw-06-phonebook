import React from 'react';
import Notiflix from 'notiflix';
import { styled } from 'styled-components';
import { Filter } from './Filter/Filter';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './Contactlist/ContactList';
import { useDispatch, useSelector } from 'react-redux';
import { contactsSelector, filterSelector } from '../redux/selectors';
import { addContact, deleteContact, setFilter } from '../redux/contactsSlise';

export const App = () => {
  const contacts = useSelector(contactsSelector);
  const filter = useSelector(filterSelector);
  const dispatch = useDispatch();

  const addNewContact = newContact => {
    const checkContact = contacts.find(
      contact =>
        contact.fullName.toLowerCase() === newContact.fullName.toLowerCase()
    );
    checkContact
      ? Notiflix.Notify.failure(`${newContact.fullName} is already in contacts`)
      : dispatch(addContact(newContact));
  };

  const handleFilterInput = value => {
    dispatch(setFilter(value));
  };

  const getFilteredContact = () => {
    if (!filter) {
      return contacts;
    }
    return contacts.filter(contact =>
      contact.fullName.toLowerCase().includes(filter.toLowerCase())
    );
  };
  // Удаляем контакт
  const handleDelete = (id, fullName) => {
    dispatch(deleteContact(id));

    Notiflix.Notify.success(
      `${fullName} was successfully deleted from your Phonebook`
    );
  };

  const filteredContact = getFilteredContact(filter);
  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm addContact={addNewContact} />
      <h2>Contacts</h2>
      <Filter onFilterInput={handleFilterInput} />
      <ContactList contacts={filteredContact} onDelete={handleDelete} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #82adba;
  height: 100vh;
`;
