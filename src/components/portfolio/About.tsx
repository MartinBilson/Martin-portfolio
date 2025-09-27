import aboutImg from "@/assets/about-illustration.jpg";

const companies = [
  "GS1 Kenya",
  "Enkaare Group",
  "Web Africa",
  // "Cheza Health",
  "Track Edge Technologies",
  "Alfa Core Group",
  "Wanaag Solutions",
];

export const About = () => {
  return (
    <section id="about" className="container py-16 md:py-24">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <div className="animate-enter">
          <h2 className="text-3xl font-bold">About Me</h2>
          <p className="mt-4 text-muted-foreground">
            With <span className="text-primary font-semibold">3+ years</span> in service delivery, I’ve
            improved data quality by <span className="text-primary font-semibold">167%</span> through
            robust analytics pipelines, customized ERP (Odoo) modules end‑to‑end, and contributed to
            <span className="text-primary font-semibold"> Web 3.0</span> and blockchain initiatives.
            I combine development, analytics, and business operations to ship solutions that scale.
          </p>

          <div className="mt-8">
            <h3 className="font-semibold">Companies</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {companies.map((c) => (
                <span key={c} className="rounded-full border bg-secondary px-3 py-1 text-sm text-secondary-foreground">
                  {c}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-6">
            <h3 className="font-semibold">Startups Founded</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {['Web Africa', 'BioBalace', 'Fadhili labs'].map((s) => (
                <span key={s} className="rounded-full border bg-accent px-3 py-1 text-sm text-accent-foreground">
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="justify-self-center w-full max-w-md">
          <div className="rounded-2xl border bg-card p-2 shadow-[var(--shadow-elegant)] animate-scale-in">
            <img
              src={aboutImg}
              alt="Tech-inspired illustration showing data, code, and ERP modules for Martin Githae Maina"
              loading="lazy"
              width={1024}
              height={704}
              className="h-auto w-full rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
