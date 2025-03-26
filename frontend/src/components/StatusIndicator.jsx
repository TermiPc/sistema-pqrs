import React from "react";

const StatusIndicator = ({ status }) => {
  const getColor = () => {
    if (status === "rojo") return "red";
    if (status === "amarillo") return "yellow";
    return "green";
  };

  return <div className="status-indicator" style={{ backgroundColor: getColor() }} />;
};

export default StatusIndicator;
