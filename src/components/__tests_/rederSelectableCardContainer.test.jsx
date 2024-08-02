// HU3 Visualizar la mesa de votación con los demas usuarios - ADMIN-OWNER
// HU10 Visualizar la mesa de votación con los demas usuarios - JUGADOR
import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import TableAndPlayers from "../organisms/TableAndPlayers";
import "@testing-library/jest-dom";
import SelectableCardContainer from "../organisms/SelectableCardContainer";

const mockStore = configureStore([]);

describe("SelectableCardContainer component", () => {
  let store;
  const poolCards = [
    { id: "0", str: "0", value: 0 },
    { id: "1", str: "1", value: 1 },
    { id: "2", str: "3", value: 3 },
    { id: "3", str: "5", value: 5 },
    { id: "4", str: "8", value: 8 },
    { id: "5", str: "13", value: 13 },
    { id: "6", str: "34", value: 34 },
    { id: "7", str: "55", value: 55 },
    { id: "8", str: "89", value: 89 },
    { id: "question", str: "?", value: 0 },
    { id: "breack", str: "🍵", value: 0 },
  ];

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
        <SelectableCardContainer poolCards={poolCards} />
      </Provider>
    );

    // verificar si 'table-and-players' esta en el documento
    const element = container.querySelector(".selectable-card-container");
    expect(element).toBeInTheDocument();
  });
});
