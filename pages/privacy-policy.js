import Layout from '../components/Layout';
import Link from 'next/link';

const schema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Privacy Policy — Tree Identifier",
  "url": "https://treeidentifier.online/privacy-policy",
  "description": "Tree Identifier privacy policy. Learn how we handle your data, photos, and personal information when you use our AI tree identification tool."
};

const sections = [
  {
    title: '1. Information We Collect',
    content: `Tree Identifier is designed with privacy as a core principle. When you use our AI tree identification tool, we collect minimal information necessary to provide the service. This includes: (a) Images you upload for identification — these are processed in real-time by our AI and are never stored on our servers after processing is complete; (b) Basic usage analytics including page views, feature usage, and device type, collected in anonymized aggregate form; (c) Information you voluntarily provide when contacting us through our contact form, including your name and email address.

We do not collect, store, or process any personally identifiable information beyond what you voluntarily provide. We do not require account registration to use Tree Identifier, and no login credentials are ever stored.`
  },
  {
    title: '2. How We Use Your Information',
    content: `The information we collect is used exclusively to: provide and improve the Tree Identifier AI tool; respond to support inquiries and feedback you send via our contact form; analyze aggregate usage patterns to improve user experience and identify technical issues; and comply with legal obligations where required.

We do not use your uploaded images to train our AI models without explicit consent. We do not use your information for advertising targeting or sell your data to third parties under any circumstances.`
  },
  {
    title: '3. Image Processing and Storage',
    content: `When you upload a photograph to Tree Identifier, the image is transmitted securely over HTTPS to our AI processing infrastructure. The image is analyzed by our Groq-powered AI model and the identification result is returned to your browser. Immediately after processing, the image is discarded from our server memory. We maintain zero persistent image storage — at no point does your photograph exist on our servers beyond the milliseconds required for processing.

This means we have no access to historical records of what images you have uploaded, and we cannot retrieve or review previously uploaded images even if legally compelled to do so.`
  },
  {
    title: '4. Cookies and Tracking',
    content: `Tree Identifier uses minimal cookies strictly necessary for the website to function correctly. We use: (a) Session cookies to maintain your current browsing session; (b) Preference cookies to remember any settings you have adjusted during your visit. We do not use advertising cookies, cross-site tracking cookies, or third-party analytics cookies that track you across the web. Our analytics are powered by privacy-respecting tools that do not build individual user profiles or share data with advertising networks.`
  },
  {
    title: '5. Third-Party Services',
    content: `Tree Identifier uses the following third-party services to operate: Groq AI for image processing and inference (images are transmitted to Groq servers for real-time processing under Groq's enterprise privacy agreement); Vercel for web hosting and content delivery (no user images are stored by Vercel beyond transient request handling); Google Fonts for typography (font files are loaded from Google's CDN; no personal data is transmitted).

We have carefully selected third-party providers who maintain high privacy standards and do not use our users' data for their own purposes.`
  },
  {
    title: '6. Data Security',
    content: `We implement industry-standard security measures to protect your data during transmission and processing. All data transmitted between your browser and our servers is encrypted using TLS 1.3. Our API endpoints use secure authentication and rate limiting to prevent unauthorized access. We conduct regular security audits and promptly address any vulnerabilities identified.

Despite these measures, no internet transmission is completely secure. We encourage you to avoid uploading images containing sensitive personal information (such as photos showing your home address, identifying documents, or other private details).`
  },
  {
    title: '7. Children\'s Privacy',
    content: `Tree Identifier is suitable for users of all ages and is frequently used in educational settings. We do not knowingly collect personal information from children under the age of 13. If you believe a child under 13 has provided personal information through our contact form, please contact us immediately and we will delete the information promptly. For classroom use, we recommend teachers review our tool with students and supervise their use in accordance with their institution's digital safety policies.`
  },
  {
    title: '8. Your Rights',
    content: `Depending on your location, you may have rights regarding your personal data under laws such as the GDPR (European Union), CCPA (California), or other applicable privacy regulations. These rights may include: the right to access information we hold about you; the right to request deletion of your personal data; the right to object to processing of your personal data; and the right to data portability.

To exercise any of these rights, please contact us at privacy@treeidentifier.online. Because we collect minimal personal information and store no images, most requests can be fulfilled immediately.`
  },
  {
    title: '9. Changes to This Privacy Policy',
    content: `We may update this Privacy Policy periodically to reflect changes in our practices or applicable laws. When we make changes, we will update the "Last updated" date at the top of this page. For significant changes, we will provide more prominent notice. Continued use of Tree Identifier after changes are posted constitutes your acceptance of the revised policy.`
  },
  {
    title: '10. Contact Us',
    content: `If you have questions about this Privacy Policy, want to exercise your data rights, or have concerns about how we handle your information, please contact our privacy team at privacy@treeidentifier.online. We are committed to resolving privacy concerns promptly and transparently.`
  },
];

