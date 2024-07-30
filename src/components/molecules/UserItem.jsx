import "../../styles/molecules/UserItem.css";

const UserItem = ({ user }) => {
  return (
    <div className={`user-item`}>
      <div className={`card-on-table ${user.voted ? "selected" : null}`}></div>

      <p>{user.name}</p>
    </div>
  );
};

export default UserItem;
