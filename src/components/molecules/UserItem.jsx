import "../../styles/molecules/UserItem.css";
import CardOnTable from "../atoms/CardOnTable";
import UserLogo from "../atoms/UserLogo";

const UserItem = ({ user }) => {
  const { name, voted, rol } = user;

  const isViwer = rol.includes("viwer");

  return (
    <div className={`user-item`}>
      {isViwer ? <UserLogo name={name} /> : <CardOnTable voted={voted} />}

      <p>{user.name}</p>
    </div>
  );
};

export default UserItem;
