import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import CreateGameForm from "../organisms/CreateGameForm";

// Mock de los componentes hijos
jest.mock("../atoms/InputText", () => (props) => (
  <input data-testid="input" {...props} />
));
jest.mock("../atoms/Label", () => (props) => (
  <label data-testid="label" {...props} />
));
jest.mock("../atoms/ButtonSubmit", () => (props) => (
  <button data-testid="button" {...props} />
));

describe("CreateGameForm", () => {
  test("renders form elements", () => {
    render(<CreateGameForm onSubmit={jest.fn()} />);

    // Verifica que los elementos se rendericen
    expect(screen.getByTestId("label")).toHaveTextContent("Nombra la partida");
    expect(screen.getByTestId("input")).toBeInTheDocument();
    expect(screen.getByTestId("button")).toBeInTheDocument();
  });

  test("disables submit button if name is empty", () => {
    render(<CreateGameForm onSubmit={jest.fn()} />);

    // Obtén el botón de enviar
    const button = screen.getByTestId("button");

    // Verifica que el botón esté deshabilitado inicialmente
    expect(button).toBeDisabled();
  });

  test("enables submit button if name is provided", () => {
    render(<CreateGameForm onSubmit={jest.fn()} />);

    // Cambia el valor del input
    fireEvent.change(screen.getByTestId("input"), {
      target: { value: "Test Game" },
    });

    // Obtén el botón de enviar
    const button = screen.getByTestId("button");

    // Verifica que el botón esté habilitado
    expect(button).toBeEnabled();
  });

  test("calls onSubmit with valid name", async () => {
    const onSubmit = jest.fn();
    render(<CreateGameForm onSubmit={onSubmit} />);

    const input = screen.getByRole("textbox");
    const button = screen.getByRole("button", { name: /Crear partida/i });

    // Simula el ingreso de un nombre válido
    fireEvent.change(input, { target: { value: "Sprint 32" } });
    fireEvent.click(button);

    // Verifica que el onSubmit se llama con el nombre correcto
    await waitFor(() => {
      expect(onSubmit).toHaveBeenCalledWith("Sprint 32");
    });
  });
});
