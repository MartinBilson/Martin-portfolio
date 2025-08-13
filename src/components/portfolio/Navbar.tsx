import { useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "./ThemeToggle";

const sections = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  const NavLinks = () => (
    <ul className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
      {sections.map((s) => (
        <li key={s.id}>
          <a href={`#${s.id}`} className="story-link text-sm text-foreground/80 hover:text-foreground transition-colors" onClick={() => setOpen(false)}>
            {s.label}
          </a>
        </li>
      ))}
      <li className="md:ml-2">
        <a href="#contact">
          <Button variant="default" size="sm" className="hover-scale">Let's Talk</Button>
        </a>
      </li>
      <li>
        <ThemeToggle />
      </li>
    </ul>
  );

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur">
      <nav className="container flex items-center justify-between h-16">
        <a href="#home" className="font-semibold text-base">MG</a>
        <div className="hidden md:block"><NavLinks /></div>
        <button className="md:hidden p-2" aria-label="Menu" onClick={() => setOpen(!open)}>
          <Menu />
        </button>
      </nav>
      {open && (
        <div className="md:hidden border-t border-border/60 bg-background/95">
          <div className="container py-4"><NavLinks /></div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
