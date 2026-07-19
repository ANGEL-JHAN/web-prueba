import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import hero from "@/assets/hero.jpg";
import team from "@/assets/team.jpg";

const items = [
  { src: g1, alt: "Formas y luz", cap: "Artesano vendiendo 01" },
  { src: g2, alt: "Cerámica en luz natural", cap: "Artesano vendiendo 02" },
  { src: hero, alt: "Interior arquitectónico", cap: "Arquitectura · Blanco cálido" },
  { src: g3, alt: "Espacio de trabajo", cap: "Editorial · Estudio" },
  { src: g4, alt: "Mármol y sombras", cap: "Artesano vendiendo 04" },
  { src: team, alt: "Retrato de equipo", cap: "Retrato · Equipo" },
];

export default function Galeria() {
  return (
    <>
      <section className="container-editorial pt-16 pb-10">
        <div className="text-xs uppercase tracking-[0.28em] text-muted-foreground">Galería</div>
        <h1 className="mt-4 text-5xl md:text-7xl max-w-4xl">
          imagenes de <em className="italic text-accent">artesanos</em>.
        </h1>
        <p className="mt-6 max-w-xl text-muted-foreground leading-relaxed">
          Piezas seleccionadas de nuestros proyectos recientes. Fotografía, dirección
          de arte y composición.
        </p>
      </section>

      <section className="container-editorial pb-24">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6 [&>figure]:break-inside-avoid">
          {items.map((it, i) => (
            <figure key={i} className="group">
              <div className="overflow-hidden rounded-md bg-warm">
                <img src={it.src} alt={it.alt} loading="lazy" className="w-full object-cover transition duration-700 group-hover:scale-[1.03]" />
              </div>
              <figcaption className="mt-3 flex justify-between text-xs uppercase tracking-[0.18em] text-muted-foreground">
                <span>{it.cap}</span>
                <span>0{i + 1}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </>
  );
}
