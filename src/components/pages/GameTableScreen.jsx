import React, { useState } from "react";
import { useSelector } from "react-redux";
import Modal from "./Modal";
import HeaderTableScreen from "../organisms/HeaderTableScreen";
import TableAndPlayers from "../organisms/TableAndPlayers";
import SelectableCardContainer from "../organisms/SelectableCardContainer";
import CardResultsCtn from "../organisms/CardResultsCtn";
import "../../styles/pages/GameTableScreen.css";
import useModal from "../../hooks/useModal";
import UserForm from "../organisms/FormUser";
import ModalCopyLinkContent from "../molecules/ModalCopyLinkContent";

const GameTableScreen = () => {
  const [modalForm, setModalForm] = useModal(true);
  const [modalLink, setModalLink, toggleModalLink] = useModal(false);

  const { poolCards, state } = useSelector((state) => state.game);

  return (
    <section className="game-table-screen">
      <HeaderTableScreen toggleModalLink={toggleModalLink} />
      <TableAndPlayers />
      {state === "revealed_cards" ? (
        <CardResultsCtn />
      ) : (
        <SelectableCardContainer poolCards={poolCards} />
      )}
      {modalForm && (
        <Modal isOpen={modalForm}>
          <UserForm setModalForm={setModalForm} />
        </Modal>
      )}

      {modalLink && (
        <Modal isOpen={modalForm}>
          <ModalCopyLinkContent toggleModalLink={toggleModalLink} />
        </Modal>
      )}
    </section>
  );
};

export default GameTableScreen;
