import Layout from '../../components/Layout';
import Link from 'next/link';

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "How to Identify Trees in Winter — Complete Guide to Bare Tree Identification",
    "description": "Learn how to identify trees in winter without leaves using bark, silhouette, buds, and branching patterns. A complete guide to winter tree identification for all skill levels.",
    "image": "https://images.unsplash.com/photo-1516912481808-3406841bd33c?w=1200&q=80",
    "datePublished": "2026-07-18",
    "dateModified": "2026-07-18",
    "author": { "@type": "Organization", "name": "Tree Identifier" },
    "publisher": { "@type": "Organization", "name": "Tree Identifier", "url": "https://treeidentifier.online/" },
    "mainEntityOfPage": "https://treeidentifier.online/blog/how-to-identify-trees-in-winter",
    "wordCount": "2200",
    "keywords": "how to identify trees in winter, winter tree identification, identify trees without leaves, bare tree identification"
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How do you identify trees in winter without leaves?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "To identify trees in winter without leaves, focus on four main features: bark texture and color (rough, smooth, peeling, furrowed), overall silhouette and branching pattern (vase-shape, pyramidal, spreading), winter buds (size, color, arrangement, number of scales), and any persistent fruits or seeds still on the tree. Trees like White Birch, Sycamore, and Shagbark Hickory are unmistakable from bark alone. Use our AI Tree Identifier with a bark or silhouette photo for instant identification."
        }
      },
      {
        "@type": "Question",
        "name": "What trees are easiest to identify in winter?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The easiest trees to identify in winter are: White Birch (brilliant white peeling bark), American Sycamore (camouflage patchwork bark), Shagbark Hickory (extremely shaggy peeling strips), American Beech (smooth silvery gray bark with persistent brown leaves), Black Locust (rope-twist ridged bark), and Sweetgum (distinctive spiky ball fruits hanging on branches). These six species can be identified at a glance in any winter forest."
        }
      },
      {
        "@type": "Question",
        "name": "What are winter buds and how do they help identify trees?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Winter buds are the dormant growth buds that trees form in late summer and retain through winter until spring. They vary dramatically between species in size, color, shape, arrangement on the twig, and number of bud scales. Horse Chestnut has large, very sticky buds. Beech has distinctive long, sharp, cigar-shaped copper-colored buds. Magnolia has large fuzzy silvery buds. Oak buds cluster at twig tips. These features make buds one of the most reliable winter identification features."
        }
      },
      {
        "@type": "Question",
        "name": "Can AI identify trees in winter from photos?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes — our AI Tree Identifier can identify trees in winter from photos of bark, silhouette, winter buds, or persistent fruits. The AI is trained to recognize winter features of common tree species and provides accurate identification year-round. For best results, upload a clear photo of the bark (taken with natural side lighting) or a distinctive winter feature like buds or persistent fruits."
        }
      },
      {
        "@type": "Question",
        "name": "How do you identify oak trees in winter?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Oak trees in winter can be identified by: clustered buds at twig tips (unique to oaks), persistent dead leaves on some species especially young trees (marcescence), gray-brown furrowed bark with blocky ridges, overall rounded spreading crown silhouette, and sometimes persistent acorn caps on the ground below. White Oak has lighter gray bark while Red Oak has darker, more ridged bark with flat-topped ridges that appear reddish in cross-section."
        }
      },
      {
        "@type": "Question",
        "name": "What trees keep their leaves in winter?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Several trees keep some or all of their leaves through winter in a phenomenon called marcescence. American Beech reliably holds its dead copper-brown leaves through winter, especially on younger trees and lower branches. Many young oaks also retain dead leaves. Holly keeps its green leaves year-round (evergreen). Evergreen trees including all pines, spruces, firs, cedars, and most junipers keep their needles or scale-like leaves through winter."
        }
      },
      {
        "@type": "Question",
        "name": "How do evergreen trees differ from deciduous trees in winter?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Evergreen trees retain their leaves (needles or scales) through winter, while deciduous trees drop all their leaves in autumn and remain bare until spring. Evergreens include all pines, spruces, firs, cedars, hemlocks, and most junipers — identifiable by their needle or scale-like leaves present year-round. Deciduous trees include oaks, maples, birches, ashes, and most other broadleaf trees. Some trees like American Beech and many oaks are technically deciduous but retain dead leaves through winter (marcescence)."
        }
      }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://treeidentifier.online/" },
      { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://treeidentifier.online/blog" },
      { "@type": "ListItem", "position": 3, "name": "How to Identify Trees in Winter", "item": "https://treeidentifier.online/blog/how-to-identify-trees-in-winter" }
    ]
  }
];

