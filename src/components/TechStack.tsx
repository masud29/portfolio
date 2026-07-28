import React, { useState } from 'react';
import { SKILLS } from '../data/portfolioData';
import { SkillCategory } from '../types/portfolio';
import { Cpu, Server, Layout, Database, Bot, Wrench } from 'lucide-react';

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

  return (
    <section id="skills" style={{ padding: '5rem 0', background: 'var(--bg-secondary)' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div className="section-tag">
            <Cpu size={14} />
            <span>Technical Expertise</span>
          </div>
          <h2 className="section-title">Skills & Modern Tech Stack</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            A comprehensive overview of my technical capabilities spanning Laravel backend architecture, React/TypeScript frontends, and AI-accelerated development.
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

        {/* Skills Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '1.25rem'
          }}
        >
          {filteredSkills.map((skill, index) => (
            <div
              key={index}
              className="gradient-border"
              style={{
                padding: '1.25rem 1.5rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: '0.75rem'
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#fff' }}>{skill.name}</h3>
                  {skill.tag && (
                    <span
                      style={{
                        fontSize: '0.72rem',
                        padding: '0.15rem 0.6rem',
                        borderRadius: 'var(--radius-full)',
                        background: skill.featured ? 'rgba(99, 102, 241, 0.18)' : 'rgba(255,255,255,0.06)',
                        color: skill.featured ? '#a5b4fc' : 'var(--text-muted)',
                        fontWeight: 600
                      }}
                    >
                      {skill.tag}
                    </span>
                  )}
                </div>

                <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                  Category: <span style={{ color: 'var(--text-secondary)' }}>{skill.category}</span>
                </div>
              </div>

              {/* Progress Bar */}
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.78rem', color: 'var(--text-muted)', marginBottom: '0.35rem' }}>
                  <span>Proficiency</span>
                  <span style={{ fontWeight: 600, color: 'var(--accent-indigo)' }}>{skill.level}%</span>
                </div>
                <div style={{ height: '6px', width: '100%', background: 'rgba(255,255,255,0.06)', borderRadius: '10px', overflow: 'hidden' }}>
                  <div
                    style={{
                      height: '100%',
                      width: `${skill.level}%`,
                      background: 'var(--gradient-brand)',
                      borderRadius: '10px',
                      transition: 'width 0.8s ease'
                    }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
