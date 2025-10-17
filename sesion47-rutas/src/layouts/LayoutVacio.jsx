
// src/layouts/LayoutVacio.jsx
import { Outlet } from "react-router-dom";
import { useEffect } from "react";

export default function LayoutVacio() {
  useEffect(() => {
    // Guardamos los estilos originales
    const body = document.body;
    const root = document.getElementById("root");
    const oldBodyClass = body.className;
    const oldRootStyle = root.getAttribute("style");

    // 🔹 Limpiamos los estilos globales mientras estemos en el layout vacío
    body.className = "";
    root.setAttribute("style", "margin:0; padding:0; background:none;");

    // 🔙 Restauramos al salir del layout vacío
    return () => {
      body.className = oldBodyClass;
      if (oldRootStyle) root.setAttribute("style", oldRootStyle);
      else root.removeAttribute("style");
    };
  }, []);

  return (
    <div className="min-h-dvh w-full">
      <Outlet />
    </div>
  );
}
