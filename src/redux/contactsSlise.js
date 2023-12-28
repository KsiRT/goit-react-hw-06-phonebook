import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  contacts: [
    { id: 'id-1', fullName: 'Albus Dumbledore', number: '459-12-56' },
    { id: 'id-2', fullName: 'Hermione Granger', number: '443-89-12' },
    { id: 'id-3', fullName: 'Rubeus Hagrid', number: '645-17-79' },
    { id: 'id-4', fullName: 'Severus Snape', number: '227-91-26' },
  ],
  filter: '',
};

const contactsSlise = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: {
      prepare: contact => {
        console.log(contact);
        return {
          payload: {
            id: nanoid(),
            ...contact,
          },
        };
      },
      reducer: (state, { payload }) => {
        state.contacts.push(payload);
      },
    },

    deleteContact: (state, { payload }) => {
      state.contacts = state.contacts.filter(contact => contact.id !== payload);
    },
    setFilter: (state, { payload }) => {
      state.filter = payload;
    },
  },
});

export const { addContact, deleteContact, setFilter } = contactsSlise.actions;
export const contactsReducer = contactsSlise.reducer;
