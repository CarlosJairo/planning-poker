import { useState } from "react";

const useModal = (inicialState) => {
  const [showModal, setshowModal] = useState(inicialState || false);

  const toggleShowModal = () => setshowModal(!showModal);

  return [showModal, setshowModal, toggleShowModal];
};

export default useModal;
