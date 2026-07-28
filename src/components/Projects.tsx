import React, { useState } from 'react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types/portfolio';
import { ProjectModal } from './ProjectModal';
import { Briefcase, ExternalLink, ArrowRight, Layers, CheckCircle2 } from 'lucide-react';

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ['All', 'Visa & Edu', 'Streaming', 'E-Commerce'];

  const filteredProjects = selectedCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === selectedCategory);

  return (
    <section id="projects" style={{ padding: '5.5rem 0', background: 'var(--bg-primary)' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div className="section-tag">
            <Briefcase size={14} />
            <span>Featured Case Studies</span>
          </div>
          <h2 className="section-title">Live Production Platforms</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Real-world full stack applications engineered for clients using PHP Laravel, React, TypeScript, and custom RBAC architectures.
          </p>

          {/* Filter Categories */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.6rem', marginTop: '2rem', flexWrap: 'wrap' }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                style={{
                  padding: '0.5rem 1.25rem',
                  borderRadius: 'var(--radius-full)',
                  border: selectedCategory === cat ? '1px solid var(--accent-indigo)' : '1px solid var(--border-color)',
                  background: selectedCategory === cat ? 'var(--gradient-brand)' : 'rgba(255,255,255,0.04)',
                  color: '#fff',
                  fontSize: '0.88rem',
                  fontWeight: 500,
                  cursor: 'pointer',
                  transition: 'all 0.25s ease'
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))',
            gap: '2rem'
          }}
        >
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="gradient-border"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '2rem',
                background: 'rgba(13, 17, 29, 0.75)'
              }}
            >
              <div>
                {/* Header Badge */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                  <span
                    style={{
                      fontSize: '0.78rem',
                      fontWeight: 600,
                      padding: '0.25rem 0.75rem',
                      borderRadius: 'var(--radius-full)',
                      background: 'rgba(99, 102, 241, 0.12)',
                      color: '#a5b4fc',
                      border: '1px solid rgba(99, 102, 241, 0.25)'
                    }}
                  >
                    {project.category}
                  </span>

                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.3rem',
                      color: 'var(--accent-cyan)',
                      textDecoration: 'none',
                      fontSize: '0.85rem',
                      fontWeight: 600
                    }}
                  >
                    <span>{project.domain}</span>
                    <ExternalLink size={14} />
                  </a>
                </div>

                {/* Title */}
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', fontWeight: 700, color: '#fff', marginBottom: '0.35rem' }}>
                  {project.title}
                </h3>
                <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1rem', fontWeight: 500 }}>
                  {project.subtitle}
                </div>

                {/* Description */}
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.65, marginBottom: '1.25rem' }}>
                  {project.description}
                </p>

                {/* Key Highlights */}
                <div style={{ marginBottom: '1.5rem' }}>
                  {project.highlights.slice(0, 2).map((h, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.86rem', color: 'var(--text-secondary)', marginBottom: '0.4rem' }}>
                      <CheckCircle2 size={15} style={{ color: 'var(--accent-emerald)', flexShrink: 0, marginTop: '3px' }} />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                {/* Tech Stack Tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.5rem' }}>
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      style={{
                        padding: '0.2rem 0.6rem',
                        borderRadius: 'var(--radius-sm)',
                        background: 'rgba(255,255,255,0.05)',
                        color: 'var(--text-muted)',
                        fontSize: '0.78rem',
                        border: '1px solid var(--border-color)'
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Details Button */}
                <button
                  onClick={() => setSelectedProject(project)}
                  style={{
                    width: '100%',
                    padding: '0.7rem',
                    borderRadius: 'var(--radius-sm)',
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid var(--border-color)',
                    color: '#fff',
                    fontWeight: 600,
                    fontSize: '0.88rem',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(99, 102, 241, 0.15)';
                    e.currentTarget.style.borderColor = 'var(--accent-indigo)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
                    e.currentTarget.style.borderColor = 'var(--border-color)';
                  }}
                >
                  <Layers size={16} />
                  <span>View Case Study & Specs</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Popup */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
};
