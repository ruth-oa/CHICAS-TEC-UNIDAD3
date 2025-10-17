// src/layouts/LayoutPrincipal.jsx
import { Outlet } from "react-router-dom";
import NavBar from "../componentes/NavBar";
import { Footer } from "../componentes/Footer";
import Modal from "../componentes/Modal";
import { LoginForm } from "../componentes/LoginForm";
import { useState } from "react";

export default function LayoutPrincipal() {
  const [loginOpen, setLoginOpen] = useState(false);

  return (
    <div className="min-h-dvh flex flex-col bg-gray-50 text-gray-900">
      {/* 🔝 Barra de navegación */}
      <NavBar onOpenLogin={() => setLoginOpen(true)} />

      {/* 🧱 Contenido de las páginas */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* 🔚 Footer */}
      <Footer />

      {/* 🔐 Modal de Login (global, aparece en cualquier página) */}
      <Modal open={loginOpen} onClose={() => setLoginOpen(false)}>
        <LoginForm onSuccess={() => setLoginOpen(false)} />
      </Modal>
    </div>
  );
}
