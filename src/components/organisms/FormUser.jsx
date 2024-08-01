import React, { useState } from "react";
import ButtonSubmit from "../atoms/ButtonSubmit";
import Input from "../atoms/InputText";
import Label from "../atoms/Label";
import InputRadio from "../atoms/InputRadio";
import useForm from "../../hooks/useForm";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentUser } from "../../reducers/user/userSlice";
import { createGame } from "../../reducers/game/gameSlice";
import "../../styles/organisms/FormUser.css";

const UserForm = ({ setModalForm }) => {
  const { name, setName, error, handleSubmit } = useForm({ onSubmit });
  const { gameName } = useParams();
  const [rol, setRol] = useState("player");

  const { rolCurrentUser } = useSelector((state) => state.user);

  // Verificar si tiene el rol de propietario
  const isOwner = rolCurrentUser.includes("owner");

  const dispatch = useDispatch();

  const generateUniqueId = () => new Date().getTime().toString();

  function onSubmit() {
    setModalForm(false);

    const currentUser = {
      id: generateUniqueId(),
      name,
      rol: isOwner ? [...rolCurrentUser, rol] : [rol],
    };

    const gameInfo = {
      gameName,
      player: currentUser,
    };

    dispatch(setCurrentUser(currentUser));

    isOwner ? dispatch(createGame(gameInfo)) : console.log("agregar jugador");
  }

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
            value="player"
            checked={rol === "player"}
            onChange={() => setRol("player")}
          />
          <Label htmlFor={"player"}>
            Jugador
            <span className="radio-button"></span>
          </Label>
          <InputRadio
            name="rol"
            value="viwer"
            checked={rol === "viwer"}
            onChange={() => setRol("viwer")}
          />
          <Label htmlFor={"viwer"}>
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
