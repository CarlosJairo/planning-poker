import { useState } from "react";
import "./App.css";
import CreateGameScreen from "./components/pages/CreateGameScreen";
import LogoScreen from "./components/pages/SplashScreen";

function App() {
  const [showSplashScreen, setShowSplashScreen] = useState(true);

  return (
    <>
      {showSplashScreen ? (
        <LogoScreen
          showSplashScreen={showSplashScreen}
          setShowSplashScreen={setShowSplashScreen}
        />
      ) : (
        <CreateGameScreen />
      )}
    </>
  );
}

export default App;
