import Layout from '../components/Layout';
import Link from 'next/link';
import UploadTool from '../components/UploadTool';

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "url": "https://treeidentifier.online/oak-tree-identifier",
      "name": "Oak Tree Identifier — Free AI Oak Tree Identification Tool",
      "description": "Identify oak trees instantly with AI. Upload a photo of oak leaves, acorns, or bark and get accurate species identification with detailed botanical information.",
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://treeidentifier.online/" },
          { "@type": "ListItem", "position": 2, "name": "Oak Tree Identifier", "item": "https://treeidentifier.online/oak-tree-identifier" }
        ]
      }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "How do I identify an oak tree?", "acceptedAnswer": { "@type": "Answer", "text": "Oak trees are identified by their distinctive lobed leaves, acorn fruits, and rough furrowed bark. Upload a photo to our AI tool for instant identification." } },
        { "@type": "Question", "name": "How many species of oak trees are there?", "acceptedAnswer": { "@type": "Answer", "text": "There are over 500 species of oak trees worldwide, belonging to the genus Quercus. Our AI can identify all major species." } },
        { "@type": "Question", "name": "What does an oak leaf look like?", "acceptedAnswer": { "@type": "Answer", "text": "Oak leaves typically have a distinctive lobed shape with rounded or pointed tips depending on the species. They range from 5-30cm in length." } },
        { "@type": "Question", "name": "How long do oak trees live?", "acceptedAnswer": { "@type": "Answer", "text": "Oak trees are among the longest-lived trees, with many species surviving 500-1000 years. The oldest known oak trees are over 1,000 years old." } },
        { "@type": "Question", "name": "Are oak trees deciduous or evergreen?", "acceptedAnswer": { "@type": "Answer", "text": "Most oak trees are deciduous, losing their leaves in autumn. However, some species like the Live Oak are evergreen and retain leaves year-round." } },
      ]
    }
  ]
};

const features = [
  { icon: '🌰', title: 'Acorn Identification', desc: 'Identify oak species from acorn shape, size, and cup characteristics unique to each oak variety.' },
  { icon: '🍂', title: 'Leaf Analysis', desc: 'Our AI analyzes lobe depth, shape, and margin patterns that distinguish 500+ oak species worldwide.' },
  { icon: '🪵', title: 'Bark Recognition', desc: 'Identify oaks from bark texture, color, and furrow patterns — works even without leaves in winter.' },
  { icon: '⚡', title: 'Instant Results', desc: 'Get oak species identification in under 3 seconds with scientific name, habitat, and care information.' },
  { icon: '🌍', title: 'All Oak Species', desc: 'Covers all 500+ oak species from Red Oak and White Oak to rare regional varieties across every continent.' },
  { icon: '📊', title: 'Confidence Score', desc: 'Every identification includes an AI confidence percentage so you know how certain the result is.' },
];

const oakSpecies = [
  { name: 'English Oak', sci: 'Quercus robur', region: 'Europe', note: 'Most common European oak' },
  { name: 'Red Oak', sci: 'Quercus rubra', region: 'North America', note: 'Fast-growing, brilliant autumn color' },
  { name: 'White Oak', sci: 'Quercus alba', region: 'Eastern USA', note: 'Rounded lobes, sweet acorns' },
  { name: 'Live Oak', sci: 'Quercus virginiana', region: 'SE USA', note: 'Evergreen, spreading canopy' },
  { name: 'Pin Oak', sci: 'Quercus palustris', region: 'North America', note: 'Pointed lobes, pyramidal form' },
  { name: 'Bur Oak', sci: 'Quercus macrocarpa', region: 'North America', note: 'Largest acorns of any native oak' },
  { name: 'Cork Oak', sci: 'Quercus suber', region: 'Mediterranean', note: 'Commercial cork producer' },
  { name: 'Holm Oak', sci: 'Quercus ilex', region: 'Mediterranean', note: 'Evergreen, holly-like leaves' },
];

