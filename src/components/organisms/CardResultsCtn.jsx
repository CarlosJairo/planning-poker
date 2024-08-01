import CardsResults from "./CardsResults";
import { useSelector } from "react-redux";
import "../../styles/organisms/CardResultsCtn.css";

const CardResultsCtn = () => {
  const { results } = useSelector((state) => state.game);

  return (
    <section className="card-results-container">
      <CardsResults key={8} cards={results.count} />
    </section>
  );
};

export default CardResultsCtn;
