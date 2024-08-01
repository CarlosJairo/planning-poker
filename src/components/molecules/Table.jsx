import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeStateGame,
  countCardsAndAverage,
} from "../../reducers/game/gameSlice";
import GameButton from "./ButtonOnTable";
import "../../styles/atoms/Table.css";
import LouderTable from "./LouderTable";

const Table = ({ roles }) => {
  const [loading, setLoading] = useState(false);
  const { state } = useSelector((state) => state.game);
  const isOwner = roles.includes("owner");

  const dispatch = useDispatch();

  const showCards = () => {
    // llamado a posible backend
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      dispatch(changeStateGame("revealed_cards"));
      dispatch(countCardsAndAverage());
    }, 2000);
  };

  const restartGame = () => {
    dispatch(changeStateGame("finished"));
    console.log("reset");
    // dispatch(changeStateGame("finished"));
  };

  return (
    <div className="table">
      {loading && <LouderTable />}

      <GameButton
        state={state}
        isOwner={isOwner}
        loading={loading}
        showCards={showCards}
        restartGame={restartGame}
      />
    </div>
  );
};

export default Table;
