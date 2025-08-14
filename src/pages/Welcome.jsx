import { FaLinkedin } from 'react-icons/fa'
import { FaEnvelope } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import Logo from '/src/logo.png'

function Welcome() {
  return (
    <div className="welcome-container">
      <div className="logo-top">
        <img src={Logo} alt="logo" height={50} width={50} />
      </div>

      <div className="welcome-main">
        <div className="intro">
          <p className="hello">Hello, my name is</p>
          <h1 className="name">Colton Spurgin</h1>
          <p className="and">and I like to build things.</p>
        </div>

        <div className="bio-wrap">
          <p className="bio">
            Aspiring software developer with experience in cybersecurity, infrastructure as code, and application
            development. Currently working as a Software Developer Intern while completing my degree (graduating 2026).
            Skilled in C++, C#, TypeScript, Docker, Prisma, Ansible, and more.
          </p>
        </div>

        <div className="actions">
          <a href="/projects">
            <button className="btn btn-primary">Take a look at my work!</button>
          </a>
        </div>
      </div>

      <footer className="social-bar">
        <div className="social-list">
          <div className="social-item">
            <a href="https://github.com/Kh1ng">
              <FaGithub size={42} />
            </a>
          </div>
          <div className="social-item">
            <a href="https://www.linkedin.com/in/coltonspurgin">
              <FaLinkedin size={42} />
            </a>
          </div>
          <div className="social-item">
            <a href="mailto:colton.spurgin1@gmail.com">
              <FaEnvelope size={42} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Welcome
