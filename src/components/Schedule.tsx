import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "lucide-react";

const scheduleData = [
  {
    day: "Monday",
    date: "March 10",
    theme: "AI & Machine Learning",
    color: "primary",
    events: [
      { time: "09:00", title: "Opening Ceremony", type: "keynote" },
      { time: "10:30", title: "Introduction to Neural Networks", type: "workshop" },
      { time: "14:00", title: "AI Ethics Panel", type: "talk" },
    ],
  },
  {
    day: "Tuesday",
    date: "March 11",
    theme: "Web Development",
    color: "secondary",
    events: [
      { time: "09:00", title: "Modern Frontend Frameworks", type: "workshop" },
      { time: "13:00", title: "Building Scalable APIs", type: "workshop" },
      { time: "16:00", title: "Web Performance Optimization", type: "talk" },
    ],
  },
  {
    day: "Wednesday",
    date: "March 12",
    theme: "Cloud & DevOps",
    color: "accent",
    events: [
      { time: "09:00", title: "Cloud Architecture Basics", type: "workshop" },
      { time: "13:00", title: "CI/CD Pipelines", type: "workshop" },
      { time: "16:00", title: "Infrastructure as Code", type: "talk" },
    ],
  },
  {
    day: "Thursday",
    date: "March 13",
    theme: "Cybersecurity",
    color: "primary",
    events: [
      { time: "09:00", title: "Ethical Hacking Basics", type: "workshop" },
      { time: "13:00", title: "Securing Web Applications", type: "workshop" },
      { time: "16:00", title: "Privacy in the Digital Age", type: "talk" },
    ],
  },
];

export const Schedule = () => {
  return (
    <section className="py-24 px-6 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 text-primary">
            <Calendar className="w-6 h-6" />
            <span className="text-sm font-semibold uppercase tracking-wider">Schedule</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">Week at a Glance</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Each day focuses on a different technology domain with workshops, talks, and networking sessions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {scheduleData.map((day, index) => (
            <Card
              key={day.date}
              className="p-6 border-border hover:border-primary/50 transition-all duration-300 bg-card/50 backdrop-blur-sm animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold">{day.day}</h3>
                  <p className="text-muted-foreground">{day.date}</p>
                </div>
                <Badge 
                  className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20"
                >
                  {day.theme}
                </Badge>
              </div>

              <div className="space-y-3">
                {day.events.map((event) => (
                  <div
                    key={event.time}
                    className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors"
                  >
                    <span className="text-sm font-mono text-primary min-w-[50px]">
                      {event.time}
                    </span>
                    <div className="flex-1">
                      <p className="font-medium">{event.title}</p>
                      <p className="text-xs text-muted-foreground capitalize">{event.type}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-muted-foreground">
            <span className="font-semibold text-secondary">Friday-Sunday:</span> 48-Hour Hackathon Marathon 🚀
          </p>
        </div>
      </div>
    </section>
  );
};
