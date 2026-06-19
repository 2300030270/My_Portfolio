function Hero() {
  return (
    <section id="home" className="section hero">
      <p className="eyebrow">Welcome</p>
      <h2 className="hero-headline">
        Building full-stack products,<br />
        preparing for what's next in<br />
        <span className="hero-accent">international management.</span>
      </h2>
      <p className="hero-sub">
        I'm a Computer Science graduate working across React and Spring Boot,
        with a growing interest in cloud and DevOps tooling. Currently
        preparing for an MSc in International Management in the UK.
      </p>
      <div className="hero-actions">
        <button
          className="btn btn-primary"
          onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
        >
          View projects
        </button>
        <button
          className="btn btn-ghost"
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Get in touch
        </button>
      </div>
    </section>
  )
}

export default Hero
