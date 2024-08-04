import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { everyoneVoted, selectCard } from "../../reducers/game/gameSlice";
import { voteCard } from "../../reducers/user/userSlice";
import Card from "../atoms/Card";
import "../../styles/organisms/SelectableCardContainer.css";
import SelectPoolCards from "../molecules/SelectPoolCards";

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

  return (
    <section
      className={`selectable-card-container ${isViwer && "none"} `}
      data-testid="selectable-card-container"
    >
      <div className="title-and-select-ctn">
        <h6>Elige una carta 👇</h6>
        <SelectPoolCards />
      </div>
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
