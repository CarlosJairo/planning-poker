import "../../styles/organisms/SelectableCardContainer.css";
import Card from "../atoms/Card";

const cards = [2, 4, 5, 6, 7, 8, 9, 10, "?", "🍵"];

const SelectableCardContainer = () => {
  const sendCard = () => {
    console.log("Send card");
  };

  return (
    <div className="selectable-card-container" style={{ height: "20%" }}>
      <h6>Elige una carta 👇</h6>
      <div className="cards">
        {cards &&
          cards.map((card) => (
            <Card key={Math.random()} className={"card"} onClick={sendCard}>
              {card}
            </Card>
          ))}
      </div>
    </div>
  );
};

export default SelectableCardContainer;
