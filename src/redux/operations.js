import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://63774c285c47776512198f3e.mockapi.io/contacts';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('items');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (item, thunkAPI) => {
    try {
      const response = await axios.post('items', item);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (itemId, thunkAPI) => {
    try {
      const response = await axios.delete(`items/${itemId}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
