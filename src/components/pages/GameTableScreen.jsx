import React, { useState, useEffect } from "react";
import "../../styles/pages/GameTableScreen.css";
import Modal from "../organisms/Modal";
import HeaderTableScreen from "../organisms/HeaderTableScreen";

const GameTableScreen = () => {
  const [showModal, setShowModal] = useState(true);

  useEffect(() => {
    setShowModal(true);
  }, []);

  return (
    <div className="game-table-screen">
      {showModal && <Modal setShowModal={setShowModal} />}
      {/* header */}
      <HeaderTableScreen />
      {/* mesa de juego */}
    </div>
  );
};

export default GameTableScreen;
