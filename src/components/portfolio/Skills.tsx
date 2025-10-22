import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

type Skill = { name: string; level: number };

type SkillGroup = {
  title: string;
  variant?: "default" | "secondary" | "outline";
  skills: Skill[];
};

const groups: SkillGroup[] = [
  {
    title: "Programming",
    skills: [
      { name: "Python", level: 92 },
      { name: "JavaScript", level: 88 },
      { name: "HTML", level: 90 },
      { name: "CSS", level: 86 },
      { name: "SQL", level: 84 },
    ],
  },
  {
    title: "Frameworks",
    variant: "secondary",
    skills: [
      {name: "FastAPI", level: 80 },
      {name: "Node.js", level: 87 },
      {name: "Express.js", level: 83 },
      {name: "TypeScript", level: 85 },
      // { name: "Django", level: 85 },
      { name: "React", level: 89 }
    ],
  },
  {
    title: "ERP",
    skills: [
      { name: "Odoo", level: 88 },
    ],
  },
  {
    title: "Tools",
    variant: "outline",
    skills: [
      { name: "PostgreSQL", level: 82 },
      { name: "Git", level: 90 },
      { name: "AWS", level: 72 },
      { name: "Docker", level: 86 },
      { name: "CI/CD", level: 78 },
      { name: "NGINX", level: 75 },
      { name: "Jira", level: 80 },
      { name: "Agile (Scrum/Kanban)", level: 84 },
    ],
  },
];

const SkillBar = ({ skill }: { skill: Skill }) => {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between text-sm">
        <span className="text-foreground/90">{skill.name}</span>
        <span className="text-muted-foreground">{skill.level}%</span>
      </div>
      <Progress value={skill.level} className="h-2" />
    </div>
  );
};

export const Skills = () => {
  return (
    <section id="skills" className="container py-16 md:py-24">
      <h2 className="text-3xl font-bold">Skills & Technologies</h2>
      <p className="mt-3 text-muted-foreground max-w-2xl">
        A snapshot of my core stack across programming, frameworks, ERP, and tooling. Each bar indicates practical proficiency and recent usage.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {groups.map((group) => (
          <article key={group.title} className="rounded-lg border bg-card p-6 shadow-sm animate-enter">
            <header className="flex items-center justify-between">
              <h3 className="font-semibold">{group.title}</h3>
              <div className="hidden md:flex flex-wrap gap-2">
                {group.skills.map((s) => (
                  <Badge key={s.name} variant={group.variant || "secondary"}>{s.name}</Badge>
                ))}
              </div>
            </header>

            <div className="mt-5 space-y-4">
              {group.skills.map((s) => (
                <SkillBar key={s.name} skill={s} />
              ))}
            </div>

            <div className="md:hidden mt-4 flex flex-wrap gap-2">
              {group.skills.map((s) => (
                <Badge key={s.name} variant={group.variant || "secondary"}>{s.name}</Badge>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Skills;
