import { useEffect } from "react";

export default function Nosotros() {
  useEffect(() => {
    window.scrollTo(0, 0); // Para que siempre empiece arriba al entrar a la página
  }, []);

  return (
    <section className="page min-h-screen bg-gray-50 flex flex-col items-center pt-24 px-6">
      {/* --- Título --- */}
      <h1 className="text-4xl font-bold text-blue-700 mb-6 text-center">
        Sobre nosotros
      </h1>

      {/* --- Contenido principal (imagen + texto) --- */}
      <div className="max-w-6xl grid md:grid-cols-2 gap-10 items-center bg-white p-8 rounded-2xl shadow-md">
        {/* Imagen ilustrativa */}
        <img
          src="https://cdn-icons-png.flaticon.com/512/3048/3048122.png"
          alt="Equipo de trabajo"
          className="w-full h-80 object-contain mx-auto"
        />

        {/* Texto descriptivo */}
        <div className="space-y-4 text-gray-700">
          <p className="text-lg leading-relaxed">
            En <strong className="text-blue-700">La Casa de la Oficina</strong>,
            nos apasiona crear espacios cómodos, funcionales y elegantes.  
            Ofrecemos productos de alta calidad que combinan diseño moderno con
            durabilidad, pensados para mejorar tu productividad y bienestar.
          </p>

          <p className="text-lg leading-relaxed">
            Con más de <strong>10 años de experiencia</strong> en el mercado,
            somos líderes en mobiliario, accesorios y soluciones para oficina y
            hogar. Nuestro compromiso es brindarte atención personalizada y un
            servicio confiable.
          </p>
        </div>
      </div>

      {/* --- Sección de valores --- */}
      <div className="max-w-5xl grid md:grid-cols-3 gap-8 mt-12">
        {/* Valor 1 */}
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <span className="material-symbols-outlined text-blue-600 text-4xl mb-3">
            workspace_premium
          </span>
          <h3 className="text-xl font-semibold mb-2">Calidad</h3>
          <p className="text-gray-600">
            Nos aseguramos de ofrecer productos duraderos y funcionales que
            cumplan con los más altos estándares.
          </p>
        </div>

        {/* Valor 2 */}
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <span className="material-symbols-outlined text-blue-600 text-4xl mb-3">
            groups
          </span>
          <h3 className="text-xl font-semibold mb-2">Compromiso</h3>
          <p className="text-gray-600">
            Escuchamos a nuestros clientes y construimos relaciones basadas en la
            confianza y el servicio.
          </p>
        </div>

        {/* Valor 3 */}
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <span className="material-symbols-outlined text-blue-600 text-4xl mb-3">
            lightbulb
          </span>
          <h3 className="text-xl font-semibold mb-2">Innovación</h3>
          <p className="text-gray-600">
            Buscamos constantemente nuevas formas de mejorar nuestros productos y
            adaptarnos a tus necesidades.
          </p>
        </div>
      </div>
    </section>
  );
}
