import Table from "../atoms/Table";
import AdminTable from "../molecules/AdminTable";
import UserItem from "../molecules/UserItem";
import "../../styles/organisms/TableAndPlayers.css";
import CurrentUserTable from "../atoms/CurrentUserTable";

const TableAndPlayers = () => {
  return (
    <section className="table-and-players">
      <AdminTable />
      <CurrentUserTable />

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
