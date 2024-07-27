import { configureStore } from "@reduxjs/toolkit";
import gameReducer from "../reducers/game/gameSlice";
import userReducer from "../reducers/user/userSlice";

export const store = configureStore({
  reducer: {
    game: gameReducer,
    user: userReducer,
  },
});
