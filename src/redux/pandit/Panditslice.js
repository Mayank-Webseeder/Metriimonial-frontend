import { createSlice } from "@reduxjs/toolkit";

// Load initial data from localStorage or set default data
const loadInitialData = () => {
  const data = localStorage.getItem("panditinfo");
  return data ? JSON.parse(data) : [
    { id: 1, name: "John Doe", age: 38, email: "john@example.com",height:5.7,weight:70,complection:"fare" ,description:"i have 10 years of experience in pandit filed and i have done more than  500 of havans  "},
    { id: 2, name: "Jane Smith", age: 25, email: "jane@example.com",height:5.7,weight:70,complection:"fare",description:"i have 10 years of experience in pandit filed and i have done more than  500 of havans  " },
    { id: 3, name: "Alice Brown", age: 30, email: "alice@example.com",height:5.7,weight:70,complection:"fare" ,description:"i have 10 years of experience in pandit filed and i have done more than  500 of havans  "},
  ];
};


const initialState = loadInitialData();

const panditSlice = createSlice({
  name: "panditSlice",
  initialState,
  reducers: {
    addPandit: (state, action) => {
      state.push(action.payload);
      localStorage.setItem("users", JSON.stringify(state));
    },
    updatePandit: (state, action) => {
      const index = state.findIndex((user) => user.id === action.payload.id);
      if (index !== -1) {
        state[index] = action.payload;
        localStorage.setItem("panditinfo", JSON.stringify(state));
      }
    },
    deletePandit: (state, action) => {
      const updatedState = state.filter((user) => user.id !== action.payload);
      localStorage.setItem("panditinfo", JSON.stringify(updatedState));
      return updatedState;
    },
  },
});

export const { addPandit, updatePandit, deletePandit } = panditSlice.actions;
export default panditSlice.reducer;
