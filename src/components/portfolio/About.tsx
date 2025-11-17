import aboutImg from "@/assets/about-illustration.jpg";

const fullTimeCompanies = ["GS1 Kenya, TrackEdge Technologies"];

const contractCompanies = [
  "Enkaare Group",
  "Web Africa",
  // "Cheza Health",
  "Eva Bazaar",
  "Wanaag Solutions",
];

export const About = () => {
  return (
    <section id="about" className="container py-16 md:py-24">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <div className="animate-enter">
          <h2 className="text-3xl font-bold">About Me</h2>
          <div className="space-y-6 text-muted-foreground">
          <p>
            I’m a developer who thinks in systems. With 
            <span className="text-primary font-semibold"> 3+ years </span>
            of experience, I’ve built and delivered solutions across ERPs, data pipelines,
            and <span className="text-primary font-semibold">Web3</span> infrastructure.
          </p>

          <p>
            My work includes improving data quality by 
            <span className="text-primary font-semibold"> 167% </span>
            through automated analytics workflows, and building custom 
            <span className="text-primary font-semibold"> Odoo </span>
            modules that eliminated manual work across multiple teams.
          </p>

          <div className="border-l-4 border-primary pl-4 py-2 space-y-2">
            <p>
              I focus on clean architecture, scalable systems, and solving real business problems — 
              not just writing code.
            </p>
            <p>
              I bridge engineering and operations, take ownership of outcomes, and thrive in teams 
              that value clarity, high standards, and long-term thinking.
            </p>
          </div>
        </div>


          <div className="mt-8">
            <h3 className="font-semibold">Full-time</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {fullTimeCompanies.map((c) => (
                <span key={c} className="rounded-full border bg-primary px-3 py-1 text-sm text-primary-foreground">
                  {c}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-6">
            <h3 className="font-semibold">Consulted / Contract</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {contractCompanies.map((c) => (
                <span key={c} className="rounded-full border bg-secondary px-3 py-1 text-sm text-secondary-foreground">
                  {c}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-6">
            <h3 className="font-semibold">Startups Founded</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {['BioBalace', 'Fadhili labs'].map((s) => (
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
