import React from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import Notiflix from 'notiflix';
import { ContactList } from './Contactlist/ContactList';
import { styled } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { contactsSelector, filterSelector } from '../redux/contacts/selectors';

export const App = () => {
  // const [contacts, setContacts] = useState(() => {
  //   const parsedContacts = JSON.parse(localStorage.getItem('contacts'));
  //   if (parsedContacts?.length) {
  //     return parsedContacts;
  //   }
  //   return [];
  // });
  const contacts = useSelector(contactsSelector);
  const filter = useSelector(filterSelector);
  const dispatch = useDispatch();

  // const [filter, setFilter] = useState('');

  // Принимаем фильтр из инпута
  const handleFilterInput = value => {
    dispatch({ type: 'setFilter', payload: value });
  };

  const addNewContact = newContact => {
    const checkContact = contacts.find(
      contact =>
        contact.fullName.toLowerCase() === newContact.fullName.toLowerCase()
    );
    checkContact
      ? Notiflix.Notify.failure(`${newContact.fullName} is already in contacts`)
      : dispatch({ type: 'addContact', payload: newContact });
  };
  // Фильтруем

  // Удаляем контакт
  const handleDelete = (id, fullName) => {
    dispatch({
      type: 'deleteContact',
      payload: id,
    });

    Notiflix.Notify.success(
      `${fullName} was successfully deleted from your Phonebook`
    );
  };

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm addContact={addNewContact} />

      <h2>Contacts</h2>
      <Filter filter={filter} onFilterInput={handleFilterInput} />
      <ContactList onDelete={handleDelete} />
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
