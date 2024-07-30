import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  gameName: "",
  state: "no started",
  players: [
    { id: "2", name: "Santi", rol: ["player"], voted: false },
    { id: "1", name: "Laura", rol: ["viwer"], voted: false },
    { id: "3", name: "Carlos", rol: ["player"], voted: false },
    { id: "4", name: "Tomas", rol: ["viwer"], voted: true },
    { id: "5", name: "Andrés", rol: ["player"], voted: false },
    { id: "6", name: "Camilo", rol: ["player"], voted: true },
  ],
  admins: [],
  selectCards: [],
  poolCards: [1, 2, 3, 5, 8, 13, 21],
};

export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    createGame(state, action) {
      state.gameName = action.payload.gameName;
      state.state = "started";
      state.admins = [...state.admins, action.payload.player];
      state.players = [...state.players, action.payload.player];
      state.selectCards = [];
      state.poolCards = action.payload.poolCards || [1, 2, 3, 5, 8, 13, 21];
    },
    agregarJugador(state, action) {
      state.players.push(action.payload);
      if (action.payload.rol === "owner") {
        state.admins.push(action.payload.id);
      }
    },
    seleccionarCarta(state, action) {
      state.selectCards.push(action.payload);
    },
    revelarCartas(state) {
      state.state = "cartas reveladas";
    },
    reiniciarPartida(state) {
      state.state = "no started";
      state.selectCards = [];
    },
    cambiarModoDePuntaje(state, action) {
      state.poolCards = action.payload;
      state.selectCards = []; // Resetear las cartas seleccionadas
    },
  },
});

export const {
  createGame,
  agregarJugador,
  seleccionarCarta,
  revelarCartas,
  reiniciarPartida,
  cambiarModoDePuntaje,
} = gameSlice.actions;

export default gameSlice.reducer;
