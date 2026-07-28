import React from 'react';
import { Project } from '../types/portfolio';
import { X, ExternalLink, Layers, CheckCircle } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="gradient-border"
        onClick={(e) => e.stopPropagation()}
        style={{
          width: '100%',
          maxWidth: '720px',
          maxHeight: '90vh',
          overflowY: 'auto',
          padding: '2rem',
          background: '#0d111d',
          position: 'relative'
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1.25rem',
            right: '1.25rem',
            background: 'rgba(255,255,255,0.06)',
            border: '1px solid var(--border-color)',
            color: '#fff',
            borderRadius: '50%',
            width: '36px',
            height: '36px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer'
          }}
        >
          <X size={20} />
        </button>

        {/* Modal Category Tag */}
        <div style={{ display: 'inline-block', padding: '0.25rem 0.75rem', borderRadius: 'var(--radius-full)', background: 'rgba(99,102,241,0.15)', color: '#818cf8', fontSize: '0.8rem', fontWeight: 600, marginBottom: '0.75rem' }}>
          {project.category} Case Study
        </div>

        {/* Modal Title */}
        <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', fontWeight: 800, marginBottom: '0.25rem', color: '#fff' }}>
          {project.title}
        </h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', marginBottom: '1.5rem' }}>
          {project.subtitle}
        </p>

        {/* Role & Live Domain Links */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', padding: '1rem', borderRadius: 'var(--radius-sm)', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border-color)', marginBottom: '1.5rem' }}>
          <div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Role</div>
            <div style={{ fontWeight: 600, color: '#fff', fontSize: '0.92rem' }}>{project.role}</div>
          </div>
          <div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Live Platform Domain</div>
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-cyan)', textDecoration: 'none', fontWeight: 600, fontSize: '0.92rem', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
              <span>{project.domain}</span>
              <ExternalLink size={14} />
            </a>
          </div>
        </div>

        {/* Overview */}
        <div style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.5rem', color: '#fff' }}>Project Overview</h3>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, fontSize: '0.95rem' }}>
            {project.description}
          </p>
        </div>

        {/* Key Highlights & Implementations */}
        <div style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.75rem', color: '#fff' }}>Key Engineering Highlights</h3>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', listStyle: 'none' }}>
            {project.highlights.map((h, i) => (
              <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', color: 'var(--text-secondary)', fontSize: '0.92rem' }}>
                <CheckCircle size={18} style={{ color: 'var(--accent-emerald)', flexShrink: 0, marginTop: '2px' }} />
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Technical Architecture Notes */}
        {project.architectureNotes && (
          <div style={{ marginBottom: '1.5rem', padding: '1rem', borderRadius: 'var(--radius-sm)', background: 'rgba(168,85,247,0.08)', border: '1px solid rgba(168,85,247,0.2)' }}>
            <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#c084fc', fontSize: '0.92rem', fontWeight: 700, marginBottom: '0.35rem' }}>
              <Layers size={16} />
              <span>Architectural Insight</span>
            </h4>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', margin: 0 }}>
              {project.architectureNotes}
            </p>
          </div>
        )}

        {/* Technologies Used Pills */}
        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.75rem', color: '#fff' }}>Tech Stack & Libraries</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {project.technologies.map((tech, i) => (
              <span key={i} style={{ padding: '0.35rem 0.85rem', borderRadius: 'var(--radius-full)', background: 'rgba(255,255,255,0.06)', border: '1px solid var(--border-color)', color: '#e2e8f0', fontSize: '0.82rem', fontWeight: 500 }}>
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Button */}
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem' }}>
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
            <span>Visit Live Platform ({project.domain})</span>
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </div>
  );
};
