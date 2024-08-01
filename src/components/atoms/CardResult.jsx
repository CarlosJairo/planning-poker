import CardOnTable from "./CardOnTable";

const CardResult = ({ card }) => {
  return (
    <div className="card-result">
      <CardOnTable voted={card} revealedCards={true} />
      <p>
        {card.votes} voto{card.votes > 1 && "s"}
      </p>
    </div>
  );
};

export default CardResult;
