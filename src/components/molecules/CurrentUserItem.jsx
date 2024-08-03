import React from "react";
import CardOnTable from "../atoms/CardOnTable";
import UserLogo from "../atoms/UserLogo";
import { useDispatch, useSelector } from "react-redux";
import Button from "../atoms/Button";
import { toggleViwer } from "../../reducers/game/gameSlice";
import { toggleViwerCurrent } from "../../reducers/user/userSlice";
import ReetWeet from "../atoms/ReetWeet";
import "../../styles/molecules/UserItem.css";

const CurrentUserItem = ({ user }) => {
  const { id, name, voted, rolCurrentUser } = user;

  const { state } = useSelector((state) => state.game);
  const revealedCards = state === "revealed_cards" || state === "finished";

  const dispatch = useDispatch();

  const isViwer = rolCurrentUser.includes("viwer");
  const isOwner = rolCurrentUser.includes("owner");

  const changeRol = () => {
    dispatch(toggleViwer(id));
    dispatch(toggleViwerCurrent());
  };

  return (
    <div className={`user-item`}>
      {isViwer ? (
        <UserLogo name={name} />
      ) : (
        <CardOnTable voted={voted} revealedCards={revealedCards} />
      )}
      <p className={"user-item-name"}>
        {isOwner && (
          <Button onClick={changeRol}>
            <ReetWeet />
          </Button>
        )}
        {user.name}
      </p>
    </div>
  );
};

export default CurrentUserItem;