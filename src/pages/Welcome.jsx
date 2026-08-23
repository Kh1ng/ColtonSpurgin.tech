import {
  FiActivity,
  FiBookOpen,
  FiCode,
  FiExternalLink,
  FiGithub,
  FiLinkedin,
  FiMail,
} from 'react-icons/fi'
import { useEffect, useState } from 'react'

const experience = [
  {
    title: 'Lead software developer intern',
    description: 'I lead development of C# and Blazor middleware that connects Moodle to Azure infrastructure. I also contributed to DevSecOps automation that applies STIG controls across Ubuntu and Red Hat Enterprise Linux.',
    Icon: FiCode,
  },
  {
    title: 'Air Force veteran',
    description: 'I served nine years as a medic in emergency departments, ambulance services, and intensive care, then as the noncommissioned officer in charge of a clinic. I learned to work in high-stress teams and eventually lead them.',
    Icon: FiActivity,
  },
  {
    title: 'UWF student and research assistant',
    description: 'I graduate in December 2026 with a B.S. in Computer Science and a specialization in artificial intelligence. My research applies AI to microscopy and spatial transcriptomics.',
    Icon: FiBookOpen,
  },
]

const projects = [
  {
    title: 'Git Agent Harness',
    description: 'A Rust CLI and control plane for running coding agents against real repositories. It manages isolated worktrees, validation, provider workflows, session logs, and cleanup.',
    tech: 'Rust · TypeScript · React · SQLite',
    links: [{ label: 'Source', href: 'https://github.com/Kh1ng/git-agent-harness' }],
  },
  {
    title: 'trainerd',
    description: 'A Python HTTP daemon for trusted, queued jobs. It owns repository checkouts, worktrees, logs, artifacts, and CPU/GPU capacity while keeping commands and paths server-controlled.',
    tech: 'Python · FastAPI · SQLite',
    links: [{ label: 'Source', href: 'https://github.com/Kh1ng/trainerd' }],
  },
  {
    title: 'Traveling Salesman benchmarks',
    description: 'A C++ testbed for comparing brute force and genetic algorithms as the number of cities grows.',
    tech: 'C++ · Genetic algorithms',
    links: [
      { label: 'Report', href: '#/travelingsalesman', internal: true },
      { label: 'Source', href: 'https://github.com/Kh1ng/TSP' },
    ],
  },
  {
    title: 'Home lab',
    description: 'Ansible roles and playbooks for repeatable service deployment across Proxmox, Docker, and Linux.',
    tech: 'Ansible · Proxmox · Docker',
    links: [],
  },
]

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/Kh1ng', Icon: FiGithub },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/coltonspurgin', Icon: FiLinkedin },
  { label: 'Email', href: 'mailto:colton@coltonspurgin.tech', Icon: FiMail },
]

const sections = [
  { id: 'interests', label: 'Interests' },
  { id: 'experience', label: 'Experience' },
  { id: 'work', label: 'Work' },
  { id: 'contact', label: 'Contact' },
]

function Welcome() {
  const [activeSection, setActiveSection] = useState('interests')

  useEffect(() => {
    const updateActiveSection = () => {
      const current = [...sections]
        .reverse()
        .find(({ id }) => document.getElementById(id).getBoundingClientRect().top <= Math.min(window.innerHeight * 0.25, 200))

      setActiveSection(current?.id || 'interests')
    }

    updateActiveSection()
    window.addEventListener('scroll', updateActiveSection, { passive: true })
    return () => window.removeEventListener('scroll', updateActiveSection)
  }, [])

  return (
    <>
      <a className="skip-link" href="#interests">Skip to content</a>
      <main className="portfolio-shell">
        <aside className="profile" aria-labelledby="profile-name">
          <div>
            <h1 id="profile-name">Colton Spurgin</h1>
            <p className="profile-roles">Software developer · Air Force veteran · Research assistant</p>
            <p className="profile-summary">
              I’m finishing a B.S. in Computer Science at UWF with an AI specialization. I graduate in December 2026.
            </p>
          </div>

          <nav className="section-nav" aria-label="Portfolio sections">
            {sections.map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                aria-current={activeSection === id ? 'location' : undefined}
              >
                {label}
              </a>
            ))}
          </nav>

          <ul className="social-links" aria-label="External links">
            {socialLinks.map(({ label, href, Icon }) => (
              <li key={label}>
                <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noreferrer' : undefined}>
                  <Icon aria-hidden="true" />
                  <span>{label}</span>
                </a>
              </li>
            ))}
          </ul>
        </aside>

        <div className="record">
          <section id="interests" className="record-section about-section">
            <h2>Interests</h2>
            <p>
              My version of full stack is front end, backend, and AI models. I like being able to work across all three and understand how the whole system fits together.
            </p>
            <p>
              After UWF, I want to pursue graduate work where artificial intelligence meets computational biology.
            </p>
          </section>

          <section id="experience" className="record-section">
            <h2>Experience</h2>
            <div className="experience-list">
              {experience.map(({ title, description, Icon }) => (
                <article className="experience-row" key={title}>
                  <Icon aria-hidden="true" />
                  <div>
                    <h3>{title}</h3>
                    <p>{description}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section id="work" className="record-section">
            <h2>Selected work</h2>
            <div className="work-list">
              {projects.map((project) => (
                <article className="work-row" key={project.title}>
                  <div className="work-copy">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <span>{project.tech}</span>
                  </div>
                  <div className="work-links" aria-label={`${project.title} links`}>
                    {project.links.length > 0 ? project.links.map((link) => (
                      <a key={link.label} href={link.href} target={link.internal ? undefined : '_blank'} rel={link.internal ? undefined : 'noreferrer'}>
                        {link.label}
                        <FiExternalLink aria-hidden="true" />
                      </a>
                    )) : <span>Private</span>}
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section id="contact" className="record-section contact-section">
            <h2>Contact</h2>
            <p>The simplest way to reach me is by email. My code is on GitHub, and my work history is on LinkedIn.</p>
            <a className="email-link" href="mailto:colton@coltonspurgin.tech">colton@coltonspurgin.tech</a>
          </section>

          <footer className="site-footer">
            <span>Colton Spurgin</span>
            <span>Updated 2026</span>
          </footer>
        </div>
      </main>
    </>
  )
}

export default Welcome
