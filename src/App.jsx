import { useState } from "react";
import { Routes, HashRouter, Route } from "react-router-dom";
import CreateGameScreen from "./components/pages/CreateGameScreen";
import GameTableScreen from "./components/pages/GameTableScreen";
import "./App.css";
import SplashScreen from "./components/pages/SplashScreen";

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
                <SplashScreen
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
