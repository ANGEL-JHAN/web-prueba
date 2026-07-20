import { Link } from "react-router-dom";
import heroImg from "@/assets/hero.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery3 from "@/assets/gallery-3.jpg";

export default function Index() {
  return (
    <>
      <section className="container-editorial pt-14 md:pt-20 pb-16 md:pb-24">
        <div className="grid md:grid-cols-12 gap-10 items-end">
          <div className="md:col-span-7">
            <div className="text-xs uppercase tracking-[0.28em] text-muted-foreground mb-6">
              San Antonio bajo
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl leading-[1.02] text-ink">
              Tradición tejida en cada<em className="font-display italic text-accent">sombrero</em>
              .
            </h1>
            <p className="mt-6 max-w-xl text-base text-muted-foreground leading-relaxed">
              Descubre los sombreros artesanales de paja elaborados por los artesanos de San Antonio, donde cada tejido representa nuestra historia, cultura e identidad.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/servicios" className="inline-flex items-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition hover:opacity-90">
                Ver servicios
              </Link>
              <Link to="/contacto" className="inline-flex items-center rounded-full border border-border px-6 py-3 text-sm transition hover:bg-warm">
                Iniciar un proyecto →
              </Link>
            </div>
          </div>
          <div className="md:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden rounded-md bg-warm">
              <img src={heroImg} alt="Interior arquitectónico minimalista" className="h-full w-full object-cover" />
            </div>
          </div>
        </div>

        <div className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-border pt-8">
          {[
            ["1", "100% Hecho tradicionalmente"],
            ["2", "Materiales naturales"],
            ["3", "Diseños auténticos"],
            ["4", "Legado cultural"],
          ].map(([n, l]) => (
            <div key={l}>
              <div className="font-display text-3xl md:text-4xl text-ink">{n}</div>
              <div className="mt-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">{l}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-warm py-20">
        <div className="container-editorial">
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <h2 className="text-4xl md:text-5xl max-w-xl">LA ELABORACIÓN DEL SOMBRERO DE PAJA.</h2>
            <Link to="/servicios" className="text-sm underline underline-offset-4 hover:text-accent">
              Todos los servicios
            </Link>
          </div>
          <div className="mt-12 grid md:grid-cols-3 gap-8">
            {[
              { n: "01 Elaboración artesanal", t: "", d: "Cada sombrero es tejido a mano por artesanos locales, preservando técnicas transmitidas de generación en generación." },
              { n: "02 Diseños ancestrales", t: "", d: "Nuestros sombreros reflejan la identidad cultural de San Antonio mediante formas y detalles inspirados en nuestras tradiciones." },
              { n: "03 Materiales naturales", t: "", d: "Utilizamos fibras de paja cuidadosamente seleccionadas para garantizar calidad, resistencia y sostenibilidad." },
            ].map((s) => (
              <div key={s.n} className="border-t border-ink/20 pt-6">
                <div className="text-xs tracking-[0.2em] text-muted-foreground">{s.n}</div>
                <h3 className="mt-3 text-2xl">{s.t}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-editorial py-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="aspect-[4/5] overflow-hidden rounded-md">
            <img src={gallery1} alt="Composición minimalista" loading="lazy" className="h-full w-full object-cover" />
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.28em] text-muted-foreground">Trabajo destacado</div>
            <h2 className="mt-4 text-4xl md:text-5xl">Tejiendo, y preservando identidad.</h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Cada proyecto empieza con una pregunta esencial: ¿qué debe permanecer?
              El resto lo removemos con cuidado hasta encontrar la forma correcta.
            </p>
            <Link to="/galeria" className="mt-6 inline-block text-sm underline underline-offset-4 hover:text-accent">
              Explorar la galería →
            </Link>
          </div>
        </div>
      </section>

      <section className="border-y border-border">
        <div className="container-editorial py-20 grid md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-4">
            <img src={gallery3} alt="Espacio de trabajo" loading="lazy" className="rounded-md" />
          </div>
          <blockquote className="md:col-span-8">
            <p className="font-display text-3xl md:text-4xl leading-tight text-ink">
              “Los estudiantes de 4º A construyeron un sitio web para ayudar a los artesanos a vender más sus productos a través de la publicidad.”
            </p>
            <footer className="mt-6 text-sm text-muted-foreground">
              — Angel, Jhunior, Cristian, Massiel
            </footer>
          </blockquote>
        </div>
      </section>

      <section className="container-editorial py-24 text-center">
        <h2 className="text-4xl md:text-6xl max-w-3xl mx-auto">¿Tienes algo en mente?</h2>
        <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
          Trabajamos con un número limitado de clientes al año. Escríbenos y
          conversemos sobre lo que quieres construir.
        </p>
        <Link to="/contacto" className="mt-8 inline-flex items-center rounded-full bg-primary px-8 py-4 text-sm font-medium text-primary-foreground hover:opacity-90">
          Hablemos
        </Link>
      </section>
    </>
  );
}
