import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import SelectableCardContainer from "../organisms/SelectableCardContainer";
import "@testing-library/jest-dom";
import { selectCard } from "../../reducers/game/gameSlice";
import { voteCard, everyoneVoted } from "../../reducers/user/userSlice";

const mockStore = configureStore([]);

describe("SelectableCardContainer component", () => {
  let store;

  const poolCards = [
    { id: "01", str: "0", value: 0 },
    { id: "02", str: "1", value: 1 },
  ];

  const selectedCards = [];

  const allPoolCards = {
    fibonacci: [
      { id: "0", str: "0", value: 0 },
      { id: "1", str: "1", value: 1 },
      { id: "2", str: "3", value: 3 },
      { id: "3", str: "5", value: 5 },
      { id: "4", str: "8", value: 8 },
      { id: "5", str: "13", value: 13 },
      { id: "6", str: "21", value: 21 },
      { id: "7", str: "34", value: 34 },
      { id: "8", str: "55", value: 55 },
      { id: "9", str: "89", value: 89 },
      { id: "question", str: "?", value: 0 },
      { id: "break", str: "🍵", value: 0 },
    ],
    modifiedFibonacci: [
      { id: "0", str: "0", value: 0 },
      { id: "1", str: "1/2", value: 0.5 },
      { id: "2", str: "1", value: 1 },
      { id: "3", str: "2", value: 2 },
      { id: "4", str: "3", value: 3 },
      { id: "5", str: "5", value: 5 },
      { id: "6", str: "8", value: 8 },
      { id: "7", str: "13", value: 13 },
      { id: "8", str: "20", value: 20 },
      { id: "9", str: "40", value: 40 },
      { id: "10", str: "100", value: 100 },
      { id: "question", str: "?", value: 0 },
      { id: "break", str: "🍵", value: 0 },
    ],
    powersOfTwo: [
      { id: "0", str: "0", value: 0 },
      { id: "1", str: "1", value: 1 },
      { id: "2", str: "2", value: 2 },
      { id: "3", str: "4", value: 4 },
      { id: "4", str: "8", value: 8 },
      { id: "5", str: "16", value: 16 },
      { id: "6", str: "32", value: 32 },
      { id: "7", str: "64", value: 64 },
      { id: "question", str: "?", value: 0 },
      { id: "break", str: "🍵", value: 0 },
    ],
  };

  beforeEach(() => {
    store = mockStore({
      game: {
        poolCards,
        selectedCards,
        allPoolCards,
      },
      user: { rolCurrentUser: ["player"] },
    });
  });

  it("renderizar el pool y simular el click de una carta", () => {
    const { getByText } = render(
      <Provider store={store}>
        <SelectableCardContainer poolCards={poolCards} />
      </Provider>
    );

    // Verifica que las cartas están renderizadas
    expect(getByText("0")).toBeInTheDocument();
    expect(getByText("1")).toBeInTheDocument();

    // Simula el clic en una carta
    fireEvent.click(getByText("0"));

    // Verifica que las acciones de Redux fueron despachadas
    const actions = store.getActions();
    expect(actions).toContainEqual(voteCard({ id: "01", str: "0", value: 0 }));
  });

  it("Deshabilitar las tarjetas y ocultar el contenedor cuando disabledCards sea true", () => {
    store = mockStore({
      game: {
        poolCards,
        selectedCards,
        allPoolCards,
      },
      user: { rolCurrentUser: ["player"] },
    });

    const { container } = render(
      <Provider store={store}>
        <SelectableCardContainer poolCards={poolCards} />
      </Provider>
    );

    // Simula el clic en una carta
    fireEvent.click(container.querySelector(".card"));

    // Verifica que las cartas están deshabilitadas
    expect(container.querySelector(".cards")).toHaveClass("disabled");
  });

  it('Mostar "No hay cartas" si no hay cartasg', () => {
    store = mockStore({
      game: {
        poolCards,
        selectedCards,
        allPoolCards,
      },
      user: { rolCurrentUser: ["player"] },
    });

    const { getByText } = render(
      <Provider store={store}>
        <SelectableCardContainer poolCards={null} />
      </Provider>
    );

    // Verifica que el mensaje "No hay cartas" está presente
    expect(getByText("No hay cartas")).toBeInTheDocument();
  });

  it('aplicar class "none" si el rol incluye viwer"', () => {
    store = mockStore({
      game: {
        poolCards,
        selectedCards,
        allPoolCards,
      },
      user: { rolCurrentUser: ["viwer"] },
    });

    const { container } = render(
      <Provider store={store}>
        <SelectableCardContainer poolCards={poolCards} />
      </Provider>
    );

    // Verifica que la clase "none" está aplicada
    expect(container.querySelector(".selectable-card-container")).toHaveClass(
      "none"
    );
  });
});
