import ScrollReveal from "./ScrollReveal";

const timelineItems = [
  {
    year: "2026",
    title: "Diplôme BUT MMI",
    description: "Spécialisation en design d'interface et expérience utilisateur. Projets de fin d'études centrés sur l'IA.",
  },
  {
    year: "2025",
    title: "Stage UX/UI Designer",
    description: "Conception d'interfaces pour applications mobiles et web. Participation à la refonte d'un design system.",
  },
  {
    year: "2024",
    title: "Projets Freelance",
    description: "Création d'identités visuelles et interfaces pour startups. Exploration du design génératif.",
  },
  {
    year: "→",
    title: "Ambitions Futures",
    description: "Intégrer une agence de design innovante. Approfondir l'intersection design × intelligence artificielle.",
  },
];

const TimelineSection = () => {
  return (
    <section id="parcours" className="py-32 section-padding">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <p className="text-sm text-muted-foreground tracking-[0.3em] uppercase mb-4">Parcours</p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-20">
            Mon chemin
          </h2>
        </ScrollReveal>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-12">
            {timelineItems.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.12}>
                <div className="flex gap-8 md:gap-12 items-start pl-4 md:pl-8">
                  {/* Dot */}
                  <div className="relative flex-shrink-0">
                    <div className="w-3 h-3 rounded-full bg-foreground -ml-1.5 mt-2" />
                    {i === timelineItems.length - 1 && (
                      <div className="absolute w-5 h-5 rounded-full -ml-2.5 -mt-1 border-2 border-accent animate-pulse" style={{ top: 0 }} />
                    )}
                  </div>

                  <div className="flex-1">
                    <span className="text-xs font-medium text-muted-foreground tracking-widest">{item.year}</span>
                    <h3 className="font-display text-xl md:text-2xl font-semibold text-foreground mt-1 mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed max-w-md">{item.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
