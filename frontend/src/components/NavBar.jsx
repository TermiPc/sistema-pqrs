import React from "react";
import { Link } from "react-router-dom";

const NavBar = ({ isLoggedIn, onLogout }) => {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/atencion-cliente">Atención al Cliente</Link>
      <Link to="/pqrs-enviadas">PQRS Enviadas</Link>
      <Link to="/acerca-de">Acerca de</Link>
      {isLoggedIn ? (
        <button onClick={onLogout}>Cerrar sesión</button>
      ) : (
        <>
          <Link to="/login">Iniciar Sesión</Link>
          <Link to="/register">Registrarse</Link>
        </>
      )}
    </nav>
  );
};

export default NavBar;
