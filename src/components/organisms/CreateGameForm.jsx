import Input from "../atoms/InputText";
import Label from "../atoms/Label";
import ButtonSubmit from "../atoms/ButtonSubmit";
import useForm from "../../hooks/useForm";
import "../../styles/organisms/CreateGameForm.css";

const CreateGameForm = ({ onSubmit }) => {
  const { name, setName, error, handleSubmit } = useForm({ onSubmit });

  return (
    <form className="create-game-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <Label htmlFor={"nombre-partida"}>Nombra la partida</Label>
        <Input
          id={"nombre-partida"}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      {error && <p className="error">{error}</p>}
      <ButtonSubmit disabled={name.length > 0 ? false : true}>
        Crear partida
      </ButtonSubmit>
    </form>
  );
};

export default CreateGameForm;
