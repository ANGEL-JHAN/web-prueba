export default function Footer() {
  return (
    <footer className="mt-24 border-t border-border/60 bg-warm">
      <div className="container-editorial py-16 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="font-display text-3xl">Atelier</div>
          <p className="mt-3 max-w-sm text-sm text-muted-foreground">
            San Antonio sitio web creado por estudiantes del 4º grado A.
          </p>
        </div>
        <div>
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Contacto</div>
          <p className="mt-3 text-sm">exampleajmc@gmail.com</p>
          <p className="text-sm text-muted-foreground">+31 987 654 321</p>
        </div>
        <div>
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Sígue­nos</div>
          <ul className="mt-3 space-y-1 text-sm">
            <li><a className="hover:underline" href="#">Instagram</a></li>
            <li><a className="hover:underline" href="#">Facebook</a></li>
            <li><a className="hover:underline" href="#">Tiktok</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="container-editorial py-6 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} San Antonio. Todos los derechos reservados.</span>
          <span>Diseñado con detalle · San Antonio</span>
        </div>
      </div>
    </footer>
  );
}
