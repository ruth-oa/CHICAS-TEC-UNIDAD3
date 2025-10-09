import { NavLink, Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
{/* --- LOGO / BRAND --- */}
    <Link
      to="/"
      className="flex items-center space-x-3 text-blue-600 hover:text-blue-800 transition-colors"
      aria-label="La casa de la oficina - Inicio"
    >
      {/* ICONO DE MARCA */}
      <div className="bg-blue-600 p-2 rounded-xl shadow-md flex items-center justify-center">
        <img
          src="https://cdn.creazilla.com/cliparts/7802934/computer-icon-clipart-lg.png"
          alt="Logo de la marca"
          className="w-8 h-8 object-contain"
        />
      </div>

      {/* NOMBRE DE MARCA */}
      <span className="font-semibold text-lg tracking-wide">
        La casa de la oficina
      </span>
    </Link>

        {/* --- LINKS --- */}
        <div
          className="flex items-center space-x-6 text-gray-700 font-medium"
          role="navigation"
          aria-label="Navegación principal"
        >
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `flex items-center gap-1 nav-link ${
                isActive
                  ? "text-blue-600 font-semibold"
                  : "hover:text-blue-500 transition-colors"
              }`
            }
          >
            <span className="material-icons">home</span>
            Inicio
          </NavLink>

          <NavLink
            to="/nosotros"
            className={({ isActive }) =>
              `flex items-center gap-1 nav-link ${
                isActive
                  ? "text-blue-600 font-semibold"
                  : "hover:text-blue-500 transition-colors"
              }`
            }
          >
            <span className="material-icons">groups</span>
            Nosotros
          </NavLink>

          <NavLink
            to="/productos"
            className={({ isActive }) =>
              `flex items-center gap-1 nav-link ${
                isActive
                  ? "text-blue-600 font-semibold"
                  : "hover:text-blue-500 transition-colors"
              }`
            }
          >
            <span className="material-icons">inventory_2</span>
            Productos
          </NavLink>

          <NavLink
            to="/contacto"
            className={({ isActive }) =>
              `flex items-center gap-1 nav-link ${
                isActive
                  ? "text-blue-600 font-semibold"
                  : "hover:text-blue-500 transition-colors"
              }`
            }
          >
            <span className="material-icons">mail</span>
            Contacto
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
