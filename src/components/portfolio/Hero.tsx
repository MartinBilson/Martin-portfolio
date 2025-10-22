import { Button } from "@/components/ui/button";
import headshot from "@/assets/martin.jpeg";

export const Hero = () => {
  return (
    <section id="home" className="bg-gradient-hero relative overflow-hidden">
      <div className="container pt-20 pb-14 md:pt-28 md:pb-20">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="animate-enter">
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
              Software Developer, Odoo Consultant, AI Automation and Entrepreneur
            </h1>
            <p className="mt-4 text-lg md:text-xl text-muted-foreground">
              Transforming data, building solutions, driving results
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href="/software-developer-ln1.pdf" download>
                <Button variant="hero" size="xl" className="hover-scale">Download CV</Button>
              </a>
              <a href="#contact">
                <Button variant="secondary" size="lg" className="hover-scale">Contact Me</Button>
              </a>
            </div>
          </div>

          <div className="justify-self-center w-full max-w-sm md:max-w-md">
            <div className="rounded-2xl border bg-card p-2 shadow-[var(--shadow-elegant)] animate-scale-in">
              <img
                src={headshot}
                alt="Professional headshot of Martin Githae Maina, Developer and Data Analyst"
                loading="lazy"
                width={768}
                height={768}
                className="h-auto w-full rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
