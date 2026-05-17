import { ExternalLink, GitBranch } from 'lucide-react';
import './Project.css';

type ProjectProp = {
    title: string;
    description: string;
    stack: string;
    repoLink: string;
    url?: string;
    image?: string;
};

export default function Project({ title, description, stack, repoLink, url, image }: ProjectProp) {
    const imageUrl = image || "/cloudflash.png";
    
    // Parse technology stack: remove "Stack " prefix if it exists and split by comma
    const techList = stack
        .replace(/^stack\s+/i, '')
        .split(',')
        .map(tech => tech.trim())
        .filter(Boolean);

    return (
        <article className="project">
            <div className="project-image-wrapper">
                <img
                    src={imageUrl}
                    alt={`${title} Preview`}
                    className="project-image"
                />
                <div className="project-image-overlay"></div>
            </div>

            <div className="project-header">
                <h2 className="project-name">{title}</h2>

                <div className="project-actions">
                    {url && (
                        <a 
                            href={url} 
                            target="_blank" 
                            rel="noreferrer" 
                            aria-label="Live Demo"
                            className="project-action-btn"
                        >
                            <ExternalLink size={16} />
                        </a>
                    )}

                    <a 
                        href={repoLink} 
                        target="_blank" 
                        rel="noreferrer" 
                        aria-label="GitHub Repository"
                        className="project-action-btn"
                    >
                        <GitBranch size={16} />
                    </a>
                </div>
            </div>

            <div className="project-content">
                <p className="project-summary">{description}</p>
                <div className="project-tech">
                    {techList.map((tech, index) => (
                        <span key={index} className="tech-badge">
                            <span className="tech-badge-dot"></span>
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </article>
    );
}

