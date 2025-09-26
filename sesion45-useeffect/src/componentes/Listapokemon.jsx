import { useState, useEffect } from "react";

export default function ListaPokemones() {
  const [pokemones, setPokemones] = useState([]);
  const [offset, setOffset] = useState(0);

  // Efecto: carga pokémones según el offset
  useEffect(() => {
    async function fetchPokemones() {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon?limit=10&offset=${offset}`
        );
        const data = await response.json();
        setPokemones(data.results);
      } catch (error) {
        console.error("Error al cargar pokémones:", error);
      }
    }

    fetchPokemones();
  }, [offset]); // se ejecuta cada vez que cambie "offset"

  return (
    <div style={{ padding: "20px" }}>
      <h2>Lista de Pokémon</h2>
      <ul>
        {pokemones.map((poke, index) => (
          <li key={index}>{poke.name}</li>
        ))}
      </ul>

      <button onClick={() => setOffset(offset + 10)}>
        🔄 Actualizar lista
      </button>
    </div>
  );
}
