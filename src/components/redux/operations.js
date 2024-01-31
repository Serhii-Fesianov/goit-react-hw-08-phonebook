import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// https://65b3c2d4770d43aba47a5f75.mockapi.io/contacts

export const axiosInstance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com/',
});

export const setToken = token => {
  axiosInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearToken = () => {
  axiosInstance.defaults.headers.common.Authorization = ``;
};

export const registerThunk = createAsyncThunk(
  'register',
  async (credentials, thunkApi) => {
    try {
      const { data } = await axiosInstance.post('users/signup', credentials);
      setToken(data.token);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const loginThunk = createAsyncThunk(
  'login',
  async (credentials, thunkApi) => {
    try {
      const { data } = await axiosInstance.post('users/login', credentials);
      setToken(data.token);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const logoutThunk = createAsyncThunk('logout', async (_, thunkApi) => {
  try {
    await axiosInstance.post('users/logout');
    clearToken();
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export const refreshThunk = createAsyncThunk('refresh', async (_, thunkApi) => {
  const savedToken = thunkApi.getState().auth.token;
  if (!savedToken) {
    return thunkApi.rejectWithValue('Token is not exist');
  }
  try {
    setToken(savedToken);
    const { data } = await axiosInstance.get('users/current');
    return data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
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
