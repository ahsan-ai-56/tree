import Layout from '../components/Layout';
import Link from 'next/link';

const schema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Tree Identification Result | Tree Identifier",
  "description": "View your AI-powered tree identification result with species name, scientific classification, habitat information, and care tips.",
  "url": "https://treeidentifier.ai/result"
};

const sampleResult = {
  commonName: 'English Oak',
  scientificName: 'Quercus robur',
  family: 'Fagaceae',
  nativeRegion: 'Europe & Western Asia',
  treeType: 'Deciduous Broadleaf',
  height: '20–40 meters',
  leafType: 'Simple, Lobed',
  conservationStatus: 'Least Concern',
  confidence: 97,
  description: 'The English Oak (Quercus robur) is one of the most iconic and ecologically important trees of Europe. Known for its deeply lobed leaves, acorn fruits, and massive spreading canopy, this long-lived species can reach over 1,000 years of age. It supports more species of insects, birds, and mammals than any other native British tree — over 2,300 species in total depend on oak for their survival.',
  careTips: 'English oaks prefer full sun and well-drained, slightly acidic soil. They are highly drought-tolerant once established and require very little maintenance. Prune dead or crossing branches in late winter. Avoid disturbing the root zone within the canopy drip-line.',
  uses: 'Oak timber has been used for centuries in shipbuilding, furniture, and construction. The bark has been used in tanning leather. Acorns are food for deer, squirrels, and jays. The tree provides habitat for hundreds of insect species and cavity-nesting birds.',
};

const relatedFacts = [
  { label: 'Lifespan', value: 'Up to 1,000+ years' },
  { label: 'Acorn Production', value: 'Up to 70,000 per year' },
  { label: 'Wildlife Supported', value: '2,300+ species' },
  { label: 'Wood Density', value: '720 kg/m³' },
  { label: 'Bloom Season', value: 'April – May' },
  { label: 'Fruit Type', value: 'Acorn (Cupule)' },
];

