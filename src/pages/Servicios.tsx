import { Link } from "react-router-dom";

const services = [
  {
    n: "01",
    t: "Elaboración artesanal",
    d: "Creamos sombreros de paja con técnicas tradicionales, cuidando cada detalle para garantizar calidad, comodidad y durabilidad.",
    items: ["Selección de paja natural", "Tejido artesanal", "Acabados a mano", "Control de calidad"],
  },
  {
    n: "02",
    t: "Diseño y personalización",
    d: "Desarrollamos sombreros con estilos únicos para uso diario, eventos, empresas y pedidos especiales.",
    items: ["Diseños personalizados", "Diferentes tamaños", "acabados especiales", "Personalización con cintas y accesorios"],
  },
  {
    n: "03",
    t: "Comercialización y distribución",
    d: "Llevamos nuestros sombreros a clientes, comercios y mercados, ofreciendo productos artesanales de excelente calidad.",
    items: ["Venta al por mayor y menor", "Pedidos nacionales", "Empaque seguro", "Entregas puntuales"],
  },
  {
    n: "04",
    t: "Conservación y tradición",
    d: "Promovemos el valor cultural del tejido en paja mediante la capacitación y el fortalecimiento del trabajo artesanal.",
    items: ["Capacitación en tejido", "Rescate de técnicas tradicionales", "Asesoría para artesanos", "Promoción de la artesanía local"],
  },
];

export default function Servicios() {
  return (
    <>
      <section className="container-editorial pt-16 pb-10">
        <div className="text-xs uppercase tracking-[0.28em] text-muted-foreground">Servicios</div>
        <h1 className="mt-4 text-5xl md:text-7xl max-w-4xl">
          Cuatro <em className="italic text-accent">disciplinas</em>, un solo criterio.
        </h1>
      </section>

      <section className="container-editorial pb-20">
        <div className="divide-y divide-border border-y border-border">
          {services.map((s) => (
            <article key={s.n} className="grid md:grid-cols-12 gap-6 py-10">
              <div className="md:col-span-2 text-xs tracking-[0.2em] text-muted-foreground">{s.n}</div>
              <div className="md:col-span-4">
                <h2 className="text-3xl md:text-4xl">{s.t}</h2>
              </div>
              <div className="md:col-span-6">
                <p className="text-muted-foreground leading-relaxed">{s.d}</p>
                <ul className="mt-4 grid grid-cols-2 gap-2 text-sm">
                  {s.items.map((i) => (
                    <li key={i} className="text-ink">— {i}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-warm py-20">
        <div className="container-editorial text-center">
          <h2 className="text-4xl md:text-5xl">¿Cuál encaja con tu proyecto?</h2>
          <p className="mt-4 max-w-xl mx-auto text-muted-foreground">
            Cuéntanos brevemente qué necesitas y te responderemos en 48 horas.
          </p>
          <Link to="/contacto" className="mt-8 inline-flex items-center rounded-full bg-primary px-8 py-4 text-sm text-primary-foreground hover:opacity-90">
            Escribir al estudio
          </Link>
        </div>
      </section>
    </>
  );
}
