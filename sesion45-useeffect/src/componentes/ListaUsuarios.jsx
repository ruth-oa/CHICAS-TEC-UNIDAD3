import { useState, useEffect } from "react";

export default function ListaUsuarios() {
  const [usuarios, setUsuarios] = useState([]);
  const [nombre, setNombre] = useState("");

  // Al montar, leemos de localStorage
  useEffect(() => {
    const dataGuardada = localStorage.getItem("usuarios");
    if (dataGuardada) {
      setUsuarios(JSON.parse(dataGuardada));
    }
  }, []);

  // Cada vez que usuarios cambie, lo guardamos en localStorage
  useEffect(() => {
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
  }, [usuarios]);

  function handleSubmit(e) {
    e.preventDefault();
    if (nombre.trim() === "") return;

    setUsuarios([...usuarios, nombre]);
    setNombre(""); // limpiar input
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>👥 Lista de Usuarios</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Escribe un nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <button type="submit" style={{ marginLeft: "10px" }}>
          Agregar
        </button>
      </form>

      <ul style={{ marginTop: "20px" }}>
        {usuarios.map((user, index) => (
          <li key={index}>{user}</li>
        ))}
      </ul>
    </div>
  );
}
