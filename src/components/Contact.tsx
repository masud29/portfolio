import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageSquare, ArrowUpRight } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" style={{ padding: '5.5rem 0', background: 'var(--bg-secondary)' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="section-tag">
            <Mail size={14} />
            <span>Get In Touch</span>
          </div>
          <h2 className="section-title">Let's Build Something Exceptional</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Looking for a skilled Laravel & TypeScript developer for your team or project? Feel free to reach out directly.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '0.8fr 1.2fr', gap: '3rem' }} className="contact-grid">
          {/* Contact Details Card */}
          <div
            className="gradient-border"
            style={{
              padding: '2.25rem',
              background: 'rgba(16, 23, 42, 0.8)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
          >
            <div>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#fff', marginBottom: '1.25rem', fontFamily: 'var(--font-heading)' }}>
                Direct Contacts
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '2.5rem' }}>
                {/* Phone */}
                <a
                  href={`tel:${PERSONAL_INFO.phone}`}
                  style={{ display: 'flex', alignItems: 'center', gap: '1rem', textDecoration: 'none', color: 'inherit' }}
                >
                  <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'rgba(99, 102, 241, 0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-indigo)' }}>
                    <Phone size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Call / WhatsApp</div>
                    <div style={{ fontWeight: 600, color: '#fff', fontSize: '0.98rem' }}>{PERSONAL_INFO.phone}</div>
                  </div>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  style={{ display: 'flex', alignItems: 'center', gap: '1rem', textDecoration: 'none', color: 'inherit' }}
                >
                  <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'rgba(168, 85, 247, 0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-purple)' }}>
                    <Mail size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Direct Email</div>
                    <div style={{ fontWeight: 600, color: '#fff', fontSize: '0.98rem' }}>{PERSONAL_INFO.email}</div>
                  </div>
                </a>

                {/* Location */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'rgba(6, 182, 212, 0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-cyan)' }}>
                    <MapPin size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Location</div>
                    <div style={{ fontWeight: 600, color: '#fff', fontSize: '0.98rem' }}>{PERSONAL_INFO.location}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Instant Action Links */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <a
                href={`https://wa.me/8801737191929`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  padding: '0.75rem',
                  borderRadius: 'var(--radius-sm)',
                  background: 'rgba(16, 185, 129, 0.15)',
                  border: '1px solid rgba(16, 185, 129, 0.3)',
                  color: '#34d399',
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  textDecoration: 'none'
                }}
              >
                <MessageSquare size={18} />
                <span>Chat on WhatsApp</span>
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>

          {/* Interactive Form */}
          <div
            className="gradient-border"
            style={{
              padding: '2.25rem',
              background: 'rgba(16, 23, 42, 0.8)'
            }}
          >
            <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#fff', marginBottom: '1.5rem', fontFamily: 'var(--font-heading)' }}>
              Send Me a Direct Message
            </h3>

            {submitted ? (
              <div style={{ padding: '2rem', textAlign: 'center', background: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.3)', borderRadius: 'var(--radius-md)' }}>
                <CheckCircle2 size={48} style={{ color: '#10b981', marginBottom: '1rem' }} />
                <h4 style={{ fontSize: '1.2rem', color: '#fff', fontWeight: 700, marginBottom: '0.5rem' }}>Message Sent Successfully!</h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem' }}>Thank you for reaching out. I will get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }} className="form-row">
                  <div>
                    <label style={{ display: 'block', fontSize: '0.82rem', color: 'var(--text-secondary)', marginBottom: '0.35rem', fontWeight: 500 }}>
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        borderRadius: 'var(--radius-sm)',
                        background: 'rgba(255,255,255,0.04)',
                        border: '1px solid var(--border-color)',
                        color: '#fff',
                        fontSize: '0.92rem',
                        outline: 'none'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.82rem', color: 'var(--text-secondary)', marginBottom: '0.35rem', fontWeight: 500 }}>
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        borderRadius: 'var(--radius-sm)',
                        background: 'rgba(255,255,255,0.04)',
                        border: '1px solid var(--border-color)',
                        color: '#fff',
                        fontSize: '0.92rem',
                        outline: 'none'
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', color: 'var(--text-secondary)', marginBottom: '0.35rem', fontWeight: 500 }}>
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Job Opportunity / Full Stack Project"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      borderRadius: 'var(--radius-sm)',
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid var(--border-color)',
                      color: '#fff',
                      fontSize: '0.92rem',
                      outline: 'none'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', color: 'var(--text-secondary)', marginBottom: '0.35rem', fontWeight: 500 }}>
                    Message *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Write your message details..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      borderRadius: 'var(--radius-sm)',
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid var(--border-color)',
                      color: '#fff',
                      fontSize: '0.92rem',
                      outline: 'none',
                      resize: 'vertical'
                    }}
                  ></textarea>
                </div>

                <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                  <Send size={18} />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 850px) {
          .contact-grid { grid-template-columns: 1fr !important; }
          .form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};
