import "../css/Projects.css"

const projects = [
  {
    title: "Weather App",
    description: "Built using JavaScript and API.",
  },
  {
    title: "Quiz App",
    description: "Interactive JavaScript Quiz.",
  },
  {
    title: "Portfolio",
    description: "Built using React.",
  },
];

function Projects() {
  return (
    <section className="projects" id="projects">
      <h2>Projects</h2>

      <div className="project-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;