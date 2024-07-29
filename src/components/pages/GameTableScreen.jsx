import React, { useState, useEffect } from "react";
import "../../styles/pages/GameTableScreen.css";
import Modal from "../organisms/Modal";
import HeaderTableScreen from "../organisms/HeaderTableScreen";
import TableAndPlayers from "../organisms/TableAndPlayers";
import SelectableCardContainer from "../organisms/SelectableCardContainer";

const GameTableScreen = () => {
  const [showModal, setShowModal] = useState(true);

  useEffect(() => {
    setShowModal(true);
  }, []);

  return (
    <div className="game-table-screen">
      {showModal && <Modal setShowModal={setShowModal} />}
      <HeaderTableScreen />
      <TableAndPlayers />

      <SelectableCardContainer />
    </div>
  );
};

export default GameTableScreen;
