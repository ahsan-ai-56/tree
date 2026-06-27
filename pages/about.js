import Layout from '../components/Layout';
import Link from 'next/link';

const schema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "name": "About Tree Identifier — AI-Powered Tree Identification",
  "url": "https://treeidentifier.ai/about",
  "description": "Learn about Tree Identifier — our mission, technology, and team behind the world's most accurate AI tree identification tool.",
  "mainEntity": {
    "@type": "Organization",
    "name": "Tree Identifier",
    "description": "AI-powered tree and leaf identification platform serving millions of nature enthusiasts, botanists, and environmental professionals.",
    "foundingDate": "2023",
    "url": "https://treeidentifier.ai"
  }
};

const team = [
  { emoji: '🌿', name: 'Dr. Sarah Chen', role: 'Chief Botanist', bio: 'PhD in Forest Ecology from UC Berkeley. 15 years field experience across 6 continents.' },
  { emoji: '🤖', name: 'Marcus Webb', role: 'AI/ML Lead', bio: 'Former Google DeepMind researcher. Specialized in computer vision for biological classification.' },
  { emoji: '📊', name: 'Priya Nair', role: 'Data Science Director', bio: 'Built the botanical training dataset of 2M+ labeled tree images powering our AI.' },
  { emoji: '🌍', name: 'James Okoye', role: 'Conservation Advisor', bio: 'Wildlife biologist and IUCN species specialist. Guides our conservation status data.' },
];

const milestones = [
  { year: '2023', event: 'Tree Identifier launched with 10,000 species coverage and 87% accuracy.' },
  { year: 'Early 2024', event: 'Database expanded to 30,000 species. Groq AI integration increases speed by 10x.' },
  { year: 'Mid 2024', event: 'Reached 1 million tree identifications. Leaf-specific AI module launched.' },
  { year: '2025', event: '50,000+ species coverage achieved. 97% accuracy rate. 2M+ trees identified.' },
];

