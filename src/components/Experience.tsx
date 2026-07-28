import React from 'react';
import { EXPERIENCES, EDUCATIONS, CERTIFICATIONS } from '../data/portfolioData';
import { Award, Building2, GraduationCap, CheckCircle2 } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section id="experience" style={{ padding: '5.5rem 0', background: 'var(--bg-secondary)' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="section-tag">
            <Building2 size={14} />
            <span>Career Journey</span>
          </div>
          <h2 className="section-title">Work Experience & Education</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Proven record delivering software applications for software agencies, academic background, and professional training.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '3rem' }} className="exp-grid">
          {/* Left Column: Work Experience */}
          <div>
            <h3 style={{ fontSize: '1.4rem', fontFamily: 'var(--font-heading)', fontWeight: 700, color: '#fff', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <Building2 size={22} style={{ color: 'var(--accent-indigo)' }} />
              <span>Professional Experience</span>
            </h3>

            {EXPERIENCES.map((exp) => (
              <div
                key={exp.id}
                className="gradient-border"
                style={{
                  padding: '2rem',
                  marginBottom: '1.5rem',
                  background: 'rgba(16, 23, 42, 0.7)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                  <span style={{ fontSize: '0.82rem', fontWeight: 600, padding: '0.25rem 0.75rem', borderRadius: 'var(--radius-full)', background: 'rgba(16, 185, 129, 0.12)', color: '#34d399', border: '1px solid rgba(16, 185, 129, 0.25)' }}>
                    {exp.period}
                  </span>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{exp.location}</span>
                </div>

                <h4 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#fff', marginBottom: '0.25rem' }}>
                  {exp.role}
                </h4>
                <div style={{ color: 'var(--accent-indigo)', fontWeight: 600, fontSize: '1rem', marginBottom: '1.25rem' }}>
                  {exp.company}
                </div>

                <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', listStyle: 'none', marginBottom: '1.5rem' }}>
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.92rem', color: 'var(--text-secondary)' }}>
                      <CheckCircle2 size={16} style={{ color: 'var(--accent-indigo)', flexShrink: 0, marginTop: '3px' }} />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                  {exp.techUsed.map((t, i) => (
                    <span key={i} style={{ padding: '0.2rem 0.6rem', borderRadius: 'var(--radius-sm)', background: 'rgba(255,255,255,0.05)', color: 'var(--text-muted)', fontSize: '0.78rem' }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Education & Certifications */}
          <div>
            {/* Education */}
            <div style={{ marginBottom: '2.5rem' }}>
              <h3 style={{ fontSize: '1.4rem', fontFamily: 'var(--font-heading)', fontWeight: 700, color: '#fff', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <GraduationCap size={22} style={{ color: 'var(--accent-purple)' }} />
                <span>Academic Education</span>
              </h3>

              {EDUCATIONS.map((edu) => (
                <div
                  key={edu.id}
                  className="gradient-border"
                  style={{
                    padding: '1.5rem',
                    marginBottom: '1rem',
                    background: 'rgba(16, 23, 42, 0.7)'
                  }}
                >
                  <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#fff', marginBottom: '0.25rem' }}>
                    {edu.degree}
                  </h4>
                  <div style={{ fontSize: '0.9rem', color: 'var(--accent-purple)', fontWeight: 600, marginBottom: '0.5rem' }}>
                    {edu.institution}
                  </div>
                  {edu.details && (
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: 0 }}>
                      {edu.details}
                    </p>
                  )}
                </div>
              ))}
            </div>

            {/* Certifications */}
            <div>
              <h3 style={{ fontSize: '1.4rem', fontFamily: 'var(--font-heading)', fontWeight: 700, color: '#fff', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <Award size={22} style={{ color: 'var(--accent-cyan)' }} />
                <span>Professional Certifications</span>
              </h3>

              {CERTIFICATIONS.map((cert) => (
                <div
                  key={cert.id}
                  className="gradient-border"
                  style={{
                    padding: '1.25rem 1.5rem',
                    marginBottom: '1rem',
                    background: 'rgba(16, 23, 42, 0.7)'
                  }}
                >
                  <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#fff', marginBottom: '0.25rem' }}>
                    {cert.title}
                  </h4>
                  <div style={{ fontSize: '0.85rem', color: 'var(--accent-cyan)', fontWeight: 600 }}>
                    {cert.provider}
                  </div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
                    Duration: {cert.duration}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .exp-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
        }
      `}</style>
    </section>
  );
};
