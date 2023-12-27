import React from 'react';
import { Button, Item, List, Name, Number } from './ContactListStyled';
import { useSelector } from 'react-redux';
import {
  contactsSelector,
  filterSelector,
} from '../../redux/contacts/selectors';

export const ContactList = ({ onDelete }) => {
  const contacts = useSelector(contactsSelector);
  const filter = useSelector(filterSelector);
  const getFilteredContacts = () => {
    if (!filter) {
      return contacts;
    }
    return contacts.filter(contact =>
      contact.fullName.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <List>
      {getFilteredContacts().map(contact => (
        <Item key={contact.id}>
          <Name>{contact.fullName} : </Name>
          <Number> {contact.number}</Number>
          <Button
            onClick={() => {
              onDelete(contact.id, contact.fullName);
            }}
          >
            Delete
          </Button>
        </Item>
      ))}
    </List>
  );
};
