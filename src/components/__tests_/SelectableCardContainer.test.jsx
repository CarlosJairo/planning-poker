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

  beforeEach(() => {
    store = mockStore({
      game: {
        poolCards,
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

  it("Deshabilitar las tarjetas y ocultar el contenedor cuandodisabledCards sea verdade", () => {
    store = mockStore({
      game: {
        poolCards,
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
