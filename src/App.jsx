import { useState } from "react";
import { Routes, HashRouter, Route } from "react-router-dom";
import CreateGameScreen from "./components/pages/CreateGameScreen";
import LogoScreen from "./components/pages/SplashScreen";
import GameTableScreen from "./components/pages/GameTableScreen";
import "./App.css";

function App() {
  const [showSplashScreen, setShowSplashScreen] = useState(true);

  return (
    <>
      <HashRouter>
        <Routes>
          <Route
            path="/"
            element={
              showSplashScreen ? (
                <LogoScreen
                  showSplashScreen={showSplashScreen}
                  setShowSplashScreen={setShowSplashScreen}
                />
              ) : (
                <CreateGameScreen />
              )
            }
          />

          <Route path="/game/:gameName" element={<GameTableScreen />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
