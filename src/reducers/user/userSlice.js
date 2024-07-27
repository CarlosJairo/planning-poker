import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: "",
  nombre: "",
  rol: [],
};

const userSlice = createSlice({
  name: "usuarioActual",
  initialState,
  reducers: {
    setUsuarioActual(state, action) {
      state.id = action.payload.id;
      state.nombre = action.payload.nombre;
      state.rol = [...state.rol, action.payload.rol];
    },
    clearUsuarioActual(state) {
      state.id = "";
      state.nombre = "";
      state.rol = [];
    },
  },
});

export const { setUsuarioActual, clearUsuarioActual } = userSlice.actions;

export default userSlice.reducer;
