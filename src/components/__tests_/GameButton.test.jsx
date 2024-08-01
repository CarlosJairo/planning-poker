import React from "react";
import { render, fireEvent } from "@testing-library/react";
import GameButton from "../molecules/ButtonOnTable";
import "@testing-library/jest-dom";

describe("GameButton component", () => {
  const mockShowCards = jest.fn();
  const mockRestartGame = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renderizar boton Revelar cartas cuando el estado sea ready_to_show_cards y propietario", () => {
    const { getByText } = render(
      <GameButton
        state="ready_to_show_cards"
        isOwner={true}
        loading={false}
        showCards={mockShowCards}
        restartGame={mockRestartGame}
      />
    );

    expect(getByText("Revelar cartas")).toBeInTheDocument();
  });

  it("mostrar botón Nueva votación cuando el estado es 'revealed_cards' y sea owner", () => {
    const { getByText } = render(
      <GameButton
        state="revealed_cards"
        isOwner={true}
        loading={false}
        showCards={mockShowCards}
        restartGame={mockRestartGame}
      />
    );

    expect(getByText("Nueva votación")).toBeInTheDocument();
  });

  it("no mostrar nada si loading esta true", () => {
    const { queryByText } = render(
      <GameButton
        state="ready_to_show_cards"
        isOwner={true}
        loading={true}
        showCards={mockShowCards}
        restartGame={mockRestartGame}
      />
    );

    expect(queryByText("Revelar cartas")).not.toBeInTheDocument();
    expect(queryByText("Nueva votación")).not.toBeInTheDocument();
  });

  it("no renderizar nada si el rol no es owner", () => {
    const { queryByText } = render(
      <GameButton
        state="ready_to_show_cards"
        isOwner={false}
        loading={false}
        showCards={mockShowCards}
        restartGame={mockRestartGame}
      />
    );

    expect(queryByText("Revelar cartas")).not.toBeInTheDocument();
    expect(queryByText("Nueva votación")).not.toBeInTheDocument();
  });

  it("llamar a showCards cuando se le de clic", () => {
    const { getByText } = render(
      <GameButton
        state="ready_to_show_cards"
        isOwner={true}
        loading={false}
        showCards={mockShowCards}
        restartGame={mockRestartGame}
      />
    );

    fireEvent.click(getByText("Revelar cartas"));
    expect(mockShowCards).toHaveBeenCalledTimes(1);
  });

  it("llamar a restartGame cuando se le de clic", () => {
    const { getByText } = render(
      <GameButton
        state="revealed_cards"
        isOwner={true}
        loading={false}
        showCards={mockShowCards}
        restartGame={mockRestartGame}
      />
    );

    fireEvent.click(getByText("Nueva votación"));
    expect(mockRestartGame).toHaveBeenCalledTimes(1);
  });
});
