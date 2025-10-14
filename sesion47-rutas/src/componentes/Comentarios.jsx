import { comentarios } from "../assets/comentarios";

export default function Comentarios() {
  return (
    <section className=" py-12">
      <h2 className="text-3xl font-bold text-center text-white-800 mb-10">
        Opiniones de nuestros clientes
      </h2>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto px-4">
        {comentarios.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-all"
          >
            <div className="flex items-center gap-4 mb-4">
              <img
                src={item.perfil}
                alt={item.nombre}
                className="w-14 h-14 rounded-full object-cover"
              />
              <div>
                <h3 className="font-semibold text-gray-900">{item.nombre}</h3>
                <div className="flex">
                  {Array.from({ length: item.estrellas }).map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">
                      ★
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <p className="text-gray-600 text-sm">{item.mensaje}</p>
          </div>
        ))}
      </div>
    </section>
  );
}