export default function About() {
  return (
    <Layout
      meta={{
        title: 'About Tree Identifier — Our Mission, Technology & Team',
        description: 'Learn about Tree Identifier — the AI-powered tree identification platform trusted by 2 million users. Discover our mission, technology, and the expert team behind our 97% accurate AI.',
        canonical: 'https://treeidentifier.ai/about',
        schema,
      }}
      breadcrumbs={[{ label: 'About Us' }]}
    >
      {/* HERO - Asymmetric layout */}
      <section style={{
        paddingTop: '100px',
        background: 'var(--deep-black)',
        borderBottom: '1px solid var(--card-border)',
        overflow: 'hidden',
        position: 'relative'
      }}>
        <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '45%', background: `url('https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&q=80') center/cover`, opacity: 0.15 }}></div>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '4rem 2rem 5rem', position: 'relative', zIndex: 2 }}>
          <div style={{ maxWidth: '600px' }}>
            <span className="green-tag">🌍 Our Story</span>
            <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'var(--white)', lineHeight: 1.1, margin: '1rem 0 1.5rem' }}>
              Making Tree Knowledge<br />
              <span style={{ color: 'var(--bright-green)' }}>Universally Accessible</span>
            </h1>
            <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.75)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
              Tree Identifier was born from a simple belief: everyone deserves to know the trees around them. We combine cutting-edge AI with deep botanical expertise to make expert-level tree identification free and instantaneous.
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--gray-mid)', lineHeight: 1.8 }}>
              Since 2023, we've helped over 2 million people — from backyard gardeners to professional foresters — identify trees in 190+ countries, contributing to conservation, education, and a deeper connection with nature.
            </p>
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section className="section">
        <div className="section-inner">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }}>
            <div>
              <span className="section-label">Our Mission</span>
              <h2 className="section-title" style={{ fontSize: '2.2rem' }}>Why We Built<br />Tree Identifier</h2>
              <p style={{ color: 'var(--gray-mid)', lineHeight: 1.8, marginBottom: '1.2rem' }}>
                We believe that ecological literacy — the ability to recognize and understand the living world around you — is a fundamental skill that everyone should have access to. For too long, botanical knowledge has been locked behind expensive textbooks, specialist degrees, and years of field experience.
              </p>
              <p style={{ color: 'var(--gray-mid)', lineHeight: 1.8, marginBottom: '1.2rem' }}>
                AI changes that. By training our models on millions of botanical images and partnering with expert botanists, ecologists, and conservation scientists, we've built a tool that gives anyone — regardless of education or background — the ability to identify any tree species in the world within seconds.
              </p>
              <p style={{ color: 'var(--gray-mid)', lineHeight: 1.8 }}>
                This matters not just for curiosity, but for conservation. When people can identify trees, they form connections with them. They notice when familiar species disappear. They report invasive plants before they spread. They advocate for the protection of old-growth forests. Knowledge is the first step toward care.
              </p>
              <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link href="/tree-identifier" className="btn-primary">Try Our Tool</Link>
                <Link href="/contact" className="btn-outline">Get in Touch</Link>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
              {[
                { num: '2M+', label: 'Trees Identified', icon: '🌳' },
                { num: '50K+', label: 'Species Covered', icon: '📚' },
                { num: '97%', label: 'Accuracy Rate', icon: '🎯' },
                { num: '190+', label: 'Countries Served', icon: '🌍' },
              ].map((stat) => (
                <div key={stat.num} style={{
                  background: 'var(--card-bg)',
                  border: '1px solid var(--card-border)',
                  borderRadius: '20px',
                  padding: '2rem',
                  textAlign: 'center'
                }}>
                  <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>{stat.icon}</div>
                  <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--bright-green)', fontFamily: 'Playfair Display, serif', lineHeight: 1 }}>{stat.num}</div>
                  <div style={{ color: 'var(--gray-mid)', fontSize: '0.85rem', marginTop: '0.5rem' }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TECHNOLOGY */}
      <section className="section" style={{ background: 'var(--deep-black)' }} id="how-it-works">
        <div className="section-inner">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span className="section-label">Our Technology</span>
            <h2 className="section-title">Powered by Groq AI</h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              We use the Groq inference engine for ultra-fast AI processing, combined with our proprietary botanical vision model.
            </p>
          </div>
          <div className="grid-3">
            {[
              { icon: '🧠', title: 'Vision AI Model', desc: 'Our custom-trained computer vision model analyzes botanical features with expert-level precision, trained on 2M+ labeled tree images.' },
              { icon: '⚡', title: 'Groq Inference Engine', desc: 'Groq\'s hardware-accelerated inference delivers AI responses in milliseconds — no waiting, no queuing, instant results.' },
              { icon: '🔬', title: 'Botanical Knowledge Graph', desc: 'A structured database of 50,000+ species with scientific classifications, ecological data, and conservation status from global sources.' },
              { icon: '🔒', title: 'Privacy-First Processing', desc: 'Images are processed in-memory and never stored. We use zero-knowledge architecture to protect user privacy completely.' },
              { icon: '📊', title: 'Confidence Scoring', desc: 'Every result includes an AI confidence percentage based on how many botanical features matched the identified species.' },
              { icon: '🌐', title: 'Global Coverage', desc: 'Our training data includes species from every major biome: tropical, temperate, boreal, Mediterranean, desert, and Arctic ecosystems.' },
            ].map((item, i) => (
              <div className="card" key={i}>
                <div className="feature-icon-box">{item.icon}</div>
                <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem', fontWeight: 700, color: 'var(--white)', marginBottom: '0.6rem' }}>{item.title}</h3>
                <p style={{ color: 'var(--gray-mid)', fontSize: '0.88rem', lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="section">
        <div className="section-inner">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span className="section-label">Our Team</span>
            <h2 className="section-title">The Experts Behind<br />Tree Identifier</h2>
          </div>
          <div className="grid-4">
            {team.map((member, i) => (
              <div className="card" key={i} style={{ textAlign: 'center' }}>
                <div style={{ width: '70px', height: '70px', borderRadius: '50%', background: 'linear-gradient(135deg, var(--forest-green), var(--mid-green))', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', margin: '0 auto 1.2rem' }}>
                  {member.emoji}
                </div>
                <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem', fontWeight: 700, color: 'var(--white)', marginBottom: '0.3rem' }}>{member.name}</h3>
                <p style={{ color: 'var(--bright-green)', fontSize: '0.82rem', fontWeight: 600, marginBottom: '0.8rem' }}>{member.role}</p>
                <p style={{ color: 'var(--gray-mid)', fontSize: '0.85rem', lineHeight: 1.6 }}>{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="section" style={{ background: 'var(--deep-black)' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="section-label">Our Journey</span>
            <h2 className="section-title">Milestones</h2>
          </div>
          {milestones.map((m, i) => (
            <div key={i} style={{ display: 'flex', gap: '2rem', marginBottom: '2.5rem' }}>
              <div style={{ minWidth: '100px', textAlign: 'right' }}>
                <span style={{ color: 'var(--bright-green)', fontWeight: 700, fontFamily: 'Playfair Display, serif', fontSize: '1.1rem' }}>{m.year}</span>
              </div>
              <div style={{ borderLeft: '2px solid var(--card-border)', paddingLeft: '2rem', paddingBottom: '1rem', position: 'relative' }}>
                <div style={{ position: 'absolute', left: '-6px', top: '6px', width: '10px', height: '10px', borderRadius: '50%', background: 'var(--bright-green)' }}></div>
                <p style={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.7 }}>{m.event}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '4rem 2rem', textAlign: 'center', borderTop: '1px solid var(--card-border)' }}>
        <h2 style={{ fontSize: '2rem', color: 'var(--white)', marginBottom: '1rem' }}>Join the Tree Identifier Community</h2>
        <p style={{ color: 'var(--gray-mid)', marginBottom: '2rem', fontSize: '1rem' }}>Start identifying trees and contribute to global botanical knowledge.</p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/tree-identifier" className="btn-primary">🌳 Try Tree Identifier</Link>
          <Link href="/contact" className="btn-outline">📧 Contact Us</Link>
        </div>
      </section>
    </Layout>
  );
}
