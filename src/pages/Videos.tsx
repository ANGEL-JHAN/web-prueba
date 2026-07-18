import { Play } from "lucide-react";

const videos = [
  { id: "aqz-KE-bpKQ", title: "Campaña Casa Norte", meta: "Dirección de arte · 2024" },
  { id: "ScMzIvxBSi4", title: "Editorial Verano", meta: "Motion · 2024" },
  { id: "V-_O7nl0Ii0", title: "Manifiesto Atelier", meta: "Estudio · 2023" },
  { id: "1La4QzGeaaQ", title: "Reel anual", meta: "Selección · 2023" },
];

export default function Videos() {
  return (
    <>
      <section className="container-editorial pt-16 pb-10">
        <div className="text-xs uppercase tracking-[0.28em] text-muted-foreground">Videos</div>
        <h1 className="mt-4 text-5xl md:text-7xl max-w-4xl">
          Historias en <em className="italic text-accent">movimiento</em>.
        </h1>
        <p className="mt-6 max-w-xl text-muted-foreground leading-relaxed">
          Producimos piezas audiovisuales que respetan el ritmo, el silencio y la
          fotografía. Una selección de trabajos recientes.
        </p>
      </section>

      <section className="container-editorial pb-12">
        <div className="group relative aspect-video overflow-hidden rounded-md bg-ink">
          <iframe
            className="absolute inset-0 h-full w-full"
            src={`https://www.youtube-nocookie.com/embed/${videos[0].id}?rel=0`}
            title={videos[0].title}
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
        <div className="mt-4 flex flex-wrap items-baseline justify-between gap-2">
          <h2 className="text-2xl">{videos[0].title}</h2>
          <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{videos[0].meta}</span>
        </div>
      </section>

      <section className="container-editorial pb-24">
        <div className="grid md:grid-cols-3 gap-6">
          {videos.slice(1).map((v) => (
            <a key={v.id} href={`https://www.youtube.com/watch?v=${v.id}`} target="_blank" rel="noreferrer" className="group block">
              <div className="relative aspect-video overflow-hidden rounded-md bg-warm">
                <img src={`https://i.ytimg.com/vi/${v.id}/hqdefault.jpg`} alt={v.title} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 flex items-center justify-center bg-ink/10 opacity-0 transition group-hover:opacity-100">
                  <span className="rounded-full bg-background/95 p-4">
                    <Play className="h-5 w-5 fill-ink text-ink" />
                  </span>
                </div>
              </div>
              <div className="mt-3">
                <div className="text-base">{v.title}</div>
                <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{v.meta}</div>
              </div>
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
