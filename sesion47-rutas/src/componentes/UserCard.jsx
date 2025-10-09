export function UserCard({ imagen, nombre, cargo }) {
  return (
    <div className="card flex flex-col items-center text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-lg transition-transform hover:-translate-y-1">
      <img
        src={imagen}
        alt={nombre}
        className="w-24 h-24 rounded-full object-cover mb-4 ring-4 ring-blue-300 dark:ring-blue-600 hover:scale-105 transition-transform"
      />
      <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
        {nombre}
      </h3>
      <h4 className="text-gray-500 dark:text-gray-400">{cargo}</h4>
    </div>
  );
}
