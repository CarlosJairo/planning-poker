import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import UserItem from "../molecules/UserItem";
import { addRolOwner } from "../../reducers/game/gameSlice";
import "@testing-library/jest-dom";
import { useDispatch } from "react-redux";

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
        players: [{ id: 1, name: "TestUser", rol: ["viwer"], voted: false }],
      },
      user: { id: 1, name: "TestUser", rolCurrentUser: ["owner"] },
    };

    store = mockStore(initialState);
    dispatch = jest.fn();
    useDispatch.mockReturnValue(dispatch);
  });

  // Verifica que se muestre el botón UserPlus si el rol actual del usuario incluye 'owner'
  it("debería mostrar el botón UserPlus si el rol actual del usuario incluye 'owner'", () => {
    render(
      <Provider store={store}>
        <UserItem
          user={{ id: 1, name: "TestUser", rol: ["viwer"], voted: false }}
        />
      </Provider>
    );

    expect(screen.getByRole("button")).toBeInTheDocument();
    expect(screen.getByText("TestUser")).toBeInTheDocument();
  });

  // Verifica que no se muestre el botón UserPlus si el rol actual del usuario no incluye 'owner'
  it("no debería mostrar el botón UserPlus si el rol actual del usuario no incluye 'owner'", () => {
    const initialState = {
      game: {
        state: "playing",
        players: [{ id: 1, name: "TestUser", rol: ["viwer"], voted: false }],
      },
      user: { id: 1, name: "TestUser", rolCurrentUser: ["player"] },
    };

    store = mockStore(initialState);

    render(
      <Provider store={store}>
        <UserItem
          user={{ id: 1, name: "TestUser", rol: ["viwer"], voted: false }}
        />
      </Provider>
    );

    expect(screen.queryByRole("button")).not.toBeInTheDocument();
    expect(screen.getByText("TestUser")).toBeInTheDocument();
  });

  // Verifica que se despache la acción addRolOwner cuando se hace clic en el botón UserPlus
  it("debería despachar la acción addRolOwner cuando se hace clic en el botón UserPlus", () => {
    render(
      <Provider store={store}>
        <UserItem
          user={{ id: 1, name: "TestUser", rol: ["viwer"], voted: false }}
        />
      </Provider>
    );

    const button = screen.getByRole("button");
    fireEvent.click(button);

    expect(dispatch).toHaveBeenCalledWith(addRolOwner(1));
  });
});
