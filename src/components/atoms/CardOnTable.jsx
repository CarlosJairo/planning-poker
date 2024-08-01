import React from "react";

const CardOnTable = ({ voted, revealedCards }) => {
  return (
    <>
      <div
        className={`card-on-table ${voted && "selected"} ${
          revealedCards && "show"
        }`}
      >
        {revealedCards && voted.str}
      </div>
    </>
  );
};

export default CardOnTable;
