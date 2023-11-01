import { projectData } from "./utils/projectData";
import ProjectCard from "./components/ProjectCard";

export default function page() {
  return (
    <section className="flex flex-col">
      <h2 className="self-center lg:self-auto page-title gradient-title-projects md:mb-10">
        Some Projects I've built
      </h2>
      <div className="grid grid-cols-1 gap-24">
        {projectData.map((project) => (
          <ProjectCard project={project} key={project.link} />
        ))}
      </div>
    </section>
  );
}
