import { configureStore } from '@reduxjs/toolkit';
import { contactsSliceReducer } from './contacts.slice';
import { filterReducer } from './filter.slice';
import { authReducer } from './auth/slice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    contacts: contactsSliceReducer,
    filter: filterReducer,
  },
});
