import ScrollReveal from "./ScrollReveal";
import MagneticButton from "./MagneticButton";

const FooterSection = () => {
  return (
    <footer id="footer" className="py-32 section-padding">
      <div className="max-w-4xl mx-auto text-center">
        <ScrollReveal>
          <p className="text-sm text-muted-foreground tracking-[0.3em] uppercase mb-6">Contact</p>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6">
            Travaillons
            <br />
            <span className="gradient-text">ensemble</span>
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto mb-12">
            Disponible pour des missions freelance, stages ou collaborations créatives.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <MagneticButton variant="primary" href="mailto:karim@example.com">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Email
            </MagneticButton>
            <MagneticButton variant="secondary" href="tel:+33600000000">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Téléphone
            </MagneticButton>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="flex items-center justify-center gap-8 mb-12">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors duration-300 text-sm">
              LinkedIn ↗
            </a>
            <a href="https://behance.net" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors duration-300 text-sm">
              Behance ↗
            </a>
          </div>
        </ScrollReveal>

        <div className="border-t border-border pt-8">
          <p className="text-xs text-muted-foreground">
            © 2026 Karim — Conçu avec passion
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
