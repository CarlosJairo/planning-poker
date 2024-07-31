import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  gameName: "",
  state: "no started",
  players: [
    {
      id: "2",
      name: "Santi",
      rol: ["player"],
      voted: { id: "01", str: "0", value: 0 },
    },
    { id: "1", name: "Laura", rol: ["viwer"], voted: false },
    { id: "3", name: "Carlos", rol: ["player"], voted: false },
    { id: "4", name: "Tomas", rol: ["viwer"], voted: false },
    { id: "5", name: "Andrés", rol: ["player"], voted: false },
    {
      id: "6",
      name: "Camilo",
      rol: ["player"],
      voted: { id: "01", str: "0", value: 0 },
    },
  ],
  admins: [],
  selectedCards: [],
  poolCards: [
    { id: "01", str: "0", value: 0 },
    { id: "02", str: "1", value: 1 },
    { id: "03", str: "3", value: 3 },
    { id: "04", str: "5", value: 5 },
    { id: "05", str: "8", value: 8 },
    { id: "06", str: "13", value: 13 },
    { id: "07", str: "34", value: 34 },
    { id: "08", str: "55", value: 55 },
    { id: "09", str: "89", value: 89 },
    { id: "question", str: "?", value: 0 },
    { id: "breack", str: "🍵", value: 0 },
  ],
};

export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    createGame: (state, action) => {
      state.gameName = action.payload.gameName;
      state.state = "started";
      state.admins = [...state.admins, action.payload.player];
      state.players = [...state.players, action.payload.player];
      state.selectedCards = [];
    },
    selectCard: (state, action) => {
      state.selectedCards = [...state.selectedCards, action.payload];
    },
    userVoted: (state, action) => {
      const { id, card } = action.payload;
      state.players = [
        ...state.players.map((player) =>
          player.id === id ? { ...player, voted: card } : player
        ),
      ];
    },
    gameToFinish: (state) => {
      state.state = "finished";
    },
    agregarJugador: (state, action) => {
      state.players.push(action.payload);
      if (action.payload.rol === "owner") {
        state.admins.push(action.payload.id);
      }
    },
    revelarCartas: (state) => {
      state.state = "cartas reveladas";
    },
    reiniciarPartida: (state) => {
      state.state = "no started";
      state.selectedCards = [];
    },
    cambiarModoDePuntaje: (state, action) => {
      state.poolCards = action.payload;
      state.selectedCards = [];
    },
  },
});

export const {
  createGame,
  agregarJugador,
  selectCard,
  userVoted,
  revelarCartas,
  reiniciarPartida,
  cambiarModoDePuntaje,
  gameToFinish,
} = gameSlice.actions;

export default gameSlice.reducer;
