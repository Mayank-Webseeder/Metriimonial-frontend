import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./user/Userslice";
import panditSlice from "./pandit/Panditslice";
import commonFormSlice from "../redux/commonform/Commonfromslice";
import kathavachakReducer from "../redux/kathavachak/KathavachakSlice";

const store = configureStore({
  reducer: {
    userdata: userSlice,
    panditData: panditSlice,
    commonform: commonFormSlice, // Updated key name
    kathavachaks: kathavachakReducer,
  },
});

export default store;
