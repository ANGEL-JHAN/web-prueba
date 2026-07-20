import { useState } from "react";

export default function Contacto() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });

  return (
    <>
      <section className="container-editorial pt-16 pb-10">
        <div className="text-xs uppercase tracking-[0.28em] text-muted-foreground">Contacto</div>
        <h1 className="mt-4 text-5xl md:text-7xl max-w-4xl">
          Hablemos con <em className="italic text-accent">calma</em>.
        </h1>
      </section>

      <section className="container-editorial pb-24 grid md:grid-cols-12 gap-12">
        <div className="md:col-span-5 space-y-8">
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Estudio</div>
            <p className="mt-2 text-lg">San Antonio <br />28005 Bambamarca, Perú</p>
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Email</div>
            <p className="mt-2 text-lg">exampleajmc@gmail.com</p>
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Teléfono</div>
            <p className="mt-2 text-lg">+34 900 123 456</p>
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Horario</div>
            <p className="mt-2 text-sm text-muted-foreground">Lunes a viernes · 10:00 — 18:00 CET</p>
          </div>
        </div>

        <div className="md:col-span-7">
          {sent ? (
            <div className="rounded-md border border-border bg-warm p-10 text-center">
              <div className="font-display text-3xl">Gracias.</div>
              <p className="mt-3 text-muted-foreground">Hemos recibido tu mensaje. Te responderemos en las próximas 48 horas.</p>
            </div>
          ) : (
            <form
              onSubmit={(e) => { e.preventDefault(); setSent(true); }}
              className="space-y-6"
            >
              <Field label="Nombre">
                <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full border-b border-border bg-transparent py-3 outline-none focus:border-ink" />
              </Field>
              <Field label="Email">
                <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full border-b border-border bg-transparent py-3 outline-none focus:border-ink" />
              </Field>
              <Field label="Empresa (opcional)">
                <input value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} className="w-full border-b border-border bg-transparent py-3 outline-none focus:border-ink" />
              </Field>
              <Field label="Cuéntanos sobre el proyecto">
                <textarea required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full resize-none border-b border-border bg-transparent py-3 outline-none focus:border-ink" />
              </Field>
              <button type="submit" className="rounded-full bg-primary px-8 py-4 text-sm text-primary-foreground hover:opacity-90">
                Enviar mensaje
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{label}</span>
      {children}
    </label>
  );
}
