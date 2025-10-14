import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme(); // 🌗 Usa el hook del contexto

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 shadow-md transition-colors ${
        theme === "light" ? "bg-white text-gray-800" : "bg-gray-900 text-gray-100"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center space-x-3 text-blue-600 hover:text-blue-800 transition-colors"
        >
          <div className="bg-blue-600 p-2 rounded-xl shadow-md flex items-center justify-center">
            <img
              src="https://cdn.creazilla.com/cliparts/7802934/computer-icon-clipart-lg.png"
              alt="Logo"
              className="w-8 h-8 object-contain"
            />
          </div>
          <span className="font-semibold text-lg tracking-wide">
            La casa de la oficina
          </span>
        </Link>

        {/* Botón de tema */}
        <button
          onClick={toggleTheme}
          className="hidden md:flex items-center space-x-2 bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-xl transition"
        >
          {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
          <span>{theme === "light" ? "Modo oscuro" : "Modo claro"}</span>
        </button>

        {/* Menú hamburguesa */}
        <button
          className="md:hidden text-blue-600 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Links escritorio */}
        <div className="hidden md:flex items-center space-x-6">
          <NavLink to="/">Inicio</NavLink>
          <NavLink to="/nosotros">Nosotros</NavLink>
          <NavLink to="/productos">Productos</NavLink>
          <NavLink to="/contacto">Contacto</NavLink>
        </div>
      </div>
    </nav>
  );
}
