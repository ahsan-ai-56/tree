import Layout from '../components/Layout';
import Link from 'next/link';
import { useState } from 'react';

const schema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "name": "Contact Tree Identifier",
  "url": "https://treeidentifier.online/contact",
  "description": "Contact the Tree Identifier team for support, partnership inquiries, or feedback about our AI tree identification tool."
};

const faqs = [
  { q: 'Why is my tree identification result incorrect?', a: 'AI identification can occasionally be inaccurate, especially with poor image quality, unusual angles, or rare species. For best results, use a clear, well-lit photo showing distinctive leaf or bark features. We recommend cross-referencing with local botanical guides.' },
  { q: 'Can I use Tree Identifier commercially?', a: 'Yes, Tree Identifier is free for personal and commercial use. If you need API access or bulk identification for professional applications, please contact us to discuss enterprise options.' },
  { q: 'How do I report a bug or incorrect identification?', a: 'Use the contact form on this page to report issues. Please include a description of the incorrect result and, if possible, the species you believe was misidentified. This helps us improve our AI model.' },
  { q: 'Is my uploaded photo data stored?', a: 'No. Images are processed in-memory for identification and immediately deleted. We do not store, train on, or share user-uploaded photos. See our Privacy Policy for full details.' },
  { q: 'Can Tree Identifier identify plants other than trees?', a: 'Currently, our AI is optimized for woody plants — trees and large shrubs. We do have some coverage of palms and tree ferns, but general plant identification (flowers, herbs, grasses) is outside our current scope.' },
  { q: 'How can I partner with Tree Identifier?', a: 'We welcome partnerships with educational institutions, conservation organizations, forestry companies, and nature apps. Contact us via the form below to discuss collaboration opportunities.' },
];

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', subject: 'General Inquiry', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <Layout
      meta={{
        title: 'Contact Us — Tree Identifier Support & Inquiries',
        description: 'Contact the Tree Identifier team for technical support, partnership opportunities, bug reports, or general inquiries. We respond within 24 hours.',
        canonical: 'https://treeidentifier.online/contact',
        schema,
      }}
      breadcrumbs={[{ label: 'Contact Us' }]}
    >
      {/* HEADER */}
      <div style={{
        paddingTop: '70px',
        background: 'linear-gradient(135deg, var(--deep-black) 0%, var(--dark-green) 100%)',
        borderBottom: '1px solid var(--card-border)',
        padding: '100px 2rem 4rem'
      }}>
        <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
          <span className="green-tag">📧 Get in Touch</span>
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', color: 'var(--white)', margin: '1rem 0' }}>
            Contact Tree Identifier
          </h1>
          <p style={{ color: 'var(--gray-mid)', fontSize: '1.05rem', lineHeight: 1.8 }}>
            Have a question, bug report, or partnership inquiry? Our team typically responds within 24 hours on business days.
          </p>
        </div>
      </div>

      <section className="section">
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '4rem' }}>

            {/* SIDEBAR INFO */}
            <div>
              <div className="card" style={{ marginBottom: '1.5rem' }}>
                <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem', fontWeight: 700, color: 'var(--white)', marginBottom: '1.2rem' }}>📬 Contact Info</h3>
                {[
                  { icon: '📧', label: 'Email', value: 'hello@treeidentifier.ai' },
                  { icon: '⏰', label: 'Response Time', value: 'Within 24 hours' },
                  { icon: '🌍', label: 'Coverage', value: 'Global support' },
                  { icon: '🗣️', label: 'Languages', value: 'English, Spanish, French' },
                ].map((item) => (
                  <div key={item.label} style={{ display: 'flex', gap: '1rem', marginBottom: '1rem', paddingBottom: '1rem', borderBottom: '1px solid var(--card-border)' }}>
                    <span style={{ fontSize: '1.3rem' }}>{item.icon}</span>
                    <div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--bright-green)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.2rem' }}>{item.label}</div>
                      <div style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem' }}>{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="card">
                <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem', fontWeight: 700, color: 'var(--white)', marginBottom: '1rem' }}>🔗 Quick Links</h3>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
                  <li><Link href="/tree-identifier" style={{ color: 'var(--gray-mid)', fontSize: '0.9rem' }}>→ Tree Identifier Tool</Link></li>
                  <li><Link href="/identify-tree-by-leaf" style={{ color: 'var(--gray-mid)', fontSize: '0.9rem' }}>→ Leaf Identifier Tool</Link></li>
                  <li><Link href="/about" style={{ color: 'var(--gray-mid)', fontSize: '0.9rem' }}>→ About Us</Link></li>
                  <li><Link href="/privacy-policy" style={{ color: 'var(--gray-mid)', fontSize: '0.9rem' }}>→ Privacy Policy</Link></li>
                  <li><Link href="/disclaimer" style={{ color: 'var(--gray-mid)', fontSize: '0.9rem' }}>→ Disclaimer</Link></li>
                </ul>
              </div>
            </div>

            {/* CONTACT FORM */}
            <div>
              {sent ? (
                <div style={{
                  background: 'rgba(64,192,116,0.08)',
                  border: '1px solid var(--bright-green)',
                  borderRadius: '20px',
                  padding: '3rem',
                  textAlign: 'center'
                }}>
                  <div style={{ fontSize: '4rem', marginBottom: '1.5rem' }}>✅</div>
                  <h3 style={{ fontSize: '1.5rem', color: 'var(--white)', marginBottom: '1rem' }}>Message Sent!</h3>
                  <p style={{ color: 'var(--gray-mid)', lineHeight: 1.7 }}>Thank you for contacting Tree Identifier. Our team will review your message and respond within 24 hours.</p>
                  <button className="btn-primary" style={{ marginTop: '2rem' }} onClick={() => setSent(false)}>Send Another Message</button>
                </div>
              ) : (
                <div style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)', borderRadius: '20px', padding: '2.5rem' }}>
                  <h2 style={{ fontFamily: 'Inter, sans-serif', fontSize: '1.3rem', fontWeight: 700, color: 'var(--white)', marginBottom: '2rem' }}>Send Us a Message</h2>
                  <form onSubmit={handleSubmit}>
                    <div className="grid-2">
                      <div className="form-group">
                        <label>Full Name *</label>
                        <input type="text" placeholder="Your name" required value={form.name} onChange={e => setForm({...form, name: e.target.value})} />
                      </div>
                      <div className="form-group">
                        <label>Email Address *</label>
                        <input type="email" placeholder="your@email.com" required value={form.email} onChange={e => setForm({...form, email: e.target.value})} />
                      </div>
                    </div>
                    <div className="form-group">
                      <label>Subject</label>
                      <select value={form.subject} onChange={e => setForm({...form, subject: e.target.value})}>
                        <option>General Inquiry</option>
                        <option>Bug Report</option>
                        <option>Incorrect Identification</option>
                        <option>Partnership / API Access</option>
                        <option>Privacy Concern</option>
                        <option>Feature Request</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label>Message *</label>
                      <textarea placeholder="Describe your question or issue in detail..." required value={form.message} onChange={e => setForm({...form, message: e.target.value})} />
                    </div>
                    <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                      📧 Send Message
                    </button>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section" style={{ background: 'var(--deep-black)' }} id="faq">
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="section-label">Support</span>
            <h2 className="section-title">Frequently Asked Questions</h2>
          </div>
          {faqs.map((faq, i) => (
            <div className="faq-item" key={i}>
              <h3>{faq.q}</h3>
              <p>{faq.a}</p>
            </div>
          ))}
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <p style={{ color: 'var(--gray-mid)', marginBottom: '1.5rem' }}>Still have questions? Try our tools directly:</p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/tree-identifier" className="btn-primary">🌳 Tree Identifier</Link>
              <Link href="/identify-tree-by-leaf" className="btn-outline">🍃 Leaf Identifier</Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
