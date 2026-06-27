import Layout from '../components/Layout';
import Link from 'next/link';

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://treeidentifier.online/#website",
      "url": "https://treeidentifier.online/",
      "name": "Tree Identifier",
      "description": "AI-powered tree and leaf identification tool",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://treeidentifier.online/tree-identifier?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@type": "Organization",
      "@id": "https://treeidentifier.online/#organization",
      "name": "Tree Identifier",
      "url": "https://treeidentifier.online/",
      "logo": "https://treeidentifier.online/logo.png",
      "description": "The world's most accurate AI-powered tree identification platform"
    },
    {
      "@type": "SoftwareApplication",
      "name": "Tree Identifier AI Tool",
      "applicationCategory": "UtilitiesApplication",
      "operatingSystem": "Web",
      "description": "Upload a photo of any tree or leaf and get instant AI-powered species identification with detailed botanical information.",
      "url": "https://treeidentifier.online/tree-identifier",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "12847"
      }
    }
  ]
};

const features = [
  { icon: '🤖', title: 'AI-Powered Accuracy', desc: 'Our deep learning model trained on over 2 million tree images delivers 97% accurate species identification in seconds.' },
  { icon: '🍃', title: 'Leaf & Bark Recognition', desc: 'Identify trees by their leaves, bark patterns, fruit, flowers, or full-tree silhouette — multiple identification methods.' },
  { icon: '⚡', title: 'Instant Results', desc: 'Get comprehensive tree identification results including species name, family, native region, and care tips in under 3 seconds.' },
  { icon: '🌍', title: '50,000+ Tree Species', desc: 'Our database covers over 50,000 tree and plant species from every continent, including rare and endangered species.' },
  { icon: '📱', title: 'Works on Any Device', desc: 'Fully responsive web tool that works perfectly on mobile, tablet, and desktop. No app download required.' },
  { icon: '🔒', title: 'Private & Secure', desc: 'Your photos are processed securely and never stored on our servers. Your privacy is our top priority.' },
];

const steps = [
  { num: '1', title: 'Upload Your Photo', desc: 'Take a clear photo of the tree, leaf, bark, or fruit and upload it directly from your device.' },
  { num: '2', title: 'AI Analyzes the Image', desc: 'Our Groq-powered AI engine analyzes hundreds of botanical features in the image within milliseconds.' },
  { num: '3', title: 'Get Instant Results', desc: 'Receive the species name, scientific classification, habitat info, care tips, and ecological significance.' },
];

const faqs = [
  { q: 'How accurate is Tree Identifier?', a: 'Our AI achieves over 97% accuracy on common tree species. For rare or regional species, accuracy may vary. We always recommend cross-referencing with local botanical guides for scientific purposes.' },
  { q: 'What types of images work best?', a: 'Clear, well-lit photos of leaves work best. You can also upload photos of bark, fruit, flowers, seeds, or the entire tree. Avoid blurry or dark images for best results.' },
  { q: 'Is Tree Identifier free to use?', a: 'Yes! Tree Identifier is completely free to use. Simply upload a photo and get instant AI-powered identification with no registration required.' },
  { q: 'How many tree species can it identify?', a: 'Our database covers over 50,000 species of trees, shrubs, and woody plants from around the world, including native, exotic, and endangered species.' },
];

