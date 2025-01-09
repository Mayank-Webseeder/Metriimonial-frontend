import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./user/Userslice";
import panditSlice from "./pandit/Panditslice";
import commonFormSlice from "../redux/commonform/Commonfromslice";

const store = configureStore({
  reducer: {
    userdata: userSlice,
    panditData: panditSlice,
    commonform: commonFormSlice // Updated key name
  }
});

export default store;