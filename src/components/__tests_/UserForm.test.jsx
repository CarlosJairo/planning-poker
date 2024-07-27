import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import UserForm from "../organisms/FormUser";

describe("UserForm", () => {
  test("renders the form with all fields", () => {
    render(<UserForm onSubmit={jest.fn()} />);

    expect(screen.getByLabelText(/Tu nombre/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Jugador/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Espectador/i)).toBeInTheDocument();
    expect(screen.getByText(/Continuar/i)).toBeInTheDocument();
  });

  test("handles input change", () => {
    const { getByLabelText } = render(<UserForm onSubmit={jest.fn()} />);

    const input = getByLabelText(/Tu nombre/i);
    fireEvent.change(input, { target: { value: "Test Name" } });

    expect(input.value).toBe("Test Name");
  });

  test("disables the submit button when name is empty", () => {
    const { getByText } = render(<UserForm onSubmit={jest.fn()} />);

    expect(getByText(/Continuar/i)).toBeDisabled();
  });

  test("calls onSubmit with valid name and selected role", async () => {
    const onSubmit = jest.fn();
    render(<UserForm onSubmit={onSubmit} />);

    const input = screen.getByRole("textbox");
    const button = screen.getByRole("button", { name: /Continuar/i });

    fireEvent.change(input, { target: { value: "Carlos Ch" } });

    fireEvent.click(screen.getByLabelText(/Jugador/i)); // Selecciona el rol de Jugador

    fireEvent.click(button);

    await waitFor(() => {
      expect(onSubmit).toHaveBeenCalledWith("Carlos Ch");
    });
  });
});