const faqs = [
  { q: 'How do I identify an oak tree by its leaves?', a: 'Oak leaves have a distinctive lobed shape. Red oak group leaves have pointed lobe tips, while white oak group leaves have rounded lobes. Upload a clear photo of an oak leaf to our AI tool for instant species identification with 97% accuracy.' },
  { q: 'What is the difference between Red Oak and White Oak?', a: 'Red oaks have pointed leaf lobe tips and darker acorns that take 2 years to mature. White oaks have rounded leaf lobe tips, lighter bark, and sweeter acorns that mature in one year. Our AI can distinguish between them instantly from a leaf photo.' },
  { q: 'How can I identify an oak tree in winter without leaves?', a: 'In winter, identify oaks by their bark (deeply furrowed and gray-brown), their persistent dried leaves that often remain on lower branches, their clustered terminal buds, and fallen acorns beneath the tree. Our AI works with bark photos too.' },
  { q: 'Are all oak trees native to North America?', a: 'No — while North America has around 90 native oak species, oaks are found worldwide. Europe, Asia, North Africa, and Central America all have native oak species. Our database covers 500+ species from every continent.' },
  { q: 'Can oak trees be poisonous?', a: 'Oak leaves and acorns contain tannins which are toxic to horses, cattle, and some other animals in large quantities. Raw acorns can also cause digestive issues in humans, though they have been processed and eaten by humans for thousands of years after leaching.' },
  { q: 'How fast do oak trees grow?', a: 'Growth rate varies by species. Red oaks are relatively fast-growing at 30-60cm per year. White oaks grow more slowly at 15-30cm per year. Most oaks are considered slow to moderate growers compared to other trees.' },
];

