import { copyToClipboard } from "../molecules/ModalCopyLinkContent";

describe("copyToClipboard", () => {
  beforeAll(() => {
    Object.assign(navigator, {
      clipboard: {
        writeText: jest.fn(),
      },
    });
  });

  beforeEach(() => {
    // Reiniciar los mocks antes de cada test
    navigator.clipboard.writeText.mockReset();
  });

  it("debería copiar el texto al portapapeles y devolver true en caso de éxito", async () => {
    navigator.clipboard.writeText.mockResolvedValueOnce();

    const result = await copyToClipboard("Texto de prueba");

    expect(result).toBe(true);
    expect(navigator.clipboard.writeText).toHaveBeenCalledWith(
      "Texto de prueba"
    );
  });

  it("debería devolver false y registrar un error en caso de fallo", async () => {
    const consoleErrorSpy = jest
      .spyOn(console, "error")
      .mockImplementation(() => {});

    navigator.clipboard.writeText.mockRejectedValueOnce(
      new Error("Error al copiar")
    );

    const result = await copyToClipboard("Texto de prueba");

    expect(result).toBe(false);
    expect(navigator.clipboard.writeText).toHaveBeenCalledWith(
      "Texto de prueba"
    );
    expect(consoleErrorSpy).toHaveBeenCalledWith(
      "Error al copiar el texto: ",
      expect.any(Error)
    );

    consoleErrorSpy.mockRestore();
  });
});
