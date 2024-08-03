import React from "react";
import CardOnTable from "../atoms/CardOnTable";
import UserLogo from "../atoms/UserLogo";
import { useDispatch, useSelector } from "react-redux";
import Button from "../atoms/Button";
import "../../styles/molecules/UserItem.css";
import UserPlus from "../atoms/UserPlus";
import { addRolOwner } from "../../reducers/game/gameSlice";

const UserItem = ({ user }) => {
  const { id, name, voted, rol } = user;

  const { state } = useSelector((state) => state.game);
  const dispatch = useDispatch();

  const { rolCurrentUser } = useSelector((state) => state.user);

  const revealedCards = state === "revealed_cards" || state === "finished";

  const isViwer = rol.includes("viwer");
  const isOwner = rol.includes("owner");
  const isUserCurrentOwner = rolCurrentUser.includes("owner");

  const addAdmin = () => {
    dispatch(addRolOwner(id));
  };

  return (
    <div className={`user-item`}>
      {isViwer ? (
        <UserLogo name={name} />
      ) : (
        <CardOnTable voted={voted} revealedCards={revealedCards} />
      )}
      <p className={"user-item-name"}>
        {isUserCurrentOwner && !isOwner && (
          <Button onClick={addAdmin}>
            <UserPlus />
          </Button>
        )}
        {user.name}
      </p>
    </div>
  );
};

export default UserItem;