const winterFeatures = [
  {
    num: 1,
    icon: '🪵',
    title: 'Bark',
    subtitle: 'Most reliable year-round feature',
    description: 'Bark texture, color, and pattern are permanent features that make many species unmistakable in winter. White Birch, Sycamore, Shagbark Hickory, and Beech can be identified from bark alone at a glance.',
    tip: 'Use natural side lighting for photos — it reveals bark texture better than flash.',
  },
  {
    num: 2,
    icon: '🌳',
    title: 'Silhouette & Crown Shape',
    subtitle: 'Visible from a distance',
    description: 'Each species has a characteristic branching pattern and crown shape visible from a distance. American Elm has a distinctive vase shape. Oaks spread broadly. Conifers are pyramidal. Sugar Maple has a dense rounded crown.',
    tip: 'Step back 30–50 meters and observe the overall tree shape against the sky.',
  },
  {
    num: 3,
    icon: '🌿',
    title: 'Winter Buds',
    subtitle: 'Highly distinctive between species',
    description: 'Winter buds vary dramatically in size, color, shape, and arrangement. Beech has long sharp cigar-shaped copper buds. Horse Chestnut has large sticky buds. Oaks have clustered buds at twig tips. Magnolia has large fuzzy silver buds.',
    tip: 'Use a hand lens or macro camera mode to see bud scale details clearly.',
  },
  {
    num: 4,
    icon: '🍎',
    title: 'Persistent Fruits & Seeds',
    subtitle: 'Often visible through winter',
    description: 'Many trees retain fruits or seed structures through winter. Sweetgum has spiky balls. Tulip Poplar has cone-shaped seed clusters. Sycamore has round fuzzy balls. Ash has hanging clusters of winged seeds. Crabapple retains small fruits.',
    tip: 'Look on branches and check the ground below — fallen fruits often persist.',
  },
  {
    num: 5,
    icon: '🍂',
    title: 'Persistent Leaves (Marcescence)',
    subtitle: 'Beech and some oaks',
    description: 'American Beech reliably holds its dead copper-brown leaves through winter — a phenomenon called marcescence. Young oaks and hornbeams also often retain dead leaves. This persistent dead foliage is a reliable winter identification feature.',
    tip: 'If you see a tree with dead brown leaves still attached in January, think Beech or young Oak first.',
  },
  {
    num: 6,
    icon: '🌲',
    title: 'Evergreen Needles or Scales',
    subtitle: 'Pines, spruces, firs, cedars',
    description: 'Evergreen conifers retain their needles or scale-like leaves year-round, making winter identification straightforward. Needle count per bundle identifies pines — 5 needles means White Pine, 3 means Loblolly Pine. Spruces have sharp square needles, firs have flat soft needles.',
    tip: 'Roll a needle between your fingers — round and rolling means spruce, flat means fir.',
  },
];

const winterTrees = [
  { name: 'White Birch', icon: '🪵', feature: 'Brilliant white peeling bark with black diamond lenticels', difficulty: 'Very Easy' },
  { name: 'American Sycamore', icon: '🌳', feature: 'Camouflage patchwork bark — white, tan, and olive patches', difficulty: 'Very Easy' },
  { name: 'Shagbark Hickory', icon: '🌿', feature: 'Extremely shaggy bark strips curling away from trunk', difficulty: 'Very Easy' },
  { name: 'American Beech', icon: '🍂', feature: 'Smooth silvery gray bark + persistent copper-brown dead leaves', difficulty: 'Very Easy' },
  { name: 'Sweetgum', icon: '⭐', feature: 'Spiky ball fruits hanging on branches all winter', difficulty: 'Very Easy' },
  { name: 'Black Locust', icon: '🌿', feature: 'Deeply furrowed rope-twist ridged dark bark', difficulty: 'Easy' },
  { name: 'American Elm', icon: '🌳', feature: 'Distinctive vase-shaped silhouette visible from far away', difficulty: 'Easy' },
  { name: 'Tulip Poplar', icon: '🌷', feature: 'Cone-shaped dried seed clusters on branches + interlacing bark', difficulty: 'Easy' },
  { name: 'Eastern White Pine', icon: '🌲', feature: 'Long cylindrical cones + 5-needle bundles (evergreen)', difficulty: 'Easy' },
  { name: 'Red Oak', icon: '🌰', feature: 'Dark gray ridged bark with flat-topped reddish ridges', difficulty: 'Medium' },
];

