import Navbar from "@/components/portfolio/Navbar";
import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import Skills from "@/components/portfolio/Skills";
import ExperienceTimeline from "@/components/portfolio/ExperienceTimeline";
import { Mail, Phone, Linkedin, Github, Twitter, ArrowUp } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />

        <About />

        <ExperienceTimeline />

        <section id="projects" className="container py-16 md:py-24">
          <h2 className="text-3xl font-bold">Projects</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            
            {/* Project Card */}
            {[
              {
                title: "Bwyb Life - Ecommerce",
                desc: "brand is designed to bridge racial divides, stop racial hate, ease racial tensions, promote diversity & inclusion and bring good people together regardless of their race, culture or ethnicity..",
                img: "images/bwyblife.jpeg",
                link: "https://bwyblife.com/"
              },
              {
                title: "GS1 Kenya",
                desc: "a not-for-profit organization that works closely with industries to agree how information should be stored in a barcode. .",
                img: "/images/gs1.jpeg",
                link: "https://gs1kenya.org/users/log_in"
              },
              {
                title: "TracKEdge Technologies",
                desc: "A company delivering innovative asset management solutions.",
                img: "/images/trackedge.jpeg",
                link: "https://system.trackedgetechnologies.com/web/login"
              },
              {
                title: "Evabazaar",
                desc: "company operating in the realm of premium food products.",
                img: "/images/evabazaar.jpeg",
                link: "https://www.evabazaar.com/"
              }
            ].map((proj, idx) => (
              <a
                key={idx}
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-lg border bg-card overflow-hidden shadow-sm hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
              >
                <img
                  src={proj.img}
                  alt={proj.title}
                  className="h-40 w-full object-cover group-hover:opacity-90 transition-opacity duration-300"
                />
                <div className="p-6">
                  <h3 className="font-semibold text-lg">{proj.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{proj.desc}</p>
                </div>
              </a>
            ))}
            
          </div>
        </section>

        <Skills />

      <section id="contact" className="container py-16 md:py-24 text-center">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight"> Let’s Connect</h2>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          Whether you have an exciting project, want to collaborate, or just
          want to say hello — I’m always open to meaningful conversations.
        </p>

        <div className="mt-8 flex flex-col items-center gap-4">
          {/* Email */}
          <a href="mailto:martin.maina.sc@gmail.com?subject=Project%20Collaboration&body=Hi%20Martin,%0D%0A%0D%0AI%20would%20like%20to%20discuss%20a%20project%20with%20you."
            className="px-6 py-3 rounded-lg bg-primary text-primary-foreground shadow-sm hover:shadow-lg hover:bg-primary/90 transition-all">
            📧 martin.maina.sc@gmail.com
          </a>


          {/* Optional: Phone */}
          <a href="tel:+254712345678" className="text-muted-foreground hover:text-primary transition-colors">
            📱 +254 748 263 148 | +254 748 141 200
          </a>

          {/* Optional: Social Links with Icons */}
          <div className="flex gap-6 mt-6">
            <a 
              href="https://www.linkedin.com/in/martin-githae-11781b20a/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-primary transition-colors"
              title="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="https://github.com/martinbilson" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-primary transition-colors"
              title="GitHub"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://twitter.com/YOUR-HANDLE" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-primary transition-colors"
              title="Twitter"
            >
              <Twitter size={24} />
            </a>
          </div>
        </div>
      </section>

      </main>

      <footer className="border-t">
        <div className="container py-8 text-sm text-muted-foreground flex items-center justify-between">
          <span>© {new Date().getFullYear()} Martin Githae Maina</span>
          <a href="#home" className="story-link flex items-center gap-2 hover:text-primary transition-colors">
            Back to top
            <ArrowUp size={18} />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Index;
