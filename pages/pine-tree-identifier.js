import Layout from '../components/Layout';
import Link from 'next/link';
import UploadTool from '../components/UploadTool';

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "url": "https://treeidentifier.online/pine-tree-identifier",
      "name": "Pine Tree Identifier — Free AI Pine Tree Identification Tool",
      "description": "Identify pine trees instantly with AI. Upload a photo of pine needles, cones, or bark. Covers Eastern White Pine, Scots Pine, Ponderosa Pine and 100+ pine species worldwide."
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "How do I identify a pine tree?", "acceptedAnswer": { "@type": "Answer", "text": "Pine trees are identified by their needle-like leaves bundled in fascicles (groups of 2-5), woody cones, and distinctive bark. The number of needles per bundle is the key identification feature." } },
        { "@type": "Question", "name": "What is the difference between pine, spruce, and fir trees?", "acceptedAnswer": { "@type": "Answer", "text": "Pine needles grow in bundles of 2-5. Spruce needles grow singly and are sharp. Fir needles also grow singly but are flat and soft. Pine cones hang down; fir cones stand upright and disintegrate on the tree." } }
      ]
    }
  ]
};

const pineSpecies = [
  { name: 'Eastern White Pine', sci: 'Pinus strobus', needles: '5 per bundle', note: 'Tallest eastern US pine' },
  { name: 'Scots Pine', sci: 'Pinus sylvestris', needles: '2 per bundle', note: 'Orange-red upper bark' },
  { name: 'Ponderosa Pine', sci: 'Pinus ponderosa', needles: '3 per bundle', note: 'Vanilla-scented bark' },
  { name: 'Lodgepole Pine', sci: 'Pinus contorta', needles: '2 per bundle', note: 'Serotinous cones' },
  { name: 'Stone Pine', sci: 'Pinus pinea', needles: '2 per bundle', note: 'Edible pine nuts' },
  { name: 'Longleaf Pine', sci: 'Pinus palustris', needles: '3 per bundle', note: 'Up to 45cm needles' },
  { name: 'Japanese Black Pine', sci: 'Pinus thunbergii', needles: '2 per bundle', note: 'Popular bonsai species' },
  { name: 'Sugar Pine', sci: 'Pinus lambertiana', needles: '5 per bundle', note: 'Longest cones of any pine' },
];

const faqs = [
  { q: 'How do I identify a pine tree by its needles?', a: 'The most reliable pine identification feature is the number of needles in each fascicle (bundle). Two-needle pines include Scots Pine and Lodgepole Pine. Three-needle pines include Ponderosa Pine and Longleaf Pine. Five-needle pines include Eastern White Pine and Sugar Pine. Count the needles in a single bundle and upload a clear photo for our AI to confirm the exact species.' },
  { q: 'How do pine cones help identify pine species?', a: 'Pine cone size, shape, scale pattern, and spine characteristics vary distinctively between species. Sugar Pine produces the longest cones of any pine — up to 50cm. Lodgepole Pine has small, tightly sealed cones that require fire to open (serotinous). Scots Pine has small, egg-shaped cones. Photographing fallen cones alongside needle bundles gives our AI the best identification data.' },
  { q: 'Are pine trees and spruce trees the same?', a: 'No — pine, spruce, and fir are three distinct genera of coniferous trees. Pine needles grow in bundles of 2-5. Spruce needles grow singly, are sharp and square in cross-section, and leave a rough peg-like base when removed. Fir needles also grow singly but are flat, soft, and leave a smooth circular scar. Our AI can distinguish between all three genera and their individual species.' },
  { q: 'Do all pine trees stay green year-round?', a: 'All true pine trees (genus Pinus) are evergreen and retain their needle leaves year-round. However, some other coniferous trees called "larches" are deciduous conifers — they have needle-like leaves that turn golden yellow and drop in autumn. Larches are sometimes confused with pines. Our AI correctly identifies both pine and larch species.' },
  { q: 'What is the difference between pine nuts from different species?', a: 'Several pine species produce edible seeds (pine nuts). The most commercially important are Stone Pine (Pinus pinea) in Europe and the Middle East, Pinyon Pines (Pinus edulis and related species) in North America, and Korean Pine (Pinus koraiensis) in Asia. The seed size and oil content vary by species, affecting culinary use.' },
  { q: 'How long do pine trees live?', a: 'Lifespan varies greatly by species. Many common pines live 100-300 years. However, Great Basin Bristlecone Pine (Pinus longaeva) is the world\'s oldest known living organism — individual trees have been documented at over 5,000 years old. Scots Pine typically lives 150-300 years. Eastern White Pine can live over 400 years.' },
];

