import ScrollReveal from "./ScrollReveal";
import { Sparkles, Cpu, Zap } from "lucide-react";

const aiCards = [
  {
    icon: Sparkles,
    title: "Génération Visuelle",
    description: "Utilisation de Midjourney et DALL·E pour le prototypage rapide et la direction artistique.",
    tag: "Midjourney · DALL·E",
  },
  {
    icon: Cpu,
    title: "Design Prédictif",
    description: "Analyse de données utilisateur pour anticiper les besoins et optimiser les interfaces.",
    tag: "Analytics · UX Research",
  },
  {
    icon: Zap,
    title: "Workflow Augmenté",
    description: "Automatisation des tâches répétitives et intégration de l'IA dans le processus créatif.",
    tag: "Figma AI · ChatGPT",
  },
];

const AILabSection = () => {
  return (
    <section id="ai-lab" className="py-32 section-padding">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <p className="text-sm text-muted-foreground tracking-[0.3em] uppercase mb-4">Innovation</p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            Design augmenté
            <br />
            <span className="gradient-text">par l'IA</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mt-4 mb-16">
            Explorer les frontières du design en intégrant l'intelligence artificielle au cœur du processus créatif.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {aiCards.map((card, i) => (
            <ScrollReveal key={card.title} delay={i * 0.15}>
              <div className="glass-card-hover rounded-2xl p-8 h-full flex flex-col">
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-6">
                  <card.icon className="w-5 h-5 text-foreground" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">{card.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">{card.description}</p>
                <div className="mt-6 pt-4 border-t border-border">
                  <span className="text-xs text-muted-foreground tracking-wide">{card.tag}</span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AILabSection;
