import Table from "../atoms/Table";
import UserItem from "../molecules/UserItem";
import CurrentUserTable from "../atoms/CurrentUserTable";
import Locker from "../molecules/Locker";
import { useSelector } from "react-redux";
import "../../styles/organisms/TableAndPlayers.css";

const TableAndPlayers = () => {
  const { players } = useSelector((state) => state.game);
  const currenUser = useSelector((state) => state.user);

  // Filtrar solo otros jugadores
  const filterPlayers = (players) =>
    players.filter((player) => player.id !== currenUser.id);

  const filteredPlayers = filterPlayers(players);

  return (
    <section className="table-and-players">
      <CurrentUserTable />

      <Locker className="table-locker">
        <Table />
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
