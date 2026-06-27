import Layout from '../components/Layout';
import Link from 'next/link';
import UploadTool from '../components/UploadTool';

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "url": "https://treeidentifier.online/palm-tree-identifier",
      "name": "Palm Tree Identifier — Free AI Palm Tree Identification Tool",
      "description": "Identify palm trees instantly with AI. Upload a photo of palm fronds, trunk, or fruit for accurate species identification. Covers Coconut Palm, Date Palm, Royal Palm and 2,600+ species."
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "How do I identify a palm tree?", "acceptedAnswer": { "@type": "Answer", "text": "Palm trees are identified by their distinctive unbranched trunk topped with a crown of large fronds. Key features are frond type (fan or feather shaped), trunk texture, and fruit characteristics." } },
        { "@type": "Question", "name": "Are palm trees really trees?", "acceptedAnswer": { "@type": "Answer", "text": "Botanically, palms are monocots — more closely related to grasses than to broadleaf trees. However, they are called trees due to their tall, woody stems. They belong to the family Arecaceae with 2,600+ species." } }
      ]
    }
  ]
};

const palmSpecies = [
  { name: 'Coconut Palm', sci: 'Cocos nucifera', region: 'Tropical worldwide', note: 'Most economically important palm' },
  { name: 'Date Palm', sci: 'Phoenix dactylifera', region: 'Middle East, N. Africa', note: 'Cultivated 5,000+ years' },
  { name: 'Royal Palm', sci: 'Roystonea regia', region: 'Caribbean, Florida', note: 'Smooth green crownshaft' },
  { name: 'California Fan Palm', sci: 'Washingtonia filifera', region: 'SW USA, Mexico', note: 'Only native US palm' },
  { name: 'Areca Palm', sci: 'Dypsis lutescens', region: 'Madagascar', note: 'Popular indoor plant' },
  { name: 'Oil Palm', sci: 'Elaeis guineensis', region: 'West Africa', note: 'World\'s most productive oil crop' },
  { name: 'Sago Palm', sci: 'Metroxylon sagu', region: 'SE Asia', note: 'Major starch food source' },
  { name: 'Foxtail Palm', sci: 'Wodyetia bifurcata', region: 'Australia', note: 'Distinctive bushy fronds' },
];

const faqs = [
  { q: 'What is the difference between fan palms and feather palms?', a: 'Fan palms (palmate palms) have large, circular fronds that radiate from a central point like an open fan — examples include California Fan Palm and Chinese Fan Palm. Feather palms (pinnate palms) have long fronds with leaflets arranged along a central rib like a feather — examples include Coconut Palm, Date Palm, and Royal Palm. This frond type is the primary division in palm identification.' },
  { q: 'How do I identify a Coconut Palm vs Date Palm?', a: 'Coconut Palm has pinnate (feather) fronds that are bright green and arch gracefully, a leaning trunk with prominent ring scars, and produces the familiar large brown coconut. Date Palm also has pinnate fronds but they are blue-green, stiffer, and have sharp spines at the base. Date Palm produces clusters of dates rather than coconuts. The trunk of Date Palm is rougher with persistent leaf base stubs.' },
  { q: 'Can palm trees grow in cold climates?', a: 'Most palm species are tropical or subtropical, but some are surprisingly cold-hardy. The European Fan Palm (Chamaerops humilis) survives temperatures down to -10°C. Windmill Palm (Trachycarpus fortunei) is even hardier, tolerating -17°C, and is grown successfully in the UK, Germany, and the Pacific Northwest. Needle Palm (Rhapidophyllum hystrix) is the most cold-hardy palm, surviving -20°C.' },
  { q: 'Are all palms the same species?', a: 'No — the palm family (Arecaceae) is one of the most species-rich plant families, with approximately 2,600 species in around 200 genera. They range from the tiny Dypsis minuta (under 30cm tall) to the towering Wax Palm of Colombia (up to 60 meters). Our AI covers all major palm species from every tropical and subtropical region.' },
  { q: 'What are the fastest growing palm trees?', a: 'Among the fastest-growing palms are the King Palm (Archontophoenix cunninghamiana), which can grow over 1 meter per year in ideal conditions, and the Queen Palm (Syagrus romanzoffiana), popular as a landscape palm in warm climates due to rapid growth. Foxtail Palm is also considered fast-growing. Most palms grow 30-60cm per year under good conditions.' },
  { q: 'How long do palm trees live?', a: 'Palm lifespans vary considerably by species. Most landscape palms live 50-150 years. Date Palms can live over 150 years and continue fruiting productively for 60-80 years. The Coco-de-mer (Lodoicea maldivica) of the Seychelles is estimated to live over 300 years. Some clustering palms like Bismarck Palm appear to be very long-lived but exact ages are difficult to determine.' },
];

