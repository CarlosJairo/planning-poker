import { useParams } from "react-router-dom";

const HeaderTableScreen = () => {
  const { gameName } = useParams("gameName");
  console.log(gameName);
  return (
    <header style={{ textAlign: "center", padding: "2rem" }}>
      <h1>{gameName}</h1>
    </header>
  );
};

export default HeaderTableScreen;
