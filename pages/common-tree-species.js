import Layout from '../../components/Layout';
import Link from 'next/link';

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "25 Most Common Tree Species in North America — Full Identification Guide",
  "description": "A complete guide to the 25 most common tree species in North America with identification tips for leaves, bark, fruit, and seasonal features.",
  "image": "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=1200&q=80",
  "datePublished": "2025-05-28",
  "dateModified": "2025-05-28",
  "author": { "@type": "Organization", "name": "Tree Identifier" },
  "publisher": { "@type": "Organization", "name": "Tree Identifier", "url": "https://treeidentifier.ai" },
  "mainEntityOfPage": "https://treeidentifier.ai/blog/common-tree-species"
};

const trees = [
  { num: 1, name: 'Red Maple', sci: 'Acer rubrum', icon: '🍁', region: 'Eastern North America', leaf: 'Opposite, 3-5 lobed, V-shaped sinuses', bark: 'Smooth gray when young, scaly when old', fruit: 'Paired red samaras in spring', note: 'Most abundant tree in eastern North America' },
  { num: 2, name: 'Douglas Fir', sci: 'Pseudotsuga menziesii', icon: '🌲', region: 'Western North America', leaf: 'Flat, soft needles, 2-3cm, blue-green', bark: 'Deeply furrowed, dark brown-gray', fruit: 'Pendulous cones with distinctive 3-pointed bracts', note: 'Most important timber tree in North America' },
  { num: 3, name: 'Loblolly Pine', sci: 'Pinus taeda', icon: '🌲', region: 'SE United States', leaf: '3 needles per bundle, 15-23cm long', bark: 'Reddish-brown scaly plates', fruit: 'Spiny oval cones 7-13cm', note: 'Most commercially planted tree in the US' },
  { num: 4, name: 'White Oak', sci: 'Quercus alba', icon: '🌳', region: 'Eastern North America', leaf: 'Alternate, 5-9 rounded lobes', bark: 'Light gray, scaly or platy', fruit: 'Short-stalked acorns with warty cup', note: 'Iconic eastern hardwood, excellent wildlife tree' },
  { num: 5, name: 'American Sweetgum', sci: 'Liquidambar styraciflua', icon: '🌟', region: 'Eastern & Southern USA', leaf: 'Star-shaped, 5-7 pointed lobes', bark: 'Gray, deeply furrowed', fruit: 'Spiky ball-shaped seed clusters', note: 'Spectacular multi-colored autumn foliage' },
  { num: 6, name: 'Tulip Poplar', sci: 'Liriodendron tulipifera', icon: '🌷', region: 'Eastern North America', leaf: 'Unusual 4-lobed shape, flat top', bark: 'Gray-brown, interlaced furrows', fruit: 'Cone-shaped cluster of samaras', note: 'Tallest eastern hardwood, beautiful tulip flowers' },
  { num: 7, name: 'Black Cherry', sci: 'Prunus serotina', icon: '🍒', region: 'Eastern North America', leaf: 'Alternate, lance-shaped, finely serrated', bark: 'Dark gray, distinctive burnt cornflake texture', fruit: 'Small dark red-black cherries', note: 'Important wildlife tree, valuable hardwood' },
  { num: 8, name: 'Eastern White Pine', sci: 'Pinus strobus', icon: '🌲', region: 'NE North America', leaf: '5 needles per bundle, 7-12cm, soft', bark: 'Smooth gray when young, deeply furrowed with age', fruit: 'Long cylindrical cones 8-20cm', note: 'Tallest tree in eastern North America' },
  { num: 9, name: 'American Elm', sci: 'Ulmus americana', icon: '🌳', region: 'Eastern North America', leaf: 'Alternate, oval, doubly serrated, asymmetric base', bark: 'Gray-brown, interlacing ridges', fruit: 'Flat circular winged samara', note: 'Classic vase-shaped street tree, decimated by Dutch elm disease' },
  { num: 10, name: 'Sugar Maple', sci: 'Acer saccharum', icon: '🍁', region: 'NE North America', leaf: 'Opposite, 5 lobes, U-shaped sinuses', bark: 'Gray-brown, furrowed on mature trees', fruit: 'U-shaped paired samaras', note: 'Source of maple syrup, spectacular fall color' },
];

