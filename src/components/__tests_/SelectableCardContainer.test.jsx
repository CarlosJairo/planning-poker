import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import SelectableCardContainer from "../organisms/SelectableCardContainer";
import "@testing-library/jest-dom";
import { selectCard } from "../../reducers/game/gameSlice";
import { voteCard } from "../../reducers/user/userSlice";

const mockStore = configureStore([]);

describe("SelectableCardContainer component", () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      game: {
        poolCards: [
          { id: "01", str: "0", value: 0 },
          { id: "02", str: "1", value: 1 },
          { id: "03", str: "3", value: 3 },
          { id: "04", str: "5", value: 5 },
          { id: "05", str: "8", value: 8 },
          { id: "06", str: "13", value: 13 },
          { id: "07", str: "34", value: 34 },
          { id: "08", str: "55", value: 55 },
          { id: "09", str: "89", value: 89 },
          { id: "question", str: "?", value: 0 },
          { id: "breack", str: "🍵", value: 0 },
        ],
      },
      user: { rolCurrentUser: ["player"] },
    });
  });

  it("renderizar el pool y simular el click de una carta", () => {
    const { getByText, getAllByText } = render(
      <Provider store={store}>
        <SelectableCardContainer />
      </Provider>
    );

    // Verifica que las cartas están renderizadas
    expect(getAllByText("0")).toHaveLength(1);
    expect(getAllByText("1")).toHaveLength(1);
    expect(getAllByText("🍵")).toHaveLength(1);

    // Simula el clic en una carta
    fireEvent.click(getByText("0"));

    // Verifica que las acciones de Redux fueron despachadas
    const actions = store.getActions();
    expect(actions).toContainEqual(
      selectCard({ id: "01", str: "0", value: 0 })
    );
    expect(actions).toContainEqual(voteCard());
  });

  it("Deshabilitar las tarjetas y ocultar el contenedor cuandodisabledCards sea verdade", () => {
    store = mockStore({
      game: {
        poolCards: [
          { id: "01", str: "0", value: 0 },
          { id: "02", str: "1", value: 1 },
        ],
      },
      user: { rolCurrentUser: ["player"] },
    });

    const { container } = render(
      <Provider store={store}>
        <SelectableCardContainer />
      </Provider>
    );

    // Simula el clic en una carta
    fireEvent.click(container.querySelector(".card"));

    // Verifica que las cartas están deshabilitadas
    expect(container.querySelector(".cards")).toHaveClass("disabled");
  });

  it('Mostar "No hay cartas" si no hay cartas', () => {
    store = mockStore({
      game: { poolCards: null },
      user: { rolCurrentUser: ["player"] },
    });

    const { getByText } = render(
      <Provider store={store}>
        <SelectableCardContainer />
      </Provider>
    );

    // Verifica que el mensaje "No hay cartas" está presente
    expect(getByText("No hay cartas")).toBeInTheDocument();
  });

  it('aplicar class "none" si el rol incluye viwer"', () => {
    store = mockStore({
      game: {
        poolCards: [{ id: "01", str: "0", value: 0 }],
      },
      user: { rolCurrentUser: ["viwer"] },
    });

    const { container } = render(
      <Provider store={store}>
        <SelectableCardContainer />
      </Provider>
    );

    // Verifica que la clase "none" está aplicada
    expect(container.querySelector(".selectable-card-container")).toHaveClass(
      "none"
    );
  });
});
