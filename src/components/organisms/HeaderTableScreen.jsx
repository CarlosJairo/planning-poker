import React from "react";
import FichaPoker from "../atoms/FichaPoker";
import UserLogo from "../atoms/UserLogo";
import { useSelector } from "react-redux";
import UserPlus from "../atoms/UserPlus";
import "../../styles/organisms/HeaderTableScreen.css";

const HeaderTableScreen = () => {
  const { gameName } = useSelector((state) => state.game);
  const { name } = useSelector((state) => state.user);

  return (
    <header className="header-table-screen">
      <FichaPoker className={"chip-poker"} />
      <h1>{gameName}</h1>
      <div className="menu-table-screen">
        <UserLogo name={name} />
        <button className="invite-players-btn">
          <span className="invite-player-text">Invitar jugadores</span>{" "}
          <UserPlus className={"user-plus"} />
        </button>
      </div>
    </header>
  );
};

export default HeaderTableScreen;
