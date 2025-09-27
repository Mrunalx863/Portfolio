import { Badge, CheckCircle, Code, Database, Globe, Smartphone } from "lucide-react";

const skills = [
  {
    category: "Languages",
    icon: <Code className="h-6 w-6" />,
    items: ["C", "C++", "Python", "JavaScript", "TypeScript"]
  },
  {
    category: "Frontend", 
    icon: <Globe className="h-6 w-6" />,
    items: ["ReactJS", "React Native", "TailwindCSS", "HTML5", "CSS3"]
  },
  {
    category: "Backend",
    icon: <Database className="h-6 w-6" />,
    items: ["NodeJS", "ExpressJS", "FastAPI", "Socket.IO", "RESTful APIs"]
  },
  {
    category: "Databases",
    icon: <Database className="h-6 w-6" />,
    items: ["PostgreSQL", "MongoDB", "MySQL", "Firebase", "Appwrite"]
  },
  {
    category: "Tools & Technologies",
    icon: <Code className="h-6 w-6" />,
    items: ["Git/GitHub", "Docker", "AWS", "Postman", "VS Code", "GitHub Actions"]
  }
];

const experiences = [
  {
    role: "Open Source Developer",
    company: "GirlScript Summer of Code",
    period: "Jul 2025 - Present",
    type: "Internship",
    achievements: [
      "Engineered and optimized core features across multiple high-traffic open-source repositories",
      "Delivered production-grade web components, automation scripts, and performance improvements",
      "Collaborated with developer community using Git/GitHub, driving issue triage and code reviews"
    ]
  },
  {
    role: "Full Stack Developer", 
    company: "Endorsesphere Ventures Private Limited",
    period: "Apr 2025 - Aug 2025",
    type: "Internship",
    achievements: [
      "Designed and deployed production-grade platform building RESTful APIs with Node.js, Express, and PostgreSQL",
      "Delivered secure, real-time user experiences with Socket.IO for live updates and JWT authentication",
      "Architected cloud infrastructure and automated delivery by configuring AWS EC2/S3 with Docker-based CI/CD pipelines"
    ]
  },
  {
    role: "Open Source Developer",
    company: "Social Winter of Code (SWOC)",
    period: "Jan 2025 - Mar 2025", 
    type: "Internship",
    achievements: [
      "Contributed to open-source projects during the winter coding program",
      "Implemented features and bug fixes across multiple repositories",
      "Collaborated with mentors and fellow contributors in agile development environment"
    ]
  }
];


export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 px-4 relative bg-secondary/10">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
              PROFESSIONAL EXPERIENCE
            </span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        {/* Experience Section */}
        <div className="mb-32">
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-card/50 backdrop-blur-sm p-8 rounded-xl border border-border/50 hover:border-primary/30 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-foreground mb-1 text-center sm:text-left">{exp.role}</h4>
                    <p className="text-primary font-medium mb-1 text-center sm:text-left">{exp.company} • {exp.type}</p>
                  </div>
                  <div className="bg-primary/10 px-4 py-2 rounded-full mt-2 md:mt-0 mx-auto md:mx-0 w-fit">
                    <span className="text-sm font-medium text-primary">{exp.period}</span>
                  </div>
                </div>
                <div className="space-y-3">
                  {exp.achievements.map((achievement, achIndex) => (
                    <div key={achIndex} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-foreground flex-1 text-justify sm:text-left">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
                PROFESSIONAL SKILLS
              </span>
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skillCategory, index) => (
              <div 
                key={index}
                className="group bg-card/70 backdrop-blur-sm p-6 rounded-xl border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="flex items-center gap-3 mb-6 justify-center sm:justify-start">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary/15 transition-colors duration-300">
                    {skillCategory.icon}
                  </div>
                  <h4 className="font-semibold text-lg">{skillCategory.category}</h4>
                </div>
                
                <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                  {skillCategory.items.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="px-3 py-1.5 bg-secondary/80 text-secondary-foreground rounded-full text-sm font-medium border border-border/30 hover:border-primary/50 transition-colors duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};