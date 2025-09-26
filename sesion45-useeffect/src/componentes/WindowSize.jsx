import { useState, useEffect } from "react";

export function WindowSize() {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    function handleResize() {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    // escuchamos cambios
    window.addEventListener("resize", handleResize);

    // limpiamos al desmontar
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>📏 Tamaño de la ventana</h2>
      <p>Ancho: {size.width}px</p>
      <p>Alto: {size.height}px</p>
    </div>
  );
}
