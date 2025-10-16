// src/componentes/LoginForm.jsx
import { useState } from "react";
import { useUser } from "../context/UserContext";
import { usuarios } from "../assets/usuarios";

export function LoginForm({ onSuccess }) {
  const { login } = useUser();
  const [form, setForm] = useState({ correo: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    // Para este ejemplo, asumimos que todos tienen password = "1234"
    const found = usuarios.find(
      (u) => u.nombre.toLowerCase() === form.correo.trim().toLowerCase() && form.password === "1234"
    );

    if (!found) {
      setError("❌ Credenciales inválidas. Verifica tu nombre y contraseña.");
      return;
    }

    login(found);
    if (onSuccess) onSuccess();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Nombre de usuario
        </label>
        <input
          type="text"
          name="correo"
          value={form.correo}
          onChange={handleChange}
          className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          placeholder="Ej: Carlos Ramírez"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Contraseña
        </label>
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          placeholder="1234"
        />
      </div>

      {error && <p className="text-red-500 text-sm">{error}</p>}

      <button
        type="submit"
        className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700"
      >
        Iniciar sesión
      </button>
    </form>
  );
}






// import {useState} from "react"
// import {usersData} from ".../assets/usuarios"
// import {usersData} from "../context/userContext"

// export function LoginForm(/*onSuccess*/){
//     const {login} = useUser();
//     const [form, setForm] = useState({correo: "", password: ""}); // valores
//     const [error, setError] = useState(""); // error de llenado del form

//     const handleChange = (e) =>
//         setForm((f) => ({...f, [e.target.name]: e.target.value}) )


//     const handleSubmit = (e) => {
//         e.preventDefault();
//         setError("");

//         const found = usersData.find(
//             (u) => u.email === form.correo.trim() && u.password === form.password
//         );


//         if (!found) {
//             setError("Credenciales inválidas. Verifica tu correo y contraseña")
//             return;
//         }

//         login(found);
//         //on

//        }

//     return(
//         <div>

//         </div>
//     )
// }