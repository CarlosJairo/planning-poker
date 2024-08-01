import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  gameName: "",
  state: "no started",
  players: [
    // {
    //   id: "2",
    //   name: "Santi",
    //   rol: ["player"],
    //   voted: { id: "01", str: "0", value: 0 },
    // },
    { id: "1", name: "Laura", rol: ["viwer"], voted: false },
    {
      id: "3",
      name: "Carlos",
      rol: ["player"],
      voted: { id: "01", str: "0", value: 0 },
    },
    // { id: "4", name: "Tomas", rol: ["viwer"], voted: false },
    // { id: "5", name: "Andrés", rol: ["player"], voted: false },
    // {
    //   id: "6",
    //   name: "Camilo",
    //   rol: ["player"],
    //   voted: { id: "01", str: "0", value: 0 },
    // },
  ],
  admins: [],
  selectedCards: [],
  results: { count: [], avarage: 0 },
  poolCards: [
    { id: "0", str: "0", value: 0 },
    { id: "1", str: "1", value: 1 },
    { id: "2", str: "3", value: 3 },
    { id: "3", str: "5", value: 5 },
    { id: "4", str: "8", value: 8 },
    { id: "5", str: "13", value: 13 },
    { id: "6", str: "34", value: 34 },
    { id: "7", str: "55", value: 55 },
    { id: "8", str: "89", value: 89 },
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
      state.selectedCards = [{ id: "0", str: "0", value: 0 }];
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
    changeStateGame: (state, action) => {
      state.state = action.payload;
    },
    everyoneVoted: (state) => {
      const playersInGame = state.players.filter((player) =>
        player.rol.includes("player")
      ).length;

      const cards = state.selectedCards.length;

      if (playersInGame === cards) {
        state.state = "ready_to_show_cards";
      }
    },
    countCardsAndAverage: (state) => {
      let count = {};
      let sumValues = 0;

      state.selectedCards.forEach((card) => {
        let { id, str, value } = card;

        // si existe ya la carta sumamos 1 a sus votos
        if (count[id]) {
          count[id].votes++;
        } else {
          // si no existe, se inicializa votos en 1
          count[id] = { id, str, value, votes: 1 };
        }

        // sumar el valor total para despues calcular el promedio
        sumValues += value;
      });

      const averageValues = sumValues / state.selectedCards.length;

      // objet.values tranforma los valores del objeto a un array
      state.results = { count: Object.values(count), avarage: averageValues };
    },
    restartGame: (state) => {
      console.log("hol");

      state.state = "started";
      state.selectedCards = [];
      state.results = { count: [], avarage: 0 };
      state.players = state.players.map((p) => ({ ...p, voted: false }));
    },

    // agregarJugador: (state, action) => {
    //   state.players.push(action.payload);
    //   if (action.payload.rol === "owner") {
    //     state.admins.push(action.payload.id);
    //   }
    // },
    // cambiarModoDePuntaje: (state, action) => {
    //   state.poolCards = action.payload;
    //   state.selectedCards = [];
    // },
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
  changeStateGame,
  everyoneVoted,
  countCardsAndAverage,
  restartGame,
} = gameSlice.actions;

export default gameSlice.reducer;
