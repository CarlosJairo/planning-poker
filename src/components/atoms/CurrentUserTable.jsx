import { useSelector } from "react-redux";

const CurrentUserTable = () => {
  const { name } = useSelector((state) => state.user);

  return (
    <div className="currentUser user-item">
      <button className="card-on-table"></button>
      {name && name}
    </div>
  );
};

export default CurrentUserTable;
