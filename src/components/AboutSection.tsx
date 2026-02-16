const AboutSection = () => {
  return (
    <section className="py-24 px-6 bg-secondary">
      <div className="container max-w-5xl">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <p className="font-body text-sm tracking-[0.3em] uppercase text-muted-foreground mb-2">
              About
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-6">
              Engineer by trade,<br />builder by nature.
            </h2>
          </div>
          <div className="space-y-4">
            <p className="font-body text-muted-foreground leading-relaxed">
              With over 5 years of experience in mechanical and structural engineering, I specialize in turning complex problems into elegant, manufacturable solutions.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed">
              My work spans precision manufacturing, structural analysis, and embedded systems — always with an emphasis on clarity, efficiency, and craft.
            </p>
            <div className="pt-6 flex gap-8">
              <div>
                <p className="font-heading text-3xl font-bold text-foreground">12+</p>
                <p className="font-body text-sm text-muted-foreground">Projects completed</p>
              </div>
              <div>
                <p className="font-heading text-3xl font-bold text-foreground">5</p>
                <p className="font-body text-sm text-muted-foreground">Years experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
