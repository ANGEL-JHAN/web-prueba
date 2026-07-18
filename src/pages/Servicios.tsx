import { Link } from "react-router-dom";

const services = [
  {
    n: "01",
    t: "Identidad de marca",
    d: "Sistemas visuales completos, desde la investigación hasta el manual de aplicación.",
    items: ["Naming y verbal identity", "Logotipo y sistema visual", "Tipografía y color", "Manual de marca"],
  },
  {
    n: "02",
    t: "Diseño web",
    d: "Sitios editoriales, portfolios y plataformas con foco en rendimiento y accesibilidad.",
    items: ["Diseño UI/UX", "Desarrollo front-end", "CMS a medida", "SEO técnico"],
  },
  {
    n: "03",
    t: "Dirección de arte",
    d: "Campañas, editoriales y contenido visual con una voz coherente y refinada.",
    items: ["Concept y storytelling", "Fotografía y styling", "Producción", "Motion y edición"],
  },
  {
    n: "04",
    t: "Consultoría creativa",
    d: "Acompañamos a equipos internos en la definición de dirección y estándares visuales.",
    items: ["Auditoría de marca", "Workshops", "Sistemas de diseño", "Mentoría"],
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
