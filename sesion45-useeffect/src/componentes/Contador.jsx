import { useState, useEffect } from "react";

export default function ContadorVisitas() {
  const [visitas, setVisitas] = useState(0);

  useEffect(() => {
    // obtener el valor actual de visitas
    const visitasGuardadas = localStorage.getItem("visitas");
    const nuevasVisitas = visitasGuardadas ? parseInt(visitasGuardadas) + 1 : 1;

    // guardar el nuevo valor
    localStorage.setItem("visitas", nuevasVisitas);

    // actualizar estado
    setVisitas(nuevasVisitas);
  }, []); // se ejecuta solo en el montaje

  return (
    <div style={{ padding: "20px" }}>
      <h2>Bienvenido</h2>
      <p>Visitas a esta página: {visitas}</p>
    </div>
  );
}