export default function PineTreeIdentifier() {
  return (
    <Layout
      meta={{
        title: 'Pine Tree Identifier — Free AI Pine Tree Identification Online',
        description: 'Identify any pine tree species instantly with AI. Upload pine needles, cones, or bark photos. Covers Eastern White Pine, Scots Pine, Ponderosa Pine and 100+ species worldwide. Free and accurate.',
        canonical: 'https://treeidentifier.online/pine-tree-identifier',
        schema,
      }}
      breadcrumbs={[{ label: 'Pine Tree Identifier' }]}
    >
      <section style={{
        position: 'relative', paddingTop: '70px', minHeight: '75vh', display: 'flex', alignItems: 'center',
        background: `linear-gradient(135deg, rgba(5,5,5,0.8) 0%, rgba(10,30,18,0.8) 100%), url('https://images.unsplash.com/photo-1448375240586-882707db888b?w=1600&q=80') center/cover no-repeat`,
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '4rem 2rem', width: '100%' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
            <div>
              <span className="green-tag">🌲 Pine Species AI</span>
              <h1 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', color: 'var(--white)', lineHeight: 1.1, margin: '1rem 0 1.2rem' }}>
                Pine Tree Identifier<br /><span style={{ color: 'var(--bright-green)' }}>Powered by AI</span>
              </h1>
              <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '2rem' }}>
                Identify Scots Pine, White Pine, Ponderosa Pine, and 100+ pine species from needle bundles, cones, or bark photos. Accurate AI identification in under 3 seconds — free forever.
              </p>
              <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
                {[['100+', 'Pine Species'], ['97%', 'Accuracy'], ['Free', 'Always'], ['3s', 'Results']].map(([n, l]) => (
                  <div key={l}>
                    <div style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--bright-green)', fontFamily: 'Playfair Display, serif', lineHeight: 1 }}>{n}</div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--gray-mid)', marginTop: '0.2rem' }}>{l}</div>
                  </div>
                ))}
              </div>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link href="/oak-tree-identifier" className="btn-outline">🌰 Oak Identifier</Link>
                <Link href="/maple-tree-identifier" className="btn-outline">🍁 Maple Identifier</Link>
              </div>
            </div>
            <div style={{ background: 'var(--card-bg)', border: '1px solid var(--bright-green)', borderRadius: '20px', padding: '2.5rem' }}>
              <h2 style={{ fontFamily: 'Inter, sans-serif', fontSize: '1.1rem', fontWeight: 700, color: 'var(--white)', marginBottom: '1.5rem' }}>🌲 Upload Pine Photo</h2>
              <UploadTool mode="tree" />
            </div>
          </div>
        </div>
      </section>

      {/* TIP: Needle Count */}
      <section className="section" style={{ background: 'var(--deep-black)' }}>
        <div className="section-inner">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="section-label">Quick ID Guide</span>
            <h2 className="section-title">Identify Pine by Needle Bundle</h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>Count the needles in one bundle — this is the fastest pine identification method.</p>
          </div>
          <div className="grid-3">
            {[
              { num: '2', title: '2-Needle Pines', examples: 'Scots Pine, Lodgepole Pine, Austrian Pine, Japanese Black Pine, Red Pine', color: '#40c074' },
              { num: '3', title: '3-Needle Pines', examples: 'Ponderosa Pine, Longleaf Pine, Loblolly Pine, Pitch Pine, Jeffrey Pine', color: '#52d68a' },
              { num: '5', title: '5-Needle Pines', examples: 'Eastern White Pine, Sugar Pine, Western White Pine, Limber Pine, Whitebark Pine', color: '#b7e4c7' },
            ].map((g, i) => (
              <div key={i} style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)', borderRadius: '16px', padding: '2rem', textAlign: 'center', borderTop: `3px solid ${g.color}` }}>
                <div style={{ fontSize: '3.5rem', fontWeight: 800, color: g.color, fontFamily: 'Playfair Display, serif', marginBottom: '0.5rem' }}>{g.num}</div>
                <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem', fontWeight: 700, color: 'var(--white)', marginBottom: '0.8rem' }}>{g.title}</h3>
                <p style={{ color: 'var(--gray-mid)', fontSize: '0.85rem', lineHeight: 1.6 }}>{g.examples}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SPECIES */}
      <section className="section">
        <div className="section-inner">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="section-label">Species Database</span>
            <h2 className="section-title">Common Pine Species We Identify</h2>
          </div>
          <div className="grid-4">
            {pineSpecies.map((s, i) => (
              <div className="card" key={i}>
                <div style={{ fontSize: '2rem', marginBottom: '0.8rem' }}>🌲</div>
                <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.95rem', fontWeight: 700, color: 'var(--white)', marginBottom: '0.3rem' }}>{s.name}</h3>
                <p style={{ color: 'var(--bright-green)', fontSize: '0.78rem', fontStyle: 'italic', marginBottom: '0.3rem' }}>{s.sci}</p>
                <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.75rem', marginBottom: '0.3rem' }}>Needles: {s.needles}</p>
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
            <span className="green-tag">Complete Pine Guide</span>
            <h2>Complete Guide to Pine Tree Identification</h2>
            <p>Pine trees are the most species-rich genus of conifers, with over 120 species distributed across the Northern Hemisphere from the Arctic Circle to tropical mountains. Members of the genus <em>Pinus</em>, pine trees are among the most ecologically and economically important trees on Earth — forming vast forests across North America, Europe, and Asia, providing critical wildlife habitat, and supplying timber, resin, and edible seeds to human civilization for millennia. Our <strong>free AI Pine Tree Identifier</strong> makes identifying any pine species effortless.</p>

            <h3>The Key to Pine Identification — Needle Fascicles</h3>
            <p>The single most important feature for identifying pine species is the <strong>needle fascicle</strong> — the bundle of needles that grows together from a single point. Unlike spruce, fir, and other conifers whose needles grow individually, pine needles always grow in fascicles of 2, 3, or 5 (with a few rare exceptions). This fascicle count immediately narrows down the possible species significantly.</p>
            <p>Two-needle pines include some of the most common and widely distributed species: Scots Pine (<em>Pinus sylvestris</em>), the most widely distributed pine in the world; Red Pine (<em>Pinus resinosa</em>), the dominant pine of the Great Lakes region; and Lodgepole Pine (<em>Pinus contorta</em>), which forms vast forests across western North America. Three-needle pines are predominantly western North American species — Ponderosa Pine, Longleaf Pine, and Loblolly Pine. Five-needle pines, sometimes called "white pines," include Eastern White Pine, Sugar Pine, and Western White Pine.</p>

            <h3>Pine Cones — Identification from the Ground</h3>
            <p>Fallen pine cones beneath a tree provide excellent identification data even when the tree's foliage is difficult to observe closely. Pine cones vary enormously between species in size, shape, scale pattern, and the presence or absence of spines on the scales. Sugar Pine produces the most dramatic cones — up to 50 centimeters long, the largest cones of any pine species. At the other extreme, Lodgepole Pine has small, egg-shaped cones just 2-5 centimeters long.</p>
            <p>Some pine species have <strong>serotinous cones</strong> — cones sealed with resin that only open when exposed to the intense heat of a wildfire. Lodgepole Pine and Jack Pine are the classic examples. These trees have evolved to release their seeds immediately after fire clears competing vegetation, allowing rapid reforestation of burned areas. The serotinous cone adaptation is a remarkable example of evolution in response to a specific environmental pressure.</p>

            <h3>Pine Bark — A Year-Round Identification Tool</h3>
            <p>Pine bark provides reliable identification features that are visible year-round, making bark analysis particularly valuable in winter or when cones and needles are not accessible. Young pine bark is typically smooth, thin, and gray-brown. As trees age, bark develops characteristic patterns that vary between species.</p>
            <p>Scots Pine has one of the most distinctive and beautiful barks of any pine — the upper trunk and major branches develop a striking orange-red color with thin, papery scales. This orange bark color is unique to Scots Pine and makes identification from a distance possible. Ponderosa Pine bark has a similarly distinctive feature — mature trees develop orange-brown bark with large, irregular plates that smell distinctly of vanilla or butterscotch when warm. This vanilla scent is one of the most memorable field identification features of any tree species.</p>

            <h3>Pine Forests — Ecological Role and Human Importance</h3>
            <p>Pine forests cover approximately 17% of the world's total forested area — the largest single forest type on Earth. They provide critical ecosystem services including carbon storage, watershed protection, soil stabilization, and biodiversity habitat. Pine forests support specialized communities of birds, mammals, and invertebrates adapted to coniferous woodland conditions.</p>
            <p>The economic importance of pine timber is immense. Pine wood is the primary softwood timber used globally for construction, furniture, paper pulp, and resin products. In the southeastern United States, pine plantations cover millions of hectares, producing the majority of the nation's timber supply. Pine resin has been used for centuries to produce turpentine, rosin, and tar — essential industrial chemicals before the petroleum age.</p>
            <p>Ready to identify your pine tree? <Link href="/tree-identifier">Upload your photo</Link> or try our <Link href="/identify-tree-by-leaf">leaf identification tool</Link> for needle-specific analysis. Also explore our <Link href="/oak-tree-identifier">Oak Tree Identifier</Link> and <Link href="/maple-tree-identifier">Maple Tree Identifier</Link>.</p>
          </article>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="section-label">FAQs</span>
            <h2 className="section-title">Pine Tree Identification FAQs</h2>
          </div>
          {faqs.map((faq, i) => (
            <div className="faq-item" key={i}><h3>{faq.q}</h3><p>{faq.a}</p></div>
          ))}
        </div>
      </section>

      <section style={{ padding: '4rem 2rem', background: 'linear-gradient(135deg, var(--dark-green), var(--forest-green))', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', color: 'var(--white)', marginBottom: '1rem' }}>Identify Your Pine Tree Now</h2>
        <p style={{ color: 'var(--pale-green)', marginBottom: '2rem' }}>Free AI identification — covers all 120+ pine species worldwide.</p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/palm-tree-identifier" className="btn-outline" style={{ borderColor: 'var(--pale-green)', color: 'var(--pale-green)' }}>🌴 Palm Identifier</Link>
          <Link href="/birch-tree-identifier" className="btn-outline" style={{ borderColor: 'var(--pale-green)', color: 'var(--pale-green)' }}>🪵 Birch Identifier</Link>
          <Link href="/identify-tree-by-leaf" className="btn-outline" style={{ borderColor: 'var(--pale-green)', color: 'var(--pale-green)' }}>🍃 Leaf Identifier</Link>
        </div>
      </section>
    </Layout>
  );
}
