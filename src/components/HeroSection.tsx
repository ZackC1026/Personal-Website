import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-end pb-16">
      <div className="absolute inset-0 z-0">
        <img src={heroBg} alt="Engineering workspace" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-foreground/40" />
      </div>
      <div className="relative z-10 container max-w-5xl px-6">
        <p className="font-body text-sm tracking-[0.3em] uppercase text-primary-foreground/70 mb-4">
          Engineering Portfolio
        </p>
        <h1 className="font-heading text-5xl md:text-7xl font-bold text-primary-foreground leading-[1.1] mb-6">
          Building what<br />matters.
        </h1>
        <p className="font-body text-lg text-primary-foreground/80 max-w-md leading-relaxed">
          Mechanical engineer focused on precision design, structural analysis, and bringing complex systems to life.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
