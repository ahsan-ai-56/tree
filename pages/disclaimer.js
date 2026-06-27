import Layout from '../components/Layout';
import Link from 'next/link';

const schema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Disclaimer — Tree Identifier",
  "url": "https://treeidentifier.ai/disclaimer",
  "description": "Read the Tree Identifier disclaimer regarding the accuracy of AI-powered tree identification and the appropriate use of our results."
};

const sections = [
  {
    title: 'Accuracy of AI Identification',
    content: `Tree Identifier uses artificial intelligence to identify tree species from photographs. While our AI achieves an average accuracy rate of 97% on common species, no automated identification system is 100% reliable. Identification accuracy can be affected by image quality, unusual lighting conditions, atypical growth forms, regional varieties, hybrid species, or rare species not well-represented in our training data. Users should always verify critical identifications through additional sources, particularly when the identification has safety, legal, or scientific implications.`
  },
  {
    title: 'Not a Substitute for Professional Advice',
    content: `Tree Identifier provides general botanical information for educational and recreational purposes only. Our tool is not a substitute for the advice of a qualified arborist, botanist, ecologist, forester, or other professional. For decisions involving tree removal, property boundaries, heritage tree status, construction proximity, disease diagnosis, or legal compliance, please consult a certified arborist or relevant local authority.`
  },
  {
    title: 'Foraging and Medical Safety Warning',
    content: `Tree Identifier results must never be used as the sole basis for decisions about consuming any part of a tree (berries, leaves, bark, seeds, sap, or fruit), or for applying tree extracts medicinally. Some tree species produce highly toxic compounds that can cause serious illness or death if ingested. Always consult multiple authoritative sources and seek guidance from local foraging experts or herbalists before consuming any wild plant material. Tree Identifier accepts no liability for any harm resulting from foraging decisions based on our tool's output.`
  },
  {
    title: 'Limitation of Liability',
    content: `Tree Identifier, its developers, staff, and affiliated organizations are not liable for any direct, indirect, incidental, consequential, or punitive damages arising from the use of this tool or reliance on its output. This includes but is not limited to: personal injury from foraging or handling toxic species based on misidentification; property damage from incorrect tree care decisions; financial loss from incorrect species assessment; or any other harm arising from reliance on Tree Identifier results.`
  },
  {
    title: 'Intellectual Property',
    content: `All content, design, algorithms, and software on treeidentifier.ai are the intellectual property of Tree Identifier and are protected by applicable copyright and intellectual property laws. The botanical data, AI models, and species information compiled in our database represent significant original work and may not be reproduced, scraped, or used to train competing AI systems without written permission.`
  },
  {
    title: 'Third-Party Links and Content',
    content: `Our website may contain links to third-party websites for additional botanical information. These links are provided for convenience and educational purposes. Tree Identifier does not endorse, control, or take responsibility for the content, accuracy, or privacy practices of any third-party websites. Accessing external links is done at the user's own risk.`
  },
  {
    title: 'Conservation and Environmental Responsibility',
    content: `Tree Identifier encourages all users to interact with trees and natural environments responsibly and in accordance with local laws. This includes obtaining proper permissions before collecting samples from protected lands, avoiding damage to trees during photography, respecting protected species and heritage trees, following local regulations regarding tree removal or modification, and reporting invasive species to relevant local authorities rather than attempting removal without guidance.`
  },
  {
    title: 'Changes to This Disclaimer',
    content: `Tree Identifier reserves the right to modify this disclaimer at any time. Changes will be posted on this page with an updated effective date. Continued use of Tree Identifier following any changes constitutes acceptance of the revised disclaimer.`
  },
];

export default function Disclaimer() {
  return (
    <Layout
      meta={{
        title: 'Disclaimer — Tree Identifier AI Tool Terms & Limitations',
        description: 'Read the Tree Identifier disclaimer. Understand the limitations of AI tree identification and how to use our results responsibly, especially for foraging and safety decisions.',
        canonical: 'https://treeidentifier.ai/disclaimer',
        schema,
      }}
      breadcrumbs={[{ label: 'Disclaimer' }]}
    >
      <div style={{ paddingTop: '70px', background: 'var(--dark-green)', borderBottom: '1px solid var(--card-border)', padding: '100px 2rem 3rem' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <span className="green-tag">⚖️ Legal</span>
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--white)', margin: '1rem 0' }}>Disclaimer</h1>
          <p style={{ color: 'var(--gray-mid)', fontSize: '1rem' }}>Last updated: June 2025 · Effective immediately</p>
        </div>
      </div>

      {/* WARNING BOX */}
      <div style={{ background: 'rgba(212,160,23,0.08)', borderTop: '2px solid var(--gold)', borderBottom: '2px solid var(--gold)', padding: '1.5rem 2rem' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
          <span style={{ fontSize: '1.5rem', flexShrink: 0 }}>⚠️</span>
          <p style={{ color: 'rgba(212,160,23,0.9)', fontSize: '0.95rem', lineHeight: 1.7 }}>
            <strong>Important Safety Notice:</strong> Tree Identifier AI results should never be used as the sole basis for foraging, consuming plant material, or making safety decisions about trees. Always verify identifications through multiple authoritative sources.
          </p>
        </div>
      </div>

      <section className="section">
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 2rem' }}>
          <div className="prose-content" style={{ maxWidth: '100%' }}>
            <p>
              Welcome to Tree Identifier. By using this website and its AI-powered tree identification tool, you agree to the terms and limitations described in this disclaimer. Please read it carefully before using our services.
            </p>

            {sections.map((s, i) => (
              <div key={i}>
                <h2>{s.title}</h2>
                <p>{s.content}</p>
              </div>
            ))}
          </div>

          {/* INTERNAL LINKS */}
          <div style={{ marginTop: '4rem', padding: '2rem', background: 'var(--card-bg)', borderRadius: '16px', border: '1px solid var(--card-border)' }}>
            <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem', fontWeight: 700, color: 'var(--white)', marginBottom: '1rem' }}>Related Pages</h3>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link href="/privacy-policy" className="btn-outline" style={{ fontSize: '0.9rem', padding: '10px 20px' }}>Privacy Policy</Link>
              <Link href="/about" className="btn-outline" style={{ fontSize: '0.9rem', padding: '10px 20px' }}>About Us</Link>
              <Link href="/contact" className="btn-outline" style={{ fontSize: '0.9rem', padding: '10px 20px' }}>Contact Us</Link>
              <Link href="/tree-identifier" className="btn-primary" style={{ fontSize: '0.9rem', padding: '10px 20px' }}>Use Tree Identifier</Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
