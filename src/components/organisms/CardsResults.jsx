import CardResult from "../atoms/CardResult";
import Avarage from "../molecules/Avarage";

const CardsResults = ({ cards }) => {
  return (
    <div className="cards-results">
      {cards &&
        cards.map((card) => (
          <CardResult key={Math.random()} card={card} revealedCards={true} />
        ))}
      <Avarage />
    </div>
  );
};

export default CardsResults;
