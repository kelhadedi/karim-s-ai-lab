import ScrollReveal from "./ScrollReveal";
import { Search, Layers, Grid3x3, Brain } from "lucide-react";

const services = [
  {
    icon: Search,
    title: "User Research",
    description: "Entretiens utilisateurs, tests d'usabilité, personas et parcours utilisateurs pour des décisions de design éclairées.",
  },
  {
    icon: Layers,
    title: "Prototypage Hi-Fi",
    description: "Prototypes interactifs haute fidélité sur Figma avec micro-interactions et animations fluides.",
  },
  {
    icon: Grid3x3,
    title: "Design Systems",
    description: "Création de systèmes de design modulaires et scalables pour assurer la cohérence de l'expérience.",
  },
  {
    icon: Brain,
    title: "Intégration IA",
    description: "Intégration d'outils d'IA générative dans le workflow de design pour accélérer et enrichir la création.",
  },
];

const ExpertiseSection = () => {
  return (
    <section id="expertise" className="py-32 section-padding">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <p className="text-sm text-muted-foreground tracking-[0.3em] uppercase mb-4">Services</p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-16">
            Expertise
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <ScrollReveal key={service.title} delay={i * 0.1}>
              <div className="glass-card-hover rounded-2xl p-8 h-full flex flex-col text-center">
                <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center mx-auto mb-6">
                  <service.icon className="w-6 h-6 text-foreground" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-3">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
