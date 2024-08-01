import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import { useDispatch, useSelector } from "react-redux";
import { Table } from "../molecules/Table";
import {
  changeStateGame,
  countCardsAndAverage,
  restartGame,
} from "../../reducers/game/gameSlice";
import "@testing-library/jest-dom";
import { resetVoted } from "../../reducers/user/userSlice";

// Simulación de los hooks useDispatch y useSelector de react-redux
jest.mock("react-redux", () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

// Simulación de las acciones del slice game
jest.mock("../../reducers/game/gameSlice", () => ({
  changeStateGame: jest.fn(),
  countCardsAndAverage: jest.fn(),
  restartGame: jest.fn(),
  resetVoted: jest.fn(),
}));

describe("Table component", () => {
  const mockDispatch = jest.fn();
  const mockState = {
    game: { state: "ready_to_show_cards" },
  };

  // Simulación del comportamiento de useDispatch y useSelector antes de cada test
  beforeEach(() => {
    useDispatch.mockReturnValue(mockDispatch);
    useSelector.mockImplementation((selector) => selector(mockState));
  });

  // Limpieza de los mocks después de cada test
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("debería despachar changeStateGame y countCardsAndAverage cuando se llama a showCards", async () => {
    const roles = ["owner"];
    const { getByText } = render(<Table roles={roles} />);

    // simular el clic en el boton Revelar cartas
    fireEvent.click(getByText("Revelar cartas"));

    await waitFor(
      () =>
        expect(mockDispatch).toHaveBeenCalledWith(
          changeStateGame("revealed_cards")
        ),
      { timeout: 3000 }
    );
    await waitFor(
      () => expect(mockDispatch).toHaveBeenCalledWith(countCardsAndAverage()),
      { timeout: 3000 }
    );
  });

  it("debería despachar restartGame y resetVoted cuando se llama a handleRestartGame", async () => {
    mockState.game.state = "revealed_cards";

    const roles = ["owner"];
    const { getByText } = render(<Table roles={roles} />);

    // simular el clic en el boton Revelar cartas
    fireEvent.click(getByText("Nueva votación"));

    await waitFor(
      () => expect(mockDispatch).toHaveBeenCalledWith(restartGame()),
      { timeout: 3000 }
    );
    await waitFor(
      () => expect(mockDispatch).toHaveBeenCalledWith(resetVoted()),
      { timeout: 3000 }
    );
  });
});
