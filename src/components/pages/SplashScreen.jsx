// src/components/pages/LogoScreen.jsx
import React, { useEffect } from "react";
import FichaPoker from "../atoms/FichaPoker";
import Logo from "../atoms/Logo";
import "../../styles/pages/SplashScreen.css";

const LogoScreen = ({ showSplashScreen, setShowSplashScreen }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplashScreen(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [showSplashScreen]);

  return (
    <section className={`logo-screen`}>
      <FichaPoker />
      <Logo />
    </section>
  );
};

export default LogoScreen;
