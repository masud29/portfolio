import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Code2 } from 'lucide-react';

interface NavbarProps {
  onContactClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onContactClick }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills & Stack', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'AI Workflow', href: '#ai-workflow' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: 'all 0.3s ease',
        padding: scrolled ? '0.75rem 0' : '1.25rem 0',
      }}
      className={scrolled ? 'glass-nav' : ''}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Brand Logo */}
        <a
          href="#"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.6rem',
            textDecoration: 'none',
            color: '#fff',
            fontFamily: 'var(--font-heading)',
            fontWeight: 800,
            fontSize: '1.25rem'
          }}
        >
          <div
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '10px',
              background: 'var(--gradient-brand)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fff',
              boxShadow: 'var(--shadow-glow)'
            }}
          >
            <Code2 size={22} />
          </div>
          <span>
            MASUD<span style={{ color: 'var(--accent-indigo)' }}>.DEV</span>
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '2rem' }} className="desktop-nav">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              style={{
                color: 'var(--text-secondary)',
                textDecoration: 'none',
                fontWeight: 500,
                fontSize: '0.92rem',
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Button */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <button onClick={onContactClick} className="btn-primary" style={{ padding: '0.55rem 1.2rem', fontSize: '0.88rem' }}>
            <span>Hire Me</span>
            <ArrowUpRight size={16} />
          </button>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              display: 'none',
              background: 'transparent',
              border: 'none',
              color: '#fff',
              cursor: 'pointer',
              padding: '0.5rem'
            }}
            className="mobile-toggle"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            background: 'var(--bg-secondary)',
            borderBottom: '1px solid var(--border-color)',
            padding: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                color: 'var(--text-primary)',
                textDecoration: 'none',
                fontSize: '1rem',
                fontWeight: 500,
              }}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 850px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
      `}</style>
    </header>
  );
};
