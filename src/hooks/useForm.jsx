import { useState } from "react";

const useForm = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [error, setError] = useState(true);

  const validateName = (name) => {
    const regex =
      /^(?![0-9 ]+$)(?!.*[^a-zA-Z0-9 ])(?!.*(?:[0-9].*){4})[a-zA-Z0-9 ]{5,20}$/;
    const digitCount = (name.match(/\d/g) || []).length;

    if (!regex.test(name) || digitCount > 3) {
      return "El nombre debe tener 5-20 caracteres, sin especiales, máx. 3 números y no ser solo números.";
    }
    return false;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationError = validateName(name);

    if (validationError) {
      setError(validationError);
    } else {
      setError(false);
      onSubmit(name);
    }
  };

  return {
    name,
    error,
    setName,
    handleSubmit,
  };
};

export default useForm;
