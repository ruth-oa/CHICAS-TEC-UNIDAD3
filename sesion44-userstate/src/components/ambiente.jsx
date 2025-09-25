import { useState, useEffect } from "react";

export function Ambiente() {
  const [oscuro, setOscuro] = useState(false);

  useEffect(() => {
    if (oscuro) {
      document.body.classList.add("dark");
      document.body.classList.remove("light");
    } else {
      document.body.classList.add("light");
      document.body.classList.remove("dark");
    }
  }, [oscuro]);

  return (
    <div>
      <h1>Ambiente {oscuro ? "Oscuro" : "Claro"}</h1>
      <button onClick={() => setOscuro(!oscuro)}>
        Cambiar a {oscuro ? "Claro" : "Oscuro"}
      </button>
    </div>
  );
}
