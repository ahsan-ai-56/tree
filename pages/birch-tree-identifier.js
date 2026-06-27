import Layout from '../components/Layout';
import Link from 'next/link';
import UploadTool from '../components/UploadTool';

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "url": "https://treeidentifier.ai/birch-tree-identifier",
      "name": "Birch Tree Identifier — Free AI Birch Tree Identification Tool",
      "description": "Identify birch trees instantly with AI. Upload a photo of birch bark, leaves, or catkins. Covers Silver Birch, Paper Birch, Yellow Birch and 60+ birch species worldwide."
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "How do I identify a birch tree?", "acceptedAnswer": { "@type": "Answer", "text": "Birch trees are most easily identified by their distinctive white or silvery peeling bark, small triangular to oval serrated leaves, and hanging catkins. The peeling bark is unique to birch trees." } },
        { "@type": "Question", "name": "What is the difference between Silver Birch and Paper Birch?", "acceptedAnswer": { "@type": "Answer", "text": "Silver Birch is a European species with diamond-shaped leaves and black diamond markings on white bark. Paper Birch is North American with more oval leaves and chalky white bark that peels in papery sheets." } }
      ]
    }
  ]
};

const birchSpecies = [
  { name: 'Silver Birch', sci: 'Betula pendula', region: 'Europe, Asia', note: 'Weeping branches, black diamonds on bark' },
  { name: 'Paper Birch', sci: 'Betula papyrifera', region: 'North America', note: 'Chalky white peeling bark' },
  { name: 'Yellow Birch', sci: 'Betula alleghaniensis', region: 'NE North America', note: 'Golden-bronze peeling bark' },
  { name: 'River Birch', sci: 'Betula nigra', region: 'Eastern USA', note: 'Salmon-pink to reddish bark' },
  { name: 'Downy Birch', sci: 'Betula pubescens', region: 'N. Europe, Asia', note: 'Hairy young twigs' },
  { name: 'Cherry Birch', sci: 'Betula lenta', region: 'Eastern USA', note: 'Wintergreen-scented twigs' },
  { name: 'Himalayan Birch', sci: 'Betula utilis', region: 'Himalayas', note: 'Brilliant white bark, ornamental' },
  { name: 'Erman\'s Birch', sci: 'Betula ermanii', region: 'NE Asia', note: 'Peeling cream-pink bark' },
];

const faqs = [
  { q: 'Why do birch trees have white bark?', a: 'Birch bark is white due to a chemical compound called betulin, which reflects sunlight. This white coloration is thought to protect the tree from frost damage by reflecting solar radiation and preventing the bark from heating up on sunny winter days — temperature fluctuations that can cause bark splitting. The degree of whiteness varies between species.' },
  { q: 'How do I identify a birch tree in summer vs winter?', a: 'In summer, identify birches by their small triangular to oval leaves with doubly-toothed margins, hanging cylindrical seed catkins, and distinctive peeling bark. In winter, the white or silver peeling bark remains a definitive identification feature year-round. The fine, pendulous (weeping) branch tips of Silver Birch are also distinctive in winter silhouette.' },
  { q: 'Are birch trees good for wildlife?', a: 'Birch trees are excellent wildlife trees. They support over 300 species of insects in the UK alone, making them one of the most wildlife-friendly native trees. The light canopy allows ground flora to thrive beneath. Birch seeds are eaten by finches (especially siskins and redpolls), and the catkins provide early-season pollen for bees. Woodpeckers excavate nest holes in birch trunks.' },
  { q: 'What is birch sap and can you drink it?', a: 'Birch sap is the watery sap that flows up from the roots in early spring before leaves emerge. It has a slightly sweet taste and has been collected and consumed for centuries across Northern Europe, Russia, and North America. Fresh birch sap is mildly sweet and nutritious, containing sugars, amino acids, and minerals. It can be drunk fresh, fermented into birch wine or beer, or concentrated into birch syrup.' },
  { q: 'How long do birch trees live?', a: 'Birch trees are relatively short-lived compared to oaks and other hardwoods. Most birch species live 60-100 years. Silver Birch rarely exceeds 80-90 years in natural conditions. Their short lifespan is compensated by rapid growth and prolific seed production — birch trees produce thousands of tiny winged seeds that are efficiently dispersed by wind.' },
  { q: 'What is birch bark used for?', a: 'Birch bark has been used by indigenous peoples across the Northern Hemisphere for thousands of years. Paper Birch bark was the primary material for birchbark canoes — a technology that transformed travel in North America. Birch bark is waterproof and resistant to decay, making it ideal for baskets, containers, and shelter construction. In Scandinavia, birch bark shoes and roof tiles have been used for centuries.' },
];

