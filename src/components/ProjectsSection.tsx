import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

interface Project {
  title: string;
  category: string;
  description: string;
  image: string;
}

const projects: Project[] = [
  {
    title: "Precision Valve Assembly",
    category: "Mechanical Design",
    description: "CNC-machined hydraulic valve assembly for industrial automation systems. Tolerances held to ±0.005mm.",
    image: project1,
  },
  {
    title: "Cable-Stayed Bridge Analysis",
    category: "Structural Engineering",
    description: "FEA and load analysis for a 120m span cable-stayed pedestrian bridge. Optimized for wind and seismic loads.",
    image: project2,
  },
  {
    title: "Motor Controller PCB",
    category: "Electronics",
    description: "Custom 4-layer PCB design for brushless DC motor control. Integrated current sensing and thermal management.",
    image: project3,
  },
];

const ProjectsSection = () => {
  return (
    <section className="py-24 px-6">
      <div className="container max-w-5xl">
        <p className="font-body text-sm tracking-[0.3em] uppercase text-muted-foreground mb-2">
          Selected Work
        </p>
        <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-16">
          Projects
        </h2>
        <div className="space-y-20">
          {projects.map((project, index) => (
            <article key={index} className="group grid md:grid-cols-2 gap-8 items-center">
              <div className={`overflow-hidden rounded-sm ${index % 2 === 1 ? "md:order-2" : ""}`}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 md:h-80 object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className={index % 2 === 1 ? "md:order-1" : ""}>
                <span className="font-body text-xs tracking-[0.2em] uppercase text-accent">
                  {project.category}
                </span>
                <h3 className="font-heading text-2xl font-semibold text-foreground mt-2 mb-4">
                  {project.title}
                </h3>
                <p className="font-body text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
