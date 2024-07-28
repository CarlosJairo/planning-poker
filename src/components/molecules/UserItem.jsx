import Button from "../atoms/Button";
import "../../styles/molecules/UserItem.css";

const UserItem = () => {
  const handleClick = () => {};

  return (
    <div className="user-item">
      <Button className={"card"} onClick={handleClick} />
      <p>User</p>
    </div>
  );
};

export default UserItem;
