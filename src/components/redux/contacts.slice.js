import { createSlice } from '@reduxjs/toolkit';
import { addContacts, deleteContacts, fetchContacts } from './operations';

const contactsSlice = createSlice({
  name: 'contacts',

  initialState: [],

  reducers: {
    deleteContacts(state, action) {
      return state.filter(item => item.id !== action.payload);
    },
  },
  extraReducers: builder =>
    builder
      .addCase(fetchContacts.fulfilled, (_, action) => {
        return action.payload;
      })
      .addCase(addContacts.fulfilled, (state, action) => {
        state.push(action.payload);
      })
      .addCase(deleteContacts.fulfilled, (state, action) => {
        return state.filter(item => item.id !== action.payload.id);
      }),
});

export const contactsSliceReducer = contactsSlice.reducer;
