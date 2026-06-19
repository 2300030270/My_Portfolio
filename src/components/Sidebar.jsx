import { useTheme } from '../ThemeContext.jsx'

function Sidebar({ sections, activeId }) {
  const { theme, toggleTheme } = useTheme()

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <aside className="sidebar">
      <div className="sidebar-top">
        <div className="sidebar-avatar" aria-hidden="true">JV</div>
        <h1 className="sidebar-name">Jannu Vishnu Vamsi</h1>
        <p className="sidebar-role">
          Computer Science Graduate<br />
          Full Stack Developer<br />
          MSc International Management Aspirant
        </p>
      </div>

      <nav className="sidebar-nav" aria-label="Section navigation">
        <ul>
          {sections.map((section) => (
            <li key={section.id}>
              <button
                className={`sidebar-nav-item ${activeId === section.id ? 'is-active' : ''}`}
                onClick={() => scrollTo(section.id)}
                aria-current={activeId === section.id ? 'true' : undefined}
              >
                <span className="sidebar-nav-dot" aria-hidden="true" />
                {section.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <div className="sidebar-bottom">
        <a
          href="/Jannu_Vishnu_Vamsi_Resume.pdf"
          download
          className="sidebar-resume-btn"
        >
          Download résumé
        </a>

        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
          aria-pressed={theme === 'light'}
        >
          <span className="theme-toggle-track">
            <span className={`theme-toggle-thumb ${theme === 'light' ? 'is-light' : ''}`}>
              {theme === 'dark' ? '🌙' : '☀️'}
            </span>
          </span>
          <span className="theme-toggle-label">
            {theme === 'dark' ? 'Dark mode' : 'Light mode'}
          </span>
        </button>
      </div>
    </aside>
  )
}

export default Sidebar
