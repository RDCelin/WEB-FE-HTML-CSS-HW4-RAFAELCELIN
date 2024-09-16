import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react';
import Header from './components/Header';
import Introduction from './components/Introduction';
import Dofa from './components/Dofa';
import Identity from './components/Identity';
import Objectives from './components/Objectives';
import Footer from './components/Footer';
function App  ()  {
  // Datos de ejemplo para el DOFA y Objetivos
  const dofaData = [
    { id: 1, type: "Debilidades", items: [{ id: 1, description: "Debilidad 1" }, { id: 2, description: "Debilidad 2" }, { id: 3, description: "Debilidad 3" }] },
    { id: 2, type: "Oportunidades", items: [{ id: 1, description: "Oportunidad 1" }, { id: 2, description: "Oportunidad 2" }, { id: 3, description: "Oportunidad 3" }] },
    { id: 3, type: "Fortalezas", items: [{ id: 1, description: "Fortaleza 1" }, { id: 2, description: "Fortaleza 2" }, { id: 3, description: "Fortaleza 3" }] },
    { id: 4, type: "Amenazas", items: [{ id: 1, description: "Amenaza 1" }, { id: 2, description: "Amenaza 2" }, { id: 3, description: "Amenaza 3" }] },
  ];

  const objectivesData = [
    { id: 1, goal: "Objetivo 1", target: 100, progress: 50, compliance: 50 },
    { id: 2, goal: "Objetivo 2", target: 150000, progress: 20000, compliance: 50 },
    { id: 3, goal: "Objetivo 3", target: 100, progress: 20, compliance: 20 },
    { id: 4, goal: "Objetivo 4", target: 200000, progress: 100000, compliance: 50 },
    { id: 5, goal: "Objetivo 5", target: 50000, progress: 40000, compliance: 80 },
  ];

  return (
    <div>
      <Header />
      <Introduction />
      <Dofa data={dofaData} />
      <Identity />
      <Objectives objectives={objectivesData} />
      <Footer />
    </div>
  );
}

export default App
