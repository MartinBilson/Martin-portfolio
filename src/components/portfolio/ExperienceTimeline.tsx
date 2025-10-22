type TimelineItem = {
  company: string;
  role: string;
  dates: string;
  bullets: string[];
  initials: string;
};

const data: TimelineItem[] = [
  {
    company: "GS1 Kenya",
    role: "Junior Software Dev & Data Quality Executive",
    dates: "2022 – 2024",
    initials: "GK",
    bullets: [
      "Automated data validation and reporting pipelines (Python & SQL), improving data accuracy by 167%",
      "Contributed in development and did oversight of the GS1 ERP system—optimizing integrations and performance to increase system throughput by 20%",
      "Fostered knowledge-sharing through biweekly technical demos and lessons-learned sessions"
    ],
  },
  {
    company: "Web AFrica && Enkaare Group",
    role: "Block-chain Consultant",
    dates: "2022 – 2024",
    initials: "EG",
    bullets: [
      "Consulted and developed WEb Africa, delivering a custom web apps and SEO optimized sites for clients",
      "Built decentralized applications and smart contracts prototypes using web3.js + react",
      "Contributed to block chain education and advocacy across Africa through workshops and webinars"
    ],
  },
  {
    company: "Track Edge Technologies",
    role: "Full‑Stack Developer",
    dates: "2024 – Present",
    initials: "TE",
    bullets: [
      "Architected and deployed full-stack ERP integrated applications using React, Python and postgreSQL, Enhancing business efficiency by 40%",
      "Built and consumed RESTful APIs to synchronize Odoo Backend with React for Better scalability and performance",
      "IMplemented databases indexing, caching and asynchronous processing, reducing server latency by 35%"
    ],
  },
  {
    company: "Wanaag Solutions",
    role: "Data Engineer",
    dates: "2024 – 2024",
    initials: "WS",
    bullets: [
      "Built ETL pipelines and analytics models",
      "Enabled data‑driven decision making across teams",
    ],
  },
  // {
  //   company: "BioBalance (Co‑founder)",
  //   role: "Co‑founder / CTO",
  //   dates: "2024 – Present",
  //   initials: "BB",
  //   bullets: [
  //     "Exploring Web 3.0 & blockchain integrations",
  //     "Product strategy and data‑backed iteration",
  //   ],
  // },
];

const LogoBadge = ({ initials }: { initials: string }) => (
  <div
    aria-hidden
    className="grid size-12 place-items-center rounded-full border bg-secondary text-secondary-foreground shadow-sm"
  >
    <span className="font-semibold">{initials}</span>
  </div>
);

const VerticalTimeline = () => (
  <div className="relative">
    <div className="absolute left-6 top-0 h-full w-px bg-border md:hidden" />
    <div className="space-y-8">
      {data.map((item, idx) => (
        <article key={idx} className="relative flex gap-4 animate-enter">
          <div className="relative z-10 mt-1">
            <LogoBadge initials={item.initials} />
          </div>
          <div className="pt-1">
            <h3 className="text-base font-semibold">{item.role}</h3>
            <p className="text-sm text-muted-foreground">{item.company} • {item.dates}</p>
            <ul className="mt-3 list-disc pl-5 text-sm text-foreground/90 space-y-1">
              {item.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </div>
        </article>
      ))}
    </div>
  </div>
);

const HorizontalTimeline = () => (
  <div className="relative hidden md:block">
    {/* <div className="absolute left-0 right-0 top-9 h-px bg-border" /> */}
    <div className="flex gap-6 overflow-x-auto pb-2">
      {data.map((item, idx) => (
        <article key={idx} className="min-w-[22rem] rounded-lg border bg-card p-5 shadow-sm animate-enter">
          <div className="flex items-center gap-3">
            <LogoBadge initials={item.initials} />
            <div>
              <h3 className="font-semibold leading-tight">{item.role}</h3>
              <p className="text-sm text-muted-foreground">{item.company}</p>
            </div>
          </div>
          <p className="mt-2 text-xs text-muted-foreground">{item.dates}</p>
          <ul className="mt-3 list-disc pl-5 text-sm text-foreground/90 space-y-1">
            {item.bullets.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  </div>
);

export const ExperienceTimeline = () => {
  return (
    <section id="experience" className="container py-16 md:py-24">
      <h2 className="text-3xl font-bold">Experience Timeline</h2>
      <p className="mt-3 text-muted-foreground max-w-2xl">
        A journey across startups and enterprises — delivering results with development, analytics, and ERP.
      </p>

      <div className="mt-8">
        {/* Horizontal timeline - visible on md+ */}
        <div className="hidden md:block">
          <HorizontalTimeline />
        </div>

        {/* Vertical timeline - visible only on mobile */}
        <div className="block md:hidden">
          <VerticalTimeline />
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;
