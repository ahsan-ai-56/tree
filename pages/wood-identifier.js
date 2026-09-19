import Layout from '../components/Layout';
import Link from 'next/link';
import UploadTool from '../components/UploadTool';

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Wood Identifier — AI Wood Type Identification Tool",
    "description": "Free AI-powered wood identifier tool. Upload a photo of any wood grain, timber, or lumber to identify the wood species, hardness, grain pattern, and uses instantly.",
    "url": "https://treeidentifier.online/wood-identifier",
  },
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Wood Identifier",
    "applicationCategory": "UtilitiesApplication",
    "operatingSystem": "Web Browser",
    "description": "AI wood identification tool — identify wood species from photos of wood grain, timber, planks, or finished wood.",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
    "url": "https://treeidentifier.online/wood-identifier",
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How do I identify wood type from a photo?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Upload a clear photo of the wood grain, cross-section, or surface to our AI wood identifier. The AI analyzes grain pattern, color, texture, and pore structure to identify the wood species. For best results, photograph the wood in natural daylight with the grain clearly visible. A cross-section cut shows the most identifying features."
        }
      },
      {
        "@type": "Question",
        "name": "What types of wood can this tool identify?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our wood identifier can identify common hardwoods (oak, walnut, maple, cherry, mahogany, teak, ash, birch), softwoods (pine, cedar, fir, spruce, redwood), and exotic woods. It analyzes grain pattern, color, pore structure, and texture to determine the wood species and provide information about hardness, uses, and working properties."
        }
      },
      {
        "@type": "Question",
        "name": "What is the difference between hardwood and softwood?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Hardwood comes from deciduous trees (oak, walnut, maple, cherry) and is generally denser and more durable. Softwood comes from coniferous trees (pine, cedar, fir, spruce) and is generally lighter and easier to work. The terms refer to the tree type, not always the actual hardness — balsa wood is technically a hardwood but is very soft, while yew is a softwood that is very hard."
        }
      }
    ]
  }
];

const woodFeatures = [
  { icon: '🔬', title: 'Grain Analysis', desc: 'AI analyzes fine and coarse grain patterns to identify wood species accurately' },
  { icon: '🎨', title: 'Color & Texture', desc: 'Detects heartwood vs sapwood color variations and surface texture characteristics' },
  { icon: '🌳', title: 'Species ID', desc: 'Identifies 100+ wood species from hardwoods to softwoods and exotic timbers' },
  { icon: '💪', title: 'Hardness Rating', desc: 'Provides Janka hardness rating and durability information for each wood' },
  { icon: '🪚', title: 'Working Properties', desc: 'Tells you how the wood works — carving, turning, finishing characteristics' },
  { icon: '🏗️', title: 'Best Uses', desc: 'Recommends ideal applications — furniture, flooring, construction, crafts' },
];

const commonWoods = [
  { name: 'Oak', hardness: '1290 lbf', color: 'Light to medium brown', grain: 'Coarse, open grain with prominent rays', uses: 'Furniture, flooring, barrels, cabinets' },
  { name: 'Walnut', hardness: '1010 lbf', color: 'Chocolate to dark brown', grain: 'Straight to wavy, fine texture', uses: 'Fine furniture, gunstocks, cabinets, carvings' },
  { name: 'Maple', hardness: '1450 lbf', color: 'Cream to light brown', grain: 'Fine, uniform, often with figure', uses: 'Flooring, cutting boards, musical instruments' },
  { name: 'Cherry', hardness: '950 lbf', color: 'Light pink to rich red-brown', grain: 'Fine, straight, satiny surface', uses: 'Fine furniture, cabinets, musical instruments' },
  { name: 'Pine', hardness: '870 lbf', color: 'Pale yellow to light brown', grain: 'Straight with prominent resin canals', uses: 'Construction, furniture, flooring, trim' },
  { name: 'Teak', hardness: '1070 lbf', color: 'Golden to dark brown', grain: 'Straight, coarse, oily feel', uses: 'Outdoor furniture, boat decking, flooring' },
  { name: 'Mahogany', hardness: '900 lbf', color: 'Pink to deep red-brown', grain: 'Straight to interlocked, ribbon figure', uses: 'Fine furniture, boat building, musical instruments' },
  { name: 'Cedar', hardness: '350 lbf', color: 'Reddish-brown to pink', grain: 'Straight, fine, aromatic', uses: 'Closets, chests, outdoor siding, fence posts' },
];

