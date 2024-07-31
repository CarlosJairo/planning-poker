import React from "react";
import "../../styles/atoms/Table.css";
import Button from "../atoms/Button";
import { useDispatch, useSelector } from "react-redux";
import { gameToFinish } from "../../reducers/game/gameSlice";

const Table = ({ roles }) => {
  const isOwner = roles.includes("owner");
  const { selectedCards, players } = useSelector((state) => state.game);

  const dispatch = useDispatch();
  let everyoneVoted;

  if (isOwner) {
    // everyoneVoted = players.length === selectedCards.length;
    everyoneVoted = true;
  }

  const showCards = () => {
    dispatch(gameToFinish());
  };

  return (
    <div className="table">
      {isOwner && everyoneVoted && (
        <Button onClick={showCards} className={"show-cards-btn"}>
          Revelar cartas
        </Button>
      )}
    </div>
  );
};

export default Table;
