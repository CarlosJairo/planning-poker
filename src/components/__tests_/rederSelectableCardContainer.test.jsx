// HU3 elegir carta con puntaje  - ADMIN-OWNER
// HU3 elegir carta con puntaje  - JUGADOR
import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import SelectableCardContainer from "../organisms/SelectableCardContainer";
import "@testing-library/jest-dom";

const mockStore = configureStore([]);

describe("Componente SelectableCardContainer", () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      user: { id: 1, rolCurrentUser: [] }, // Usuario sin rol 'viwer'
      game: {
        allPoolCards: {
          card1: "Card 1",
          card2: "Card 2",
          card3: "Card 3",
        },
        selectedCards: [],
      },
    });
  });

  // Verifica que el contenedor con la clase 'selectable-card-container' se muestra correctamente
  it("debería mostrar el contenedor con la clase 'selectable-card-container'", () => {
    render(
      <Provider store={store}>
        <SelectableCardContainer poolCards={[]} />
      </Provider>
    );

    expect(screen.getByTestId("selectable-card-container")).toBeInTheDocument();
  });

  // Verifica que el contenedor tiene la clase 'none' si el rol del usuario incluye 'viwer'
  it("debería tener la clase 'none' si el rol del usuario incluye 'viwer'", () => {
    store = mockStore({
      user: { id: 1, rolCurrentUser: ["viwer"] }, // Usuario con rol 'viwer'
      game: {
        allPoolCards: {
          card1: "Card 1",
          card2: "Card 2",
          card3: "Card 3",
        },
        selectedCards: [],
      },
    });

    render(
      <Provider store={store}>
        <SelectableCardContainer poolCards={[]} />
      </Provider>
    );

    const container = screen.getByTestId("selectable-card-container");
    expect(container).toBeInTheDocument();
    expect(container).toHaveClass("selectable-card-container");
    expect(container).toHaveClass("none");
  });
});
