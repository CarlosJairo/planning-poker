import { useSelector } from "react-redux";

const replaceDotForComma = (numero) => {
  return numero.toFixed(1).toString().replace(".", ",");
};

const Avarage = () => {
  const { avarage } = useSelector((state) => state.game.results);
  return (
    <div className="avarage">
      <p>Promedio</p>
      <p>{replaceDotForComma(avarage)}</p>
    </div>
  );
};

export default Avarage;
