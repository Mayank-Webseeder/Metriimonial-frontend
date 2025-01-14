import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./user/Userslice";
import panditSlice from "./pandit/Panditslice";
import commonFormSlice from "../redux/commonform/Commonfromslice";
import KathavachakSlice from "./kathavachak/KathavachakSlice";


const store = configureStore({
  reducer: {
    userdata: userSlice,
    panditData: panditSlice,
    kathavachaks:KathavachakSlice,
    commonform: commonFormSlice, // Updated key name
  },
});

export default store;