export default function OakTreeIdentifier() {
  return (
    <Layout
      meta={{
        title: 'Oak Tree Identifier — Free AI Oak Tree Identification Online',
        description: 'Identify any oak tree species instantly with our free AI tool. Upload a photo of oak leaves, acorns, or bark. Covers all 500+ oak species including Red Oak, White Oak, English Oak & more.',
        canonical: 'https://treeidentifier.ai/oak-tree-identifier',
        schema,
      }}
      breadcrumbs={[{ label: 'Oak Tree Identifier' }]}
    >
      {/* HERO */}
      <section style={{
        position: 'relative',
        paddingTop: '70px',
        minHeight: '75vh',
        display: 'flex',
        alignItems: 'center',
        background: `linear-gradient(135deg, rgba(5,5,5,0.85) 0%, rgba(13,40,24,0.75) 100%), url('/oak.jpg') center/cover no-repeat`,
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '4rem 2rem', width: '100%' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
            <div>
              <span className="green-tag">🌰 Oak Species AI</span>
              <h1 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', color: 'var(--white)', lineHeight: 1.1, margin: '1rem 0 1.2rem' }}>
                Oak Tree Identifier<br />
                <span style={{ color: 'var(--bright-green)' }}>Powered by AI</span>
              </h1>
              <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '2rem' }}>
                Instantly identify any of the 500+ oak species worldwide. Upload a photo of oak leaves, acorns, or bark and our AI delivers accurate species identification in seconds — completely free.
              </p>
              <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
                {[['500+', 'Oak Species'], ['97%', 'Accuracy'], ['3s', 'Results'], ['Free', 'Always']].map(([n, l]) => (
                  <div key={l}>
                    <div style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--bright-green)', fontFamily: 'Playfair Display, serif', lineHeight: 1 }}>{n}</div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--gray-mid)', marginTop: '0.2rem' }}>{l}</div>
                  </div>
                ))}
              </div>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link href="/identify-tree-by-leaf" className="btn-outline">🍃 Try Leaf Identifier</Link>
                <Link href="/tree-identifier" className="btn-outline">🌳 General Tree ID</Link>
              </div>
            </div>

            <div style={{ background: 'var(--card-bg)', border: '1px solid var(--bright-green)', borderRadius: '20px', padding: '2.5rem' }}>
              <h2 style={{ fontFamily: 'Inter, sans-serif', fontSize: '1.1rem', fontWeight: 700, color: 'var(--white)', marginBottom: '1.5rem' }}>🌰 Upload Oak Photo</h2>
              <UploadTool mode="tree" />
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="section" style={{ background: 'var(--deep-black)' }}>
        <div className="section-inner">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="section-label">AI Capabilities</span>
            <h2 className="section-title">What Our Oak Tree AI Analyzes</h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>Our AI examines multiple botanical features to deliver precise oak species identification.</p>
          </div>
          <div className="grid-3">
            {features.map((f, i) => (
              <div className="card" key={i}>
                <div className="feature-icon-box">{f.icon}</div>
                <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem', fontWeight: 700, color: 'var(--white)', marginBottom: '0.6rem' }}>{f.title}</h3>
                <p style={{ color: 'var(--gray-mid)', fontSize: '0.88rem', lineHeight: 1.6 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OAK SPECIES TABLE */}
      <section className="section">
        <div className="section-inner">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="section-label">Species Database</span>
            <h2 className="section-title">Common Oak Species We Identify</h2>
          </div>
          <div className="grid-4">
            {oakSpecies.map((s, i) => (
              <div className="card" key={i}>
                <div style={{ fontSize: '2rem', marginBottom: '0.8rem' }}>🌳</div>
                <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.95rem', fontWeight: 700, color: 'var(--white)', marginBottom: '0.3rem' }}>{s.name}</h3>
                <p style={{ color: 'var(--bright-green)', fontSize: '0.78rem', fontStyle: 'italic', marginBottom: '0.4rem' }}>{s.sci}</p>
                <p style={{ color: 'var(--gray-mid)', fontSize: '0.8rem', marginBottom: '0.3rem' }}>📍 {s.region}</p>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.78rem' }}>{s.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO CONTENT */}
      <section className="section" style={{ background: 'var(--deep-black)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 2rem' }}>
          <article className="prose-content" style={{ maxWidth: '100%' }}>
            <span className="green-tag">Complete Oak Guide</span>
            <h2>The Complete Guide to Oak Tree Identification</h2>
            <p>Oak trees are among the most iconic and ecologically significant trees in the world. Belonging to the genus <em>Quercus</em>, there are over 500 recognized species of oak trees distributed across the Northern Hemisphere, from the temperate forests of North America and Europe to the subtropical woodlands of Asia and Central America. Our <strong>free AI Oak Tree Identifier</strong> makes it effortless to identify any oak species from a single photograph, delivering expert-level botanical identification in seconds.</p>

            <h3>How to Identify Oak Trees — Key Features</h3>
            <p>Oak trees possess several distinctive features that set them apart from other tree species. The most reliable identification feature is the <strong>acorn</strong> — a nut partially enclosed in a scaly or fringed cupule. No other tree produces acorns, making this the single most definitive identification feature when present. However, oaks only produce acorns after reaching maturity (typically 20-50 years), so other features must be used for younger trees.</p>
            <p>Oak <strong>leaves</strong> are the most commonly used identification feature and come in a remarkable variety of shapes across species. The classic lobed leaf shape — familiar from the English Oak — is characteristic of many species, but oak leaves can also be entire (without lobes), toothed, or even holly-like in evergreen species. Within the lobed-leaf group, the key distinction is between the <strong>Red Oak group</strong> (pointed lobe tips) and the <strong>White Oak group</strong> (rounded lobe tips). This single characteristic divides most of the 500+ species into two broad categories.</p>
            <p>Oak <strong>bark</strong> is another reliable identification feature, especially useful in winter when deciduous oaks have shed their leaves. Young oak bark is typically smooth and gray-brown. As trees age, the bark becomes deeply furrowed and gray, with ridge patterns that vary characteristically between species. Cork oak (<em>Quercus suber</em>) has the most distinctive bark — a thick, spongy, deeply fissured outer layer that has been harvested commercially for cork products for centuries.</p>

            <h3>The Two Major Oak Groups</h3>
            <p>Botanists classify oaks into two major groups based on a combination of leaf shape, acorn maturation time, and other characteristics. Understanding these groups is fundamental to oak identification.</p>
            <p>The <strong>Red Oak group</strong> (also called Black Oak group or section Lobatae) contains species primarily from North America. Their leaves have pointed lobe tips with bristle-like extensions. Their acorns take two years to mature, meaning a tree carries both first-year and second-year acorns simultaneously. The acorns of red oak group species are generally more bitter due to higher tannin content. Common red oak group species include Northern Red Oak, Pin Oak, Scarlet Oak, Black Oak, and Willow Oak.</p>
            <p>The <strong>White Oak group</strong> (section Quercus) is more diverse globally, with species throughout Europe, Asia, and North America. Their leaves have rounded lobe tips without bristle tips. Acorns mature in a single season and are generally less bitter and more palatable to wildlife and humans alike. Common white oak group species include English Oak, White Oak, Bur Oak, Chestnut Oak, and Live Oak. The Cork Oak and Holm Oak are also members of the white oak group.</p>

            <h3>Identifying Oaks by Season</h3>
            <p>Oak identification challenges vary by season, and our AI Oak Tree Identifier is optimized to handle photos taken at any time of year. In <strong>spring</strong>, young emerging oak leaves and distinctive hanging catkins (pollen flowers) provide excellent identification features. The reddish or yellowish color of emerging oak leaves is species-specific. In <strong>summer</strong>, fully mature leaves in their final shape, size, and color provide the most reliable identification data.</p>
            <p>In <strong>autumn</strong>, ripening acorns provide definitive identification, and the distinctive fall color of each species — brilliant red in Red Oak, golden-brown in White Oak, deep burgundy in Scarlet Oak — makes identification visually striking. In <strong>winter</strong>, bare-branched deciduous oaks can still be identified from bark patterns, persistent dried leaves (called marcescence), and the distinctive clustered terminal buds that are characteristic of oaks.</p>

            <h3>Ecological Importance of Oak Trees</h3>
            <p>Oak trees are ecological keystones — species upon which entire ecosystems depend. A single mature oak can support over 2,300 species of insects, birds, and mammals. Oak woodland is among the most biodiverse terrestrial habitats in the temperate world. Hundreds of species of moths and butterflies depend on oak leaves as their larval food plant. Acorns are critical food sources for jays, squirrels, woodpeckers, deer, wild boar, and countless other species.</p>
            <p>The relationship between oaks and jays is particularly important for forest regeneration. Jays collect and cache thousands of acorns each autumn as winter food stores, burying them in the ground. Many of these cached acorns are never retrieved and germinate into new oak trees, making jays the primary agent of oak forest dispersal and regeneration. This mutualistic relationship has shaped temperate forests for millions of years.</p>

            <h3>Oak Trees in Human Culture and History</h3>
            <p>Few trees have played a more prominent role in human history and culture than the oak. Oak timber was the primary material for shipbuilding during the Age of Sail — the British Royal Navy at its peak required the timber of thousands of oak trees for a single warship. Oak has been prized for furniture, flooring, wine barrels, and construction for thousands of years due to its exceptional strength, durability, and attractive grain.</p>
            <p>Cork, harvested from the bark of Cork Oak (<em>Quercus suber</em>), has been used to seal wine bottles for centuries and remains the premium closure material for fine wines worldwide. Oak galls — abnormal growths produced by oak trees in response to gall wasp larvae — were the primary source of iron gall ink used in European writing and art from the medieval period through the 19th century.</p>

            <h3>Using Our Oak Tree Identifier</h3>
            <p>Our <strong>AI Oak Tree Identifier</strong> uses advanced computer vision trained on millions of oak tree photographs to deliver accurate species identification. For best results, photograph a mature, undamaged leaf from directly above on a light background. Including an acorn in the photo dramatically increases identification accuracy. For bark photos, shoot straight-on from about 30cm distance in good natural light.</p>
            <p>The tool works equally well for identifying oaks in North America, Europe, Asia, and beyond. Whether you're identifying a garden tree, a forest specimen, or an urban street tree, simply <Link href="/tree-identifier">upload your photo</Link> and get your result in seconds. You can also try our dedicated <Link href="/identify-tree-by-leaf">leaf identification tool</Link> for oak leaf-specific analysis.</p>
          </article>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="section-label">FAQs</span>
            <h2 className="section-title">Oak Tree Identification FAQs</h2>
          </div>
          {faqs.map((faq, i) => (
            <div className="faq-item" key={i}>
              <h3>{faq.q}</h3>
              <p>{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '4rem 2rem', background: 'linear-gradient(135deg, var(--dark-green), var(--forest-green))', borderTop: '1px solid var(--card-border)', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', color: 'var(--white)', marginBottom: '1rem' }}>Identify Your Oak Tree Now</h2>
        <p style={{ color: 'var(--pale-green)', marginBottom: '2rem' }}>Free, instant, and accurate — no registration required.</p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/maple-tree-identifier" className="btn-outline" style={{ borderColor: 'var(--pale-green)', color: 'var(--pale-green)' }}>🍁 Maple Identifier</Link>
          <Link href="/pine-tree-identifier" className="btn-outline" style={{ borderColor: 'var(--pale-green)', color: 'var(--pale-green)' }}>🌲 Pine Identifier</Link>
          <Link href="/identify-tree-by-leaf" className="btn-outline" style={{ borderColor: 'var(--pale-green)', color: 'var(--pale-green)' }}>🍃 Leaf Identifier</Link>
        </div>
      </section>
    </Layout>
  );
}