export default function PalmTreeIdentifier() {
  return (
    <Layout
      meta={{
        title: 'Palm Tree Identifier — Free AI Palm Tree Identification Online',
        description: 'Identify any palm tree species instantly with AI. Upload palm frond, trunk, or fruit photos. Covers Coconut Palm, Date Palm, Royal Palm and 2,600+ species worldwide. Free and accurate.',
        canonical: 'https://treeidentifier.online/palm-tree-identifier',
        schema,
      }}
      breadcrumbs={[{ label: 'Palm Tree Identifier' }]}
    >
      <section style={{
        position: 'relative', paddingTop: '70px', minHeight: '75vh', display: 'flex', alignItems: 'center',
        background: `linear-gradient(135deg, rgba(5,5,5,0.75) 0%, rgba(10,35,20,0.8) 100%), url('/treehero.jpg') center/cover no-repeat`,
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '4rem 2rem', width: '100%' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
            <div>
              <span className="green-tag">🌴 Palm Species AI</span>
              <h1 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', color: 'var(--white)', lineHeight: 1.1, margin: '1rem 0 1.2rem' }}>
                Palm Tree Identifier<br /><span style={{ color: 'var(--bright-green)' }}>Powered by AI</span>
              </h1>
              <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '2rem' }}>
                Identify Coconut Palm, Date Palm, Royal Palm, and 2,600+ palm species from frond, trunk, or fruit photos. Expert AI identification in under 3 seconds — completely free.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link href="/pine-tree-identifier" className="btn-outline">🌲 Pine Identifier</Link>
                <Link href="/oak-tree-identifier" className="btn-outline">🌰 Oak Identifier</Link>
              </div>
            </div>
            <div style={{ background: 'var(--card-bg)', border: '1px solid var(--bright-green)', borderRadius: '20px', padding: '2.5rem' }}>
              <h2 style={{ fontFamily: 'Inter, sans-serif', fontSize: '1.1rem', fontWeight: 700, color: 'var(--white)', marginBottom: '1.5rem' }}>🌴 Upload Palm Photo</h2>
              <UploadTool mode="tree" />
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--deep-black)' }}>
        <div className="section-inner">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="section-label">Species Database</span>
            <h2 className="section-title">Common Palm Species We Identify</h2>
          </div>
          <div className="grid-4">
            {palmSpecies.map((s, i) => (
              <div className="card" key={i}>
                <div style={{ fontSize: '2rem', marginBottom: '0.8rem' }}>🌴</div>
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
            <span className="green-tag">Complete Palm Guide</span>
            <h2>Complete Guide to Palm Tree Identification</h2>
            <p>Palm trees are among the most instantly recognizable trees on Earth, their silhouette synonymous with tropical beaches, warm climates, and paradise. Yet the palm family — Arecaceae — is far more diverse than most people realize, comprising approximately 2,600 species in around 200 genera, distributed across tropical and subtropical regions worldwide. From the towering Coconut Palm of Pacific atolls to the cold-hardy Windmill Palm growing in British gardens, palms are extraordinarily varied in form, habitat, and utility. Our <strong>free AI Palm Tree Identifier</strong> can identify all major palm species worldwide.</p>

            <h3>Fan Palms vs Feather Palms — The Primary Division</h3>
            <p>The most fundamental division in palm identification is between <strong>fan palms</strong> (palmate or costapalmate) and <strong>feather palms</strong> (pinnate). This single characteristic immediately divides the 2,600 palm species into two major groups and is the essential starting point for identification. Fan palms have large, circular fronds where leaflets radiate from a central point like the ribs of an open fan or the fingers of a hand. Classic fan palms include the California Fan Palm (<em>Washingtonia filifera</em>), the European Fan Palm (<em>Chamaerops humilis</em>), and the Chinese Fan Palm (<em>Livistona chinensis</em>).</p>
            <p>Feather palms have long, arching fronds with leaflets arranged in two rows along a central rib (rachis) — creating the appearance of a giant feather. The Coconut Palm, Date Palm, and Royal Palm are all feather palms. This frond type is more common among commercially important palm species. Some palms have an intermediate form called costapalmate — fan-shaped but with a distinct rib extending partway into the frond.</p>

            <h3>Identifying Palms by Trunk Characteristics</h3>
            <p>Palm trunks are botanically quite different from the trunks of broadleaf trees and conifers. Palm trunks do not produce annual growth rings and do not have bark in the traditional sense. Instead, they consist of a single growing point (meristem) at the top, surrounded by a cylinder of densely packed fibrous tissue. The diameter of a palm trunk is essentially fixed from when the palm first develops its trunk — palms do not grow wider with age, they only grow taller.</p>
            <p>Trunk surface characteristics vary considerably between species and provide reliable identification features. Ring scars — the marks left by fallen leaf bases — are present in most palms and their spacing and pattern vary by species. Some palms retain persistent dead leaf bases (like Washingtonia palms, which develop a distinctive "skirt" of dead fronds). Others have clean, smooth trunks. The Royal Palm has a distinctive smooth green crownshaft — the swollen base of the newest leaves — that makes it unmistakable.</p>

            <h3>Palms of Economic and Cultural Importance</h3>
            <p>No other plant family provides as many different products to human civilization as the palms. The Coconut Palm (<em>Cocos nucifera</em>) is sometimes called the "tree of life" — every part is useful: the fruit provides food, water, and oil; the trunk provides timber; the leaves provide thatch, baskets, and brooms; the fiber (coir) provides rope and matting. Oil Palm (<em>Elaeis guineensis</em>) is the world's most productive oil crop, producing more oil per hectare than any other plant — palm oil is now found in approximately 50% of packaged supermarket products.</p>
            <p>Date Palm (<em>Phoenix dactylifera</em>) has been cultivated in the Middle East and North Africa for over 5,000 years, providing a critical high-energy food source in arid regions. The Sago Palm provides a starchy food staple for millions of people in Southeast Asia. Rattan palms provide the raw material for furniture and basketry. Carnauba Wax Palm produces a hard wax used in car polish, cosmetics, and food glazing. The economic importance of palms to tropical communities cannot be overstated.</p>
            <p>Explore more tree identifiers: <Link href="/oak-tree-identifier">Oak Tree Identifier</Link>, <Link href="/maple-tree-identifier">Maple Tree Identifier</Link>, <Link href="/pine-tree-identifier">Pine Tree Identifier</Link>, and <Link href="/birch-tree-identifier">Birch Tree Identifier</Link>.</p>
          </article>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--deep-black)' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="section-label">FAQs</span>
            <h2 className="section-title">Palm Tree Identification FAQs</h2>
          </div>
          {faqs.map((faq, i) => (
            <div className="faq-item" key={i}><h3>{faq.q}</h3><p>{faq.a}</p></div>
          ))}
        </div>
      </section>

      <section style={{ padding: '4rem 2rem', background: 'linear-gradient(135deg, var(--dark-green), var(--forest-green))', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', color: 'var(--white)', marginBottom: '1rem' }}>Identify Your Palm Tree Now</h2>
        <p style={{ color: 'var(--pale-green)', marginBottom: '2rem' }}>Free AI — covers all 2,600+ palm species worldwide.</p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/birch-tree-identifier" className="btn-outline" style={{ borderColor: 'var(--pale-green)', color: 'var(--pale-green)' }}>🪵 Birch Identifier</Link>
          <Link href="/tree-identifier" className="btn-outline" style={{ borderColor: 'var(--pale-green)', color: 'var(--pale-green)' }}>🌳 All Trees</Link>
          <Link href="/identify-tree-by-leaf" className="btn-outline" style={{ borderColor: 'var(--pale-green)', color: 'var(--pale-green)' }}>🍃 Leaf Identifier</Link>
        </div>
      </section>
    </Layout>
  );
}
