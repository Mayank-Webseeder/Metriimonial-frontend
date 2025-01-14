// File: src/redux/AstrologerSlice.js
import { createSlice } from '@reduxjs/toolkit';

// Initial state directly as an array of astrologers
const initialState = [
  {
    id: 1,
    name: 'Astrologer 1',
    age: 35,
    contact: '8876465211',
    subCaste: 'Brahmin',
    address: 'Kasol, India',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 2,
    name: 'Astrologer 2',
    age: 42,
    contact: '9865142102',
    subCaste: 'Kanyakubj',
    address: 'Goa, India',
    image: 'https://via.placeholder.com/150',
  },
];

const AstrologerSlice = createSlice({
  name: 'Astrologer',
  initialState,
  reducers: {
    // Add a new astrologer
    addAstrologer: (state, action) => {
      state.push(action.payload); // Immer handles immutability
    },
    
    // Edit an existing astrologer
    editAstrologer: (state, action) => {
      const index = state.findIndex((p) => p.id === action.payload.id);
      if (index !== -1) {
        state[index] = { ...state[index], ...action.payload }; // Ensure only updated fields are overwritten
      }
    },
    
    // Delete an astrologer by ID
    deleteAstrologer: (state, action) => {
      return state.filter((p) => p.id !== action.payload);
    },
  },
});

export const { addAstrologer, editAstrologer, deleteAstrologer } = AstrologerSlice.actions;
export default AstrologerSlice.reducer;
