// Importamos useState para manejar el estado local del componente
import { useState } from "react";

// Exportamos el componente principal
export function FormContacto() {
  // Estado del formulario: cada campo se guarda en este objeto
  const [form, setForm] = useState({ nombre: "", email: "", mensaje: "" });
  // Estado de errores: se guardan los mensajes de error por campo
  const [errores, setErrores] = useState({});

  // Expresión regular (regex) para validar correos electrónicos
  const emailRegex =
    /^[A-Za-z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Za-z0-9-]+(?:\.[A-Za-z0-9-]+)*\.[A-Za-z]{2,}$/;

  // Función de validación: revisa cada campo y genera errores si algo está mal
  const validar = () => {
    const nuevosErrores = {};
    const nuevoForm = { ...form }; // copia del formulario para poder limpiar campos

    // Nombre obligatorio (sin espacios vacíos)
    if (!form.nombre.trim()) {
      nuevosErrores.nombre = "El nombre es obligatorio.";
      nuevoForm.nombre = ""; // ⚡ borra el contenido inválido
    }

    // Validación del email usando la expresión regular
    if (!emailRegex.test(form.email)) {
      nuevosErrores.email = "Correo inválido. Usa un formato correcto.";
      nuevoForm.email = ""; // ⚡ borra el email inválido
    }

    // El mensaje debe tener al menos 10 caracteres
    if (form.mensaje.trim().length < 10) {
      nuevosErrores.mensaje = "El mensaje debe tener al menos 10 caracteres.";
      nuevoForm.mensaje = ""; // ⚡ borra el mensaje si es muy corto
    }

    // Actualizamos el formulario con los campos borrados
    setForm(nuevoForm);

    return nuevosErrores; // Devuelve los errores detectados
  };

  // Maneja los cambios en los inputs y actualiza el estado del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  // Maneja el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault(); // Evita recargar la página

    const nuevosErrores = validar(); // Ejecuta las validaciones

    if (Object.keys(nuevosErrores).length > 0) {
      // Si hay errores, los muestra
      setErrores(nuevosErrores);
      return;
    }

    // Si todo está correcto:
    alert("Mensaje enviado con éxito ✅");
    console.log("Datos enviados:", form);

    // Limpia los errores y el formulario
    setErrores({});
    setForm({ nombre: "", email: "", mensaje: "" });
  };

  // Renderizado del formulario
  return (
    <form onSubmit={handleSubmit} noValidate>
      <h2>Formulario de Contacto</h2>

      {/* Campo: Nombre */}
      <div>
        <label>Nombre:</label>
        <input
          type="text"
          name="nombre"
          placeholder="Tu nombre"
          value={form.nombre}
          onChange={handleChange}
        />
        {errores.nombre && <p style={{ color: "red" }}>{errores.nombre}</p>}
      </div>

      {/* Campo: Email */}
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          placeholder="tu@correo.com"
          value={form.email}
          onChange={handleChange}
        />
        {errores.email && <p style={{ color: "red" }}>{errores.email}</p>}
      </div>

      {/* Campo: Mensaje */}
      <div>
        <label>Mensaje:</label>
        <textarea
          name="mensaje"
          rows="4"
          placeholder="Escribe tu mensaje aquí..."
          value={form.mensaje}
          onChange={handleChange}
        ></textarea>
        {errores.mensaje && <p style={{ color: "red" }}>{errores.mensaje}</p>}
      </div>

      {/* Botón para enviar */}
      <button type="submit">Enviar</button>
    </form>
  );
}
