import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Index from "./pages/Index";
import Nosotros from "./pages/Nosotros";
import Videos from "./pages/Videos";
import Galeria from "./pages/Galeria";
import Servicios from "./pages/Servicios";
import Contacto from "./pages/Contacto";

const META: Record<string, { title: string; description: string }> = {
  "/": { title: "TRADICIÓN TEJIDA EN CADA SOMBRERO", description: "Descubre los sombreros artesanales de paja elaborados por los artesanos de San Antonio, donde cada tejido representa nuestra historia, cultura e identidad." },
  "/nosotros": { title: "Nosotros — Atelier", description: "Nuestra filosofía y equipo." },
  "/videos": { title: "Videos — Atelier", description: "Piezas audiovisuales y campañas en movimiento." },
  "/galeria": { title: "Galería — Atelier", description: "Imágenes y composiciones seleccionadas." },
  "/servicios": { title: "Servicios — Atelier", description: "Identidad, web, dirección de arte y consultoría." },
  "/contacto": { title: "Contacto — Atelier", description: "Escríbenos sobre tu proyecto." },
};

function MetaSync() {
  const { pathname } = useLocation();
  useEffect(() => {
    const m = META[pathname] ?? META["/"];
    document.title = m.title;
    let tag = document.querySelector('meta[name="description"]');
    if (!tag) {
      tag = document.createElement("meta");
      tag.setAttribute("name", "description");
      document.head.appendChild(tag);
    }
    tag.setAttribute("content", m.description);
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <MetaSync />
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/galeria" element={<Galeria />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

function NotFound() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-7xl">404</h1>
        <p className="mt-4 text-sm text-muted-foreground">La página que buscas no existe.</p>
      </div>
    </div>
  );
}
