import React, { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCard } from "../../reducers/game/gameSlice";
import { voteCard } from "../../reducers/user/userSlice";
import Card from "../atoms/Card";
import "../../styles/organisms/SelectableCardContainer.css";

const SelectableCardContainer = () => {
  const [disabledCards, setDisabledCards] = useState(false);
  const { poolCards } = useSelector((state) => state.game);
  const { rolCurrentUser } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const isViwer = rolCurrentUser.includes("viwer");

  // Esta función se memorizada para evitar su recreación en cada renderizado.
  const sendCard = useCallback(
    (card) => {
      dispatch(selectCard(card));
      dispatch(voteCard(card));
      // Desactivar los clicks
      setDisabledCards(true);
    },
    [dispatch]
  );

  return (
    <div className={`selectable-card-container ${isViwer && "none"} `}>
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
      {/* <BotonDePrueba /> */}
    </div>
  );
};

export default SelectableCardContainer;
