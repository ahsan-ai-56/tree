import Layout from '../components/Layout';
import UploadTool from '../components/UploadTool';
import Link from 'next/link';

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://treeidentifier.ai/tree-identifier",
      "url": "https://treeidentifier.ai/tree-identifier",
      "name": "Free AI Tree Identifier — Identify Any Tree by Photo",
      "description": "Upload a photo and identify any tree instantly with AI. Get the species name, scientific classification, native region, and detailed botanical information.",
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://treeidentifier.ai" },
          { "@type": "ListItem", "position": 2, "name": "Tree Identifier", "item": "https://treeidentifier.ai/tree-identifier" }
        ]
      }
    },
    {
      "@type": "HowTo",
      "name": "How to Identify a Tree Using AI",
      "description": "Step-by-step guide to identifying any tree species using Tree Identifier's AI tool.",
      "step": [
        { "@type": "HowToStep", "name": "Upload a Photo", "text": "Take a clear photo of the tree, leaf, or bark and upload it to the tool." },
        { "@type": "HowToStep", "name": "AI Analysis", "text": "Our AI analyzes the image for botanical features including leaf shape, bark texture, and branching pattern." },
        { "@type": "HowToStep", "name": "View Results", "text": "Get the species name, scientific classification, habitat information, and care tips instantly." }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Can Tree Identifier identify trees from bark photos?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes! Our AI can identify many tree species from bark photos alone. Bark texture, color, and pattern are strong identifying features for many species." }
        },
        {
          "@type": "Question",
          "name": "How many photos can I upload?",
          "acceptedAnswer": { "@type": "Answer", "text": "There is no limit. You can identify as many trees as you like, completely free of charge." }
        }
      ]
    }
  ]
};

const tipsData = [
  { icon: '☀️', tip: 'Good Lighting', detail: 'Natural daylight produces the best results. Avoid harsh shadows or flash photography.' },
  { icon: '📐', tip: 'Clear Angle', detail: 'Photograph leaves from directly above. For bark, shoot straight-on from about 30cm away.' },
  { icon: '🎯', tip: 'Close-Up Detail', detail: 'Get close enough to capture fine details like vein patterns, texture, and edge shape.' },
  { icon: '🍃', tip: 'Healthy Leaves', detail: 'Choose undamaged, fully grown leaves for most accurate identification results.' },
];

const treeTypes = [
  { icon: '🌳', name: 'Deciduous Trees', examples: 'Oak, Maple, Birch, Elm, Beech' },
  { icon: '🌲', name: 'Coniferous Trees', examples: 'Pine, Spruce, Fir, Cedar, Redwood' },
  { icon: '🌴', name: 'Tropical Trees', examples: 'Palm, Banyan, Teak, Mahogany, Mango' },
  { icon: '🌸', name: 'Flowering Trees', examples: 'Cherry, Magnolia, Dogwood, Jacaranda' },
  { icon: '🍎', name: 'Fruit Trees', examples: 'Apple, Pear, Walnut, Peach, Lemon' },
  { icon: '🏙️', name: 'Urban Trees', examples: 'London Plane, Ginkgo, Honey Locust' },
];

