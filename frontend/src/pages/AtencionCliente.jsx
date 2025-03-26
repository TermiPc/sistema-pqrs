import React from "react";
import ChatBot from "../components/ChatBot";

const AtencionCliente = () => {
  return (
    <div>
      <h1>Atención al Cliente</h1>
      <p>Horarios: Lunes a Viernes - 8 AM a 6 PM</p>
      <p>Sucursales disponibles en todo el país</p>
      <ChatBot />
    </div>
  );
};

export default AtencionCliente;
