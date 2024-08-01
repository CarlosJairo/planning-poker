import React, { useState } from "react";
import { useSelector } from "react-redux";
import Modal from "../organisms/Modal";
import HeaderTableScreen from "../organisms/HeaderTableScreen";
import TableAndPlayers from "../organisms/TableAndPlayers";
import SelectableCardContainer from "../organisms/SelectableCardContainer";
import CardResultsCtn from "../organisms/CardResultsCtn";
import "../../styles/pages/GameTableScreen.css";

const GameTableScreen = () => {
  const [showModal, setShowModal] = useState(true);
  const { poolCards, state } = useSelector((state) => state.game);

  return (
    <section className="game-table-screen">
      {showModal && <Modal setShowModal={setShowModal} />}
      <HeaderTableScreen />
      <TableAndPlayers />
      {state === "revealed_cards" ? (
        <CardResultsCtn />
      ) : (
        <SelectableCardContainer poolCards={poolCards} />
      )}
    </section>
  );
};

export default GameTableScreen;
