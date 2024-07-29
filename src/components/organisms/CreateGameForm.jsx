import React from "react";
import Input from "../atoms/InputText";
import Label from "../atoms/Label";
import ButtonSubmit from "../atoms/ButtonSubmit";
import useForm from "../../hooks/useForm";
import { useNavigate } from "react-router-dom";

import "../../styles/organisms/CreateGameForm.css";
import { useDispatch } from "react-redux";
import { setOwerRol } from "../../reducers/user/userSlice";

const CreateGameForm = () => {
  const { name, setName, error, handleSubmit } = useForm({ onSubmit });

  let navigate = useNavigate();

  let dispatch = useDispatch();

  function onSubmit(name) {
    dispatch(setOwerRol());
    navigate(`/game/${name}`);
  }

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
