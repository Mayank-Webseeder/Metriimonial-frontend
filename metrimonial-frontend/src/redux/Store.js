// store.js
import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./user/Userslice"  ; // Update the path to where your userSlice file is located

const store = configureStore({
  reducer: {
           userdata:userSlice, 
  },
});

export default store;
