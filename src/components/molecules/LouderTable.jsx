import Louder from "../atoms/Louder";
import "../../styles/molecules/LouderTable.css";

const LouderTable = () => {
  return (
    <div className="louder-table">
      <Louder />
      <p>Contando votos</p>
    </div>
  );
};

export default LouderTable;
