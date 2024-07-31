import CardOnTable from "../atoms/CardOnTable";
import UserLogo from "../atoms/UserLogo";
import { useSelector } from "react-redux";

import "../../styles/molecules/UserItem.css";

const UserItem = ({ user }) => {
  const { name, voted, rol, rolCurrentUser } = user;

  const { state } = useSelector((state) => state.game);
  const isFinised = state === "finished";

  const userRole = rol || rolCurrentUser;
  const isViwer = userRole.includes("viwer");

  return (
    <div className={`user-item`}>
      {isViwer ? (
        <UserLogo name={name} />
      ) : (
        <CardOnTable voted={voted} isFinised={isFinised} />
      )}

      <p>{user.name}</p>
    </div>
  );
};

export default UserItem;
