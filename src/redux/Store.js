// File: redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import userSlice from "./user/Userslice"  ;
import panditSlice from './pandit/Panditslice';
import kathavachakSlice from './kathavachak/KathavachakSlice';

// Middleware to save state to localStorage on every state change
const saveStateMiddleware = (store) => (next) => (action) => {
  const result = next(action);
  const state = store.getState();
  localStorage.setItem('pandits', JSON.stringify(state.pandits));
  localStorage.setItem('kathavachaks', JSON.stringify(state.Kathavachaks));
  return result;
};

const store = configureStore({
  reducer: {
    userdata:userSlice, 
    pandits: panditSlice,
    kathavachaks: kathavachakSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(saveStateMiddleware),
});

export default store;
