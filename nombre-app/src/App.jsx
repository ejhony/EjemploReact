import React, { useState } from "react";
import Encabezado from "./encabezado";
import Expresiones from "./assets/expresiones";
import Cards from "./assets/cards.jsx";

import AcercaDe from "./acercaDe.jsx";
import Productos from "./productos.jsx";
import Contacto from "./contacto.jsx";
import Sucursales from "./sucursales.jsx";
function App() {
  const [vista, setVista] = useState("Inicio");

  return (
    <div>
      <Encabezado cambiarVista={setVista} />
      <Expresiones vista={vista} />

      {vista === "Inicio" && <Cards />}
      {vista === "AcercaDe" && <AcercaDe />}
      {vista === "Productos" && <Productos />}
      {vista === "Contacto" && <Contacto />}
      {vista === "Sucursales" && <Sucursales />}
    </div>
  );
}

export default App;
