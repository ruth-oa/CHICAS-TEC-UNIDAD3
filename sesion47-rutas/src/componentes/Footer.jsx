import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-100 w-full">
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-2">

              {/* --- Sección 3: Redes sociales --- */}
        <section className="flex flex-col items-center justify-center gap-4">
          <h4 className="text-lg font-semibold mb-4 text-white">Síguenos</h4>
          <div className="flex gap-6 text-gray-300">
            <a href="#" className="hover:text-blue-500 transition-colors">
              <FaFacebook size={26} />
            </a>
            <a href="#" className="hover:text-pink-500 transition-colors">
              <FaInstagram size={26} />
            </a>
            <a href="#" className="hover:text-sky-400 transition-colors">
              <FaTwitter size={26} />
            </a>
          </div>
                                    <section>
          <h3 className="text-lg font-semibold m-4 text-white">Datos de la empresa</h3>
          <p className="text-sm leading-relaxed">
            <strong>Dirección:</strong> 971 Santa Clorinda, San Martín de Porres
          </p>
          <p className="text-sm leading-relaxed">
            <strong>Teléfono:</strong> 971 845 362
          </p>
          <p className="text-sm leading-relaxed">
            <strong>Correo:</strong> cetpro@gmail.com
          </p>
        </section>

        </section>  

    





        {/* --- Sección 2: Mapa --- */}
        <section>
          <h4 className="text-lg font-semibold mb-4 text-white">Ubicación</h4>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3902.346559915274!2d-77.0603823!3d-12.0196455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105cede39f7dc47%3A0x73c5c016d20e66a3!2sCETPRO%20San%20Mart%C3%ADn%20de%20Porres!5e0!3m2!1ses!2spe!4v1760366466823!5m2!1ses!2spe"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación"
            ></iframe>
          </div>
        </section>

      </div>

      {/* --- Línea inferior --- */}
      <div className="bg-gray-800 py-4 text-center text-sm text-gray-400">
        © 2025 La Casa de la Oficina — Todos los derechos reservados.
      </div>
    </footer>
  )
}
