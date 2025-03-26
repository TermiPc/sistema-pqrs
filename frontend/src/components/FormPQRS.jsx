import React, { useState } from "react";

const FormPQRS = ({ onSubmit }) => {
  const [pqrs, setPqrs] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (pqrs.trim()) {
      onSubmit(pqrs);
      setPqrs("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={pqrs}
        onChange={(e) => setPqrs(e.target.value)}
        placeholder="Escribe tu PQRS aquí..."
      />
      <button type="submit">Enviar PQRS</button>
    </form>
  );
};

export default FormPQRS;
