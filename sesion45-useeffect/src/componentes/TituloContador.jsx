import { useState, useEffect } from "react";

export function TituloConContador() {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    const visitasPrevias = localStorage.getItem("tituloContador");
    const nuevoContador = visitasPrevias ? parseInt(visitasPrevias) + 1 : 1;

    localStorage.setItem("tituloContador", nuevoContador);
    setContador(nuevoContador);

    document.title = `Mi Título ${nuevoContador}`;
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>📝 Título de la página</h2>
      <p>El título actual es: <strong>Mi Título {contador}</strong></p>
    </div>
  );
}
