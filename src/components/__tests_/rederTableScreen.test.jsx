// // HU2 Visualizar la mesa de votación con los demas usuarios - ADMIN-OWNER
// // HU9 Visualizar la mesa de votación con los demas usuarios - JUGADOR
import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import TableAndPlayers from "../organisms/TableAndPlayers";
import "@testing-library/jest-dom";

const mockStore = configureStore([]);

describe("TableAndPlayers component", () => {
  let store;

  beforeEach(() => {
    const initialState = {
      game: {
        players: [
          { id: 1, name: "Player1", rol: ["player"], voted: false },
          { id: 2, name: "Player2", rol: ["viwer"], voted: false },
        ],
      },
      user: { id: 1, name: "CurrentUser", rolCurrentUser: ["owner"] },
    };
    store = mockStore(initialState);
  });

  it("debería representar el componente TableAndPlayers con la clase 'table-and-players'", () => {
    const { container } = render(
      <Provider store={store}>
        <TableAndPlayers />
      </Provider>
    );

    // verificar si 'table-and-players' esta en el documento
    const element = container.querySelector(".table-and-players");
    expect(element).toBeInTheDocument();
  });
});
