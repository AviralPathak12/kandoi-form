import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: "",
  mobile: "",
  token: "",
};

export const ClientSlice = createSlice({
  name: "client",
  initialState,
  reducers: {
    setClientLoginDetails: (state, action) => {
      state.id = action.payload.id;
      state.mobile = action.payload.mobile;
      state.token = action.payload.token;
    },
    setClientLogout: (state) => {
      state.id = "";
      state.mobile = "";
      state.token = "";
    },
  },
});

export const { setClientLoginDetails, setClientLogout } = ClientSlice.actions;

export default ClientSlice.reducer;
