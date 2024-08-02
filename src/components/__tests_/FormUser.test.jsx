import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import UserForm from "../organisms/FormUser";
import { setCurrentUser } from "../../reducers/user/userSlice";
import { addPlayer, createGame } from "../../reducers/game/gameSlice";
import "@testing-library/jest-dom";

const mockStore = configureStore(thunk);

jest.mock("../../reducers/user/userSlice", () => ({
  setCurrentUser: jest.fn((user) => ({
    type: "user/setCurrentUser",
    payload: user,
  })),
}));

jest.mock("../../reducers/game/gameSlice", () => ({
  addPlayer: jest.fn((player) => ({ type: "game/addPlayer", payload: player })),
  createGame: jest.fn((gameInfo) => ({
    type: "game/createGame",
    payload: gameInfo,
  })),
}));

describe("UserForm component logic", () => {
  let store;
  let setModalForm;

  const initialState = {
    user: { rolCurrentUser: ["player"] },
    game: { state: "started" },
  };

  beforeEach(() => {
    store = mockStore(initialState);
    setModalForm = jest.fn();
    jest.clearAllMocks();
  });

  it("debería crear un juego si el usuario actual es owner", () => {
    store = mockStore({
      user: { rolCurrentUser: ["owner"] },
      game: { state: "started" },
    });

    const { getByLabelText, getByText } = render(
      <Provider store={store}>
        <UserForm setModalForm={setModalForm} />
      </Provider>
    );

    fireEvent.change(getByLabelText("Tu nombre"), {
      target: { value: "OwnerUser" },
    });
    fireEvent.click(getByText("Continuar"));

    expect(setCurrentUser).toHaveBeenCalled();
    expect(createGame).toHaveBeenCalled();
    expect(addPlayer).not.toHaveBeenCalled();
  });

  it("debería crear un juego si el usuario actual es propietario", () => {
    store = mockStore({
      user: { rolCurrentUser: ["owner"] },
      game: { state: "started" },
    });

    const { getByLabelText, getByText } = render(
      <Provider store={store}>
        <UserForm setModalForm={setModalForm} />
      </Provider>
    );

    fireEvent.change(getByLabelText("Tu nombre"), {
      target: { value: "OwnerUser" },
    });
    fireEvent.click(getByText("Continuar"));

    expect(setCurrentUser).toHaveBeenCalled();
    expect(createGame).toHaveBeenCalled();
    expect(addPlayer).not.toHaveBeenCalled();
  });

  it("debería agregar un jugador si el usuario actual no es owner", () => {
    const { getByLabelText, getByText } = render(
      <Provider store={store}>
        <UserForm setModalForm={setModalForm} />
      </Provider>
    );

    fireEvent.change(getByLabelText("Tu nombre"), {
      target: { value: "PlayerUser" },
    });
    fireEvent.click(getByText("Continuar"));

    expect(setCurrentUser).toHaveBeenCalled();
    expect(addPlayer).toHaveBeenCalled();
    expect(createGame).not.toHaveBeenCalled();
  });
});
