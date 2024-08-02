import React, { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { everyoneVoted, selectCard } from "../../reducers/game/gameSlice";
import { voteCard } from "../../reducers/user/userSlice";
import Card from "../atoms/Card";
import "../../styles/organisms/SelectableCardContainer.css";

const SelectableCardContainer = ({ poolCards }) => {
  const [disabledCards, setDisabledCards] = useState(false);
  const { rolCurrentUser, id } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const isViwer = rolCurrentUser.includes("viwer");

  // Esta función se memorizada para evitar su recreación en cada renderizado.
  const sendCard = (card) => {
    dispatch(selectCard({ card, id }));
    dispatch(voteCard(card));
    dispatch(everyoneVoted());

    // Desactivar los clicks
    setDisabledCards(true);
  };
  // const sendCard = useCallback(
  //   (card) => {
  //     console.log();
  //     dispatch(selectCard({ card, id }));
  //     dispatch(voteCard(card));
  //     dispatch(everyoneVoted());

  //     // Desactivar los clicks
  //     setDisabledCards(true);
  //   },
  //   [dispatch]
  // );

  return (
    <section className={`selectable-card-container ${isViwer && "none"} `}>
      <h6>Elige una carta 👇</h6>
      <div className={`${disabledCards && "disabled"} cards`}>
        {poolCards ? (
          poolCards.map((card) => (
            <Card
              key={card.str}
              className={"card"}
              onClick={sendCard}
              card={card}
            >
              {card.str}
            </Card>
          ))
        ) : (
          <p>No hay cartas</p>
        )}
      </div>
    </section>
  );
};

export default SelectableCardContainer;
