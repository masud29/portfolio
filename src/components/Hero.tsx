import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Github, Linkedin, Mail, ArrowRight, Sparkles, CheckCircle2, ShieldCheck, MapPin, Download } from 'lucide-react';

export const Hero: React.FC = () => {
  const titles = [
    'Laravel Full Stack Developer',
    'TypeScript & React Specialist',
    'REST API & RBAC Architect',
    'AI-Accelerated Software Engineer'
  ];

  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="about"
      style={{
        paddingTop: '8.5rem',
        paddingBottom: '5rem',
        position: 'relative',
        overflow: 'hidden',
        background: 'var(--gradient-glow)'
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.2fr 0.8fr',
            gap: '3.5rem',
            alignItems: 'center'
          }}
          className="hero-grid"
        >
          {/* Hero Left Content */}
          <div>
            {/* Status Badge */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                padding: '0.4rem 1rem',
                borderRadius: 'var(--radius-full)',
                background: 'rgba(16, 185, 129, 0.1)',
                border: '1px solid rgba(16, 185, 129, 0.3)',
                color: '#34d399',
                fontSize: '0.85rem',
                fontWeight: 600,
                marginBottom: '1.5rem'
              }}
            >
              <span
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: '#10b981',
                  boxShadow: '0 0 10px #10b981'
                }}
              ></span>
              Available for Full-time Roles & Projects
            </div>

            {/* Main Headline */}
            <h1
              className="hero-title"
              style={{
                fontFamily: 'var(--font-heading)',
                fontWeight: 800,
                lineHeight: 1.15,
                letterSpacing: '-0.02em',
                marginBottom: '1rem'
              }}
            >
              Hi, I'm <span className="gradient-text">{PERSONAL_INFO.name}</span>
            </h1>

            {/* Dynamic Subtitle Ticker */}
            <div
              className="hero-subtitle"
              style={{
                fontWeight: 600,
                color: 'var(--accent-indigo)',
                minHeight: '2.4rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                marginBottom: '1.25rem'
              }}
            >
              <Sparkles size={22} style={{ color: 'var(--accent-purple)', flexShrink: 0 }} />
              <span style={{ transition: 'all 0.4s ease' }}>{titles[currentTitleIndex]}</span>
            </div>

            {/* Bio Summary */}
            <p
              style={{
                color: 'var(--text-secondary)',
                fontSize: '1.05rem',
                lineHeight: 1.7,
                marginBottom: '1.75rem',
                maxWidth: '640px'
              }}
            >
              {PERSONAL_INFO.summary}
            </p>

            {/* Quick Location & Info */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1rem',
                marginBottom: '2rem',
                color: 'var(--text-muted)',
                fontSize: '0.88rem'
              }}
            >
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <MapPin size={16} style={{ color: 'var(--accent-cyan)', flexShrink: 0 }} />
                {PERSONAL_INFO.location}
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <ShieldCheck size={16} style={{ color: 'var(--accent-emerald)', flexShrink: 0 }} />
                Dhaka Apps Limited (Junior Engineer)
              </span>
            </div>

            {/* CTAs & Social Buttons */}
            <div className="hero-ctas" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '0.85rem', marginBottom: '2.5rem' }}>
              <a href="/Masud_Rana_Resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-primary hero-btn">
                <Download size={18} />
                <span>Download Resume (PDF)</span>
              </a>

              <a href="#projects" className="btn-secondary hero-btn">
                <span>View Projects</span>
                <ArrowRight size={16} />
              </a>

              <a href="#contact" className="btn-secondary hero-btn">
                <Mail size={16} />
                <span>Contact</span>
              </a>

              {/* Social Icons */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '50%',
                    background: 'rgba(255,255,255,0.06)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff',
                    textDecoration: 'none',
                    border: '1px solid var(--border-color)',
                    transition: 'all 0.2s ease'
                  }}
                  title="GitHub Profile"
                >
                  <Github size={20} />
                </a>

                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '50%',
                    background: 'rgba(255,255,255,0.06)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#38bdf8',
                    textDecoration: 'none',
                    border: '1px solid var(--border-color)',
                    transition: 'all 0.2s ease'
                  }}
                  title="LinkedIn Profile"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>

            {/* Quick Stats Grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: '1rem',
                paddingTop: '1.5rem',
                borderTop: '1px solid var(--border-color)'
              }}
              className="stats-grid"
            >
              {PERSONAL_INFO.stats.map((stat, idx) => (
                <div key={idx}>
                  <div
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '1.65rem',
                      fontWeight: 800,
                      color: '#fff'
                    }}
                    className="stat-val"
                  >
                    {stat.value}
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Right Code Card / Avatar Visual */}
          <div style={{ position: 'relative' }}>
            <div
              className="gradient-border hero-code-card"
              style={{
                padding: '1.75rem',
                background: 'rgba(15, 23, 42, 0.85)',
                backdropFilter: 'blur(20px)'
              }}
            >
              {/* Card Window Header */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '1rem',
                  paddingBottom: '0.75rem',
                  borderBottom: '1px solid var(--border-color)'
                }}
              >
                <div style={{ display: 'flex', gap: '0.4rem' }}>
                  <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ef4444' }}></span>
                  <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#eab308' }}></span>
                  <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#22c55e' }}></span>
                </div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                  DeveloperProfile.ts
                </div>
              </div>

              {/* Code Snippet */}
              <pre
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.82rem',
                  color: '#e2e8f0',
                  lineHeight: 1.65,
                  overflowX: 'auto',
                  paddingBottom: '0.5rem'
                }}
                className="no-scrollbar"
              >
                <code>
                  <span style={{ color: '#c084fc' }}>const</span> <span style={{ color: '#38bdf8' }}>developer</span> = &#123;{'\n'}
                  {'  '}name: <span style={{ color: '#4ade80' }}>'{PERSONAL_INFO.name}'</span>,{'\n'}
                  {'  '}primaryStack: [<span style={{ color: '#4ade80' }}>'Laravel'</span>, <span style={{ color: '#4ade80' }}>'React'</span>, <span style={{ color: '#4ade80' }}>'TypeScript'</span>],{'\n'}
                  {'  '}experience: <span style={{ color: '#fbbf24' }}>'2+ Years'</span>,{'\n'}
                  {'  '}coreCapabilities: [{'\n'}
                  {'    '}<span style={{ color: '#4ade80' }}>'RESTful API Architecture'</span>,{'\n'}
                  {'    '}<span style={{ color: '#4ade80' }}>'Role-Based Access Control (RBAC)'</span>,{'\n'}
                  {'    '}<span style={{ color: '#4ade80' }}>'AI-Assisted High Velocity Code'</span>{'\n'}
                  {'  '}],{'\n'}
                  {'  '}status: <span style={{ color: '#4ade80' }}>'Open for Opportunities'</span>{'\n'}
                  &#125;;
                </code>
              </pre>

              {/* Verified Badge */}
              <div
                style={{
                  marginTop: '1.25rem',
                  padding: '0.75rem',
                  borderRadius: 'var(--radius-sm)',
                  background: 'rgba(99, 102, 241, 0.1)',
                  border: '1px solid rgba(99, 102, 241, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem'
                }}
              >
                <CheckCircle2 size={20} style={{ color: 'var(--accent-indigo)', flexShrink: 0 }} />
                <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
                  <strong style={{ color: '#fff' }}>Production Grade:</strong> Scalable TypeScript architecture & RESTful API integration.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hero-title { font-size: 3.25rem; }
        .hero-subtitle { font-size: 1.6rem; }
        
        @media (max-width: 992px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 1.25rem !important; }
        }

        @media (max-width: 768px) {
          section#about { padding-top: 6.5rem !important; padding-bottom: 3.5rem !important; }
          .hero-title { font-size: 2.35rem !important; }
          .hero-subtitle { font-size: 1.25rem !important; min-height: 2rem !important; }
          .hero-code-card { padding: 1.15rem !important; }
        }

        @media (max-width: 480px) {
          .hero-title { font-size: 1.95rem !important; }
          .hero-subtitle { font-size: 1.1rem !important; }
          .hero-ctas { gap: 0.6rem !important; }
          .hero-btn { width: 100% !important; justify-content: center !important; }
          .stat-val { font-size: 1.4rem !important; }
        }
      `}</style>
    </section>
  );
};
