import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import { Button, Form, Input } from './ContactFormStyled';
// import { useDispatch } from 'react-redux';

export const ContactForm = ({ addContact }) => {
  const [fullName, setFullName] = useState('');
  const [number, setNumber] = useState('');

  // вводимо в інпут
  const handleChangeInput = e => {
    const { name, value } = e.target;
    if (name === 'name') {
      setFullName(value);
    } else {
      setNumber(value);
    }
  };

  //додаємо до списку
  const handleFormSubmit = e => {
    e.preventDefault();

    if (fullName.trim() === '' || number.trim() === '') {
      return;
    }

    const newContact = { id: nanoid(), fullName, number };
    setFullName('');
    setNumber('');
    addContact(newContact);
  };

  return (
    <Form onSubmit={handleFormSubmit}>
      <label htmlFor="name">
        Name
        <Input
          value={fullName}
          id="name"
          type="text"
          name="name"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChangeInput}
          placeholder="Name Surname"
          autoComplete="false"
        />
      </label>
      <label htmlFor="number">
        Number
        <Input
          value={number}
          id="number"
          type="tel"
          name="number"
          title="Phone number must contain digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleChangeInput}
          placeholder="Phone Number"
          autoComplete="false"
        />
      </label>
      <Button>Add contact</Button>
    </Form>
  );
};
