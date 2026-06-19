const EDUCATION = [
  {
    id: 'btech',
    degree: 'Bachelor of Technology (B.Tech)',
    field: 'Computer Science and Engineering',
    place: 'Your College Name',
    period: '2023 — 2027',
    status: 'Ongoing',
  },
  {
    id: 'msc',
    degree: 'MSc International Management',
    field: 'United Kingdom',
    place: null,
    period: 'Expected Intake: 2027',
    status: 'planned',
  },
]

function Education() {
  return (
    <section id="education" className="section education">
      <div className="section-inner">
        <div className="section-head">
          <span className="eyebrow">Education</span>
          <h2 className="section-title">Education</h2>
        </div>

        <div className="edu-list">
          {EDUCATION.map((edu) => (
            <div className="edu-card" key={edu.id}>
              <div className="edu-card-top">
                <h3 className="edu-degree">{edu.degree}</h3>
                <span className={`edu-badge edu-badge--${edu.status}`}>
                  {edu.status === 'planned' ? 'Planned' : 'Ongoing'}
                </span>
              </div>
              <p className="edu-field">{edu.field}</p>
              {edu.place && <p className="edu-place">{edu.place}</p>}
              <p className="edu-period">{edu.period}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