export default function BirchTreeIdentifier() {
  return (
    <Layout
      meta={{
        title: 'Birch Tree Identifier — Free AI Birch Tree Identification Online',
        description: 'Identify any birch tree species instantly with AI. Upload birch bark, leaf, or catkin photos. Covers Silver Birch, Paper Birch, Yellow Birch and 60+ birch species. Free, fast, and accurate.',
        canonical: 'https://treeidentifier.ai/birch-tree-identifier',
        schema,
      }}
      breadcrumbs={[{ label: 'Birch Tree Identifier' }]}
    >
      <section style={{
        position: 'relative', paddingTop: '70px', minHeight: '75vh', display: 'flex', alignItems: 'center',
        background: `linear-gradient(135deg, rgba(5,5,5,0.8) 0%, rgba(13,40,24,0.75) 100%), url('https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=1600&q=80') center/cover no-repeat`,
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '4rem 2rem', width: '100%' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
            <div>
              <span className="green-tag">🪵 Birch Species AI</span>
              <h1 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', color: 'var(--white)', lineHeight: 1.1, margin: '1rem 0 1.2rem' }}>
                Birch Tree Identifier<br /><span style={{ color: 'var(--bright-green)' }}>Powered by AI</span>
              </h1>
              <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '2rem' }}>
                Identify Silver Birch, Paper Birch, Yellow Birch, and 60+ birch species from bark, leaf, or catkin photos. AI-powered identification in under 3 seconds — completely free.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link href="/oak-tree-identifier" className="btn-outline">🌰 Oak Identifier</Link>
                <Link href="/maple-tree-identifier" className="btn-outline">🍁 Maple Identifier</Link>
              </div>
            </div>
            <div style={{ background: 'var(--card-bg)', border: '1px solid var(--bright-green)', borderRadius: '20px', padding: '2.5rem' }}>
              <h2 style={{ fontFamily: 'Inter, sans-serif', fontSize: '1.1rem', fontWeight: 700, color: 'var(--white)', marginBottom: '1.5rem' }}>🪵 Upload Birch Photo</h2>
              <UploadTool mode="tree" />
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--deep-black)' }}>
        <div className="section-inner">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="section-label">Species Database</span>
            <h2 className="section-title">Common Birch Species We Identify</h2>
          </div>
          <div className="grid-4">
            {birchSpecies.map((s, i) => (
              <div className="card" key={i}>
                <div style={{ fontSize: '2rem', marginBottom: '0.8rem' }}>🪵</div>
                <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.95rem', fontWeight: 700, color: 'var(--white)', marginBottom: '0.3rem' }}>{s.name}</h3>
                <p style={{ color: 'var(--bright-green)', fontSize: '0.78rem', fontStyle: 'italic', marginBottom: '0.3rem' }}>{s.sci}</p>
                <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.75rem', marginBottom: '0.3rem' }}>📍 {s.region}</p>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.78rem' }}>{s.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 2rem' }}>
          <article className="prose-content" style={{ maxWidth: '100%' }}>
            <span className="green-tag">Complete Birch Guide</span>
            <h2>Complete Guide to Birch Tree Identification</h2>
            <p>Birch trees are among the most elegant and distinctive trees of the Northern Hemisphere, instantly recognizable by their smooth, white, peeling bark that has made them a symbol of northern forests worldwide. The genus <em>Betula</em> contains approximately 60 species distributed across boreal, temperate, and arctic regions of the Northern Hemisphere. Our <strong>free AI Birch Tree Identifier</strong> can identify all major birch species from bark, leaf, or catkin photographs.</p>

            <h3>The Signature Feature — Birch Bark</h3>
            <p>Birch bark is one of the most distinctive and beautiful features of any tree genus. The white to silvery coloration, combined with the characteristic horizontal lenticels (breathing pores) and the tendency to peel in thin, papery layers, makes birch bark unmistakable. However, bark color and texture vary between species and with tree age. Understanding these variations is key to identifying birch species.</p>
            <p>Silver Birch (<em>Betula pendula</em>) — the most common European birch — has gleaming white bark on the upper trunk and branches, with black diamond-shaped patches developing on mature lower trunks. Paper Birch (<em>Betula papyrifera</em>) of North America has a more chalky, matte white bark that peels in broad, papery sheets. Yellow Birch (<em>Betula alleghaniensis</em>) has a distinctive golden-bronze to yellowish-silver bark that peels in small, curly strips. River Birch (<em>Betula nigra</em>) has salmon-pink to reddish-brown exfoliating bark — quite different from the stereotypical white birch bark.</p>

            <h3>Birch Leaves and Catkins</h3>
            <p>Birch leaves are typically small, triangular to broadly oval, with a pointed tip and doubly-toothed margins — meaning the teeth on the leaf edge are themselves toothed at a finer scale. This double-toothed margin is a reliable birch identification feature. Leaf size varies from about 2cm in dwarf arctic species to 8-10cm in larger species like Paper Birch and Yellow Birch.</p>
            <p>Birch catkins are another reliable identification feature. Like alders and hazels, birches are wind-pollinated and produce separate male and female catkins on the same tree. Male catkins are long, yellow-brown, and hang in clusters — they release pollen in early spring before or as leaves emerge. Female catkins are shorter and more erect, maturing through summer into cylindrical structures that release thousands of tiny winged seeds in autumn.</p>

            <h3>Pioneer Trees — The Ecological Role of Birch</h3>
            <p>Birch trees play a critical ecological role as pioneer species — among the first trees to colonize disturbed ground, abandoned agricultural land, and areas cleared by fire or windthrow. Their tiny, lightweight, winged seeds are produced in enormous quantities (a single mature Silver Birch produces over one million seeds per year) and are efficiently dispersed by wind over long distances. Birch seeds can germinate on bare mineral soil, making them effective colonizers of challenging sites.</p>
            <p>As pioneer species, birches create the conditions that allow other, longer-lived tree species to establish. Their relatively light, open canopy allows enough light through for woodland wildflowers and the seedlings of shade-tolerant species like oak, beech, and ash. As these slower-growing species develop, they eventually overtop and shade out the birches — a process called ecological succession. In this way, birch woodland is often a transitional stage on the way to climax broadleaf woodland.</p>

            <h3>Birch in Traditional Culture</h3>
            <p>Few trees have been as important to indigenous cultures of the Northern Hemisphere as the birch. The waterproof, flexible, rot-resistant bark of Paper Birch was the primary building material for birchbark canoes — the dominant watercraft of Indigenous peoples across Canada and the northeastern United States. A well-made birchbark canoe was lightweight enough to carry overland between waterways, yet strong enough to carry heavy loads. This technology fundamentally shaped the exploration and trade networks of northern North America.</p>
            <p>Birch sap tapping is a spring tradition across Scandinavia, Russia, and the Baltic States, where fresh birch sap is drunk as a seasonal health tonic. In Finland and Russia, birch branches are used to make traditional sauna whisks (called vihta or venik), which are soaked in water and used to gently beat the skin during sauna sessions. Ready to identify your birch tree? <Link href="/tree-identifier">Upload your photo</Link> or try our <Link href="/identify-tree-by-leaf">leaf identification tool</Link>.</p>
          </article>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--deep-black)' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="section-label">FAQs</span>
            <h2 className="section-title">Birch Tree Identification FAQs</h2>
          </div>
          {faqs.map((faq, i) => (
            <div className="faq-item" key={i}><h3>{faq.q}</h3><p>{faq.a}</p></div>
          ))}
        </div>
      </section>

      <section style={{ padding: '4rem 2rem', background: 'linear-gradient(135deg, var(--dark-green), var(--forest-green))', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', color: 'var(--white)', marginBottom: '1rem' }}>Identify Your Birch Tree Now</h2>
        <p style={{ color: 'var(--pale-green)', marginBottom: '2rem' }}>Free AI — covers all 60+ birch species worldwide.</p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/oak-tree-identifier" className="btn-outline" style={{ borderColor: 'var(--pale-green)', color: 'var(--pale-green)' }}>🌰 Oak Identifier</Link>
          <Link href="/maple-tree-identifier" className="btn-outline" style={{ borderColor: 'var(--pale-green)', color: 'var(--pale-green)' }}>🍁 Maple Identifier</Link>
          <Link href="/pine-tree-identifier" className="btn-outline" style={{ borderColor: 'var(--pale-green)', color: 'var(--pale-green)' }}>🌲 Pine Identifier</Link>
        </div>
      </section>
    </Layout>
  );
}
