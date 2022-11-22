import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: "",
  email: "",
  token: "",
};

export const AdminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    setAdminLoginDetails: (state, action) => {
      state.id = action.payload.id;
      state.email = action.payload.email;
      state.token = action.payload.token;
    },
    setAdminLogout: (state, action) => {
      state.id = "";
      state.email = "";
      state.token = "";
    },
  },
});

export const { setAdminLoginDetails, setAdminLogout } = AdminSlice.actions;

export default AdminSlice.reducer;
