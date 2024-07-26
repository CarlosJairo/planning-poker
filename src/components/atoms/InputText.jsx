const Input = ({ id, name, value, onChange }) => {
  return (
    <input
      type="text"
      name={name || ""}
      id={id}
      value={value}
      onChange={onChange}
      required
    />
  );
};

export default Input;
