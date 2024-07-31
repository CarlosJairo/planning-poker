import { filterPlayers } from "../organisms/TableAndPlayers";

describe("filterPlayers", () => {
  it("debería filtrar el jugador actual de la lista de jugadores", () => {
    const players = [
      { id: 1, name: "Player 1", rol: ["player"] },
      { id: 2, name: "Player 2", rol: ["player"] },
      { id: 3, name: "Player 3", rol: ["player"] },
    ];
    const currentUser = { id: 2, name: "Player 2" };
    const expected = [
      { id: 1, name: "Player 1", rol: ["player"] },
      { id: 3, name: "Player 3", rol: ["player"] },
    ];
    expect(filterPlayers(players, currentUser)).toEqual(expected);
  });

  it("debería devolver una lista vacía si solo hay un jugador y es el jugador actual", () => {
    const players = [{ id: 0, name: "Player 2", rol: ["player"] }];
    const currentUser = { id: 0, name: "Player 2", rol: ["player"] };
    const expected = [];
    expect(filterPlayers(players, currentUser)).toEqual(expected);
  });

  it("debería manejar correctamente una lista vacía", () => {
    const players = [];
    const currentUser = { id: 2, name: "Player 2", rol: ["player"] };
    const expected = [];
    expect(filterPlayers(players, currentUser)).toEqual(expected);
  });
});
