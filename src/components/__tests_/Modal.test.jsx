import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Modal from "../organisms/Modal";

describe("Modal", () => {
  test("renders modal when isOpen is true", () => {
    const setShowModal = jest.fn();
    render(<Modal isOpen={true} setShowModal={setShowModal} />);

    // Verifica que el modal esté visible
    expect(screen.getByRole("dialog")).toBeInTheDocument();
  });

  test("does not render modal with 'is-active' class when isOpen is false", () => {
    const setShowModal = jest.fn();
    render(<Modal isOpen={false} setShowModal={setShowModal} />);

    // Verifica que el modal no tenga la clase 'is-active'
    const modal = screen.queryByRole("dialog");
    expect(modal).toBeInTheDocument();
    expect(modal).not.toHaveClass("is-active");
  });
});
