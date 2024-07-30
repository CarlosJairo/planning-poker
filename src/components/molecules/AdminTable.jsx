import { useSelector } from "react-redux";
import UserLogo from "../atoms/UserLogo";

const AdminTable = () => {
  const admin = useSelector((state) => state.game.admins[0]);

  return (
    <div className="user0">
      {admin && <UserLogo name={admin.name} />}
      <p>{admin ? admin.name : ""}</p>
    </div>
  );
};

export default AdminTable;
