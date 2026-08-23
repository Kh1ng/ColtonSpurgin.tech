import {
  FiBookOpen,
  FiCode,
  FiExternalLink,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiShield,
} from 'react-icons/fi'
import { useEffect, useState } from 'react'
import bork from '../assets/portfolio/bork.webp'
import homeLab from '../assets/portfolio/home-lab.webp'
import tsp from '../assets/portfolio/tsp.webp'
import vellm from '../assets/portfolio/vellm.webp'

const experience = [
  {
    title: 'Lead software developer intern',
    description: 'I lead development on a substantial internship project, including architecture, implementation, and coordination.',
    Icon: FiCode,
  },
  {
    title: 'Air Force NCO',
    description: 'I serve as a noncommissioned officer in the U.S. Air Force.',
    Icon: FiShield,
  },
  {
    title: 'Research assistant',
    description: 'I support university research that applies AI near computational biology. Details stay limited while the work is underway.',
    Icon: FiBookOpen,
  },
]

const projects = [
  {
    title: 'Bork',
    description: 'A dog-themed social app built with TypeScript and Next.js. I migrated its database and authentication as free tiers changed.',
    tech: 'TypeScript · Next.js · Prisma',
    image: bork,
    alt: 'Bork dog mark',
    links: [
      { label: 'Live', href: 'https://bork.coltonspurgin.tech' },
      { label: 'Source', href: 'https://github.com/Kh1ng/bork' },
    ],
  },
  {
    title: 'VeLLM',
    description: 'A work-in-progress desktop client for running self-hosted Ollama models.',
    tech: 'Tauri · React · Rust',
    image: vellm,
    alt: 'VeLLM client interface',
    links: [{ label: 'Source', href: 'https://github.com/Kh1ng/llm-chat' }],
  },
  {
    title: 'Traveling Salesman benchmarks',
    description: 'A C++ framework comparing exact and heuristic approaches for performance, scale, and solution quality.',
    tech: 'C++ · Genetic algorithms',
    image: tsp,
    alt: 'Traveling Salesman benchmark chart',
    links: [
      { label: 'Report', href: '#/travelingsalesman', internal: true },
      { label: 'Source', href: 'https://github.com/Kh1ng/TSP' },
    ],
  },
  {
    title: 'Home lab',
    description: 'Ansible automation for services running across Proxmox, Docker, and Linux.',
    tech: 'Ansible · Proxmox · Docker',
    image: homeLab,
    alt: 'Home lab network diagram',
    links: [],
  },
]

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/Kh1ng', Icon: FiGithub },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/coltonspurgin', Icon: FiLinkedin },
  { label: 'Email', href: 'mailto:colton@coltonspurgin.tech', Icon: FiMail },
]

const sections = ['about', 'experience', 'work', 'contact']

function Welcome() {
  const [activeSection, setActiveSection] = useState('about')

  useEffect(() => {
    const updateActiveSection = () => {
      const current = [...sections]
        .reverse()
        .find((id) => document.getElementById(id).getBoundingClientRect().top <= window.innerHeight * 0.25)

      setActiveSection(current || 'about')
    }

    updateActiveSection()
    window.addEventListener('scroll', updateActiveSection, { passive: true })
    return () => window.removeEventListener('scroll', updateActiveSection)
  }, [])

  return (
    <>
      <a className="skip-link" href="#about">Skip to content</a>
      <main className="portfolio-shell">
        <aside className="profile" aria-labelledby="profile-name">
          <div>
            <h1 id="profile-name">Colton Spurgin</h1>
            <p className="profile-roles">Software developer · Air Force NCO · Research assistant</p>
            <p className="profile-summary">
              I’m a senior at UWF studying artificial intelligence. I graduate in December 2026 and plan to pursue a master’s degree.
            </p>
          </div>

          <nav className="section-nav" aria-label="Portfolio sections">
            {sections.map((section) => (
              <a
                key={section}
                href={`#${section}`}
                aria-current={activeSection === section ? 'location' : undefined}
              >
                {section[0].toUpperCase() + section.slice(1)}
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
          <section id="about" className="record-section about-section">
            <h2>About</h2>
            <p>
              My background crosses software, systems, military leadership, and academic research. At UWF, I specialize in AI and assist with research near computational biology. I graduate in December 2026. After that, I want to keep building useful software and pursue a master’s degree.
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
              <article className="experience-row">
                <FiBookOpen aria-hidden="true" />
                <div>
                  <h3>University of West Florida</h3>
                  <p>Senior specializing in artificial intelligence. Expected graduation: December 2026.</p>
                </div>
              </article>
            </div>
          </section>

          <section id="work" className="record-section">
            <h2>Selected work</h2>
            <div className="work-list">
              {projects.map((project) => (
                <article className="work-row" key={project.title}>
                  <img src={project.image} alt={project.alt} width="480" height="270" loading="lazy" />
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
