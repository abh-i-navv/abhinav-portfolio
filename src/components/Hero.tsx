import { Mail } from 'lucide-react';
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

          <div className="hero-skills">
            {[
              { name: "Go", key: "go" },
              { name: "Next js", key: "next" },
              { name: "React", key: "react" },
              { name: "Node", key: "node" },
              { name: "MongoDB", key: "mongodb" },
              { name: "Typescript", key: "typescript" },
              { name: "SQL", key: "sql" }
            ].map((skill, index) => (
              <span key={index} className={`hero-skill-badge ${skill.key}`}>
                <span className="hero-skill-dot"></span>
                {skill.name}
              </span>
            ))}
          </div>

          <div className="hero-socials">
            <a
              href={`https://github.com/${githubUsername}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social-btn github"
            >
              <GithubIcon size={16} />
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
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social-btn linkedin"
            >
              <LinkedinIcon size={16} />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://leetcode.com/u/abh-i-navv/"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social-btn leetcode"
            >
              <LeetCodeIcon size={16} />
              <span>LeetCode</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

const GithubIcon = ({ size = 16, ...props }: React.SVGProps<SVGSVGElement> & { size?: number }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);

const LinkedinIcon = ({ size = 16, ...props }: React.SVGProps<SVGSVGElement> & { size?: number }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z" />
  </svg>
);

const LeetCodeIcon = ({ size = 16, ...props }: React.SVGProps<SVGSVGElement> & { size?: number }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.074-1.954l-5.618-5.618c-.283-.283-.695-.458-1.127-.458h-3.666l4.22-4.518a1.374 1.374 0 0 0-1.01-2.28zM24 13.916v-.012l-6.192 6.192c-1.37 1.37-3.084 1.37-4.454 0-.645-.645-1.026-1.328-1.156-2.016l-3.235-3.235c-.172-.172-.256-.402-.256-.632s.084-.46.256-.632l4.898-4.898c.172-.172.402-.256.632-.256s.46.084.632.256l1.246 1.246c.172.172.256.402.256.632s-.084.46-.256.632l-3.882 3.882 2.227 2.227 4.965-4.965c.172-.172.402-.256.632-.256s.46.084.632.256l1.246 1.246c.172.172.256.402.256.632s-.084.46-.256.632z" />
  </svg>
);
