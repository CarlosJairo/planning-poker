import { validateName } from "../../hooks/useForm";

const errorMessage =
  "El nombre debe tener 5-20 caracteres, sin especiales, máx. 3 números y no ser solo números.";

describe("validateName", () => {
  it("debería retornar un error si el nombre tiene menos de 5 caracteres", () => {
    const result = validateName("abc");
    expect(result).toBe(errorMessage);
  });

  it("debería retornar un error si el nombre tiene más de 20 caracteres", () => {
    const result = validateName("abcdefghijabcdefghijz");
    expect(result).toBe(errorMessage);
  });

  it("debería retornar un error si el nombre contiene caracteres especiales", () => {
    const result = validateName("abcde@fghij");
    expect(result).toBe(errorMessage);
  });

  it("debería retornar un error si el nombre tiene más de 3 dígitos", () => {
    const result = validateName("abcde1234");
    expect(result).toBe(errorMessage);
  });

  it("debería retornar un error si el nombre contiene solo números", () => {
    const result = validateName("12345");
    expect(result).toBe(errorMessage);
  });

  it("debería retornar false si el nombre es válido", () => {
    const result = validateName("abcde123");
    expect(result).toBe(false);
  });
});
