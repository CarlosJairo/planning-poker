import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import SplashScreen from "../pages/SplashScreen";
import FichaPoker from "../atoms/FichaPoker";
import Logo from "../atoms/Logo";

// Mock de los componentes hijos
jest.mock("../atoms/FichaPoker", () => () => <svg data-testid="ficha-poker" />);
jest.mock("../atoms/Logo", () => () => <svg data-testid="logo" />);

describe("SplashScreen", () => {
  test("renders FichaPoker and Logo", () => {
    const setShowSplashScreen = jest.fn();

    render(
      <SplashScreen
        showSplashScreen={true}
        setShowSplashScreen={setShowSplashScreen}
      />
    );

    // Verifica que los elementos SVG se rendericen
    expect(screen.getByTestId("ficha-poker")).toBeInTheDocument();
    expect(screen.getByTestId("logo")).toBeInTheDocument();
  });

  test("calls setShowSplashScreen with false after 2 seconds", async () => {
    const setShowSplashScreen = jest.fn();

    render(
      <SplashScreen
        showSplashScreen={true}
        setShowSplashScreen={setShowSplashScreen}
      />
    );

    // Verifica que setShowSplashScreen no se haya llamado inmediatamente
    expect(setShowSplashScreen).not.toHaveBeenCalled();

    // Espera 2.1 segundos (un poco más que el tiempo del temporizador)
    await waitFor(
      () => {
        expect(setShowSplashScreen).toHaveBeenCalledWith(false);
      },
      { timeout: 2100 }
    ); // Timeout un poco mayor que el temporizador para asegurarse de que la espera es suficiente
  });
});
