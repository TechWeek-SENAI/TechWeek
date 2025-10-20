export const Sponsors = () => {
  const sponsors = [
    { name: "TechCorp", tier: "Platinum" },
    { name: "CloudNative", tier: "Gold" },
    { name: "DevTools Inc", tier: "Gold" },
    { name: "StartupXYZ", tier: "Silver" },
    { name: "CodeBase", tier: "Silver" },
    { name: "InnovateLab", tier: "Silver" },
  ];

  return (
    <section className="py-24 px-6 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold">Our Sponsors</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Thank you to our amazing sponsors who make Tech Week possible.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {sponsors.map((sponsor, index) => (
            <div
              key={sponsor.name}
              className="group p-8 rounded-2xl border border-border bg-card hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--primary)/0.2)] animate-fade-in flex flex-col items-center justify-center gap-4"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-full aspect-video flex items-center justify-center text-3xl font-bold text-muted-foreground group-hover:text-primary transition-colors">
                {sponsor.name}
              </div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider">
                {sponsor.tier} Sponsor
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
          >
            Become a sponsor →
          </a>
        </div>
      </div>
    </section>
  );
};
