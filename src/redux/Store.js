import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./user/Userslice";
import panditSlice from "./pandit/Panditslice";
import commonFormSlice from "../redux/commonform/Commonfromslice";
import KathavachakSlice from "./kathavachak/KathavachakSlice";
import AstrologerSlice from "../redux/Astrologer/AstrologerSlice";



const store = configureStore({
  reducer: {
    userdata: userSlice,
    panditData: panditSlice,
    kathavachaks:KathavachakSlice,
    Astrologer:AstrologerSlice,
    commonform: commonFormSlice, 
  },
});

export default store;
