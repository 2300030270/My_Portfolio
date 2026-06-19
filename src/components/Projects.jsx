const PROJECTS = [
  {
    id: 'blood-bank',
    name: 'Blood Banking System',
    stack: ['React', 'Spring Boot', 'MySQL', 'Docker', 'Jenkins'],
    description:
      'Developed a blood bank management system for donor registration, blood inventory tracking, and blood request management with CI/CD integration.',
    link: 'https://life4change.onrender.com',
    linkLabel: 'life4change.onrender.com',
  },
  {
    id: 'discharge-summary',
    name: 'Online Patient Discharge Summary Generator',
    stack: ['React', 'Spring Boot', 'MySQL', 'Ollama AI'],
    description:
      'Built an AI-powered healthcare application that generates patient discharge summaries using Large Language Models through Ollama integration.',
    link: null,
  },
  {
    id: 'attendance-dashboard',
    name: 'Attendance Analytics Dashboard',
    stack: ['Microsoft Excel', 'Pivot Tables', 'Slicers', 'Charts'],
    description:
      'Developed an attendance analytics dashboard using Excel formulas, conditional formatting, percentage calculations, pivot tables, slicers, and interactive charts.',
    link: null,
  },
]

function Projects() {
  return (
    <section id="projects" className="section projects">
      <div className="section-inner">
        <div className="section-head">
          <span className="eyebrow">Work</span>
          <h2 className="section-title">Projects</h2>
        </div>

        <div className="project-grid">
          {PROJECTS.map((project) => (
            <article className="project-card" key={project.id}>
              <h3 className="project-name">{project.name}</h3>
              <div className="project-stack">
                {project.stack.map((tech, i) => (
                  <span key={tech}>
                    <span className="project-tech">{tech}</span>
                    {i < project.stack.length - 1 && <span className="project-dot">•</span>}
                  </span>
                ))}
              </div>
              <p className="project-desc">{project.description}</p>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  {project.linkLabel} ↗
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
