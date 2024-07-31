import React, { useState, useEffect } from "react";
import "../../styles/atoms/Table.css";
import Button from "../atoms/Button";
import { useDispatch, useSelector } from "react-redux";
import { gameToFinish } from "../../reducers/game/gameSlice";

const Table = ({ roles }) => {
  const [loading, setLoading] = useState(false);
  const [everyoneVoted, setEveryoneVoted] = useState(false);
  const isOwner = roles.includes("owner");
  const { selectedCards, players, state } = useSelector((state) => state.game);

  const dispatch = useDispatch();

  useEffect(() => {
    if (isOwner) {
      setEveryoneVoted(true);
    }
  }, [isOwner, players, selectedCards]);

  const showCards = () => {
    setLoading(true);
    setEveryoneVoted(false);

    setTimeout(() => {
      setLoading(false);
      dispatch(gameToFinish());
    }, 300);
  };

  return (
    <div className="table">
      {loading && <p>Cargando...</p>}
      {isOwner && everyoneVoted && !loading && (
        <Button onClick={showCards} className={"show-cards-btn"}>
          Revelar cartas
        </Button>
      )}
      {state === "finished" && !loading && (
        <button className={"show-results-btn"}>Mostrar resultados</button>
      )}
    </div>
  );
};

export default Table;
