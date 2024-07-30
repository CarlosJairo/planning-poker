import Table from "../atoms/Table";
import AdminTable from "../molecules/AdminTable";
import UserItem from "../molecules/UserItem";
import "../../styles/organisms/TableAndPlayers.css";
import CurrentUserTable from "../atoms/CurrentUserTable";
import Locker from "../molecules/Locker";
import { useState } from "react";

const initialUsers = [
  { id: "1", name: "name 1", rol: ["player"] },
  { id: "2", name: "name 2", rol: ["player"] },
  { id: "3", name: "name 3", rol: ["player"] },
  { id: "4", name: "name 4", rol: ["player"] },
  { id: "5", name: "name 5", rol: ["player"] },
  { id: "6", name: "name 6", rol: ["player"] },
];

const TableAndPlayers = () => {
  const [users, setUsers] = useState(initialUsers);

  return (
    <section className="table-and-players">
      <AdminTable />
      <CurrentUserTable />

      <Locker className="table-locker">
        <Table />
      </Locker>

      {users &&
        users.map((user, index) => (
          <Locker className={`user${index + 1}`} key={index}>
            <UserItem user={user} key={user.id * 10} />
          </Locker>
        ))}
    </section>
  );
};

export default TableAndPlayers;
