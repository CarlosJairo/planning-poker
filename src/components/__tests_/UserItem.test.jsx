import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import UserItem from "../molecules/UserItem";
import "@testing-library/jest-dom";

const mockStore = configureStore([]);

describe("UserItem component logic", () => {
  let store;
  const initialState = {
    game: { state: "started" },
  };

  beforeEach(() => {
    store = mockStore(initialState);
  });

  it("verificar si UserLogo se está renderizando segun su rol y mostrando su 1ra letra", () => {
    const user = { id: 1, name: "User1", rol: ["viwer"], voted: false };

    const { getByText } = render(
      <Provider store={store}>
        <UserItem user={user} />
      </Provider>
    );

    expect(getByText("U")).toBeInTheDocument();
  });

  it("deberia renderizar CardOnTable si el rol no es viwer", () => {
    const user = { id: 1, name: "User1", rol: ["player"], voted: true };

    const { container } = render(
      <Provider store={store}>
        <UserItem user={user} />
      </Provider>
    );

    const cardOnTable = container.querySelector(".card-on-table");
    expect(cardOnTable).toBeInTheDocument();
  });
});
