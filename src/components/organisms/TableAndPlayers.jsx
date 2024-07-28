import "../../styles/organisms/TableAndPlayers.css";
import Table from "../atoms/Table";
import UserItem from "../molecules/UserItem";

const users = [];

const TableAndPlayers = () => {
  return (
    <section className="table-and-players">
      <div className="admin">Admin</div>
      <div className="tableLocker">
        <Table />
      </div>
      <div className="user1">
        <UserItem />
      </div>
      <div className="user2">
        <UserItem />
      </div>
      <div className="user3">
        <UserItem />
      </div>
      <div className="currentUser">usuario</div>
      <div className="user5">
        <UserItem />
      </div>
      <div className="user6">
        <UserItem />
      </div>
      <div className="user7">
        <UserItem />
      </div>
    </section>
  );
};

export default TableAndPlayers;
