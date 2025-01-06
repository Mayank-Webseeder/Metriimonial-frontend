// store.js
import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./user/Userslice"  ; // Update the path to where your userSlice file is located
import panditSlice from "./pandit/Panditslice"
const store = configureStore({
  reducer: {
           userdata:userSlice, 
           pandits:panditSlice
  },
});

export default store;
