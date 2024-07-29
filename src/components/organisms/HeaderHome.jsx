import FichaPoker from "../atoms/FichaPoker";
import "../../styles/organisms/HeaderHome.css";

const Header = () => {
  return (
    <header className="header-home">
      <div className="logo-subtitulo-ctn">
        <FichaPoker />
        <h2>Crear partida</h2>
      </div>
    </header>
  );
};

export default Header;
