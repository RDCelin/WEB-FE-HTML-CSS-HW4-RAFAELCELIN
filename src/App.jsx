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
import './index.css'
function App  ()  {
  // Datos de ejemplo para el DOFA y Objetivos
  const dofaData = [
    { id: 1, type: "Weaknesses", items: [{ id: 1, description: "NONE, ABSOLUTLY NOT, ESPECIALLY NOT THOSE MOOKS FROM BLACK MESA" }, { id: 2, description: "seriously, not those guys we are way better than those punks,trying to figure out teleportation before us, nonsense" }, { id: 3, description: "OOH LOOK AT ME I GET GOVERNMENT GRANTS AND TAX CUTS, BLACK MESA CAN EAT MY BANKRUPT-" }] },
    { id: 2, type: "Opportunities", items: [{ id: 1, description: "all of them  id say no seriously" }, { id: 2, description: "you get to enlist to fight manmantises,get cancer AND all your bones broken thanks to the repulsion gel" }, { id: 3, description: "all that and dont forget 60 bucks everybody thats 6 10s" }] },
    { id: 3, type: "Strengths", items: [{ id: 1, description: "Good relationships with the sentient cloud" }, { id: 2, description: "THE portal gun " }, { id: 3, description: "a LOT  of nanotoxins" }] },
    { id: 4, type: "Threats", items: [{ id: 1, description: "attacks by mantismen" }, { id: 2, description: "angering the cloud" }, { id: 3, description: "the multiverse" }] },
  ];

  const objectivesData = [
    { id: 1, goal: "escape bankruptcy", target: 100000 , progress: 0, compliance: 0 },
    { id: 2, goal: "defeat mantis men", target: 150000, progress: 20000, compliance: 50 },
    { id: 3, goal: "appease the cloud", target: 100, progress: 20, compliance: 20 },
    { id: 4, goal: "figure out teletransportation", target: 200000, progress: 100000, compliance: 50 },
    { id: 5, goal: "stop the neurotoxin in our lungs", target: 50000, progress: 40000, compliance: 80 },
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
