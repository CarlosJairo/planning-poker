import { useEffect, useState } from "react";
import Button from "../atoms/Button";
import CloseSvg from "../atoms/CloseSvg";
import Input from "../atoms/InputText";
import { useLocation } from "react-router-dom";
import "../../styles/molecules/ModalCopyLinkContent.css";

export const copyToClipboard = async (textToCopy) => {
  try {
    await navigator.clipboard.writeText(textToCopy);
    return true;
  } catch (err) {
    console.error("Error al copiar el texto: ", err);
    return false;
  }
};

const ModalCopyLinkContent = ({ toggleModalLink }) => {
  const [url, setUrl] = useState("");
  const [isCopied, setIsCopied] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setUrl(window.location.origin + location.pathname);
  }, []);

  const handleClick = () => {
    if (copyToClipboard(url)) {
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 500);
    }
  };

  return (
    <>
      <header className="subtitle-and-close">
        <p>Invitar jugadores</p>
        <Button onClick={toggleModalLink}>
          <CloseSvg />
        </Button>
      </header>
      <div className="input-btn-ctn-modal">
        <Input value={url} onChange={() => setUrl(url)} />

        <Button className={"copy-link"} onClick={handleClick}>
          {isCopied ? "Copiado" : "Copiar link"}
        </Button>
      </div>
    </>
  );
};

export default ModalCopyLinkContent;