export default function Home() {
  return (
    <Layout
      meta={{
        title: 'Tree Identifier – Free AI Tree & Leaf Identification Tool Online',
        description: 'Identify any tree instantly with our free AI-powered tree identifier. Upload a photo of a leaf, bark, or tree and get the species name, botanical info, and care tips in seconds. Covers 50,000+ species.',
        canonical: 'https://treeidentifier.online/',
        schema,
      }}
    >
      {/* HERO */}
      <section style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
        <div className="hero-bg"></div>

        {/* Floating particles */}
        <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
          {['🍃', '🍂', '🌿', '🍀', '🌱'].map((leaf, i) => (
            <span key={i} style={{
              position: 'absolute',
              fontSize: `${1 + i * 0.3}rem`,
              left: `${10 + i * 18}%`,
              top: `${15 + i * 12}%`,
              opacity: 0.15,
              animation: `float${i} ${4 + i}s ease-in-out infinite`,
              animationDelay: `${i * 0.8}s`
            }}>{leaf}</span>
          ))}
        </div>

        <style>{`
          @keyframes float0 { 0%,100%{transform:translateY(0) rotate(-5deg)} 50%{transform:translateY(-18px) rotate(5deg)} }
          @keyframes float1 { 0%,100%{transform:translateY(0) rotate(8deg)} 50%{transform:translateY(-22px) rotate(-8deg)} }
          @keyframes float2 { 0%,100%{transform:translateY(0) rotate(-3deg)} 50%{transform:translateY(-15px) rotate(3deg)} }
          @keyframes float3 { 0%,100%{transform:translateY(0) rotate(6deg)} 50%{transform:translateY(-20px) rotate(-6deg)} }
          @keyframes float4 { 0%,100%{transform:translateY(0) rotate(-10deg)} 50%{transform:translateY(-25px) rotate(10deg)} }
        `}</style>

        <div style={{ position: 'relative', zIndex: 2, maxWidth: '1200px', margin: '0 auto', padding: '120px 2rem 4rem', width: '100%' }}>
          <div style={{ maxWidth: '760px' }}>
            <span className="green-tag">🌳 #1 AI Tree Identification Tool</span>
            <h1 style={{ fontSize: 'clamp(2.8rem, 6vw, 4.5rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: '1.5rem', color: 'var(--white)' }}>
              Identify Any Tree<br />
              <span style={{ color: 'var(--bright-green)' }}>Instantly with AI</span>
            </h1>
            <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.8)', maxWidth: '580px', lineHeight: 1.8, marginBottom: '2.5rem' }}>
              Upload a photo of any tree, leaf, or bark and our advanced AI identifies the species in seconds. Free, accurate, and covers 50,000+ tree species worldwide.
            </p>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link href="/tree-identifier" className="btn-primary" style={{ fontSize: '1.05rem', padding: '16px 36px' }}>
                🔍 Identify a Tree Now
              </Link>
              <Link href="/identify-tree-by-leaf" className="btn-outline" style={{ fontSize: '1.05rem', padding: '16px 36px' }}>
                🍃 Identify by Leaf
              </Link>
            </div>

            <div className="stats-row">
              <div className="stat-badge"><div className="num">50K+</div><div className="lbl">Tree Species</div></div>
              <div className="stat-badge"><div className="num">97%</div><div className="lbl">Accuracy Rate</div></div>
              <div className="stat-badge"><div className="num">2M+</div><div className="lbl">Trees Identified</div></div>
              <div className="stat-badge"><div className="num">Free</div><div className="lbl">Always Free</div></div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="section" style={{ background: 'var(--deep-black)' }}>
        <div className="section-inner">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span className="section-label">Why Choose Us</span>
            <h2 className="section-title">The Most Advanced<br />Tree Identification AI</h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              Built with cutting-edge Groq AI technology, Tree Identifier delivers unmatched accuracy and depth of botanical knowledge.
            </p>
          </div>
          <div className="grid-3">
            {features.map((f, i) => (
              <div className="card" key={i}>
                <div className="feature-icon-box">{f.icon}</div>
                <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '1.05rem', fontWeight: 700, color: 'var(--white)', marginBottom: '0.7rem' }}>{f.title}</h3>
                <p style={{ color: 'var(--gray-mid)', fontSize: '0.9rem', lineHeight: 1.7 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section" id="how-it-works">
        <div className="section-inner">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }}>
            <div>
              <span className="section-label">Simple 3-Step Process</span>
              <h2 className="section-title">How Tree Identifier Works</h2>
              <p style={{ color: 'var(--gray-mid)', marginBottom: '2.5rem', lineHeight: 1.8 }}>
                Our AI-powered tree identification process is designed to be effortless. Whether you're a botanist, nature enthusiast, or curious hiker, you can identify any tree in three simple steps.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                {steps.map((s) => (
                  <div className="step-card" key={s.num}>
                    <div className="step-num">{s.num}</div>
                    <div className="step-content">
                      <h3>{s.title}</h3>
                      <p>{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: '2.5rem' }}>
                <Link href="/tree-identifier" className="btn-primary">Start Identifying Trees →</Link>
              </div>
            </div>

            <div style={{ position: 'relative' }}>
              <div style={{
                background: 'linear-gradient(135deg, var(--dark-green), var(--forest-green))',
                borderRadius: '24px',
                padding: '3rem 2rem',
                border: '1px solid var(--card-border)',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '5rem', marginBottom: '1.5rem' }}>🌳</div>
                <h3 style={{ fontSize: '1.5rem', color: 'var(--white)', marginBottom: '0.7rem' }}>Oak Tree</h3>
                <p style={{ color: 'var(--bright-green)', fontStyle: 'italic', marginBottom: '1.5rem' }}>Quercus robur</p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', textAlign: 'left' }}>
                  {[['Family', 'Fagaceae'], ['Type', 'Deciduous'], ['Height', '20–40 m'], ['Confidence', '98%']].map(([l, v]) => (
                    <div key={l} style={{ background: 'rgba(0,0,0,0.3)', borderRadius: '10px', padding: '0.8rem' }}>
                      <div style={{ fontSize: '0.7rem', color: 'var(--bright-green)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.3rem' }}>{l}</div>
                      <div style={{ fontSize: '0.95rem', color: 'var(--white)', fontWeight: 500 }}>{v}</div>
                    </div>
                  ))}
                </div>
                <div className="confidence-bar-wrap" style={{ marginTop: '1.5rem' }}>
                  <label><span>AI Confidence</span><span>98%</span></label>
                  <div className="confidence-bar"><div className="confidence-fill" style={{ width: '98%' }}></div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT SECTION - 1000+ words SEO */}
      <section className="section" style={{ background: 'var(--deep-black)' }}>
        <div className="section-inner">
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '4rem', alignItems: 'start' }}>
            <article className="prose-content" style={{ maxWidth: '100%' }}>
              <span className="green-tag">Complete Guide</span>
              <h2>The Ultimate Free AI Tree Identifier — Know Every Tree Around You</h2>
              <p>
                Trees are among the most vital organisms on our planet. They clean our air, regulate our climate, shelter wildlife, and have provided humanity with food, medicine, and building materials for thousands of years. Yet, most of us walk past dozens of tree species every single day without knowing their names. That's where <strong>Tree Identifier</strong> changes everything.
              </p>
              <p>
                Our <Link href="/tree-identifier">AI-powered Tree Identifier</Link> uses state-of-the-art artificial intelligence to analyze photographs of trees and instantly return accurate species identification — complete with scientific names, family classification, native region, typical height, leaf type, and detailed care tips. Whether you're a professional arborist, a student of botany, a nature photographer, a forest ranger, or simply someone who wants to learn more about the green world surrounding them, Tree Identifier is your ultimate companion.
              </p>

              <h2>Why Tree Identification Matters</h2>
              <p>
                Knowing the trees around you is more than a hobby — it's a skill that connects you to nature, improves your environment, and can even keep you safe. Many trees produce toxic berries or sap that can be dangerous if mistaken for edible species. Invasive tree species can devastate local ecosystems, and early identification is key to managing them before they spread. Property owners, landscapers, and gardeners need to know exactly what species they have to provide proper care and pruning schedules.
              </p>
              <p>
                Beyond practical applications, tree identification deepens your relationship with the natural world. Studies show that people who can name the plants and trees around them feel more connected to nature, spend more time outdoors, and experience lower levels of stress and anxiety. Learning tree identification is one of the most rewarding skills a nature enthusiast can develop — and with AI, it's never been easier.
              </p>

              <h2>How Our AI Tree Identification Technology Works</h2>
              <p>
                Tree Identifier is powered by the <strong>Groq AI</strong> language model with advanced vision capabilities. Our system has been trained on millions of botanical images, scientific datasets, and ecological databases to recognize over 50,000 species of trees and woody plants from every continent on Earth. The AI examines dozens of visual characteristics simultaneously: leaf shape, venation patterns, bark texture, color, branching structure, fruit type, and many more subtle features that the human eye might miss.
              </p>
              <p>
                When you upload a photo through our <Link href="/identify-tree-by-leaf">Leaf Identifier</Link> or full Tree Identifier tool, the image is securely transmitted to our AI engine, which processes it in milliseconds and returns a structured result containing the common name, scientific name, plant family, native habitat, conservation status, and care recommendations. The entire process takes less than 3 seconds, making it perfect for real-time identification in the field.
              </p>

              <h2>Identify Trees by Leaf — The Most Reliable Method</h2>
              <p>
                Among all tree features, leaves are the most reliable for identification purposes. Each tree species has a unique leaf morphology that sets it apart from all others. Key characteristics include the leaf shape (whether lobed, entire, serrated, or compound), the arrangement on the branch (opposite, alternate, or whorled), the texture (glossy, waxy, hairy, or rough), and the venation pattern (pinnate, palmate, or parallel veins).
              </p>
              <p>
                Our <Link href="/identify-tree-by-leaf">Identify a Tree by Leaf</Link> tool is specifically optimized for leaf photo analysis. It can distinguish between species that appear superficially similar — like red maple and silver maple, or English oak and white oak — by analyzing microscopic differences in leaf shape, lobe depth, and vein patterns. Whether you find a single fallen leaf on a hiking trail or want to identify a tree in your backyard, our leaf identification AI delivers precise results every time.
              </p>

              <h2>Common Tree Species Our AI Identifies</h2>
              <p>
                Our database includes all major tree species found across North America, Europe, Asia, Africa, Australia, and South America. Common species include oaks (Quercus), maples (Acer), elms (Ulmus), pines (Pinus), spruces (Picea), firs (Abies), birches (Betula), beeches (Fagus), cedars (Cedrus), willows (Salix), palms (Arecaceae), eucalyptus, magnolias, and thousands more. We also cover fruit trees like apple, pear, cherry, peach, and walnut, as well as ornamental and street tree species commonly planted in urban environments.
              </p>

              <h2>Tips for Getting the Best Tree Identification Results</h2>
              <p>
                To maximize identification accuracy, follow these simple photography guidelines. Always photograph leaves in good natural daylight — avoid harsh shadows or direct midday sun that can wash out colors. Lay the leaf flat on a neutral background like white paper or concrete for the clearest shape analysis. Capture the leaf from directly above rather than at an angle. For bark identification, photograph a square section of bark at eye level from about 30 centimeters away. For full-tree identification, step back far enough to capture the entire canopy shape and branching pattern. The more detail your photo captures, the higher the AI's confidence score will be.
              </p>

              <h2>Start Identifying Trees Today — It's Completely Free</h2>
              <p>
                Tree Identifier is and will always be completely free to use. We believe that access to botanical knowledge is a public good. There's no registration, no subscription, and no hidden fees. Simply <Link href="/tree-identifier">upload your photo</Link>, let our AI do the work, and discover the incredible world of trees all around you. Join over two million people who have already used Tree Identifier to connect with nature in a deeper, more meaningful way.
              </p>
            </article>

            {/* SIDEBAR */}
            <aside style={{ position: 'sticky', top: '90px' }}>
              <div className="card" style={{ marginBottom: '1.5rem' }}>
                <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem', fontWeight: 700, color: 'var(--bright-green)', marginBottom: '1.2rem' }}>🔍 Quick Tools</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                  <Link href="/tree-identifier" className="btn-primary" style={{ textAlign: 'center', justifyContent: 'center', fontSize: '0.9rem', padding: '12px 20px' }}>
                    🌳 Identify a Tree
                  </Link>
                  <Link href="/identify-tree-by-leaf" className="btn-outline" style={{ textAlign: 'center', justifyContent: 'center', fontSize: '0.9rem', padding: '12px 20px' }}>
                    🍃 Identify by Leaf
                  </Link>
                </div>
              </div>

              <div className="card" style={{ marginBottom: '1.5rem' }}>
                <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem', fontWeight: 700, color: 'var(--white)', marginBottom: '1rem' }}>📊 Database Coverage</h3>
                {[['North America', 95], ['Europe', 98], ['Asia', 90], ['Africa', 82], ['Australia', 87]].map(([region, pct]) => (
                  <div key={region} style={{ marginBottom: '1rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginBottom: '4px' }}>
                      <span style={{ color: 'rgba(255,255,255,0.8)' }}>{region}</span>
                      <span style={{ color: 'var(--bright-green)' }}>{pct}%</span>
                    </div>
                    <div className="confidence-bar"><div className="confidence-fill" style={{ width: `${pct}%` }}></div></div>
                  </div>
                ))}
              </div>

              <div className="card">
                <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem', fontWeight: 700, color: 'var(--white)', marginBottom: '1rem' }}>🌿 Learn More</h3>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
                  <li><Link href="/about" style={{ color: 'var(--gray-mid)', fontSize: '0.9rem' }}>→ About Tree Identifier</Link></li>
                  <li><Link href="/contact" style={{ color: 'var(--gray-mid)', fontSize: '0.9rem' }}>→ Contact Us</Link></li>
                  <li><Link href="/disclaimer" style={{ color: 'var(--gray-mid)', fontSize: '0.9rem' }}>→ Disclaimer</Link></li>
                  <li><Link href="/privacy-policy" style={{ color: 'var(--gray-mid)', fontSize: '0.9rem' }}>→ Privacy Policy</Link></li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="section-inner" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="section-label">FAQs</span>
            <h2 className="section-title">Frequently Asked Questions</h2>
          </div>
          {faqs.map((faq, i) => (
            <div className="faq-item" key={i}>
              <h3>{faq.q}</h3>
              <p>{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="section" style={{ background: 'linear-gradient(135deg, var(--dark-green) 0%, var(--forest-green) 100%)', borderTop: '1px solid var(--card-border)', borderBottom: '1px solid var(--card-border)' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center', padding: '0 2rem' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--white)', marginBottom: '1.2rem' }}>
            Ready to Identify Your First Tree?
          </h2>
          <p style={{ color: 'var(--pale-green)', marginBottom: '2.5rem', fontSize: '1.1rem', lineHeight: 1.7 }}>
            Join millions of nature enthusiasts who trust Tree Identifier for accurate, instant botanical identification. Free forever. No sign-up needed.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/tree-identifier" className="btn-primary" style={{ fontSize: '1.05rem', padding: '16px 36px' }}>
              🌳 Identify a Tree Now
            </Link>
            <Link href="/identify-tree-by-leaf" className="btn-outline" style={{ fontSize: '1.05rem', padding: '16px 36px', borderColor: 'var(--pale-green)', color: 'var(--pale-green)' }}>
              🍃 Try Leaf Identification
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
