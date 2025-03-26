import React from 'react';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AtencionCliente from './pages/AtencionCliente';
import PQRSEnviadas from './pages/PQRSEnviadas';
import AcercaDe from './pages/AcercaDe';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/atencion-cliente" element={<AtencionCliente />} />
        <Route path="/pqrs-enviadas" element={<PQRSEnviadas />} />
        <Route path="/acerca-de" element={<AcercaDe />} />
      </Routes>
    </Router>
  );
}