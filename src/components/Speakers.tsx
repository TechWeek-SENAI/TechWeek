import { Card } from "@/components/ui/card";
import { Github, Linkedin, Twitter } from "lucide-react";

const speakers = [
  {
    name: "Dr. Sarah Chen",
    role: "AI Research Lead",
    company: "TechCorp",
    topic: "The Future of Machine Learning",
    image: "SC",
  },
  {
    name: "Marcus Rodriguez",
    role: "Senior DevOps Engineer",
    company: "CloudNative Inc",
    topic: "Kubernetes at Scale",
    image: "MR",
  },
  {
    name: "Emily Thompson",
    role: "Security Architect",
    company: "CyberSafe",
    topic: "Modern Security Practices",
    image: "ET",
  },
  {
    name: "Alex Kumar",
    role: "Full Stack Developer",
    company: "StartupXYZ",
    topic: "Building Modern Web Apps",
    image: "AK",
  },
];

export const Speakers = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold">Featured Speakers</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Learn from industry experts and thought leaders at the forefront of technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {speakers.map((speaker, index) => (
            <Card
              key={speaker.name}
              className="group p-6 border-border hover:border-secondary/50 transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--secondary)/0.2)] animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Avatar */}
              <div className="relative mb-4">
                <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center text-2xl font-bold text-primary-foreground">
                  {speaker.image}
                </div>
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <a
                    href="#"
                    className="w-8 h-8 rounded-full bg-card border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <Twitter className="w-4 h-4" />
                  </a>
                  <a
                    href="#"
                    className="w-8 h-8 rounded-full bg-card border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href="#"
                    className="w-8 h-8 rounded-full bg-card border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </div>

              <div className="text-center space-y-2">
                <h3 className="text-xl font-bold">{speaker.name}</h3>
                <p className="text-sm text-muted-foreground">
                  {speaker.role} @ {speaker.company}
                </p>
                <div className="pt-2">
                  <p className="text-sm font-medium text-primary">{speaker.topic}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
