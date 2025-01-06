// File: src/redux/PanditSlice.js
import { createSlice } from '@reduxjs/toolkit';

// Initial state with some dummy data
const initialState = {
  pandits: [
    {
      id: 1,
      name: 'Pandit Ram Sharma',
      age: 45,
      contact: '9876543210',
      subCaste: 'Brahmin',
      address: 'Delhi, India',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 2,
      name: 'Pandit Suresh Dubey',
      age: 50,
      contact: '8765432109',
      subCaste: 'Kanyakubj',
      address: 'Mumbai, India',
      image: 'https://via.placeholder.com/150',
    },
  ],
};

const panditSlice = createSlice({
  name: 'pandits',
  initialState,
  reducers: {
    addPandit: (state, action) => {
      const newPandit = { ...action.payload, id: state.pandits.length + 1 };
      state.pandits.push(newPandit);
    },
    editPandit: (state, action) => {
      const index = state.pandits.findIndex((p) => p.id === action.payload.id);
      if (index !== -1) {
        state.pandits[index] = action.payload;
      }
    },
    deletePandit: (state, action) => {
      state.pandits = state.pandits.filter((p) => p.id !== action.payload);
    },
  },
});

export const { addPandit, editPandit, deletePandit } = panditSlice.actions;
export default panditSlice.reducer;
