import teamImg from "@/assets/team.jpg";

export default function Nosotros() {
  return (
    <>
      <section className="container-editorial pt-16 pb-10">
        <div className="text-xs uppercase tracking-[0.28em] text-muted-foreground">Nosotros</div>
        <h1 className="mt-4 text-5xl md:text-7xl max-w-4xl">
          Un estudio pequeño con <em className="italic text-accent">obsesión</em> por los detalles.
        </h1>
      </section>

      <section className="container-editorial pb-16 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-7">
          <img src={teamImg} alt="Equipo Atelier" loading="lazy" className="w-full rounded-md object-cover" />
        </div>
        <div className="md:col-span-5">
          <p className="text-lg text-ink leading-relaxed">
            Nacimos en 2015 en un altillo de Madrid con una convicción: el diseño
            comercial también puede ser silencioso, preciso y humano.
          </p>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            Hoy somos un equipo de nueve personas trabajando con marcas culturales,
            hoteleras, editoriales y de consumo en Europa y Latinoamérica. Nos
            interesa lo que dura: sistemas visuales que envejecen bien, sitios web
            que resisten al tiempo y campañas que no gritan.
          </p>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            Trabajamos con un número limitado de clientes al año para poder implicarnos
            profundamente en cada proyecto.
          </p>
        </div>
      </section>

      <section className="bg-warm py-20">
        <div className="container-editorial">
          <h2 className="text-4xl md:text-5xl max-w-2xl">Nuestros principios.</h2>
          <div className="mt-12 grid md:grid-cols-2 gap-x-16 gap-y-10">
            {[
              ["Menos, pero mejor.", "Preferimos una decisión bien tomada a diez soluciones tibias."],
              ["Craft sobre tendencia.", "La ejecución impecable envejece mejor que cualquier moda."],
              ["Escuchar primero.", "Cada proyecto empieza con preguntas, no con propuestas."],
              ["Transparencia total.", "Presupuestos claros, plazos honestos, cero letra pequeña."],
            ].map(([t, d]) => (
              <div key={t} className="border-t border-ink/20 pt-6">
                <h3 className="text-2xl">{t}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-editorial py-20">
        <h2 className="text-4xl md:text-5xl">Equipo.</h2>
        <div className="mt-10 grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          {[
            ["Angel", "Creador de la web"],
            ["Jhunior", "Apoyamiento en la web"],
            ["Cristian", "Apoyamiento en la web"],
            ["Massiel", "Apoyamiento en la web"],
          ].map(([n, r]) => (
            <div key={n}>
              <div className="aspect-[3/4] rounded-md bg-warm border border-border" />
              <div className="mt-3 text-base">{n}</div>
              <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{r}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
