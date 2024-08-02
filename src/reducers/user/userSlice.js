import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: "",
  name: "",
  rolCurrentUser: ["owner"],
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
    voteCard: (state, action) => {
      state.voted = action.payload;
    },
    resetVoted: (state) => {
      state.voted = false;
    },
    clearUsuarioActual: (state) => {
      state.id = "";
      state.name = "";
      state.rolCurrentUser = [];
    },
    toggleViwerCurrent: (state) => {
      const index = state.rolCurrentUser.indexOf("viwer");
      index < 0
        ? state.rolCurrentUser.push("viwer")
        : state.rolCurrentUser.splice(index, 1);
    },
  },
});

export const {
  setOwerRol,
  setCurrentUser,
  clearUsuarioActual,
  voteCard,
  resetVoted,
  toggleViwerCurrent,
} = userSlice.actions;

export default userSlice.reducer;
