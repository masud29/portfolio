import React from 'react';
import { Bot, Zap, Shield } from 'lucide-react';

export const AIIntegration: React.FC = () => {
  const aiHighlights = [
    {
      title: 'AI-Assisted Code Velocity',
      description: 'Leveraging Cursor AI & GitHub Copilot for rapid boilerplate generation, type generation, and unit testing.',
      icon: <Zap size={22} style={{ color: '#fbbf24' }} />
    },
    {
      title: 'OpenAI API Integration',
      description: 'Building custom backend tools with dynamic prompt engineering and structured JSON output parsing in PHP/Laravel.',
      icon: <Bot size={22} style={{ color: '#38bdf8' }} />
    },
    {
      title: 'AI-Driven Code Reviews',
      description: 'Automating vulnerability scanning, performance bottleneck detection, and refactoring with ChatGPT/Claude.',
      icon: <Shield size={22} style={{ color: '#4ade80' }} />
    }
  ];

  return (
    <section id="ai-workflow" style={{ padding: '5.5rem 0', background: 'var(--bg-primary)' }}>
      <div className="container">
        <div
          className="gradient-border ai-box"
          style={{
            padding: '3rem 2.5rem',
            background: 'linear-gradient(135deg, rgba(16, 23, 42, 0.9) 0%, rgba(30, 27, 75, 0.6) 100%)',
            borderColor: 'rgba(99, 102, 241, 0.3)'
          }}
        >
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <div className="section-tag">
              <Bot size={14} />
              <span>Modern Workflow Advantage</span>
            </div>
            <h2 className="section-title" style={{ marginBottom: '0.75rem' }}>
              AI-Accelerated Engineering Velocity
            </h2>
            <p className="section-subtitle" style={{ margin: '0 auto', maxWidth: '680px' }}>
              I combine deep full-stack fundamentals (Laravel & React/TypeScript) with state-of-the-art AI development tools to ship features faster and with higher precision.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '1.25rem'
            }}
          >
            {aiHighlights.map((item, idx) => (
              <div
                key={idx}
                style={{
                  padding: '1.25rem 1.35rem',
                  borderRadius: 'var(--radius-md)',
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid var(--border-color)'
                }}
              >
                <div style={{ marginBottom: '0.85rem' }}>{item.icon}</div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#fff', marginBottom: '0.4rem' }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          section#ai-workflow { padding: 3.5rem 0 !important; }
          .ai-box { padding: 1.5rem 1.25rem !important; }
        }
      `}</style>
    </section>
  );
};
