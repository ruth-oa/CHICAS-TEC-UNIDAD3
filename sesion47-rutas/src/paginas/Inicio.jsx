import { usuarios } from "../assets/usuarios";
import { UserCard } from "../componentes/UserCard";
import Comentarios from "../componentes/Comentarios";

export function Inicio() {
  return (
    <>
      <h1 className="text-3xl font-bold text-blue-500 mb-6">
        Bienvenid@ a mi Página
      </h1>

      <p className="text-lg mb-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias nulla
        dolorem cumque placeat voluptatem distinctio nesciunt quibusdam earum
        sint reprehenderit. Odit vero alias odio, mollitia quo asperiores
        voluptate sapiente omnis.
      </p>

      <h2 className="text-3xl font-bold text-blue-500 mb-6" >Equipo</h2>

      <div className="grid grid-cols-3 gap-6">
        {usuarios.map((u) => (
          <UserCard
            key={u.id}
            imagen={u.imagen}
            nombre={u.nombre}
            cargo={u.cargo}
          />
        ))}
      </div>
    
    </>
  );
}
