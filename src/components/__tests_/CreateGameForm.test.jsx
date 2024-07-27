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
  // Verifica que los elementos se rendericen
  test("renders form elements", () => {
    render(<CreateGameForm onSubmit={jest.fn()} />);

    expect(screen.getByTestId("label")).toHaveTextContent("Nombra la partida");
    expect(screen.getByTestId("input")).toBeInTheDocument();
    expect(screen.getByTestId("button")).toBeInTheDocument();
  });

  // Verifica que el botón esté deshabilitado inicialmente
  test("disables submit button if name is empty", () => {
    render(<CreateGameForm onSubmit={jest.fn()} />);

    const button = screen.getByTestId("button");

    expect(button).toBeDisabled();
  });

  // Verifica que el botón esté habilitado
  test("enables submit button if name is provided", () => {
    render(<CreateGameForm onSubmit={jest.fn()} />);

    fireEvent.change(screen.getByTestId("input"), {
      target: { value: "Test Game" },
    });

    const button = screen.getByTestId("button");

    expect(button).toBeEnabled();
  });

  // Verifica que el onSubmit se llama con el nombre correcto
  test("calls onSubmit with valid name", async () => {
    const onSubmit = jest.fn();
    render(<CreateGameForm onSubmit={onSubmit} />);

    const input = screen.getByRole("textbox");
    const button = screen.getByRole("button", { name: /Crear partida/i });

    fireEvent.change(input, { target: { value: "Sprint 32" } });
    fireEvent.click(button);

    await waitFor(() => {
      expect(onSubmit).toHaveBeenCalledWith("Sprint 32");
    });
  });
});
