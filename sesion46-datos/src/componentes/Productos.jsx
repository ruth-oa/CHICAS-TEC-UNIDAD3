import { useState, useEffect } from "react";

export function Productos() {
  const [listaProductos, setProductos] = useState([]);
  const [filtro, setFiltro] = useState("Todos"); // estado del filtro

  useEffect(() => {
    const getProductos = async () => {
      const res = await fetch("./data.json");
      const data = await res.json();
      setProductos(data);
    };

    getProductos();
  }, []);

  // Obtener categorías únicas dinámicamente
  const categorias = ["Todos", ...new Set(listaProductos.map((p) => p.category))];

  // Filtrar productos según categoría seleccionada
  const productosFiltrados =
    filtro === "Todos"
      ? listaProductos
      : listaProductos.filter((p) => p.category === filtro);

  return (
    <div>
      {/* Selector de filtro */}
      <div style={{ marginBottom: "20px", textAlign: "center" }}>
        <label htmlFor="filtro"><b>Filtrar por categoría: </b></label>
        <select
          id="filtro"
          value={filtro}
          onChange={(e) => setFiltro(e.target.value)}
        >
          {categorias.map((cat, i) => (
            <option key={i} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      {/* Cards en 3 columnas */}
      <div className="productos">
        {productosFiltrados.map((produc) => (
          <div key={produc.id} className="producto">
            <h2>{produc.name}</h2>
            <p><b>Precio:</b> S/ {produc.price}</p>
            <p><b>Categoría:</b> {produc.category}</p>
            <p><b>Stock:</b> {produc.inStock ? "✅ Disponible" : "❌ Agotado"}</p>
            <p><b>Rating:</b> ⭐ {produc.rating}</p>
            <p><b>Descripción:</b> {produc.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
