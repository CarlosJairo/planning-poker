import React, { useState, useEffect } from "react";
import "../../styles/pages/GameTableScreen.css";
import Modal from "../organisms/Modal";
import HeaderTableScreen from "../organisms/HeaderTableScreen";
import TableAndPlayers from "../organisms/TableAndPlayers";

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
      <div className="" style={{ height: "20%" }}>
        <h2>Cards</h2>
        <div className="cards" style={{ display: "flex", height: "20%" }}>
          <div className="">c</div>
          <div className="">c</div>
          <div className="">c</div>
          <div className="">c</div>
          <div className="">c</div>
          <div className="">c</div>
          <div className="">c</div>
        </div>
      </div>
    </div>
  );
};

export default GameTableScreen;