export default function TreeIdentifierPage() {
  return (
    <Layout
      meta={{
        title: 'Free AI Tree Identifier — Identify Any Tree by Photo Instantly',
        description: 'Upload a tree photo and get instant AI identification. Our free tree identifier covers 50,000+ species including oak, maple, pine, palm, and more. Get species name, scientific info, and care tips.',
        canonical: 'https://treeidentifier.ai/tree-identifier',
        schema,
      }}
      breadcrumbs={[{ label: 'Tree Identifier' }]}
    >
      {/* PAGE HERO */}
      <section style={{
        position: 'relative',
        paddingTop: '100px',
        paddingBottom: '0',
        background: `linear-gradient(180deg, rgba(5,5,5,0.7) 0%, var(--black) 100%), url('https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=1600&q=80') center/cover no-repeat`,
        borderBottom: '1px solid var(--card-border)'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '3rem 2rem 0' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }}>
            <div style={{ paddingBottom: '4rem' }}>
              <span className="green-tag">🤖 AI-Powered</span>
              <h1 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', color: 'var(--white)', marginBottom: '1.2rem', lineHeight: 1.15 }}>
                Free AI Tree<br />
                <span style={{ color: 'var(--bright-green)' }}>Identifier Tool</span>
              </h1>
              <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '2rem' }}>
                Upload any tree photo — full tree, branch, bark, or fruit — and our AI identifies the exact species within seconds. Get the scientific name, ecological info, care tips, and more.
              </p>
              <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
                {[['50K+', 'Species'], ['97%', 'Accuracy'], ['&lt;3s', 'Results'], ['Free', 'Always']].map(([n, l]) => (
                  <div key={l}>
                    <div style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--bright-green)', fontFamily: 'Playfair Display, serif' }} dangerouslySetInnerHTML={{__html: n}} />
                    <div style={{ fontSize: '0.8rem', color: 'var(--gray-mid)' }}>{l}</div>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: '2rem' }}>
                <Link href="/identify-tree-by-leaf" className="btn-outline" style={{ fontSize: '0.9rem' }}>
                  🍃 Prefer to identify by leaf?
                </Link>
              </div>
            </div>

            {/* UPLOAD TOOL */}
            <div style={{
              background: 'var(--card-bg)',
              border: '1px solid var(--card-border)',
              borderBottom: 'none',
              borderRadius: '20px 20px 0 0',
              padding: '2.5rem',
              marginTop: '1rem'
            }}>
              <h2 style={{ fontFamily: 'Inter, sans-serif', fontSize: '1.1rem', fontWeight: 700, color: 'var(--white)', marginBottom: '1.5rem' }}>
                🌳 Upload Tree Photo
              </h2>
              <UploadTool mode="tree" />
            </div>
          </div>
        </div>
      </section>

      {/* CONTINUED UPLOAD PANEL BG */}
      <div style={{ background: 'var(--card-bg)', borderLeft: '1px solid var(--card-border)', borderRight: '1px solid var(--card-border)', maxWidth: 'calc(50% - 2rem + 600px)', marginLeft: 'auto', height: '0' }}></div>

      {/* TIPS */}
      <section className="section" style={{ background: 'var(--deep-black)' }}>
        <div className="section-inner">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="section-label">Best Practices</span>
            <h2 className="section-title">Tips for Accurate Tree Identification</h2>
          </div>
          <div className="grid-4">
            {tipsData.map((t, i) => (
              <div className="card" key={i} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{t.icon}</div>
                <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem', fontWeight: 700, color: 'var(--white)', marginBottom: '0.5rem' }}>{t.tip}</h3>
                <p style={{ color: 'var(--gray-mid)', fontSize: '0.88rem', lineHeight: 1.6 }}>{t.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TREE TYPES */}
      <section className="section">
        <div className="section-inner">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="section-label">What We Identify</span>
            <h2 className="section-title">All Tree Types Covered</h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>From ancient rainforest giants to urban street trees, our AI identifies every species.</p>
          </div>
          <div className="grid-3">
            {treeTypes.map((t, i) => (
              <div className="card" key={i} style={{ display: 'flex', gap: '1.2rem', alignItems: 'flex-start' }}>
                <span style={{ fontSize: '2rem' }}>{t.icon}</span>
                <div>
                  <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem', fontWeight: 700, color: 'var(--white)', marginBottom: '0.4rem' }}>{t.name}</h3>
                  <p style={{ color: 'var(--gray-mid)', fontSize: '0.85rem' }}>{t.examples}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTENT SEO - 1000+ words */}
      <section className="section" style={{ background: 'var(--deep-black)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 2rem' }}>
          <article className="prose-content" style={{ maxWidth: '100%' }}>
            <span className="green-tag">Expert Guide</span>
            <h2>The Complete Guide to AI Tree Identification</h2>
            <p>
              Tree identification has been practiced for centuries by botanists, foresters, herbalists, and naturalists. Traditionally, it required years of study, extensive field guides, and hands-on experience. Today, <strong>artificial intelligence</strong> has democratized this knowledge, making expert-level tree identification accessible to anyone with a smartphone or camera. Our <strong>AI Tree Identifier</strong> brings the power of machine learning to nature lovers, professionals, and curious minds worldwide.
            </p>

            <h3>What Makes a Good Tree Identification Photo?</h3>
            <p>
              The quality of your photograph directly impacts identification accuracy. When photographing trees for AI identification, lighting is the single most important factor. Natural, diffused daylight — such as on a slightly overcast day — provides even illumination without harsh shadows that can obscure important features. Early morning or late afternoon light works beautifully, creating gentle shadows that actually enhance texture details in bark and leaf surfaces.
            </p>
            <p>
              For leaf identification, place the leaf on a clean, neutral background. A white sheet of paper or a flat concrete surface eliminates distracting backgrounds. Photograph from directly above, filling the frame with the leaf while keeping all edges visible. Ensure the image is sharp by using your camera's macro mode for close-up shots. Capture both the upper surface and the underside of the leaf if possible — the undersides of leaves often contain unique identifying features like prominent veins, fine hairs, or gland dots.
            </p>

            <h3>Understanding Tree Identification Features</h3>
            <p>
              Professional arborists and botanists use a systematic approach to tree identification that examines multiple features in combination. Our AI has been trained on this same multi-feature analysis approach. Here are the primary identification characteristics:
            </p>
            <p>
              <strong>Leaf morphology</strong> is the most reliable identification feature. Botanists analyze the overall leaf shape (the blade), the margin (whether smooth, serrated, lobed, or toothed), the venation pattern (how veins branch throughout the leaf), the petiole (leaf stem) length and shape, and whether the leaf is simple (a single blade) or compound (multiple leaflets on a shared stem). Each of these features narrows down the possible species significantly.
            </p>
            <p>
              <strong>Bark characteristics</strong> provide excellent identification clues, especially in winter when deciduous trees have no leaves. Young and old bark on the same tree can look dramatically different, so photographing a mid-trunk section of mature bark yields the most consistent results. Bark can be smooth, furrowed, plated, shaggy, peeling, or corky — and the specific pattern is often unique to a species or genus.
            </p>
            <p>
              <strong>Tree form and silhouette</strong> — the overall shape of the tree — is another powerful identification tool. Columnar trees, spreading trees, weeping forms, pyramidal conifers, and vase-shaped elms all have distinctive profiles that experienced identifiers recognize at a glance. Our AI has learned these profiles and uses them as a first-pass filter to narrow down candidates before examining finer details.
            </p>
            <p>
              <strong>Fruit, seeds, and cones</strong> are often the most definitive identification features. The acorn of an oak, the winged samara of a maple, the spiky ball of a sweet gum, or the cone of a particular pine species are virtually unmistakable once you know what to look for. If you have access to fallen fruit or seeds near a tree you're trying to identify, including them in your photo can dramatically improve accuracy.
            </p>

            <h3>Invasive Tree Species — Why Identification Matters</h3>
            <p>
              One of the most ecologically important applications of tree identification is detecting invasive species before they cause irreversible damage to native ecosystems. Trees like the Tree of Heaven (<em>Ailanthus altissima</em>), Paulownia, and various invasive pines have spread aggressively across North America and Europe, outcompeting native species and reducing biodiversity. Similarly, invasive insects like the Emerald Ash Borer are devastating ash tree populations across entire continents.
            </p>
            <p>
              Early detection and reporting of invasive species is crucial. If our Tree Identifier identifies an invasive species on your property or in your local area, you can report it to your regional forestry or environmental authority and take steps to remove or manage it before it spreads further. This community-level awareness is one of the most powerful tools we have for protecting our natural forests.
            </p>

            <h3>Tree Identification for Foragers and Herbalists</h3>
            <p>
              Many tree species have edible or medicinal properties that have been used by indigenous cultures for millennia. The bark of willow trees contains salicin, the natural precursor to aspirin. The leaves and inner bark of slippery elm have been used as a soothing herbal remedy for centuries. Elderberry trees produce antiviral berries used in immune-supporting supplements. Pine needles from certain species are high in vitamin C and have been used to prevent scurvy.
            </p>
            <p>
              However, foraging safely absolutely requires accurate species identification. Several tree species are dangerously toxic — the seeds of yew trees can be fatal, the sap of poison sumac causes severe skin reactions, and unripe elderberries of certain species can cause nausea and vomiting. Always use our AI Tree Identifier to confirm species identification before harvesting any part of a tree for consumption or medicinal use, and cross-reference with local foraging guides and expert advice.
            </p>

            <h3>Professional Applications of AI Tree Identification</h3>
            <p>
              Beyond hobbyist use, professional arborists, urban foresters, landscape architects, insurance adjusters, and real estate professionals regularly need to identify tree species quickly and accurately. The species of a tree can determine its value for lumber, its risk profile during storms, its maintenance requirements, its lifespan, and whether it is protected under local heritage tree ordinances. Our AI Tree Identifier provides the fast, reliable species identification these professionals need in the field.
            </p>

            <h3>Start Your Tree Identification Journey</h3>
            <p>
              Whether you're identifying trees for professional, educational, safety, or simply exploratory reasons, Tree Identifier makes the process effortless and accurate. Our AI tool is available 24/7, works on any device with a browser, requires no installation, and is completely free. Upload your first tree photo today and discover the remarkable world of trees waiting to be named and understood. Once you start identifying the trees around you, you'll never look at a forest the same way again.
            </p>
            <p>
              Want to try leaf-specific identification? Visit our <Link href="/identify-tree-by-leaf">Identify a Tree by Leaf</Link> tool, which is specially optimized for leaf photo analysis. Or learn more <Link href="/about">about our technology and mission</Link> to make botanical knowledge universally accessible.
            </p>
          </article>
        </div>
      </section>

      {/* INTERNAL LINKS CTA */}
      <section className="section" style={{ borderTop: '1px solid var(--card-border)' }}>
        <div className="section-inner">
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <h2 className="section-title" style={{ fontSize: '2rem' }}>Explore More Tools</h2>
          </div>
          <div className="grid-3">
            {[
              { href: '/identify-tree-by-leaf', icon: '🍃', title: 'Leaf Identifier', desc: 'Specialized AI analysis optimized for leaf photos. Great for fallen leaves and pressed specimens.' },
              { href: '/result', icon: '📋', title: 'View Sample Result', desc: 'See a sample tree identification result to understand what information our AI provides.' },
              { href: '/about', icon: '🔬', title: 'Our Technology', desc: 'Learn how our Groq-powered AI achieves 97% accuracy across 50,000+ tree species.' },
            ].map((item) => (
              <Link href={item.href} key={item.href} style={{ textDecoration: 'none' }}>
                <div className="card" style={{ height: '100%' }}>
                  <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{item.icon}</div>
                  <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem', fontWeight: 700, color: 'var(--white)', marginBottom: '0.5rem' }}>{item.title}</h3>
                  <p style={{ color: 'var(--gray-mid)', fontSize: '0.88rem', lineHeight: 1.6 }}>{item.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
