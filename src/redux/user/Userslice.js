import { createSlice } from "@reduxjs/toolkit";

// Load initial data from localStorage or set default data
const loadInitialData = () => {
  const data = localStorage.getItem("users");
  return data ? JSON.parse(data) : [
    { id: 1, name: "John Doe", age: 28, email: "john@example.com",height:5.7,weight:70,complection:"fare" },
    { id: 2, name: "Jane Smith", age: 25, email: "jane@example.com",height:5.7,weight:70,complection:"fare" },
    { id: 3, name: "Alice Brown", age: 30, email: "alice@example.com",height:5.7,weight:70,complection:"fare" },
  ];
};


const initialState = loadInitialData();

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
      localStorage.setItem("users", JSON.stringify(state));
    },
    updateUser: (state, action) => {
      const index = state.findIndex((user) => user.id === action.payload.id);
      if (index !== -1) {
        state[index] = action.payload;
        localStorage.setItem("users", JSON.stringify(state));
      }
    },
    deleteUser: (state, action) => {
      const updatedState = state.filter((user) => user.id !== action.payload);
      localStorage.setItem("users", JSON.stringify(updatedState));
      return updatedState;
    },
  },
});

export const { addUser, updateUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;
