import ScrollReveal from "./ScrollReveal";
import orangeLogo from "@/assets/orange-business-logo.svg";

const timelineItems = [
  {
    year: "2023 – 2026",
    title: "B.U.T Métiers du Multimédia et de l'Internet",
    description: "IUT De Lannion (Université De Rennes) puis IUT Di Corsica. Spécialité : stratégie de communication et design UI/UX.",
  },
  {
    year: "Mars – Juin 2026",
    title: "Stage UX/UI Designer – Orange Business Services",
    description: "Intégration de l'IA dans les processus de design du studio. Expérimentation sur des cas réels et déploiement des pratiques IA-design.",
    logo: orangeLogo,
  },
  {
    year: "Janv. – Mars 2026",
    title: "Projet UX Research – JoMo",
    description: "Tests utilisateurs sur l'app JoMo : protocole de tests, outils d'évaluation (SUS, AttrakDiff, PANAs), analyse et recommandations UX.",
  },
  {
    year: "→",
    title: "Alternance UX/UI Designer",
    description: "En recherche d'une alternance pour approfondir mes compétences en design d'interface et expérience utilisateur.",
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
                    <div className="flex items-center gap-4">
                      <div>
                        <span className="text-xs font-medium text-muted-foreground tracking-widest">{item.year}</span>
                        <h3 className="font-display text-xl md:text-2xl font-semibold text-foreground mt-1 mb-2">{item.title}</h3>
                      </div>
                      {item.logo && (
                        <img src={item.logo} alt="Logo" className="h-10 md:h-14 w-auto flex-shrink-0 dark:brightness-0 dark:invert" />
                      )}
                    </div>
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