export default function WoodIdentifier() {
  return (
    <Layout
      meta={{
        title: 'Wood Identifier — AI Wood Type Identification from Photo | Free Tool',
        description: 'Free AI wood identifier tool. Upload a photo of any wood grain, timber, or lumber to instantly identify the wood species, hardness (Janka rating), grain pattern, and best uses.',
        canonical: 'https://treeidentifier.online/wood-identifier',
        schema,
      }}
    >
      {/* HERO */}
      <section style={{
        background: `linear-gradient(180deg, rgba(5,5,5,0.75) 0%, var(--black) 100%), url('https://images.unsplash.com/photo-1542621334-a254cf47733d?w=1600&q=80') center/cover no-repeat`,
        padding: '100px 2rem 5rem',
        textAlign: 'center',
      }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(64,192,116,0.1)', border: '1px solid rgba(64,192,116,0.2)', borderRadius: '50px', padding: '6px 16px', marginBottom: '1.5rem' }}>
            <span style={{ color: 'var(--bright-green)', fontSize: '0.82rem', fontWeight: 600 }}>🪵 FREE AI WOOD IDENTIFIER</span>
          </div>
          <h1 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', color: 'var(--white)', lineHeight: 1.1, marginBottom: '1.2rem' }}>
            Wood Identifier
          </h1>
          <p style={{ fontSize: '1.15rem', color: 'rgba(255,255,255,0.75)', marginBottom: '2.5rem', lineHeight: 1.7 }}>
            Upload a photo of any wood grain, timber, plank, or finished wood piece — our AI identifies the wood species, hardness, grain pattern, and best uses instantly. 100% free, no signup.
          </p>

          {/* UPLOAD TOOL */}
          <div style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)', borderRadius: '20px', padding: '2rem', textAlign: 'left' }}>
            <UploadTool mode="wood" />
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="section" style={{ background: 'var(--deep-black)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2rem', color: 'var(--white)', marginBottom: '1rem' }}>What Our Wood Identifier Detects</h2>
            <p style={{ color: 'var(--gray-mid)', maxWidth: '600px', margin: '0 auto' }}>Advanced AI analyzes grain pattern, color, pore structure, and texture to identify wood species and provide detailed woodworking information.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {woodFeatures.map((f, i) => (
              <div key={i} className="card">
                <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{f.icon}</div>
                <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '1.05rem', fontWeight: 700, color: 'var(--white)', marginBottom: '0.5rem' }}>{f.title}</h3>
                <p style={{ color: 'var(--gray-mid)', fontSize: '0.9rem', lineHeight: 1.6, margin: 0 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMMON WOODS TABLE */}
      <section className="section">
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2rem', color: 'var(--white)', marginBottom: '1rem' }}>Common Wood Species — Quick Reference</h2>
            <p style={{ color: 'var(--gray-mid)' }}>Our AI identifies all of these and 100+ more wood types from photos.</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {commonWoods.map((wood, i) => (
              <div key={i} style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)', borderRadius: '14px', padding: '1.4rem', display: 'grid', gridTemplateColumns: '150px 1fr 1fr 2fr', gap: '1rem', alignItems: 'center' }}>
                <div>
                  <div style={{ color: 'var(--white)', fontWeight: 700, fontSize: '1rem' }}>{wood.name}</div>
                  <div style={{ color: 'var(--bright-green)', fontSize: '0.78rem', fontWeight: 600, marginTop: '0.2rem' }}>Janka: {wood.hardness}</div>
                </div>
                <div>
                  <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.72rem', fontWeight: 600, marginBottom: '0.2rem', textTransform: 'uppercase' }}>Color</div>
                  <div style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.85rem' }}>{wood.color}</div>
                </div>
                <div>
                  <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.72rem', fontWeight: 600, marginBottom: '0.2rem', textTransform: 'uppercase' }}>Grain</div>
                  <div style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.85rem' }}>{wood.grain}</div>
                </div>
                <div>
                  <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.72rem', fontWeight: 600, marginBottom: '0.2rem', textTransform: 'uppercase' }}>Best Uses</div>
                  <div style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.85rem' }}>{wood.uses}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW TO USE */}
      <section className="section" style={{ background: 'var(--deep-black)' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 2rem', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2rem', color: 'var(--white)', marginBottom: '3rem' }}>How to Get the Best Results</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
            {[
              { step: '01', icon: '📸', title: 'Take a Clear Photo', desc: 'Photograph in natural light. Show the grain clearly — end grain or cross-section gives the best results.' },
              { step: '02', icon: '⬆️', title: 'Upload the Image', desc: 'Drag and drop or click to upload. JPG, PNG or WEBP. Under 10MB for best performance.' },
              { step: '03', icon: '✅', title: 'Get Instant Results', desc: 'AI identifies wood species, hardness rating, grain type, and recommended uses in seconds.' },
            ].map((s, i) => (
              <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.8rem' }}>
                <div style={{ width: '56px', height: '56px', background: 'linear-gradient(135deg, var(--forest-green), var(--mid-green))', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem' }}>{s.icon}</div>
                <div style={{ color: 'var(--bright-green)', fontSize: '0.75rem', fontWeight: 700 }}>STEP {s.step}</div>
                <div style={{ color: 'var(--white)', fontWeight: 700 }}>{s.title}</div>
                <p style={{ color: 'var(--gray-mid)', fontSize: '0.85rem', lineHeight: 1.6, margin: 0 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 2rem' }}>
          <h2 style={{ fontSize: '2rem', color: 'var(--white)', marginBottom: '2rem', textAlign: 'center' }}>Frequently Asked Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {[
              { q: 'How do I identify wood type from a photo?', a: 'Upload a clear photo of the wood grain or cross-section. Our AI analyzes grain pattern, color, pore structure, and texture to identify the species. Natural light and a sharp image of the grain give the best results.' },
              { q: 'What types of wood can this tool identify?', a: 'Our wood identifier recognizes 100+ species including common hardwoods (oak, walnut, maple, cherry, ash, mahogany, teak), softwoods (pine, cedar, fir, spruce, redwood), and many exotic and tropical woods.' },
              { q: 'What is the difference between hardwood and softwood?', a: 'Hardwood comes from deciduous trees (oak, walnut, maple) and is generally denser. Softwood comes from conifers (pine, cedar, fir) and is lighter. The terms refer to the tree type — some "softwoods" are harder than some "hardwoods."' },
              { q: 'Can I identify wood from furniture or flooring?', a: 'Yes — photograph the surface grain clearly in good lighting. For furniture, try to photograph an unfinished or lightly finished area if possible. For flooring, a close-up of the plank surface works well.' },
              { q: 'Is the wood identifier free to use?', a: 'Yes — completely free, no signup required. Upload as many photos as you need to identify different wood types.' },
            ].map((faq, i) => (
              <div key={i} style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)', borderRadius: '12px', padding: '1.4rem' }}>
                <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.95rem', fontWeight: 700, color: 'var(--white)', marginBottom: '0.6rem' }}>{faq.q}</h3>
                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.88rem', lineHeight: 1.7, margin: 0 }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OTHER TOOLS */}
      <section className="section" style={{ background: 'var(--deep-black)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 2rem', textAlign: 'center' }}>
          <h2 style={{ fontSize: '1.8rem', color: 'var(--white)', marginBottom: '2rem' }}>More Free Tree & Plant Identification Tools</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem' }}>
            {[
              { href: '/tree-identifier', icon: '🌳', label: 'Tree Identifier' },
              { href: '/identify-tree-by-leaf', icon: '🍃', label: 'Leaf Identifier' },
              { href: '/oak-tree-identifier', icon: '🌰', label: 'Oak Identifier' },
              { href: '/maple-tree-identifier', icon: '🍁', label: 'Maple Identifier' },
              { href: '/pine-tree-identifier', icon: '🌲', label: 'Pine Identifier' },
              { href: '/fruit-tree-identifier', icon: '🍎', label: 'Fruit Tree ID' },
            ].map((tool, i) => (
              <Link key={i} href={tool.href} style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)', borderRadius: '14px', padding: '1.2rem', textAlign: 'center', textDecoration: 'none', display: 'block', transition: 'border-color 0.2s' }}>
                <div style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>{tool.icon}</div>
                <div style={{ color: 'var(--white)', fontWeight: 600, fontSize: '0.9rem' }}>{tool.label}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '4rem 2rem', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', color: 'var(--white)', marginBottom: '1rem' }}>Identify Any Wood Instantly</h2>
        <p style={{ color: 'var(--gray-mid)', marginBottom: '2rem' }}>Free AI wood identification — upload a photo and get results in seconds.</p>
        <Link href="#" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="btn-primary" style={{ fontSize: '1rem', padding: '14px 36px' }}>
          🪵 Identify Wood Now
        </Link>
      </section>
    </Layout>
  );
}
