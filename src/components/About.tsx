import { Code2, Lightbulb, Users, Rocket } from "lucide-react";

const features = [
  {
    icon: Code2,
    title: "Hands-on Workshops",
    description: "Learn cutting-edge technologies through interactive sessions with industry experts.",
  },
  {
    icon: Lightbulb,
    title: "Inspiring Talks",
    description: "Hear from tech leaders and innovators shaping the future of technology.",
  },
  {
    icon: Users,
    title: "Networking",
    description: "Connect with fellow students, professionals, and potential mentors.",
  },
  {
    icon: Rocket,
    title: "Hackathon",
    description: "Build innovative solutions and compete for amazing prizes.",
  },
];

export const About = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold">
            What is{" "}
            <span className="text-primary">
              Tech Week
            </span>
            ?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A celebration of technology, innovation, and learning. One week packed with opportunities to grow, network, and build.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group p-6 rounded-lg border-2 border-border bg-card hover:border-primary transition-all duration-300 hover:shadow-lg animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
