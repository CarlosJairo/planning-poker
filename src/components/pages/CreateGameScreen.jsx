// src/components/pages/CreateGameScreen.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import CreateGameForm from "../organisms/CreateGameForm";
import Header from "../organisms/Header";
import "../../styles/pages/CreateGameScreen.css";

const CreateGameScreen = () => {
  let navigate = useNavigate();

  const handleCreateGame = (name) => {
    navigate(`/game/${name}`);
  };

  return (
    <section className="create-game-screen">
      <Header />
      <CreateGameForm onSubmit={handleCreateGame} />
    </section>
  );
};

export default CreateGameScreen;
