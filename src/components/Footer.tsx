import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Github, Linkedin, Mail, ArrowUp, Code2 } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={{ background: '#05070a', borderTop: '1px solid var(--border-color)', padding: '3rem 0 2rem 0' }}>
      <div className="container">
        <div
          className="footer-wrapper"
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1.5rem',
            paddingBottom: '2rem',
            borderBottom: '1px solid var(--border-color)'
          }}
        >
          {/* Brand */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <div style={{ width: '34px', height: '34px', borderRadius: '8px', background: 'var(--gradient-brand)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
              <Code2 size={20} />
            </div>
            <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1.2rem', color: '#fff' }}>
              MASUD RANA
            </span>
          </div>

          {/* Social Links */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
            <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }} title="GitHub">
              <Github size={20} />
            </a>
            <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }} title="LinkedIn">
              <Linkedin size={20} />
            </a>
            <a href={`mailto:${PERSONAL_INFO.email}`} style={{ color: 'var(--text-secondary)', textDecoration: 'none' }} title="Email">
              <Mail size={20} />
            </a>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid var(--border-color)',
              color: 'var(--text-secondary)',
              padding: '0.5rem 1rem',
              borderRadius: 'var(--radius-full)',
              cursor: 'pointer',
              fontSize: '0.85rem'
            }}
          >
            <span>Back to top</span>
            <ArrowUp size={16} />
          </button>
        </div>

        <div style={{ paddingTop: '1.5rem', textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.84rem' }}>
          © {new Date().getFullYear()} Masud Rana. All rights reserved. Built with TypeScript, React & Vanilla CSS.
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .footer-wrapper {
            flex-direction: column !important;
            justify-content: center !important;
            text-align: center !important;
            gap: 1.25rem !important;
          }
        }
      `}</style>
    </footer>
  );
};
