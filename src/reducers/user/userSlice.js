import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: "",
  name: "",
  rolCurrentUser: [],
  voted: false,
};

const userSlice = createSlice({
  name: "currentUser",
  initialState,
  reducers: {
    setOwerRol: (state) => {
      state.rolCurrentUser = [...state.rolCurrentUser, "owner"];
    },
    setCurrentUser: (state, action) => {
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.rolCurrentUser = action.payload.rol;
    },
    voteCard: (state) => {
      state.voted = true;
    },
    clearUsuarioActual: (state) => {
      state.id = "";
      state.name = "";
      state.rolCurrentUser = [];
    },
  },
});

export const { setOwerRol, setCurrentUser, clearUsuarioActual, voteCard } =
  userSlice.actions;

export default userSlice.reducer;
