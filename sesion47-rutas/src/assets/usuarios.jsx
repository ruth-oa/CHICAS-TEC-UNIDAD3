// src/assets/Usuarios.jsx

export const usuarios = [
  {
    id: 1,
    imagen: "https://randomuser.me/api/portraits/men/32.jpg",
    nombre: "Carlos Ramírez",
    cargo: "Desarrollador Frontend",
  },
  {
    id: 2,
    imagen: "https://randomuser.me/api/portraits/women/45.jpg",
    nombre: "Lucía Torres",
    cargo: "Diseñadora UX/UI",
  },
  {
    id: 3,
    imagen: "https://randomuser.me/api/portraits/men/76.jpg",
    nombre: "Diego Salazar",
    cargo: "Project Manager",
  },
  {
    id: 4,
    imagen: "https://randomuser.me/api/portraits/women/12.jpg",
    nombre: "Mariana López",
    cargo: "Desarrolladora Backend",
  },
  {
    id: 5,
    imagen: "https://randomuser.me/api/portraits/men/28.jpg",
    nombre: "Andrés Vega",
    cargo: "Ingeniero DevOps",
  },
  {
    id: 6,
    imagen: "https://randomuser.me/api/portraits/women/22.jpg",
    nombre: "Fernanda Gutiérrez",
    cargo: "Analista QA",
  },
  {
    id: 7,
    imagen: "https://randomuser.me/api/portraits/men/15.jpg",
    nombre: "Héctor Paredes",
    cargo: "Especialista en Seguridad",
  },
  {
    id: 8,
    imagen: "https://randomuser.me/api/portraits/women/52.jpg",
    nombre: "Patricia Rojas",
    cargo: "Scrum Master",
  },
  {
    id: 9,
    imagen: "https://randomuser.me/api/portraits/men/84.jpg",
    nombre: "Jorge Navarro",
    cargo: "Administrador de Bases de Datos",
  },
  {
    id: 10,
    imagen: "https://randomuser.me/api/portraits/women/63.jpg",
    nombre: "Sofía Cabrera",
    cargo: "Especialista en Marketing Digital",
  },
  {
    id: 11,
    imagen: "https://randomuser.me/api/portraits/men/4.jpg",
    nombre: "Alejandro Silva",
    cargo: "Diseñador Gráfico",
  },
  {
    id: 12,
    imagen: "https://randomuser.me/api/portraits/women/33.jpg",
    nombre: "Valeria Medina",
    cargo: "Product Owner",
  },
];

// --- Componente para mostrarlos ---
export function Usuarios() {
  return (
    <section className="min-h-screen bg-gray-50 dark:bg-gray-900 py-10">
      <h1 className="text-4xl font-bold text-center mb-10 text-blue-600 dark:text-blue-400">
        Lista de Usuarios
      </h1>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-6">
        {usuarios.map((user) => (
          <div
            key={user.id}
            className="card flex flex-col items-center text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-lg transition-transform hover:-translate-y-1"
          >
            <img
              src={user.imagen}
              alt={user.nombre}
              className="w-24 h-24 rounded-full object-cover mb-4 ring-4 ring-blue-300 dark:ring-blue-600 hover:scale-105 transition-transform"
            />
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
              {user.nombre}
            </h2>
            <p className="text-gray-500 dark:text-gray-400">{user.cargo}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
