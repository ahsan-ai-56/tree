import Layout from '../components/Layout';
import Link from 'next/link';
import UploadTool from '../components/UploadTool';

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "url": "https://treeidentifier.ai/maple-tree-identifier",
      "name": "Maple Tree Identifier — Free AI Maple Tree Identification Tool",
      "description": "Identify maple trees instantly with AI. Upload a photo of maple leaves, seeds, or bark for accurate species identification. Covers Sugar Maple, Red Maple, Silver Maple and 100+ species.",
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://treeidentifier.ai" },
          { "@type": "ListItem", "position": 2, "name": "Maple Tree Identifier", "item": "https://treeidentifier.ai/maple-tree-identifier" }
        ]
      }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "How do I identify a maple tree?", "acceptedAnswer": { "@type": "Answer", "text": "Maple trees are identified by their palmate lobed leaves, opposite leaf arrangement, and winged samara seed pairs. Upload a photo to our AI for instant identification." } },
        { "@type": "Question", "name": "What is the difference between Sugar Maple and Red Maple?", "acceptedAnswer": { "@type": "Answer", "text": "Sugar maple leaves have 5 lobes with U-shaped sinuses and turn orange-gold in fall. Red maple has 3-5 lobes with V-shaped sinuses and turns brilliant red in fall." } },
      ]
    }
  ]
};

const mapleSpecies = [
  { name: 'Sugar Maple', sci: 'Acer saccharum', note: 'Maple syrup source, brilliant fall color' },
  { name: 'Red Maple', sci: 'Acer rubrum', note: 'Most common US maple, vivid red autumn' },
  { name: 'Silver Maple', sci: 'Acer saccharinum', note: 'Fast-growing, silver leaf undersides' },
  { name: 'Japanese Maple', sci: 'Acer palmatum', note: 'Ornamental, deeply dissected leaves' },
  { name: 'Norway Maple', sci: 'Acer platanoides', note: 'Milky sap, popular street tree' },
  { name: 'Box Elder', sci: 'Acer negundo', note: 'Compound leaves, fast growing' },
  { name: 'Sycamore Maple', sci: 'Acer pseudoplatanus', note: 'European, large 5-lobed leaves' },
  { name: 'Bigleaf Maple', sci: 'Acer macrophyllum', note: 'Largest maple leaves up to 60cm' },
];

const faqs = [
  { q: 'How do I identify a maple tree by its leaf?', a: 'Maple leaves are palmate — meaning they have multiple lobes radiating from a central point like a hand. Most maple species have 3-7 lobes. The key distinction between species is the shape of the sinuses (gaps between lobes): U-shaped sinuses indicate Sugar Maple, V-shaped sinuses indicate Red Maple. Upload your leaf photo to our AI for instant precise identification.' },
  { q: 'What makes maple seeds unique?', a: 'Maple seeds are called samaras or "helicopters" — winged seeds that spin as they fall, slowing their descent and allowing wind dispersal. Each species has distinctively shaped samaras. Sugar maple samaras have nearly parallel wings, while Red maple samaras have wings spread at a wider angle. These are excellent identification features.' },
  { q: 'Which maple tree produces maple syrup?', a: 'Sugar Maple (Acer saccharum) is the primary species used for maple syrup production. Its sap contains the highest sugar content (2-5%) of any maple species. Black Maple (Acer nigrum) is also used commercially. Red Maple and Silver Maple can also be tapped but produce sap with lower sugar content.' },
  { q: 'Are maple trees native to Asia?', a: 'Yes — Asia actually has the greatest diversity of maple species. Japan alone has numerous native maple species, many of which are prized as ornamental trees worldwide. Japanese Maple (Acer palmatum) and its cultivars are among the most popular ornamental trees in gardens globally.' },
  { q: 'How do maple trees change color in autumn?', a: 'Maple autumn color varies dramatically by species. Sugar Maple produces the most spectacular display — leaves turn orange, red, and yellow. Red Maple turns brilliant scarlet. Japanese Maple varieties range from crimson to purple. The colors result from the breakdown of green chlorophyll revealing underlying pigments, combined with new anthocyanin production stimulated by cool temperatures.' },
  { q: 'Can I identify a maple tree in winter?', a: 'Yes. In winter, identify maples by their opposite bud arrangement (most trees have alternate buds), the distinctive winged samara seeds that often persist on the tree through winter, and the gray-brown furrowed bark that varies characteristically between species. Our AI can analyze bark photos for winter identification.' },
];

