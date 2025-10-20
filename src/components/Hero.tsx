import { Button } from "@/components/ui/button";
import { Calendar, MapPin, ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 py-20">
      {/* Animated background gradient */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: 'var(--gradient-hero)',
        }}
      />
      
      {/* Floating orbs */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute top-40 right-20 w-48 h-48 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      
      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8 animate-fade-in">
        {/* Event badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-card/50 backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          <span className="text-sm font-medium text-foreground">Annual University Event</span>
        </div>

        {/* Main heading */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">
          <span 
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage: 'var(--gradient-accent)',
            }}
          >
            Tech Week
          </span>
          <br />
          <span className="text-foreground">2025</span>
        </h1>

        {/* Description */}
        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
          A week of innovation, learning, and technology. Join us for workshops, talks, and hackathons.
        </p>

        {/* Event details */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-muted-foreground">
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-primary" />
            <span>March 10-17, 2025</span>
          </div>
          <div className="h-4 w-px bg-border" />
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-secondary" />
            <span>Campus Central</span>
          </div>
        </div>

        {/* CTA buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <Button variant="hero" size="lg" className="group">
            Register Now
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button variant="heroSecondary" size="lg">
            View Schedule
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 pt-12 max-w-3xl mx-auto">
          <div className="space-y-1">
            <div className="text-4xl font-bold text-primary">50+</div>
            <div className="text-sm text-muted-foreground">Events</div>
          </div>
          <div className="space-y-1">
            <div className="text-4xl font-bold text-secondary">30+</div>
            <div className="text-sm text-muted-foreground">Speakers</div>
          </div>
          <div className="space-y-1">
            <div className="text-4xl font-bold text-accent">1000+</div>
            <div className="text-sm text-muted-foreground">Attendees</div>
          </div>
        </div>
      </div>
    </section>
  );
};
