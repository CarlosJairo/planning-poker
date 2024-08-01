import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeStateGame,
  countCardsAndAverage,
  restartGame,
} from "../../reducers/game/gameSlice";
import GameButton from "./ButtonOnTable";
import "../../styles/atoms/Table.css";
import LouderTable from "./LouderTable";
import { resetVoted } from "../../reducers/user/userSlice";

export const Table = ({ roles }) => {
  const [loading, setLoading] = useState(false);
  const { state } = useSelector((state) => state.game);
  const isOwner = roles.includes("owner");

  const dispatch = useDispatch();

  const showCards = () => {
    setLoading(true);

    // Llamada a posible api
    setTimeout(() => {
      setLoading(false);
      dispatch(changeStateGame("revealed_cards"));
      dispatch(countCardsAndAverage());
    }, 2000);
  };

  const handleRestartGame = () => {
    dispatch(restartGame());
    dispatch(resetVoted());
  };

  return (
    <div className="table">
      {loading && <LouderTable />}

      <GameButton
        state={state}
        isOwner={isOwner}
        loading={loading}
        showCards={showCards}
        restartGame={handleRestartGame}
      />
    </div>
  );
};

export default Table;
