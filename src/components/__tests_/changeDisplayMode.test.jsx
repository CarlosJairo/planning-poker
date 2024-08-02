// HU12 cambiar modo de visualizacion

import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import UserItem from "../molecules/UserItem";
import { toggleViwer } from "../../reducers/game/gameSlice";
import "@testing-library/jest-dom";
import { useDispatch } from "react-redux";
import { toggleViwerCurrent } from "../../reducers/user/userSlice";

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: jest.fn(),
}));

const mockStore = configureStore([]);

describe("Componente UserItem", () => {
  let store;
  let dispatch;

  beforeEach(() => {
    const initialState = {
      game: {
        state: "playing",
        players: [{ id: 1, name: "OwnerUser", rol: ["owner"], voted: false }],
      },
      user: { id: 1, name: "OwnerUser", rolCurrentUser: ["owner"] },
    };

    store = mockStore(initialState);
    dispatch = jest.fn();
    useDispatch.mockReturnValue(dispatch);
  });

  // Verifica que se muestre el botón ReetWeet si el rol del usuario es 'owner'
  it("debería mostrar el botón ReetWeet si el rol del usuario es 'owner'", () => {
    render(
      <Provider store={store}>
        <UserItem
          user={{ id: 1, name: "OwnerUser", rol: ["owner"], voted: false }}
        />
      </Provider>
    );

    expect(screen.getByRole("button")).toBeInTheDocument();
    expect(screen.getByText("OwnerUser")).toBeInTheDocument();
  });

  // Verifica que no se muestre el botón ReetWeet si el rol del usuario no es 'owner'
  it("no debería mostrar el botón ReetWeet si el rol del usuario no es 'owner'", () => {
    render(
      <Provider store={store}>
        <UserItem
          user={{ id: 2, name: "PlayerUser", rol: ["player"], voted: false }}
        />
      </Provider>
    );

    expect(screen.queryByRole("button")).not.toBeInTheDocument();
    expect(screen.getByText("PlayerUser")).toBeInTheDocument();
  });

  // Verifica que se despachen las acciones toggleViwer y toggleViwerCurrent cuando se hace clic en el botón ReetWeet
  it("debería despachar las acciones toggleViwer y toggleViwerCurrent cuando se hace clic en el botón ReetWeet", () => {
    render(
      <Provider store={store}>
        <UserItem
          user={{ id: 1, name: "OwnerUser", rol: ["owner"], voted: false }}
        />
      </Provider>
    );

    const button = screen.getByRole("button");
    fireEvent.click(button);

    expect(dispatch).toHaveBeenCalledWith(toggleViwer(1));
    expect(dispatch).toHaveBeenCalledWith(toggleViwerCurrent());
  });
});
