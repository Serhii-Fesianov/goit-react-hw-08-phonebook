import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// https://65b3c2d4770d43aba47a5f75.mockapi.io/contacts

const axiosInstance = axios.create({
  baseURL: 'https://65b3c2d4770d43aba47a5f75.mockapi.io',
});

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async () => {
    try {
      const { data } = await axiosInstance.get('/contacts');

      return data;
    } catch (error) {}
  }
);

export const addContacts = createAsyncThunk(
  'contacts/addContacts',
  async (name, number) => {
    try {
      const { data } = await axiosInstance.post('/contacts', name, number);

      return data;
    } catch (error) {}
  }
);

export const deleteContacts = createAsyncThunk(
  'contacts/deleteContacts',
  async id => {
    try {
      const { data } = await axiosInstance.delete(`/contacts/${id}`);

      return data;
    } catch (error) {}
  }
);
