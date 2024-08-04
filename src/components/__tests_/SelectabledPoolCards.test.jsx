import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import SelectPoolCards from "../molecules/SelectPoolCards";
import { changePoolCards } from "../../reducers/game/gameSlice";
import "@testing-library/jest-dom";

const mockStore = configureStore([]);

describe("SelectPoolCards Component", () => {
  let store;

  beforeEach(() => {
    const initialState = {
      game: {
        allPoolCards: {
          fibonacci: [
            { id: "0", str: "0", value: 0 },
            { id: "1", str: "1", value: 1 },
            { id: "2", str: "3", value: 3 },
            { id: "3", str: "5", value: 5 },
            { id: "4", str: "8", value: 8 },
            { id: "5", str: "13", value: 13 },
            { id: "6", str: "21", value: 21 },
            { id: "7", str: "34", value: 34 },
            { id: "8", str: "55", value: 55 },
            { id: "9", str: "89", value: 89 },
            { id: "question", str: "?", value: 0 },
            { id: "break", str: "🍵", value: 0 },
          ],
          modifiedFibonacci: [
            { id: "0", str: "0", value: 0 },
            { id: "1", str: "1/2", value: 0.5 },
            { id: "2", str: "1", value: 1 },
            { id: "3", str: "2", value: 2 },
            { id: "4", str: "3", value: 3 },
            { id: "5", str: "5", value: 5 },
            { id: "6", str: "8", value: 8 },
            { id: "7", str: "13", value: 13 },
            { id: "8", str: "20", value: 20 },
            { id: "9", str: "40", value: 40 },
            { id: "10", str: "100", value: 100 },
            { id: "question", str: "?", value: 0 },
            { id: "break", str: "🍵", value: 0 },
          ],
          powersOfTwo: [
            { id: "0", str: "0", value: 0 },
            { id: "1", str: "1", value: 1 },
            { id: "2", str: "2", value: 2 },
            { id: "3", str: "4", value: 4 },
            { id: "4", str: "8", value: 8 },
            { id: "5", str: "16", value: 16 },
            { id: "6", str: "32", value: 32 },
            { id: "7", str: "64", value: 64 },
            { id: "question", str: "?", value: 0 },
            { id: "break", str: "🍵", value: 0 },
          ],
        },
        selectedCards: [],
      },
      user: {
        id: 1,
        rolCurrentUser: [],
      },
    };

    store = mockStore(initialState);
    store.dispatch = jest.fn();
  });

  it("deberia cambiar el estado del select.", () => {
    render(
      <Provider store={store}>
        <SelectPoolCards />
      </Provider>
    );

    const select = screen.getByRole("combobox");
    expect(select).toBeInTheDocument();
    expect(select.value).toBe("fibonacci");

    // Simula el cambio de selección
    fireEvent.change(select, { target: { value: "modifiedFibonacci" } });

    expect(store.dispatch).toHaveBeenCalledWith(
      changePoolCards("modifiedFibonacci")
    );
    expect(select.value).toBe("modifiedFibonacci");
  });
});