export default function MapleTreeIdentifier() {
  return (
    <Layout
      meta={{
        title: 'Maple Tree Identifier — Free AI Maple Tree Identification Online',
        description: 'Identify any maple tree species instantly with our free AI tool. Upload a photo of maple leaves, seeds, or bark. Covers Sugar Maple, Red Maple, Japanese Maple, Silver Maple and 100+ species.',
        canonical: 'https://treeidentifier.ai/maple-tree-identifier',
        schema,
      }}
      breadcrumbs={[{ label: 'Maple Tree Identifier' }]}
    >
      {/* HERO */}
      <section style={{
        position: 'relative', paddingTop: '70px', minHeight: '75vh', display: 'flex', alignItems: 'center',
        background: `linear-gradient(135deg, rgba(5,5,5,0.8) 0%, rgba(13,40,24,0.7) 100%), url('https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=1600&q=80') center/cover no-repeat`,
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '4rem 2rem', width: '100%' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
            <div>
              <span className="green-tag">🍁 Maple Species AI</span>
              <h1 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', color: 'var(--white)', lineHeight: 1.1, margin: '1rem 0 1.2rem' }}>
                Maple Tree Identifier<br /><span style={{ color: 'var(--bright-green)' }}>Powered by AI</span>
              </h1>
              <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '2rem' }}>
                Instantly identify Sugar Maple, Red Maple, Japanese Maple, and 100+ maple species. Upload a leaf, samara, or bark photo — get accurate species identification in under 3 seconds.
              </p>
              <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
                {[['100+', 'Maple Species'], ['97%', 'Accuracy'], ['Free', 'Always'], ['3s', 'Results']].map(([n, l]) => (
                  <div key={l}>
                    <div style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--bright-green)', fontFamily: 'Playfair Display, serif', lineHeight: 1 }}>{n}</div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--gray-mid)', marginTop: '0.2rem' }}>{l}</div>
                  </div>
                ))}
              </div>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link href="/oak-tree-identifier" className="btn-outline">🌰 Oak Identifier</Link>
                <Link href="/identify-tree-by-leaf" className="btn-outline">🍃 Leaf Identifier</Link>
              </div>
            </div>
            <div style={{ background: 'var(--card-bg)', border: '1px solid var(--bright-green)', borderRadius: '20px', padding: '2.5rem' }}>
              <h2 style={{ fontFamily: 'Inter, sans-serif', fontSize: '1.1rem', fontWeight: 700, color: 'var(--white)', marginBottom: '1.5rem' }}>🍁 Upload Maple Photo</h2>
              <UploadTool mode="tree" />
            </div>
          </div>
        </div>
      </section>

      {/* SPECIES GRID */}
      <section className="section" style={{ background: 'var(--deep-black)' }}>
        <div className="section-inner">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="section-label">Species Database</span>
            <h2 className="section-title">Common Maple Species We Identify</h2>
          </div>
          <div className="grid-4">
            {mapleSpecies.map((s, i) => (
              <div className="card" key={i}>
                <div style={{ fontSize: '2rem', marginBottom: '0.8rem' }}>🍁</div>
                <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.95rem', fontWeight: 700, color: 'var(--white)', marginBottom: '0.3rem' }}>{s.name}</h3>
                <p style={{ color: 'var(--bright-green)', fontSize: '0.78rem', fontStyle: 'italic', marginBottom: '0.4rem' }}>{s.sci}</p>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.78rem' }}>{s.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO CONTENT */}
      <section className="section">
        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 2rem' }}>
          <article className="prose-content" style={{ maxWidth: '100%' }}>
            <span className="green-tag">Complete Maple Guide</span>
            <h2>Complete Guide to Maple Tree Identification</h2>
            <p>Maple trees are among the most beloved and recognizable trees in the world, celebrated for their spectacular autumn foliage, their production of maple syrup, and their graceful palmate leaves that have inspired national symbols, logos, and artistic motifs for centuries. The genus <em>Acer</em> contains over 130 species distributed across the Northern Hemisphere, with the greatest diversity found in Asia. Our <strong>free AI Maple Tree Identifier</strong> can identify all major maple species from a single photograph with 97% accuracy.</p>

            <h3>Key Features for Maple Tree Identification</h3>
            <p>The most diagnostic feature of maple trees is their <strong>opposite leaf arrangement</strong> — maple leaves grow in pairs directly across from each other on the branch. This immediately distinguishes maples from most other trees, which have alternate leaf arrangement. Combined with their characteristic palmate leaf shape, maples are among the easier tree genera to identify to genus level, even for beginners.</p>
            <p>The <strong>palmate leaf shape</strong> — with lobes radiating from a central point — is characteristic of most maple species. The number of lobes (typically 3-7), the depth of the sinuses between lobes, the shape of lobe tips, and the type of leaf margin (smooth, toothed, or lobed) all vary between species in characteristic ways that our AI has been trained to recognize.</p>
            <p>Maple <strong>samaras</strong> — the distinctive winged seeds often called "helicopters" or "whirligigs" — are among the most recognizable seed types of any tree. Samaras grow in pairs and spin as they fall, using aerodynamic drag to slow their descent and extend wind dispersal distance. The angle between the two wings of the samara pair, the size of the seed, and the shape of the wing are all species-specific features.</p>

            <h3>Sugar Maple vs Red Maple — Telling Them Apart</h3>
            <p>Sugar Maple and Red Maple are the two most common and important maple species in North America, and they are frequently confused. Understanding the differences between these two species is fundamental to maple identification. Sugar Maple (<em>Acer saccharum</em>) leaves have 5 lobes with deep U-shaped sinuses — the gaps between lobes are rounded at the bottom. The lobe tips are relatively blunt. Leaves are dark green above, pale green below with no hairs. In autumn, Sugar Maple produces one of the most spectacular color displays of any tree — brilliant orange, red, and yellow.</p>
            <p>Red Maple (<em>Acer rubrum</em>) leaves also have 3-5 lobes, but the sinuses are V-shaped — sharply angled rather than rounded. The lobe tips are more pointed. Leaves are lighter green above with a silvery-white underside that shimmers in the wind. In autumn, Red Maple turns brilliant scarlet red — often earlier in the season than Sugar Maple. Red Maple also blooms very early in spring, producing distinctive small red flowers before any leaves emerge — a reliable and beautiful identification feature.</p>

            <h3>Japanese Maple — The Ornamental King</h3>
            <p>Japanese Maple (<em>Acer palmatum</em>) and its hundreds of cultivated varieties are among the most popular ornamental trees in gardens worldwide. Native to Japan, Korea, and China, Japanese Maples have been cultivated for over 300 years, with breeders developing an extraordinary range of leaf shapes, sizes, and colors. Leaf forms range from the classic 5-7 lobed palmate shape to deeply dissected feathery varieties that resemble lace.</p>
            <p>Japanese Maple leaf colors include bright green, deep purple-red, variegated pink and white, and striking red varieties that hold their color through the entire growing season. In autumn, green-leaved Japanese Maples often turn brilliant scarlet or orange. The trees are typically small to medium-sized — rarely exceeding 8 meters — with a graceful, spreading form that makes them ideal specimen trees for gardens of all sizes.</p>

            <h3>Maple Syrup — The Sweetest Story in Dendrology</h3>
            <p>The production of maple syrup from Sugar Maple sap is one of the most uniquely North American food traditions. Indigenous peoples of the northeastern woodlands discovered that Sugar Maple sap, collected in late winter and early spring when freezing nights alternate with warm days, could be concentrated by evaporation into a sweet, amber syrup. This knowledge was adopted and commercialized by European settlers, and today maple syrup is a major agricultural product of Canada and the northeastern United States.</p>
            <p>The sap collection season — called "sugaring season" or "maple season" — typically runs from February to April. A mature Sugar Maple can produce 40-80 liters of sap per season, which is concentrated into approximately 1-2 liters of syrup through evaporation. It takes roughly 40 liters of sap to produce 1 liter of pure maple syrup. Canada produces approximately 70% of the world's maple syrup supply.</p>

            <h3>Using Our Maple Tree Identifier</h3>
            <p>Our <strong>AI Maple Tree Identifier</strong> has been specifically optimized to distinguish between maple species that can appear visually similar. For best results, photograph a fully mature leaf from directly above on a white background. Including fallen samaras dramatically increases identification accuracy. Our AI also works with bark photos — maple bark patterns are distinctive and change significantly with tree age.</p>
            <p>Whether you're identifying a garden Japanese Maple, a forest Sugar Maple, or a street-planted Norway Maple, simply upload your photo and get your result in seconds. Try our <Link href="/identify-tree-by-leaf">leaf identification tool</Link> for maple-specific leaf analysis, or use the <Link href="/tree-identifier">general tree identifier</Link> for any tree species.</p>
          </article>
        </div>
      </section>

      {/* FAQ */}
      <section className="section" style={{ background: 'var(--deep-black)' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="section-label">FAQs</span>
            <h2 className="section-title">Maple Tree Identification FAQs</h2>
          </div>
          {faqs.map((faq, i) => (
            <div className="faq-item" key={i}><h3>{faq.q}</h3><p>{faq.a}</p></div>
          ))}
        </div>
      </section>

      <section style={{ padding: '4rem 2rem', background: 'linear-gradient(135deg, var(--dark-green), var(--forest-green))', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', color: 'var(--white)', marginBottom: '1rem' }}>Identify Your Maple Tree Now</h2>
        <p style={{ color: 'var(--pale-green)', marginBottom: '2rem' }}>Free, instant, and accurate — covers all 100+ maple species.</p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/oak-tree-identifier" className="btn-outline" style={{ borderColor: 'var(--pale-green)', color: 'var(--pale-green)' }}>🌰 Oak Identifier</Link>
          <Link href="/pine-tree-identifier" className="btn-outline" style={{ borderColor: 'var(--pale-green)', color: 'var(--pale-green)' }}>🌲 Pine Identifier</Link>
          <Link href="/birch-tree-identifier" className="btn-outline" style={{ borderColor: 'var(--pale-green)', color: 'var(--pale-green)' }}>🪵 Birch Identifier</Link>
        </div>
      </section>
    </Layout>
  );
}
