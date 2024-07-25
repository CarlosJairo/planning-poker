// src/components/pages/LogoScreen.jsx
import React, { useEffect } from "react";
import "./LogoScreen.css"; // Importa los estilos específicos para la animación
import FichaPoker from "../atoms/FichaPoker";
import Logo from "../atoms/Logo";

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
