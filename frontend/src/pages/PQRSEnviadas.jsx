import React, { useState } from "react";
import StatusIndicator from "../components/StatusIndicator";

const PQRSEnviadas = () => {
  const [pqrsList] = useState([
    { id: 1, status: "rojo", text: "Mi cuenta fue bloqueada injustamente" },
    { id: 2, status: "amarillo", text: "Consulta sobre un nuevo servicio" },
    { id: 3, status: "verde", text: "Agradecimiento por la atención" },
  ]);

  return (
    <div>
      <h1>Mis PQRS</h1>
      {pqrsList.map((pqrs) => (
        <div key={pqrs.id} className="pqrs-item">
          <StatusIndicator status={pqrs.status} />
          <p>{pqrs.text}</p>
        </div>
      ))}
    </div>
  );
};

export default PQRSEnviadas;
