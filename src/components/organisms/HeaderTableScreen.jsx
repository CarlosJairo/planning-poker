import React from "react";
import FichaPoker from "../atoms/FichaPoker";
import { useSelector } from "react-redux";
import "../../styles/organisms/HeaderTableScreen.css";

const HeaderTableScreen = () => {
  const { gameName } = useSelector((state) => state.game);
  const { name } = useSelector((state) => state.user);

  return (
    <header className="header-table-screen">
      <FichaPoker />
      <h1>{gameName}</h1>
      <div className="menu-table-screen">
        <p className="user-logo">{name[0] || "-"}</p>
        <button className="invite-players-btn">Invitar jugadores</button>
      </div>
    </header>
  );
};

export default HeaderTableScreen;
