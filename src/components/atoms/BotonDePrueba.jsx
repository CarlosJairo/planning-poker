import { useDispatch } from "react-redux";
import { selectCard, userVoted } from "../../reducers/game/gameSlice";

const BotonDePrueba = () => {
  let dispatch = useDispatch();

  const handleClick = () => {
    dispatch(userVoted({ id: "3", card: { id: "01", str: "0", value: 0 } }));
    dispatch(selectCard({ id: "01", str: "0", value: 0 }));
  };

  return <button onClick={handleClick}>Presioname </button>;
};

export default BotonDePrueba;
