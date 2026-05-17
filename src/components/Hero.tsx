import { GitBranch, Mail, Briefcase } from 'lucide-react';
import './Hero.css';

interface HeroProps {
  name: string;
  githubUsername: string;
}

export function Hero({ name, githubUsername }: HeroProps) {
  return (
    <section className="hero-card-container">
      {/* Ambient Radial Glow behind the card */}
      <div className="hero-card-glow"></div>

      <div className="hero-card">
        {/* Left Column: Avatar Mockup */}
        <div className="hero-avatar-wrapper">
          <div className="hero-avatar-ring"></div>
          <img
            src="/pfp.jpg"
            alt={`${name} Profile`}
            className="hero-avatar"
          />
        </div>

        {/* Right Column: Profile Info & Actions */}
        <div className="hero-info">
          <div className="hero-header-row">
            <h1 className="hero-name">
              <span>{name}</span>
            </h1>
            <div className="hero-status-badge">
              <span className="hero-status-dot"></span>
              <span className="hero-status-text">Available for Hire</span>
            </div>
          </div>

          <h2 className="hero-role">Engineer</h2>

          <p className="hero-bio">
            Crafting modern, highly polished web experiences.
            Passionate about clean code, intuitive design, building robust desktop and web systems, electronics, low-level stuff and embedded systems.
          </p>

          <div className="hero-socials">
            <a
              href={`https://github.com/${githubUsername}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social-btn github"
            >
              <GitBranch size={16} />
              <span>GitHub</span>
            </a>
            <a
              href="mailto:abhinav72002@gmail.com"
              className="hero-social-btn email"
            >
              <Mail size={16} />
              <span>Email</span>
            </a>
            <a
              href="https://www.linkedin.com/in/abhi-nav-sharma/"
              className="hero-social-btn linkedin"
            >
              <Briefcase size={16} />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
