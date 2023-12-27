// import { addContact, deleteContact, filterContacts } from './actions';

const initialState = {
  contacts: [
    { id: 'id-1', fullName: 'Albus Dumbledore', number: '459-12-56' },
    { id: 'id-2', fullName: 'Hermione Granger', number: '443-89-12' },
    { id: 'id-3', fullName: 'Rubeus Hagrid', number: '645-17-79' },
    { id: 'id-4', fullName: 'Severus Snape', number: '227-91-26' },
  ],
  filter: '',
};

export const contactsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'addContact':
      console.log(action.payload);
      return { ...state, contacts: [...state.contacts, action.payload] };
    case 'deleteContact':
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        ),
      };
    case 'setFilter':
      return {
        filter: action.payload.toLowerCase(),
      };
    default:
      return state;
  }
};