export default function CommonTreeSpecies() {
  return (
    <Layout
      meta={{
        title: '25 Most Common Tree Species in North America — Identification Guide | Tree Identifier Blog',
        description: 'Complete guide to the 25 most common tree species in North America. Identification tips for leaves, bark, fruit, and seasonal features for Red Maple, Douglas Fir, White Oak, and more.',
        canonical: 'https://treeidentifier.ai/blog/common-tree-species',
        schema,
      }}
      breadcrumbs={[{ label: 'Blog', href: '/blog' }, { label: 'Common Tree Species' }]}
    >
      {/* HERO */}
      <section style={{
        paddingTop: '70px',
        background: `linear-gradient(180deg, rgba(5,5,5,0.75) 0%, var(--black) 100%), url('https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=1600&q=80') center/cover no-repeat`,
        padding: '120px 2rem 5rem',
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
            <span style={{ background: 'rgba(64,192,116,0.1)', color: 'var(--bright-green)', border: '1px solid rgba(64,192,116,0.2)', borderRadius: '50px', padding: '4px 14px', fontSize: '0.78rem', fontWeight: 600 }}>Tree Species</span>
            <span style={{ color: 'var(--gray-mid)', fontSize: '0.85rem' }}>📅 May 28, 2025</span>
            <span style={{ color: 'var(--gray-mid)', fontSize: '0.85rem' }}>⏱ 12 min read</span>
          </div>
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', color: 'var(--white)', lineHeight: 1.15, marginBottom: '1.5rem' }}>
            25 Most Common Tree Species<br />in North America
          </h1>
          <p style={{ fontSize: '1.15rem', color: 'rgba(255,255,255,0.75)', lineHeight: 1.8 }}>
            A complete identification guide to the trees you're most likely to encounter across North America — with identification tips for leaves, bark, fruit, and seasonal features for each species.
          </p>
        </div>
      </section>

      <section className="section">
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 2rem', display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '4rem', alignItems: 'start' }}>
          <article className="prose-content" style={{ maxWidth: '100%' }}>

            <h2>Introduction — Why Learn Common Tree Species?</h2>
            <p>North America is home to over 750 native tree species, plus hundreds of introduced species now naturalized or commonly planted across the continent. While this diversity is remarkable, the reality of everyday tree encounters is that a relatively small number of species account for the vast majority of trees most people will see. Learning to identify the 25 most common North American tree species gives you the ability to recognize roughly 70-80% of the trees you encounter in forests, parks, and neighborhoods across the continent.</p>
            <p>Each species profile below includes the key identification features — leaf, bark, fruit, and distinctive notes — that will help you recognize the tree in the field. Use these profiles alongside our <Link href="/tree-identifier">AI Tree Identifier</Link> to confirm your identifications and build your knowledge progressively. The more trees you learn, the faster new species click into place.</p>

            <h2>The 25 Most Common North American Trees</h2>

            {trees.map((tree) => (
              <div key={tree.num} style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)', borderRadius: '16px', padding: '1.8rem', marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ width: '44px', height: '44px', minWidth: '44px', background: 'linear-gradient(135deg, var(--forest-green), var(--mid-green))', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.3rem' }}>{tree.icon}</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem' }}>
                      <div>
                        <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '1.05rem', fontWeight: 700, color: 'var(--white)', marginBottom: '0.2rem' }}>#{tree.num} {tree.name}</h3>
                        <p style={{ color: 'var(--bright-green)', fontSize: '0.82rem', fontStyle: 'italic', marginBottom: '0.8rem' }}>{tree.sci} · {tree.region}</p>
                      </div>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.8rem', marginBottom: '0.8rem' }}>
                      <div><span style={{ color: 'var(--bright-green)', fontSize: '0.75rem', fontWeight: 600, display: 'block', marginBottom: '0.2rem' }}>LEAF</span><span style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.85rem' }}>{tree.leaf}</span></div>
                      <div><span style={{ color: 'var(--bright-green)', fontSize: '0.75rem', fontWeight: 600, display: 'block', marginBottom: '0.2rem' }}>BARK</span><span style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.85rem' }}>{tree.bark}</span></div>
                      <div><span style={{ color: 'var(--bright-green)', fontSize: '0.75rem', fontWeight: 600, display: 'block', marginBottom: '0.2rem' }}>FRUIT / SEED</span><span style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.85rem' }}>{tree.fruit}</span></div>
                      <div><span style={{ color: 'var(--bright-green)', fontSize: '0.75rem', fontWeight: 600, display: 'block', marginBottom: '0.2rem' }}>KEY NOTE</span><span style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.85rem' }}>{tree.note}</span></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <h2>Tips for Identifying These Common Trees</h2>
            <p>When you encounter an unfamiliar tree, start by narrowing it down to one of these common species before considering rarer options. The 80/20 rule applies strongly to tree identification: 20% of species account for 80% of the trees you'll encounter. If you've learned these 25 species well, you'll be able to identify the vast majority of trees in most North American settings.</p>
            <p>Use multiple identification features rather than relying on a single characteristic. A tree might have leaves similar to two different species, but the bark texture will distinguish them. Fruit and seeds, when present, are often the most definitive features — an acorn means oak, a winged samara pair means maple, a spiky ball means sweetgum. No other trees produce these distinctive fruit types.</p>

            <h2>Using AI for Species Confirmation</h2>
            <p>Our <Link href="/tree-identifier">AI Tree Identifier</Link> is an excellent tool for confirming your field identifications and for species you can't identify from the profiles above. The AI has been trained on all of these common species and many more, providing accurate identification from leaf, bark, or full-tree photos. For detailed leaf analysis of any species, our <Link href="/identify-tree-by-leaf">Leaf Identifier</Link> provides leaf-specific results.</p>
            <p>For species-specific guides, explore our dedicated identifier pages: <Link href="/oak-tree-identifier">Oak Tree Identifier</Link>, <Link href="/maple-tree-identifier">Maple Tree Identifier</Link>, <Link href="/pine-tree-identifier">Pine Tree Identifier</Link>, <Link href="/birch-tree-identifier">Birch Tree Identifier</Link>, and <Link href="/palm-tree-identifier">Palm Tree Identifier</Link>.</p>

            <h2>Building Your Tree Identification Knowledge</h2>
            <p>The best way to learn these common trees is to focus on one or two species per week, deliberately noticing them in your daily surroundings. Look for Red Maple and Sugar Maple side by side in autumn — comparing similar species is one of the fastest ways to learn the distinguishing features of each. Find a White Oak and examine the rounded leaf lobes and acorn cups in detail. Touch the distinctive plated bark of a mature Tulip Poplar and the scaly, burnt-cornflake bark of a Black Cherry. These tactile and visual memories build lasting identification skills.</p>
            <p>Supplement your field learning with our <Link href="/blog/how-to-identify-trees">complete tree identification guide</Link> and our <Link href="/blog/tree-identification-by-leaf">leaf morphology guide</Link>. With consistent practice and our AI identification tools, you'll be confidently identifying all 25 of these common species — and many more — within a few months.</p>

          </article>

          <aside style={{ position: 'sticky', top: '90px' }}>
            <div className="card" style={{ marginBottom: '1.5rem' }}>
              <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem', fontWeight: 700, color: 'var(--bright-green)', marginBottom: '1.2rem' }}>🔍 Identify Any Tree</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                <Link href="/tree-identifier" className="btn-primary" style={{ textAlign: 'center', justifyContent: 'center', fontSize: '0.88rem', padding: '10px 16px' }}>🌳 Tree Identifier</Link>
                <Link href="/identify-tree-by-leaf" className="btn-outline" style={{ textAlign: 'center', justifyContent: 'center', fontSize: '0.88rem', padding: '10px 16px' }}>🍃 Leaf Identifier</Link>
              </div>
            </div>
            <div className="card" style={{ marginBottom: '1.5rem' }}>
              <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem', fontWeight: 700, color: 'var(--white)', marginBottom: '1rem' }}>🌳 Species Guides</h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                <li><Link href="/oak-tree-identifier" style={{ color: 'var(--gray-mid)', fontSize: '0.88rem' }}>🌰 Oak Tree Identifier</Link></li>
                <li><Link href="/maple-tree-identifier" style={{ color: 'var(--gray-mid)', fontSize: '0.88rem' }}>🍁 Maple Tree Identifier</Link></li>
                <li><Link href="/pine-tree-identifier" style={{ color: 'var(--gray-mid)', fontSize: '0.88rem' }}>🌲 Pine Tree Identifier</Link></li>
                <li><Link href="/palm-tree-identifier" style={{ color: 'var(--gray-mid)', fontSize: '0.88rem' }}>🌴 Palm Tree Identifier</Link></li>
                <li><Link href="/birch-tree-identifier" style={{ color: 'var(--gray-mid)', fontSize: '0.88rem' }}>🪵 Birch Tree Identifier</Link></li>
              </ul>
            </div>
            <div className="card">
              <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem', fontWeight: 700, color: 'var(--white)', marginBottom: '1rem' }}>📝 More Articles</h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                <li><Link href="/blog/how-to-identify-trees" style={{ color: 'var(--gray-mid)', fontSize: '0.88rem' }}>How to Identify Trees</Link></li>
                <li><Link href="/blog/tree-identification-by-leaf" style={{ color: 'var(--gray-mid)', fontSize: '0.88rem' }}>Tree ID by Leaf Guide</Link></li>
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <section style={{ padding: '4rem 2rem', background: 'var(--deep-black)', borderTop: '1px solid var(--card-border)', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', color: 'var(--white)', marginBottom: '1rem' }}>Identify Any of These Trees Instantly</h2>
        <p style={{ color: 'var(--gray-mid)', marginBottom: '2rem' }}>Upload a photo — our AI identifies the species in seconds.</p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/tree-identifier" className="btn-primary">🌳 Identify a Tree Now</Link>
          <Link href="/blog" className="btn-outline">📝 More Articles</Link>
        </div>
      </section>
    </Layout>
  );
}