export default function ResultPage() {
  return (
    <Layout
      meta={{
        title: 'Tree Identification Result — English Oak | Tree Identifier',
        description: 'View a sample AI tree identification result. See how Tree Identifier provides species name, scientific classification, care tips, ecological information, and more.',
        canonical: 'https://treeidentifier.ai/result',
        schema,
      }}
      breadcrumbs={[{ label: 'Tree Identifier', href: '/tree-identifier' }, { label: 'Result' }]}
    >
      {/* HEADER */}
      <div style={{
        paddingTop: '70px',
        background: 'linear-gradient(180deg, var(--dark-green) 0%, var(--black) 100%)',
        borderBottom: '1px solid var(--card-border)'
      }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '3rem 2rem 2rem' }}>
          <span className="green-tag">✅ Sample Identification Result</span>
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--white)', marginTop: '0.5rem', marginBottom: '0.5rem' }}>
            {sampleResult.commonName}
          </h1>
          <p style={{ color: 'var(--bright-green)', fontStyle: 'italic', fontSize: '1.2rem' }}>{sampleResult.scientificName}</p>
        </div>
      </div>

      <section className="section">
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '3rem' }}>
            {/* MAIN RESULT */}
            <div>
              {/* Confidence */}
              <div style={{ background: 'var(--card-bg)', border: '1px solid var(--bright-green)', borderRadius: '20px', padding: '2rem', marginBottom: '2rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                  <h2 style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem', fontWeight: 700, color: 'var(--bright-green)' }}>AI Confidence Score</h2>
                  <span style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--bright-green)', fontFamily: 'Playfair Display, serif' }}>{sampleResult.confidence}%</span>
                </div>
                <div className="confidence-bar">
                  <div className="confidence-fill" style={{ width: `${sampleResult.confidence}%` }}></div>
                </div>
                <p style={{ color: 'var(--gray-mid)', fontSize: '0.85rem', marginTop: '0.8rem' }}>
                  High confidence identification. The AI matched 14 out of 15 key botanical features.
                </p>
              </div>

              {/* Key Info Grid */}
              <div className="result-grid" style={{ marginBottom: '2rem' }}>
                {[
                  ['Common Name', sampleResult.commonName],
                  ['Scientific Name', sampleResult.scientificName],
                  ['Plant Family', sampleResult.family],
                  ['Native Region', sampleResult.nativeRegion],
                  ['Tree Type', sampleResult.treeType],
                  ['Typical Height', sampleResult.height],
                  ['Leaf Type', sampleResult.leafType],
                  ['Conservation Status', sampleResult.conservationStatus],
                ].map(([label, value]) => (
                  <div className="result-item" key={label}>
                    <label>{label}</label>
                    <p>{value}</p>
                  </div>
                ))}
              </div>

              {/* Description */}
              <div style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)', borderRadius: '16px', padding: '2rem', marginBottom: '1.5rem' }}>
                <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem', fontWeight: 700, color: 'var(--white)', marginBottom: '0.8rem' }}>📖 About This Tree</h3>
                <p style={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.8, fontSize: '0.95rem' }}>{sampleResult.description}</p>
              </div>

              {/* Care Tips */}
              <div style={{ background: 'rgba(64,192,116,0.06)', border: '1px solid rgba(64,192,116,0.2)', borderRadius: '16px', padding: '2rem', marginBottom: '1.5rem' }}>
                <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem', fontWeight: 700, color: 'var(--bright-green)', marginBottom: '0.8rem' }}>🌱 Care Tips</h3>
                <p style={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.8, fontSize: '0.95rem' }}>{sampleResult.careTips}</p>
              </div>

              {/* Uses */}
              <div style={{ background: 'rgba(64,192,116,0.06)', border: '1px solid rgba(64,192,116,0.2)', borderRadius: '16px', padding: '2rem' }}>
                <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem', fontWeight: 700, color: 'var(--bright-green)', marginBottom: '0.8rem' }}>💡 Traditional & Modern Uses</h3>
                <p style={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.8, fontSize: '0.95rem' }}>{sampleResult.uses}</p>
              </div>
            </div>

            {/* SIDEBAR */}
            <div>
              {/* Tree Icon Card */}
              <div style={{
                background: 'linear-gradient(135deg, var(--dark-green), var(--forest-green))',
                border: '1px solid var(--card-border)',
                borderRadius: '20px',
                padding: '2.5rem',
                textAlign: 'center',
                marginBottom: '1.5rem'
              }}>
                <div style={{ fontSize: '5rem', marginBottom: '1rem' }}>🌳</div>
                <h3 style={{ color: 'var(--bright-green)', fontStyle: 'italic', marginBottom: '0.3rem', fontSize: '1rem' }}>{sampleResult.scientificName}</h3>
                <p style={{ color: 'var(--pale-green)', fontSize: '0.85rem' }}>Family: {sampleResult.family}</p>
              </div>

              {/* Fast Facts */}
              <div className="card" style={{ marginBottom: '1.5rem' }}>
                <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem', fontWeight: 700, color: 'var(--white)', marginBottom: '1rem' }}>📊 Fast Facts</h3>
                {relatedFacts.map(({ label, value }) => (
                  <div key={label} style={{ display: 'flex', justifyContent: 'space-between', padding: '0.6rem 0', borderBottom: '1px solid var(--card-border)' }}>
                    <span style={{ color: 'var(--gray-mid)', fontSize: '0.85rem' }}>{label}</span>
                    <span style={{ color: 'var(--white)', fontSize: '0.85rem', fontWeight: 500, textAlign: 'right', maxWidth: '55%' }}>{value}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="card">
                <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem', fontWeight: 700, color: 'var(--white)', marginBottom: '1rem' }}>🔍 Identify Your Tree</h3>
                <p style={{ color: 'var(--gray-mid)', fontSize: '0.88rem', marginBottom: '1.2rem', lineHeight: 1.6 }}>Get results like this for any tree. Upload a photo and our AI does the rest.</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                  <Link href="/tree-identifier" className="btn-primary" style={{ textAlign: 'center', justifyContent: 'center', fontSize: '0.9rem' }}>🌳 Identify a Tree</Link>
                  <Link href="/identify-tree-by-leaf" className="btn-outline" style={{ textAlign: 'center', justifyContent: 'center', fontSize: '0.9rem' }}>🍃 Identify by Leaf</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NOTE */}
      <section style={{ padding: '2rem', background: 'var(--deep-black)', borderTop: '1px solid var(--card-border)' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ color: 'var(--gray-mid)', fontSize: '0.85rem', lineHeight: 1.7 }}>
            ℹ️ This is a sample result page showing what Tree Identifier provides after analyzing a tree photo. Real results are generated in real time by our Groq AI. Visit our{' '}
            <Link href="/disclaimer">disclaimer page</Link> for information about accuracy and intended use.
          </p>
        </div>
      </section>
    </Layout>
  );
}
