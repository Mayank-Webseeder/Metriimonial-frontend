import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userDetails: {
    name: "",
    contactNo: "",
    subCaste: "",
    cityVillage: "",
    state: "",
    district: "",
    aadhaarNo: "",
    serviceType: ""
  },
  selectedServices: [],
  images: []
};

const commonFormSlice = createSlice({
  name: "commonForm",
  initialState,
  reducers: {
    setUserDetails: (state, action) => {
      state.userDetails = action.payload;
    },
    setSelectedServices: (state, action) => {
      state.selectedServices = action.payload;
    },
    addImages: (state, action) => {
      state.images.push(...action.payload);
    }
  }
});

export const { setUserDetails, setSelectedServices, addImages } = commonFormSlice.actions;
export default commonFormSlice.reducer;
