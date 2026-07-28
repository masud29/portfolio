import React, { useState } from 'react';
import { SKILLS } from '../data/portfolioData';
import { SkillCategory } from '../types/portfolio';
import { Cpu, Server, Layout, Database, Bot, Wrench, ShieldCheck, Sparkles } from 'lucide-react';

export const TechStack: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<SkillCategory | 'All'>('All');

  const categories: { label: string; value: SkillCategory | 'All'; icon: React.ReactNode }[] = [
    { label: 'All Technologies', value: 'All', icon: <Cpu size={16} /> },
    { label: 'Backend & APIs', value: 'Backend', icon: <Server size={16} /> },
    { label: 'Frontend & TS', value: 'Frontend', icon: <Layout size={16} /> },
    { label: 'Database & Storage', value: 'Database', icon: <Database size={16} /> },
    { label: 'AI Code Tools', value: 'AI & Tools', icon: <Bot size={16} /> },
    { label: 'DevOps & Tools', value: 'DevOps', icon: <Wrench size={16} /> },
  ];

  const filteredSkills = activeCategory === 'All'
    ? SKILLS
    : SKILLS.filter(s => s.category === activeCategory);

  const getTierBadgeStyle = (tier: string) => {
    switch (tier) {
      case 'Core Stack':
        return {
          bg: 'rgba(99, 102, 241, 0.16)',
          color: '#a5b4fc',
          border: 'rgba(99, 102, 241, 0.3)'
        };
      case 'Proficient':
        return {
          bg: 'rgba(16, 185, 129, 0.14)',
          color: '#34d399',
          border: 'rgba(16, 185, 129, 0.3)'
        };
      default:
        return {
          bg: 'rgba(255, 255, 255, 0.06)',
          color: 'var(--text-muted)',
          border: 'var(--border-color)'
        };
    }
  };

  return (
    <section id="skills" style={{ padding: '5.5rem 0', background: 'var(--bg-secondary)' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div className="section-tag">
            <Cpu size={14} />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="section-title">Verified Core Tech Stack</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Production-proven tools and frameworks utilized across 6+ web applications.
          </p>

          {/* Category Filter Tabs */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '0.6rem',
              marginTop: '2rem'
            }}
          >
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActiveCategory(cat.value)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  padding: '0.55rem 1.1rem',
                  borderRadius: 'var(--radius-full)',
                  border: activeCategory === cat.value ? '1px solid var(--accent-indigo)' : '1px solid var(--border-color)',
                  background: activeCategory === cat.value ? 'var(--gradient-brand)' : 'rgba(255,255,255,0.04)',
                  color: '#fff',
                  fontWeight: 500,
                  fontSize: '0.88rem',
                  cursor: 'pointer',
                  transition: 'all 0.25s ease'
                }}
              >
                {cat.icon}
                <span>{cat.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Modern Tag Cloud Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
            gap: '1.25rem'
          }}
        >
          {filteredSkills.map((skill, index) => {
            const badgeStyle = getTierBadgeStyle(skill.tier);
            return (
              <div
                key={index}
                className="gradient-border"
                style={{
                  padding: '1.25rem 1.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  gap: '0.75rem',
                  background: 'rgba(16, 23, 42, 0.75)'
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '0.5rem', marginBottom: '0.5rem' }}>
                    <h3 style={{ fontSize: '1.02rem', fontWeight: 700, color: '#fff', lineHeight: 1.3 }}>{skill.name}</h3>
                    {skill.tag && (
                      <span
                        style={{
                          fontSize: '0.7rem',
                          padding: '0.15rem 0.5rem',
                          borderRadius: 'var(--radius-sm)',
                          background: 'rgba(255,255,255,0.05)',
                          color: 'var(--text-muted)',
                          border: '1px solid var(--border-color)',
                          whiteSpace: 'nowrap'
                        }}
                      >
                        {skill.tag}
                      </span>
                    )}
                  </div>

                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                    Category: <span style={{ color: 'var(--text-secondary)' }}>{skill.category}</span>
                  </div>
                </div>

                {/* Tier Badge */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '0.5rem', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                  <span
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      padding: '0.2rem 0.65rem',
                      borderRadius: 'var(--radius-full)',
                      background: badgeStyle.bg,
                      color: badgeStyle.color,
                      border: `1px solid ${badgeStyle.border}`,
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.35rem'
                    }}
                  >
                    <ShieldCheck size={13} />
                    {skill.tier}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
