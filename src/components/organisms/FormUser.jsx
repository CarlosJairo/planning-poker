import { useState } from "react";
import ButtonSubmit from "../atoms/ButtonSubmit";
import Input from "../atoms/InputText";
import Label from "../atoms/Label";
import InputRadio from "../atoms/InputRadio";
import "../../styles/organisms/FormUser.css";
import useForm from "../../hooks/useForm";

const UserForm = ({ onSubmit }) => {
  const { name, setName, error, handleSubmit } = useForm({ onSubmit });

  const [rol, setRol] = useState("jugador");

  return (
    <form className="user-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <Label htmlFor={"nombre-partida"}>Tu nombre</Label>
        <Input
          id={"nombre-partida"}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <div className="roles-container">
          <InputRadio
            name="rol"
            value="jugador"
            checked={rol === "jugador"}
            onChange={() => setRol("jugador")}
          />
          <Label htmlFor={"jugador"}>
            Jugador
            <span className="radio-button"></span>
          </Label>
          <InputRadio
            name="rol"
            value="espectador"
            checked={rol === "espectador"}
            onChange={() => setRol("espectador")}
          />
          <Label htmlFor={"espectador"}>
            Espectador
            <span className="radio-button"></span>
          </Label>
        </div>
      </div>
      {error && <p className="error">{error}</p>}
      <ButtonSubmit disabled={name.length > 0 ? false : true}>
        Continuar
      </ButtonSubmit>
    </form>
  );
};

export default UserForm;
