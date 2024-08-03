import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import CurrentUserItem from "../molecules/CurrentUserItem";
import { toggleViwer } from "../../reducers/game/gameSlice";
import { toggleViwerCurrent } from "../../reducers/user/userSlice";
import "@testing-library/jest-dom";
import { useDispatch } from "react-redux";

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: jest.fn(),
}));

const mockStore = configureStore([]);

describe("Componente CurrentUserItem", () => {
  let store;
  let dispatch;

  beforeEach(() => {
    const initialState = {
      game: {
        state: "playing",
        players: [{ id: 1, name: "CurrentUser", voted: false }],
      },
      user: { id: 1, name: "CurrentUser", rolCurrentUser: ["owner"] },
    };

    store = mockStore(initialState);
    dispatch = jest.fn();
    useDispatch.mockReturnValue(dispatch);
  });

  // Verifica que se muestre el botón ReetWeet si el rol actual del usuario incluye 'owner'
  it("debería mostrar el botón ReetWeet si el rol actual del usuario incluye 'owner'", () => {
    render(
      <Provider store={store}>
        <CurrentUserItem
          user={{
            id: 1,
            name: "CurrentUser",
            voted: false,
            rolCurrentUser: ["owner"],
          }}
        />
      </Provider>
    );

    expect(screen.getByRole("button")).toBeInTheDocument();
    expect(screen.getByText("CurrentUser")).toBeInTheDocument();
  });

  // Verifica que no se muestre el botón ReetWeet si el rol actual del usuario no incluye 'owner'
  it("no debería mostrar el botón ReetWeet si el rol actual del usuario no incluye 'owner'", () => {
    const initialState = {
      game: {
        state: "playing",
        players: [{ id: 1, name: "CurrentUser", voted: false }],
      },
      user: { id: 1, name: "CurrentUser", rolCurrentUser: ["player"] },
    };

    store = mockStore(initialState);

    render(
      <Provider store={store}>
        <CurrentUserItem
          user={{
            id: 1,
            name: "CurrentUser",
            voted: false,
            rolCurrentUser: ["player"],
          }}
        />
      </Provider>
    );

    expect(screen.queryByRole("button")).not.toBeInTheDocument();
    expect(screen.getByText("CurrentUser")).toBeInTheDocument();
  });

  // Verifica que se despachen las acciones toggleViwer y toggleViwerCurrent cuando se hace clic en el botón ReetWeet
  it("debería despachar las acciones toggleViwer y toggleViwerCurrent cuando se hace clic en el botón ReetWeet", () => {
    render(
      <Provider store={store}>
        <CurrentUserItem
          user={{
            id: 1,
            name: "CurrentUser",
            voted: false,
            rolCurrentUser: ["owner"],
          }}
        />
      </Provider>
    );

    const button = screen.getByRole("button");
    fireEvent.click(button);

    expect(dispatch).toHaveBeenCalledWith(toggleViwer(1));
    expect(dispatch).toHaveBeenCalledWith(toggleViwerCurrent());
  });
});
