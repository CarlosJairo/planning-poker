import React from "react";
import Table from "../molecules/Table";
import UserItem from "../molecules/UserItem";
import Locker from "../molecules/Locker";
import { useSelector } from "react-redux";
import "../../styles/organisms/TableAndPlayers.css";

// Exportar para hacer prueba unitaria
export const filterPlayers = (players, currentUser) =>
  players.filter((player) => player.id !== currentUser.id);

const TableAndPlayers = () => {
  const { players } = useSelector((state) => state.game);
  const currentUser = useSelector((state) => state.user);

  // Filtrar solo otros jugadores - evitar que aparezca nuevamente el usuario actual que ya tiene su lugar
  const filteredPlayers = filterPlayers(players, currentUser);

  return (
    <section className="table-and-players">
      <Locker className={"currentUser user-item"}>
        <UserItem user={currentUser} />
      </Locker>

      <Locker className="table-locker">
        <Table roles={currentUser.rolCurrentUser} />
      </Locker>

      {filteredPlayers &&
        filteredPlayers.map((user, index) => (
          <Locker className={`user${index}`} key={index}>
            <UserItem user={user} key={user.id * 10} />
          </Locker>
        ))}
    </section>
  );
};

export default TableAndPlayers;
