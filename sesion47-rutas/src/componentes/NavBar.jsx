import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // para los íconos del menú (npm install lucide-react)

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        {/* --- LOGO / BRAND --- */}
        <Link
          to="/"
          className="flex items-center space-x-3 text-blue-600 hover:text-blue-800 transition-colors"
          aria-label="La casa de la oficina - Inicio"
        >
          <div className="bg-blue-600 p-2 rounded-xl shadow-md flex items-center justify-center">
            <img
              src="https://cdn.creazilla.com/cliparts/7802934/computer-icon-clipart-lg.png"
              alt="Logo de la marca"
              className="w-8 h-8 object-contain"
            />
          </div>
          <span className="font-semibold text-lg tracking-wide">
            La casa de la oficina
          </span>
        </Link>

        {/* --- BOTÓN HAMBURGUESA (solo en móviles) --- */}
        <button
          className="md:hidden text-blue-600 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Abrir menú"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* --- LINKS DE NAVEGACIÓN (modo escritorio) --- */}
        <div className="hidden md:flex items-center space-x-6 text-gray-700 font-medium">
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

      {/* --- MENÚ MÓVIL DESPLEGABLE --- */}

      <div
  className={`md:hidden bg-white border-t border-gray-200 shadow-inner overflow-hidden transition-all duration-300 ease-in-out ${
    isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
  }`}
>
  <div
    className={`flex flex-col items-start px-6 py-4 space-y-3 text-gray-700 font-medium transition-opacity duration-300 ${
      isOpen ? "opacity-100" : "opacity-0"
    }`}
  >

            
            
            <NavLink
              to="/"
              end
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `w-full flex items-center gap-2 ${
                  isActive
                    ? "text-blue-600 font-semibold"
                    : "hover:text-blue-500"
                }`
              }
            >
              <span className="material-icons">home</span>
              Inicio
            </NavLink>

            <NavLink
              to="/nosotros"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `w-full flex items-center gap-2 ${
                  isActive
                    ? "text-blue-600 font-semibold"
                    : "hover:text-blue-500"
                }`
              }
            >
              <span className="material-icons">groups</span>
              Nosotros
            </NavLink>

            <NavLink
              to="/productos"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `w-full flex items-center gap-2 ${
                  isActive
                    ? "text-blue-600 font-semibold"
                    : "hover:text-blue-500"
                }`
              }
            >
              <span className="material-icons">inventory_2</span>
              Productos
            </NavLink>

            <NavLink
              to="/contacto"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `w-full flex items-center gap-2 ${
                  isActive
                    ? "text-blue-600 font-semibold"
                    : "hover:text-blue-500"
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
