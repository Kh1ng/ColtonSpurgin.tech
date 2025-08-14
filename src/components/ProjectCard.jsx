import React from 'react'
import logo from '../assets/logo.png'

export default function ProjectCard({
  title,
  description,
  repo,
  demo,
  screenshots = [],
  tech = [],
}) {
  const cover = screenshots && screenshots.length ? screenshots[0] : logo

  return (
    <article className="project-card">
      <a href={demo || repo || '#'} target="_blank" rel="noreferrer" className="project-cover">
        <img src={cover} alt={`${title} screenshot`} className="project-cover-img" />
      </a>

      <div className="project-body">
        <h3 className="project-title">{title}</h3>
        <p className="project-desc">{description}</p>

        <div className="tech-list">
          {tech.map((t) => (
            <span key={t} className="tech-pill">{t}</span>
          ))}
        </div>

        <div className="project-actions">
          {demo && (
            <a href={demo} target="_blank" rel="noreferrer" className="btn btn-live">Live</a>
          )}

          {repo && (
            <a href={repo} target="_blank" rel="noreferrer" className="btn btn-code">Code</a>
          )}
        </div>
      </div>
    </article>
  )
}
