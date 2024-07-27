import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  nombre: "",
  estado: "no iniciado",
  jugadores: [],
  administradores: [],
  cartasSeleccionadas: [],
  poolDeCartas: [
    [1, 2, 3, 5, 8, 13, 21],
    [10, 20, 30, 50, 80, 130, 21],
  ],
};

export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    crearPartida(state, action) {
      state.nombre = action.payload.nombre;
      state.estado = "no iniciado";
      state.jugadores = [];
      state.administradores = [];
      state.cartasSeleccionadas = [];
      state.poolDeCartas = action.payload.poolDeCartas || [
        1, 2, 3, 5, 8, 13, 21,
      ];
    },
    agregarJugador(state, action) {
      state.jugadores.push(action.payload);
      if (action.payload.rol === "administrador") {
        state.administradores.push(action.payload.id);
      }
    },
    seleccionarCarta(state, action) {
      state.cartasSeleccionadas.push(action.payload);
    },
    revelarCartas(state) {
      state.estado = "cartas reveladas";
    },
    reiniciarPartida(state) {
      state.estado = "no iniciado";
      state.cartasSeleccionadas = [];
    },
    cambiarModoDePuntaje(state, action) {
      state.poolDeCartas = action.payload;
      state.cartasSeleccionadas = []; // Resetear las cartas seleccionadas
    },
  },
});

export const {
  crearPartida,
  agregarJugador,
  seleccionarCarta,
  revelarCartas,
  reiniciarPartida,
  cambiarModoDePuntaje,
} = gameSlice.actions;

export default gameSlice.reducer;
