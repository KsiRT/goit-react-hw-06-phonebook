import { createStore } from 'redux';
import { contactsReducer } from './contacts/reducer';
import { devToolsEnhancer } from '@redux-devtools/extension';

const devtools = devToolsEnhancer();
export const store = createStore(contactsReducer, devtools);