export default function HowToIdentifyTreesInWinter() {
  return (
    <Layout
      meta={{
        title: 'How to Identify Trees in Winter — Complete Guide to Bare Tree Identification | Tree Identifier Blog',
        description: 'Learn how to identify trees in winter without leaves using bark, silhouette, buds, and branching patterns. Complete guide with 10 easy winter trees + AI identification tips.',
        canonical: 'https://treeidentifier.online/blog/how-to-identify-trees-in-winter',
        schema,
      }}
      breadcrumbs={[{ label: 'Blog', href: '/blog' }, { label: 'How to Identify Trees in Winter' }]}
    >
      {/* HERO */}
      <section style={{
        background: `linear-gradient(180deg, rgba(5,5,5,0.75) 0%, var(--black) 100%), url('https://images.unsplash.com/photo-1516912481808-3406841bd33c?w=1600&q=80') center/cover no-repeat`,
        padding: '120px 2rem 5rem',
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
            <span style={{ background: 'rgba(64,192,116,0.1)', color: 'var(--bright-green)', border: '1px solid rgba(64,192,116,0.2)', borderRadius: '50px', padding: '4px 14px', fontSize: '0.78rem', fontWeight: 600 }}>Winter Tree ID</span>
            <span style={{ color: 'var(--gray-mid)', fontSize: '0.85rem' }}>📅 July 18, 2026</span>
            <span style={{ color: 'var(--gray-mid)', fontSize: '0.85rem' }}>⏱ 15 min read</span>
          </div>
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', color: 'var(--white)', lineHeight: 1.15, marginBottom: '1.5rem' }}>
            How to Identify Trees in Winter —<br />Complete Bare Tree Guide
          </h1>
          <p style={{ fontSize: '1.15rem', color: 'rgba(255,255,255,0.75)', lineHeight: 1.8 }}>
            No leaves? No problem. Winter is actually the best time to master tree identification — bark, silhouette, buds, and persistent fruits reveal species identity even in the coldest months.
          </p>
        </div>
      </section>

      <section className="section">
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 2rem', display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '4rem', alignItems: 'start' }}>
          <article className="prose-content" style={{ maxWidth: '100%' }}>

            <h2>Why Winter Is Actually the Best Time to Learn Tree Identification</h2>
            <p>Most people think tree identification becomes impossible in winter when the leaves fall. The opposite is true. Winter strips away the visual complexity of full foliage and forces you to see the fundamental architecture of each tree — its branching pattern, bark texture, overall silhouette, and bud arrangement. These features are just as distinctive as leaves, and learning them makes you a faster, more confident identifier year-round.</p>
            <p>A forest naturalist who can identify trees by bark and silhouette in January is a far more skilled observer than one who relies exclusively on leaves. The winter forest is quieter, more open, and in many ways easier to navigate — you can see farther, notice more, and really study individual trees without the distraction of a full canopy. Our <Link href="/tree-identifier">AI Tree Identifier</Link> works year-round from bark and silhouette photos, making winter identification more accessible than ever.</p>

            <h2>The 6 Key Features for Winter Tree Identification</h2>
            <p>When leaves are gone, shift your focus to these six features. Each one is present year-round and reveals species identity in different ways. The more features you combine, the more confident your identification will be.</p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', margin: '1.5rem 0' }}>
              {winterFeatures.map((f) => (
                <div key={f.num} style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)', borderRadius: '14px', padding: '1.5rem', display: 'flex', gap: '1.2rem', alignItems: 'flex-start' }}>
                  <div style={{ width: '48px', height: '48px', minWidth: '48px', background: 'linear-gradient(135deg, var(--forest-green), var(--mid-green))', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.4rem' }}>{f.icon}</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '0.3rem', flexWrap: 'wrap' }}>
                      <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem', fontWeight: 700, color: 'var(--white)', margin: 0 }}>{f.num}. {f.title}</h3>
                      <span style={{ color: 'var(--bright-green)', fontSize: '0.78rem', fontStyle: 'italic' }}>{f.subtitle}</span>
                    </div>
                    <p style={{ color: 'rgba(255,255,255,0.72)', fontSize: '0.88rem', lineHeight: 1.7, marginBottom: '0.7rem' }}>{f.description}</p>
                    <div style={{ background: 'rgba(64,192,116,0.06)', border: '1px solid rgba(64,192,116,0.15)', borderRadius: '8px', padding: '0.5rem 0.9rem', fontSize: '0.82rem', color: 'var(--bright-green)' }}>
                      💡 {f.tip}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <h2>10 Trees That Are Easy to Identify in Winter</h2>
            <p>These species have such distinctive winter features that identification is reliable with minimal experience. Start here and build your winter tree knowledge from this foundation.</p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', margin: '1.5rem 0' }}>
              {winterTrees.map((tree, i) => (
                <div key={i} style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)', borderRadius: '12px', padding: '1.2rem 1.4rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ width: '40px', height: '40px', minWidth: '40px', background: 'linear-gradient(135deg, var(--forest-green), var(--mid-green))', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem' }}>{tree.icon}</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '0.3rem', flexWrap: 'wrap' }}>
                      <span style={{ color: 'var(--white)', fontWeight: 700, fontSize: '0.95rem' }}>{tree.name}</span>
                      <span style={{ background: tree.difficulty === 'Very Easy' ? 'rgba(64,192,116,0.12)' : 'rgba(255,200,64,0.12)', color: tree.difficulty === 'Very Easy' ? 'var(--bright-green)' : '#ffc840', border: `1px solid ${tree.difficulty === 'Very Easy' ? 'rgba(64,192,116,0.25)' : 'rgba(255,200,64,0.25)'}`, borderRadius: '20px', padding: '2px 10px', fontSize: '0.72rem', fontWeight: 600 }}>{tree.difficulty}</span>
                    </div>
                    <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.85rem', margin: 0 }}>{tree.feature}</p>
                  </div>
                </div>
              ))}
            </div>

            <h2>How to Identify Evergreen Trees in Winter</h2>
            <p>Evergreen trees — pines, spruces, firs, cedars, and hemlocks — are among the easiest trees to identify in winter because they retain their needles or scale-like leaves year-round. The key to identifying evergreens is needle arrangement and structure:</p>
            <p><strong>Pines</strong> have needles bundled in groups of 2, 3, or 5. Eastern White Pine has 5 needles per bundle — the only 5-needle pine in eastern North America. Loblolly Pine has 3 needles per bundle, 15–23cm long. Red Pine has 2 long needles per bundle. The needle count is definitive for pine identification year-round.</p>
            <p><strong>Spruces</strong> have single needles that are square in cross-section — roll them between your fingers and they roll easily. They attach to the twig on small woody pegs that remain after needles fall. Blue Spruce has noticeably blue-green needles and is widely planted as an ornamental. Norway Spruce is a common planted species with drooping branch tips.</p>
            <p><strong>Firs</strong> have flat, soft needles that don't roll between your fingers. They attach directly to the twig leaving a round scar when they fall, not a woody peg. Balsam Fir is the most common native eastern species, with needles showing two white stripes on the underside. Fraser Fir is similar and widely used as a Christmas tree.</p>
            <p>For detailed help identifying specific evergreen species, use our <Link href="/tree-identifier">AI Tree Identifier</Link> with a close-up photo of the needles and cone.</p>

            <h2>Reading Winter Buds — Advanced Identification</h2>
            <p>Winter buds are one of the most precise identification tools available in leafless trees. Once you learn to observe buds systematically, they become as reliable as leaves for species determination. The key bud features to observe are: size, color, shape, arrangement on the twig (opposite or alternate), and number of visible bud scales.</p>
            <p><strong>Opposite buds</strong> — buds arranged in pairs directly across from each other on the twig — immediately narrow the identification to one of the "MAD Cap Horse" families: Maple, Ash, Dogwood, Caprifoliaceae (honeysuckle family), and Horse Chestnut. This single observation eliminates the majority of tree species.</p>
            <p><strong>Alternate buds</strong> — buds arranged singly, alternating sides along the twig — is the arrangement of all other trees including oaks, birches, cherries, elms, and many more. Within alternate-budded trees, bud size and color are the key features: Beech has distinctive long sharp cigar-shaped copper-colored buds; Cherry has clustered reddish buds at twig tips; Magnolia has large fuzzy silver buds.</p>
            <p>Photograph buds with a macro lens or close-up phone camera mode and upload to our <Link href="/tree-identifier">AI Tree Identifier</Link> for species confirmation — the AI recognizes winter bud patterns for most common species.</p>

            <h2>Using Tree Silhouette for Winter Identification</h2>
            <p>The overall shape of a tree — its silhouette — is visible from great distances and often distinctive enough for confident identification. Step back 30–50 meters from the tree you want to identify and observe its overall form against the sky. Key silhouette features include crown shape (rounded, vase-shaped, pyramidal, spreading, weeping), branching angle (upright, horizontal, or drooping), and overall proportions (tall and narrow, short and wide).</p>
            <p>American Elm has one of the most distinctive silhouettes of any North American tree — a graceful vase shape with arching branches spreading wide at the top, visible from great distances. Weeping Willow's drooping branches are unmistakable in winter. Conifers are generally pyramidal or conical. Old oaks spread broadly with massive horizontal limbs. Lombardy Poplars are extremely narrow and columnar.</p>

            <h2>Frequently Asked Questions — Winter Tree Identification</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', margin: '1.5rem 0' }}>
              {[
                { q: 'How do you identify trees in winter without leaves?', a: 'Focus on bark texture and color, overall silhouette, winter buds, and any persistent fruits or seeds. Trees like White Birch, Sycamore, and Shagbark Hickory are unmistakable from bark alone. Use our AI Tree Identifier with a bark or silhouette photo for instant identification.' },
                { q: 'What trees are easiest to identify in winter?', a: 'White Birch (white peeling bark), American Sycamore (camouflage patchwork bark), Shagbark Hickory (extremely shaggy strips), American Beech (smooth silvery gray bark + persistent dead leaves), Sweetgum (spiky ball fruits), and Black Locust (rope-twist ridged bark) are all unmistakable in winter.' },
                { q: 'What are winter buds and how do they help?', a: 'Winter buds are dormant growth buds retained through winter. They vary dramatically between species in size, color, shape, and arrangement. Beech has long sharp copper-colored buds. Horse Chestnut has large sticky buds. Oaks have clustered buds at twig tips. Buds are one of the most reliable winter identification features.' },
                { q: 'Can AI identify trees in winter from photos?', a: 'Yes — our AI Tree Identifier identifies trees year-round from bark, silhouette, winter buds, or persistent fruit photos. For best results, upload a clear bark photo taken with natural side lighting, or a close-up of winter buds.' },
                { q: 'How do you identify oak trees in winter?', a: 'Oak trees in winter: clustered buds at twig tips (unique to oaks), sometimes persistent dead leaves, gray-brown furrowed bark with blocky ridges, broad rounded crown silhouette, and acorn caps on the ground below.' },
                { q: 'What trees keep their leaves in winter?', a: 'American Beech reliably holds dead copper-brown leaves through winter (marcescence). Many young oaks also retain dead leaves. Evergreen trees — all pines, spruces, firs, cedars — keep their needles year-round.' },
                { q: 'How do evergreen and deciduous trees differ in winter?', a: 'Evergreen trees retain their needles or scale leaves through winter. Deciduous trees drop all leaves in autumn. Some deciduous trees like Beech and young oaks are exceptions — they hold dead leaves through winter in a phenomenon called marcescence.' },
              ].map((faq, i) => (
                <div key={i} style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)', borderRadius: '12px', padding: '1.4rem' }}>
                  <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.95rem', fontWeight: 700, color: 'var(--white)', marginBottom: '0.6rem' }}>{faq.q}</h3>
                  <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.88rem', lineHeight: 1.7, margin: 0 }}>{faq.a}</p>
                </div>
              ))}
            </div>

            <h2>Building Your Winter Tree Identification Skills</h2>
            <p>The fastest way to build winter tree identification skills is systematic practice in a familiar location. Choose a park or forest near your home and commit to learning every tree species in it by winter features. Start with the most distinctive bark species — Birch, Sycamore, Beech, Shagbark Hickory — and add one or two new species each week.</p>
            <p>Use our <Link href="/tree-identifier">AI Tree Identifier</Link> to confirm identifications and learn new species. The AI can identify trees from bark photos, silhouette photos, bud close-ups, and persistent fruit photos — giving you a powerful tool for learning even on solo walks. Over one full winter season, you'll build a reliable mental library of 20+ species identifiable without leaves, making you a confident year-round tree identifier.</p>
            <p>For related guides, see our <Link href="/blog/tree-identification-by-bark">complete bark identification guide</Link>, our <Link href="/blog/how-to-identify-trees">beginner tree identification guide</Link>, and our <Link href="/blog/common-tree-species">25 most common tree species guide</Link>. For specific species, explore our dedicated identifiers: <Link href="/oak-tree-identifier">Oak</Link>, <Link href="/maple-tree-identifier">Maple</Link>, <Link href="/pine-tree-identifier">Pine</Link>, <Link href="/birch-tree-identifier">Birch</Link>, and <Link href="/palm-tree-identifier">Palm</Link>.</p>

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
              <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem', fontWeight: 700, color: 'var(--white)', marginBottom: '1rem' }}>❄️ Winter ID Quick Tips</h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
                <li style={{ color: 'var(--gray-mid)', fontSize: '0.85rem' }}>✅ White peeling = White Birch</li>
                <li style={{ color: 'var(--gray-mid)', fontSize: '0.85rem' }}>✅ Camouflage bark = Sycamore</li>
                <li style={{ color: 'var(--gray-mid)', fontSize: '0.85rem' }}>✅ Shaggy strips = Shagbark Hickory</li>
                <li style={{ color: 'var(--gray-mid)', fontSize: '0.85rem' }}>✅ Smooth gray + dead leaves = Beech</li>
                <li style={{ color: 'var(--gray-mid)', fontSize: '0.85rem' }}>✅ Spiky balls = Sweetgum</li>
                <li style={{ color: 'var(--gray-mid)', fontSize: '0.85rem' }}>✅ Rope-twist bark = Black Locust</li>
                <li style={{ color: 'var(--gray-mid)', fontSize: '0.85rem' }}>✅ Vase silhouette = American Elm</li>
                <li style={{ color: 'var(--gray-mid)', fontSize: '0.85rem' }}>✅ 5 needles per bundle = White Pine</li>
              </ul>
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
                <li><Link href="/blog/tree-identification-by-bark" style={{ color: 'var(--gray-mid)', fontSize: '0.88rem' }}>🪵 Tree ID by Bark Guide</Link></li>
                <li><Link href="/blog/how-to-identify-trees" style={{ color: 'var(--gray-mid)', fontSize: '0.88rem' }}>How to Identify Trees</Link></li>
                <li><Link href="/blog/common-tree-species" style={{ color: 'var(--gray-mid)', fontSize: '0.88rem' }}>25 Common Tree Species</Link></li>
                <li><Link href="/blog/tree-identification-by-leaf" style={{ color: 'var(--gray-mid)', fontSize: '0.88rem' }}>Tree ID by Leaf Guide</Link></li>
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <section style={{ padding: '4rem 2rem', background: 'var(--deep-black)', borderTop: '1px solid var(--card-border)', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', color: 'var(--white)', marginBottom: '1rem' }}>Identify Any Tree This Winter — Upload a Photo</h2>
        <p style={{ color: 'var(--gray-mid)', marginBottom: '2rem' }}>Our AI identifies trees from bark, silhouette, and bud photos — works in any season.</p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/tree-identifier" className="btn-primary">🌳 Identify a Tree Now</Link>
          <Link href="/blog" className="btn-outline">📝 More Articles</Link>
        </div>
      </section>
    </Layout>
  );
}
