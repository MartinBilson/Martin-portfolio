import { Badge } from "@/components/ui/badge";

type Skill = { name: string; icon?: string };

type SkillGroup = {
  title: string;
  skills: Skill[];
};

const groups: SkillGroup[] = [
  {
    title: "Programming Languages",
    skills: [
      { name: "Python", icon: "🐍" },
      { name: "JavaScript", icon: "🟨" },
      { name: "HTML", icon: "🔶" },
      { name: "CSS", icon: "🔵" },
      { name: "SQL", icon: "🗄️" },
      { name: "TypeScript", icon: "🔷" },
    ],
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      { name: "React", icon: "⚛️" },
      { name: "FastAPI", icon: "⚡" },
      { name: "Node.js", icon: "🟢" },
      { name: "Express.js", icon: "⚙️" },
    ],
  },
  {
    title: "ERP Systems",
    skills: [
      { name: "Odoo", icon: "📦" },
    ],
  },
  {
    title: "Tools & Technologies",
    skills: [
      { name: "PostgreSQL", icon: "🐘" },
      { name: "Git", icon: "🔀" },
      { name: "AWS", icon: "☁️" },
      { name: "Docker", icon: "🐳" },
      { name: "CI/CD", icon: "🔄" },
      { name: "NGINX", icon: "🚀" },
      { name: "Jira", icon: "📋" },
      { name: "Agile (Scrum/Kanban)", icon: "🎯" },
    ],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="container py-16 md:py-24">
      <h2 className="text-3xl font-bold">Skills & Technologies</h2>
      <p className="mt-3 text-muted-foreground max-w-2xl">
        I have experience with these technologies
      </p>

      <div className="mt-8 rounded-lg border bg-card p-8 shadow-sm animate-enter space-y-8">
        {groups.map((group) => (
          <div key={group.title}>
            <h3 className="text-lg font-semibold mb-4 text-foreground">{group.title}</h3>
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {group.skills.map((skill) => (
                <div key={skill.name} className="flex flex-col items-center justify-center gap-2">
                  <div className="w-16 h-16 rounded-lg border bg-muted flex items-center justify-center text-3xl hover:bg-accent transition-colors cursor-pointer">
                    {skill.icon}
                  </div>
                  <span className="text-xs text-center font-medium text-foreground/80">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
