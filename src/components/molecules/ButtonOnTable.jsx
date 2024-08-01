import React from "react";
import Button from "../atoms/Button";

const GameButton = ({
  state,
  isOwner,
  loading,
  showCards,
  showScore,
  restartGame,
}) => {
  if (loading || !isOwner) return null;

  switch (state) {
    case "ready_to_show_cards":
      return (
        <Button onClick={showCards} className="btn-on-table">
          Revelar cartas
        </Button>
      );
    // case "revealed_cards":
    //   return (
    //     <Button onClick={showScore} className="btn-on-table">
    //       Show Results
    //     </Button>
    //   );
    case "revealed_cards":
      return (
        <Button onClick={restartGame} className="btn-on-table">
          Restart Game
        </Button>
      );
    default:
      return null;
  }
};

export default GameButton;
