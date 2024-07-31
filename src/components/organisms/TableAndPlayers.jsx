import Table from "../molecules/Table";
import UserItem from "../molecules/UserItem";
import Locker from "../molecules/Locker";
import { useSelector } from "react-redux";
import "../../styles/organisms/TableAndPlayers.css";

const TableAndPlayers = () => {
  const { players } = useSelector((state) => state.game);
  const currentUser = useSelector((state) => state.user);

  // Filtrar solo otros jugadores - evitar que aparezca nuevamente el usuario actual que ya tiene su lugar
  const filterPlayers = (players) =>
    players.filter((player) => player.id !== currentUser.id);

  const filteredPlayers = filterPlayers(players);

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
