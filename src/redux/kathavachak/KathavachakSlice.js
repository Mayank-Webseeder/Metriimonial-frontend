// File: src/redux/PanditSlice.js
import { createSlice } from '@reduxjs/toolkit';

// Initial state with some dummy data
const initialState = {
  kathavachaks: [
    {
      id: 1,
      name: 'Guddu Kathavachak',
      age: 35,
      contact: '7876443211',
      subCaste: 'Brahmin',
      address: 'Mirzapur, India',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 2,
      name: 'Bablu Kathavachak',
      age: 42,
      contact: '9865432102',
      subCaste: 'Kanyakubj',
      address: 'Wyasipur, India',
      image: 'https://via.placeholder.com/150',
    },
  ],
};

const kathavachakSlice = createSlice({
  name: 'kathavachaks',
  initialState,
  reducers: {
    addKathavachak: (state, action) => {
      const newKathavachak = { ...action.payload, id: Date.now() }; // Generate unique ID
      state.kathavachaks.push(newKathavachak);
    },
    editKathavachak: (state, action) => {
      const index = state.kathavachaks.findIndex((p) => p.id === action.payload.id);
      if (index !== -1) {
        state.kathavachaks[index] = action.payload;
      }
    },
    deleteKathavachak: (state, action) => {
      state.kathavachaks = state.kathavachaks.filter((p) => p.id !== action.payload);
    },
  },
});

export const { addKathavachak, editKathavachak, deleteKathavachak } = kathavachakSlice.actions;
export default kathavachakSlice.reducer;
