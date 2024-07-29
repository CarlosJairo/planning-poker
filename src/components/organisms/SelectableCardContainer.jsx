import "../../styles/organisms/SelectableCardContainer.css";
import Button from "../atoms/Button";

const SelectableCardContainer = () => {
  return (
    <div className="selectable-card-container" style={{ height: "20%" }}>
      <h6>Elige una carta 👇</h6>
      <div className="cards">
        <Button className={"card"}>1</Button>
        <Button className={"card"}>2</Button>
        <Button className={"card"}>3</Button>
        <Button className={"card"}>4</Button>
        <Button className={"card"}>5</Button>
        <Button className={"card"}>6</Button>
        <Button className={"card"}>7</Button>
        <Button className={"card"}>8</Button>
        <Button className={"card"}>?</Button>
        <Button className={"card"}>🍵</Button>
      </div>
    </div>
  );
};

export default SelectableCardContainer;
