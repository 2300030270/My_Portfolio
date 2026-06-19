const SKILL_GROUPS = [
  { key: 'frontend', label: 'Frontend', items: ['React', 'JavaScript', 'HTML', 'CSS'] },
  { key: 'backend', label: 'Backend', items: ['Java', 'Spring Boot', 'Microservices'] },
  { key: 'database', label: 'Database', items: ['SQL', 'MySQL'] },
  { key: 'devops', label: 'DevOps', items: ['Docker', 'Docker Hub', 'Jenkins'] },
  { key: 'tools', label: 'Tools', items: ['Git', 'GitHub', 'Postman'] },
  { key: 'productivity', label: 'Productivity', items: ['Excel'] },
]

function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="section-inner">
        <div className="section-head">
          <span className="eyebrow">Skills</span>
          <h2 className="section-title">Technical Skills</h2>
        </div>

        <div className="skills-grid">
          {SKILL_GROUPS.map((group) => (
            <div className="skill-card" key={group.key}>
              <p className="skill-card-label">{group.label}</p>
              <div className="skill-tags">
                {group.items.map((item) => (
                  <span className="skill-tag" key={item}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
