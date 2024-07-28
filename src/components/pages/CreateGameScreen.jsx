// src/components/pages/CreateGameScreen.jsx
import React from "react";
import CreateGameForm from "../organisms/CreateGameForm";
import Header from "../organisms/Header";
import "../../styles/pages/CreateGameScreen.css";

const CreateGameScreen = () => {
  return (
    <section className="create-game-screen">
      <Header />
      <CreateGameForm />
    </section>
  );
};

export default CreateGameScreen;
