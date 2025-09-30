import { productos } from "../assets/productos"

export default function Productos() {
  return (
    <section className="page">
      <h1>Productos</h1>
      <div className="productos-grid">
        {productos.map((item) => (
          <div key={item.id} className="producto-card">
            <img src={item.imagen} alt={item.nombre} />
            <h2>{item.nombre}</h2>
            <p>{item.descripcion}</p>
            <p className="precio">Precio: ${item.precio}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