export default function PrivacyPolicy() {
  return (
    <Layout
      meta={{
        title: 'Privacy Policy — Tree Identifier | How We Protect Your Data',
        description: 'Read the Tree Identifier privacy policy. Learn how we handle uploaded photos, personal data, and cookies. We never store your images and never sell your data.',
        canonical: 'https://treeidentifier.online/privacy-policy',
        schema,
      }}
      breadcrumbs={[{ label: 'Privacy Policy' }]}
    >
      {/* HERO */}
      <div style={{
        paddingTop: '70px',
        background: 'linear-gradient(180deg, var(--dark-green) 0%, var(--black) 100%)',
        borderBottom: '1px solid var(--card-border)',
        padding: '100px 2rem 3rem'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <span className="green-tag">🔒 Privacy</span>
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--white)', margin: '1rem 0' }}>Privacy Policy</h1>
          <p style={{ color: 'var(--gray-mid)', fontSize: '1rem' }}>Last updated: June 2025 · Effective immediately</p>
        </div>
      </div>

      {/* PRIVACY HIGHLIGHTS */}
      <div style={{ background: 'rgba(64,192,116,0.05)', borderBottom: '1px solid var(--card-border)', padding: '2rem' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <p style={{ color: 'var(--bright-green)', fontWeight: 600, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1.2rem' }}>Privacy at a Glance</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
            {[
              { icon: '🗑️', text: 'Images deleted immediately after processing' },
              { icon: '🚫', text: 'No image storage on our servers' },
              { icon: '💰', text: 'We never sell your data' },
              { icon: '📊', text: 'Anonymized analytics only' },
              { icon: '🔐', text: 'TLS 1.3 encrypted transmission' },
              { icon: '👤', text: 'No account registration required' },
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: '0.8rem', alignItems: 'flex-start' }}>
                <span style={{ fontSize: '1.2rem', flexShrink: 0 }}>{item.icon}</span>
                <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.88rem', lineHeight: 1.5 }}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <section className="section">
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 2rem' }}>
          <div className="prose-content" style={{ maxWidth: '100%' }}>
            <p>
              Your privacy is important to us. This Privacy Policy explains how Tree Identifier ("we," "us," or "our") collects, uses, and protects information when you visit treeidentifier.ai and use our AI-powered tree identification tool. By using Tree Identifier, you agree to the practices described in this policy.
            </p>

            {sections.map((s, i) => (
              <div key={i}>
                <h2>{s.title}</h2>
                <p style={{ whiteSpace: 'pre-line' }}>{s.content}</p>
              </div>
            ))}
          </div>

          {/* RELATED LINKS */}
          <div style={{ marginTop: '4rem', padding: '2rem', background: 'var(--card-bg)', borderRadius: '16px', border: '1px solid var(--card-border)' }}>
            <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem', fontWeight: 700, color: 'var(--white)', marginBottom: '1rem' }}>Related Pages</h3>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link href="/disclaimer" className="btn-outline" style={{ fontSize: '0.9rem', padding: '10px 20px' }}>Disclaimer</Link>
              <Link href="/contact" className="btn-outline" style={{ fontSize: '0.9rem', padding: '10px 20px' }}>Contact Us</Link>
              <Link href="/about" className="btn-outline" style={{ fontSize: '0.9rem', padding: '10px 20px' }}>About Us</Link>
              <Link href="/tree-identifier" className="btn-primary" style={{ fontSize: '0.9rem', padding: '10px 20px' }}>Use Tree Identifier</Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
