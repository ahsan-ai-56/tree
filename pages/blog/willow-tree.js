import Layout from '../../components/Layout';
import Link from 'next/link';

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Willow Tree Guide — Weeping Willow, Pussy Willow, and All Willow Species Identified",
    "description": "Complete willow tree guide covering weeping willow, pussy willow, Babylonica weeping willow, oak willow, and all major willow species. Identification tips, growing information, and expert advice.",
    "image": "/willow-tree.jpg",
    "datePublished": "2026-08-18",
    "dateModified": "2026-08-18",
    "author": { "@type": "Organization", "name": "Tree Identifier" },
    "publisher": { "@type": "Organization", "name": "Tree Identifier", "url": "https://treeidentifier.online/" },
    "mainEntityOfPage": "https://treeidentifier.online/blog/willow-tree",
    "wordCount": "2200",
    "keywords": "willow tree, weeping willow, babylonica weeping willow tree, pussy willow tree, oak willow trees, willow tree identification, types of willow trees"
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is a weeping willow tree?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A weeping willow tree (Salix babylonica or Salix × sepulcralis) is a large deciduous tree famous for its long, drooping branches that hang down to or near the ground, creating a graceful curtain of cascading foliage. Weeping willows typically grow 10-25 meters tall with an equally wide spread of drooping branches. They grow extremely fast — up to 2.5 meters per year — and are most commonly found near water, rivers, lakes, and ponds. The leaves are long, narrow, and lance-shaped, 8-15cm long, with finely serrated margins."
        }
      },
      {
        "@type": "Question",
        "name": "What is Salix babylonica — the Babylonica weeping willow?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Salix babylonica, commonly called the Babylonian weeping willow or Babylonica weeping willow, is the original species of weeping willow native to China, despite its misleading name suggesting Babylon. It was brought to Europe via the Silk Road and became one of the most widely planted ornamental trees in the world. Salix babylonica has very long pendulous branches, narrow lance-shaped leaves 7-15cm long, and is less cold-hardy than hybrid weeping willows. In North America, most 'weeping willows' are actually the hybrid Salix × sepulcralis 'Chrysocoma', which is more cold-hardy than true Salix babylonica."
        }
      },
      {
        "@type": "Question",
        "name": "What is a pussy willow tree?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Pussy willow (Salix discolor in North America, Salix caprea in Europe) is a small deciduous shrub or tree famous for its silky soft catkins that appear in late winter or early spring before the leaves. These distinctive fuzzy catkins — called pussy willows — are silvery-white and feel like soft velvet or fur, resembling tiny kittens' paws. Pussy willows typically grow 3-8 meters tall and are among the earliest signs of spring in temperate regions. They are widely used in floral arrangements and as ornamental plants."
        }
      },
      {
        "@type": "Question",
        "name": "How do I identify a willow tree?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Willow trees are identified by five key features: narrow lance-shaped leaves (long and narrow, typically 5-15cm long but only 1-2cm wide), alternate leaf arrangement on the twig, single bud scale covering each bud (unique to willows among common trees), flexible twigs that bend without snapping (useful winter ID feature), and association with water (most willows grow near rivers, lakes, or in wet areas). Weeping willows are immediately identified by their long pendulous drooping branches. Pussy willows are identified by their distinctive fuzzy catkins in late winter-spring."
        }
      },
      {
        "@type": "Question",
        "name": "What is an oak willow tree?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Oak willow (Salix caprea), also called goat willow or great sallow, is a common European willow species whose leaves are broader and more oval than typical willows — somewhat resembling oak leaves in shape, hence the common name. Oak willow grows as a large shrub or small tree to 10 meters, and is one of the most important early-spring food sources for bees and other pollinators in Europe, producing abundant catkins before leaves in March-April. It is the same species as the European pussy willow (Salix caprea)."
        }
      },
      {
        "@type": "Question",
        "name": "How fast do willow trees grow?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Willow trees are among the fastest-growing trees in the world. Weeping willows grow 1.5-2.5 meters per year under good conditions, reaching full size within 10-15 years. Crack willow and white willow also grow very rapidly. This extremely fast growth rate makes willows useful for quick screening, erosion control, and habitat creation, but it also means they have relatively short lifespans compared to oaks and other slow-growing trees — typically 30-100 years for most willow species."
        }
      },
      {
        "@type": "Question",
        "name": "Do willow trees have invasive roots?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes — willow tree roots are notoriously aggressive and invasive. Willow roots actively seek out water sources and can penetrate and damage underground pipes, drainage systems, and foundations if planted too close to buildings or infrastructure. Weeping willows in particular should be planted at least 15-30 meters away from buildings, water pipes, and septic systems. Their roots can extend 2-3 times the diameter of the canopy. Despite this, willows are excellent for erosion control along riverbanks and in wet areas where their aggressive root systems are beneficial."
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
      { "@type": "ListItem", "position": 3, "name": "Willow Tree Guide", "item": "https://treeidentifier.online/blog/willow-tree" }
    ]
  }
];

const willowSpecies = [
  {
    num: 1,
    name: 'Weeping Willow',
    sci: 'Salix × sepulcralis / babylonica',
    icon: '🌊',
    region: 'Worldwide (temperate)',
    leaf: 'Long narrow lance-shaped, 8-15cm, finely serrated, pale underside',
    bark: 'Gray-brown, deeply furrowed on mature trees',
    feature: 'Extremely long pendulous drooping branches reaching ground level',
    note: 'Most iconic willow — the classic "weeping" form loved worldwide. Grows near water.',
    size: '10-25m tall',
    growth: 'Very fast — up to 2.5m/year',
  },
  {
    num: 2,
    name: 'Pussy Willow',
    sci: 'Salix discolor (NA) / caprea (EU)',
    icon: '🐱',
    region: 'North America & Europe',
    leaf: 'Oval to elliptical, 5-10cm, slightly toothed, dark green above gray-green below',
    bark: 'Gray-brown, smooth to slightly furrowed',
    feature: 'Silky soft silvery catkins in late winter before leaves — the iconic "pussy willows"',
    note: 'First sign of spring — fuzzy silver catkins appear in February-March while snow still present.',
    size: '3-8m tall',
    growth: 'Moderate — 30-60cm/year',
  },
  {
    num: 3,
    name: 'White Willow',
    sci: 'Salix alba',
    icon: '⚪',
    region: 'Europe, Asia, North America',
    leaf: 'Long narrow, 5-10cm, silvery-white underside with silky hairs — shimmers in wind',
    bark: 'Gray, deeply furrowed on mature trees',
    feature: 'Silvery-white leaf undersides catch light dramatically in wind',
    note: 'Source of salicin — natural predecessor of aspirin. Classic riverside tree of European landscapes.',
    size: '20-30m tall',
    growth: 'Fast — 1-1.5m/year',
  },
  {
    num: 4,
    name: 'Crack Willow',
    sci: 'Salix fragilis',
    icon: '💥',
    region: 'Europe & Asia (naturalized NA)',
    leaf: 'Long narrow, 9-15cm, glossy dark green, coarsely toothed',
    bark: 'Gray, deeply furrowed, rough',
    feature: 'Twigs snap with a distinctive crack sound at the joint — hence the name',
    note: 'Twigs snap cleanly at base joints and float downstream, rooting where they land — natural propagation.',
    size: '15-25m tall',
    growth: 'Very fast',
  },
  {
    num: 5,
    name: 'Oak Willow / Goat Willow',
    sci: 'Salix caprea',
    icon: '🌿',
    region: 'Europe & Western Asia',
    leaf: 'Broad oval — much wider than typical willows, 5-12cm, resembles oak leaf',
    bark: 'Gray-brown, develops diamond-shaped furrows',
    feature: 'Broader leaves than most willows + important early spring pollen source for bees',
    note: 'Same as European Pussy Willow — produces abundant catkins before leaves. Best willow for wildlife.',
    size: '6-10m tall',
    growth: 'Moderate',
  },
  {
    num: 6,
    name: 'Black Willow',
    sci: 'Salix nigra',
    icon: '⚫',
    region: 'Eastern North America',
    leaf: 'Long narrow, 7-14cm, bright green both sides (no silvery underside)',
    bark: 'Dark brown to black, deeply furrowed and scaly on mature trees',
    feature: 'Darkest bark of any common willow — almost black on mature trees',
    note: 'Most common native willow in eastern North America. Important streambank stabilizer.',
    size: '10-20m tall',
    growth: 'Fast',
  },
  {
    num: 7,
    name: 'Babylon Weeping Willow',
    sci: 'Salix babylonica',
    icon: '🏛️',
    region: 'China (widely planted worldwide)',
    leaf: 'Very long narrow, 7-15cm, slightly less pendulous than hybrid weeping willows',
    bark: 'Gray-brown, furrowed',
    feature: 'Original weeping willow species — native to China despite "Babylonica" name',
    note: 'Less cold-hardy than hybrid weeping willows. Most NA "weeping willows" are actually S. × sepulcralis.',
    size: '10-20m tall',
    growth: 'Very fast',
  },
  {
    num: 8,
    name: 'Dappled Willow',
    sci: 'Salix integra "Hakuro-nishiki"',
    icon: '🎨',
    region: 'Japan (widely planted)',
    leaf: 'Small 3-6cm, pink and white variegated new growth — stunning spring color',
    bark: 'Gray-brown, smooth',
    feature: 'Striking pink-white-green variegated leaves on new growth in spring',
    note: 'Most ornamental willow — grown as a shrub or small tree for spectacular spring foliage color.',
    size: '1-2m (shrub form)',
    growth: 'Moderate',
  },
];

const willowFacts = [
  { icon: '💊', title: 'Natural Aspirin', desc: 'Willow bark contains salicin — the natural compound that inspired the development of aspirin (acetylsalicylic acid) in 1897. Indigenous peoples worldwide have used willow bark for pain relief for thousands of years.' },
  { icon: '🐝', title: 'First Spring Pollinator', desc: 'Pussy willows and other early-flowering willows are among the first pollen and nectar sources for bees emerging in late winter/early spring — critically important for bee survival after winter.' },
  { icon: '🏏', title: 'Cricket Bats', desc: 'Cricket bats are made from White Willow (Salix alba var. caerulea) — the wood is uniquely light, tough, and shock-resistant, making it ideal for the sport. Traditional English cricket bats have used willow for centuries.' },
  { icon: '🛡️', title: 'Erosion Control', desc: 'Willows are planted worldwide for riverbank and slope stabilization. Their aggressive root systems bind soil and reduce erosion — they can be planted as living stakes that root and grow quickly.' },
  { icon: '⚡', title: 'Fastest Growing', desc: 'Weeping willows grow up to 2.5 meters per year — making them among the fastest-growing large trees in the world. A weeping willow can reach full size in 10-15 years.' },
  { icon: '🧺', title: 'Basket Weaving', desc: 'Osier willows (Salix viminalis and related species) have been cultivated for basket weaving for thousands of years. Willow weaving (basketry) remains an important traditional craft worldwide.' },
];

export default function WillowTreeGuide() {
  return (
    <Layout
      meta={{
        title: 'Willow Tree Guide — Weeping Willow, Pussy Willow & All Willow Species | Tree Identifier Blog',
        description: 'Complete willow tree guide covering weeping willow, Babylonica weeping willow, pussy willow, oak willow, and all major willow species. Identification tips, growing info, and expert advice.',
        canonical: 'https://treeidentifier.online/blog/willow-tree',
        schema,
      }}
      breadcrumbs={[{ label: 'Blog', href: '/blog' }, { label: 'Willow Tree Guide' }]}
    >
      {/* HERO */}
      <section style={{
        background: `linear-gradient(180deg, rgba(5,5,5,0.72) 0%, var(--black) 100%), url('https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=1600&q=80') center/cover no-repeat`,
        padding: '120px 2rem 5rem',
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
            <span style={{ background: 'rgba(64,192,116,0.1)', color: 'var(--bright-green)', border: '1px solid rgba(64,192,116,0.2)', borderRadius: '50px', padding: '4px 14px', fontSize: '0.78rem', fontWeight: 600 }}>Willow Trees</span>
            <span style={{ color: 'var(--gray-mid)', fontSize: '0.85rem' }}>📅 August 18, 2026</span>
            <span style={{ color: 'var(--gray-mid)', fontSize: '0.85rem' }}>⏱ 14 min read</span>
          </div>
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', color: 'var(--white)', lineHeight: 1.15, marginBottom: '1.5rem' }}>
            Willow Tree Guide — Weeping Willow,<br />Pussy Willow & All Species
          </h1>
          <p style={{ fontSize: '1.15rem', color: 'rgba(255,255,255,0.75)', lineHeight: 1.8 }}>
            From the iconic weeping willow to the delicate pussy willow — this complete guide covers every major willow species with expert identification tips, growing information, and fascinating facts about one of the world's most beloved tree families.
          </p>
          <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link href="/tree-identifier" className="btn-primary" style={{ fontSize: '0.95rem', padding: '12px 28px' }}>
              🌳 Identify Your Willow →
            </Link>
            <Link href="/identify-tree-by-leaf" className="btn-outline" style={{ fontSize: '0.95rem', padding: '12px 28px' }}>
              🍃 Leaf Identifier
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 2rem', display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '4rem', alignItems: 'start' }}>
          <article className="prose-content" style={{ maxWidth: '100%' }}>

            <h2>What Is a Willow Tree?</h2>
            <p>Willow trees belong to the genus <em>Salix</em> in the family Salicaceae, with approximately 400 species distributed across the Northern Hemisphere. They range from tiny alpine shrubs just a few centimeters tall to majestic trees reaching 30 meters. What unites all willows is their preference for moist conditions — most species grow naturally near water — and their distinctive long, narrow leaves (with some exceptions like the broad-leaved Oak Willow).</p>
            <p>Willows are among the most culturally significant trees in human history. They have given us natural pain relief (the precursor to aspirin), cricket bats, baskets, and some of the most romantic landscape imagery in art and literature. The weeping willow in particular has become a universal symbol of grace, sadness, and reflection — appearing in paintings, poetry, and gardens across every culture that encounters it. Use our <Link href="/tree-identifier">AI Tree Identifier</Link> to identify any willow species from a photo instantly.</p>

            {/* IMAGE 1 */}
            <div style={{ margin: '2rem 0', borderRadius: '16px', overflow: 'hidden', border: '1px solid var(--card-border)' }}>
              <img
                src="/willow.jpg"
                alt="Weeping willow tree with drooping branches near water for identification"
                style={{ width: '100%', height: '300px', objectFit: 'cover' }}
              />
              <div style={{ background: 'var(--card-bg)', padding: '0.8rem 1.2rem' }}>
                <p style={{ color: 'var(--gray-mid)', fontSize: '0.82rem', margin: 0 }}>🌊 Weeping willow trees are identified by their extremely long pendulous drooping branches that cascade toward the ground — no other common tree has this dramatic weeping form.</p>
              </div>
            </div>

            <h2>How to Identify a Willow Tree</h2>
            <p>Willow trees share several identification features that immediately place them in the genus <em>Salix</em>. The most reliable features are:</p>
            <p><strong>Narrow lance-shaped leaves</strong> — most willows have distinctively long and narrow leaves, typically 5-15cm long but only 1-2cm wide. This elongated narrow shape is immediately recognizable. The exception is Oak Willow (<em>Salix caprea</em>), which has broader oval leaves.</p>
            <p><strong>Single bud scale</strong> — each willow bud is covered by a single scale (a tiny cap or hood), unlike most other trees which have multiple overlapping bud scales. This single bud scale is a definitive botanical identification feature of all willows — hold the twig up close and gently press the bud to reveal the single scale.</p>
            <p><strong>Flexible twigs</strong> — willow twigs are notably flexible and bend without snapping, unlike the more brittle twigs of most other trees. This flexibility is a useful winter identification feature when no leaves are present. The one exception is Crack Willow (<em>Salix fragilis</em>), whose twigs snap cleanly at the base — but even these individual twig sections are flexible along their length.</p>
            <p><strong>Catkins</strong> — all willows produce catkins (elongated flower clusters) in spring. These catkins may be silvery (pussy willow), yellow-green, or brown, and appear before or with the leaves. The pussy willow's distinctive silky silver catkins are the most recognizable, but all willow catkins have the same basic structure.</p>
            <p><strong>Association with water</strong> — while not a botanical feature, the habitat association with water is a reliable field clue. Most wild willows grow near streams, rivers, ponds, lakes, or in wet meadows. If you see a large tree growing at a waterside with long narrow leaves, willow is the first genus to consider.</p>

            <h2>Weeping Willow — The Most Iconic Willow</h2>
            <p>The weeping willow is arguably the most recognizable tree in the world — its silhouette of long pendulous branches cascading toward the ground is instantly identifiable from a great distance. What most people call a "weeping willow" is actually a hybrid species: <em>Salix × sepulcralis</em> 'Chrysocoma', a cross between the Chinese <em>Salix babylonica</em> and the European White Willow (<em>Salix alba</em>). This hybrid was developed because the original <em>Salix babylonica</em> (Babylonica weeping willow) is not cold-hardy enough for northern climates.</p>
            <p>Weeping willows grow extraordinarily fast — up to 2.5 meters per year — and can reach their full size of 15-25 meters within 10-15 years of planting. They are almost always found near water, where their aggressive root systems can access the moisture they need. The leaves are long (8-15cm), narrow, and pale on the underside. In autumn, weeping willows turn yellow before dropping their leaves relatively late in the season.</p>
            <p>The main challenge of growing a weeping willow is managing its root system — willow roots are among the most aggressive of any tree and will seek out and penetrate water pipes, drainage systems, and building foundations. Weeping willows should always be planted at least 15-30 meters from any underground infrastructure. Despite this challenge, a mature weeping willow growing over a pond or stream is one of the most magnificent sights in any garden or landscape.</p>

            <h2>Salix Babylonica — The Original Babylonica Weeping Willow</h2>
            <p><em>Salix babylonica</em> — the Babylonica weeping willow — has one of the most misleading botanical names in the plant kingdom. Despite the name suggesting ancient Babylon, this species is actually native to China, not the Middle East. The name was given by Linnaeus in the 18th century based on a mistaken association with the biblical "willows of Babylon" mentioned in Psalm 137 ("By the rivers of Babylon, there we sat down and wept").</p>
            <p>The true Babylon weeping willow was brought from China to Europe via the Silk Road in the 17th and 18th centuries and became enormously fashionable in European gardens. Napoleon Bonaparte was said to have been particularly fond of weeping willows at his residence on Saint Helena, where a large Salix babylonica grew near his grave — cuttings from this tree were distributed worldwide and played a role in popularizing weeping willows in ornamental horticulture.</p>
            <p><em>Salix babylonica</em> is distinguished from the hybrid weeping willows most commonly planted today by being less cold-hardy (not suitable for climates colder than USDA Zone 6), having slightly less pendulous branches than the hybrid 'Chrysocoma', and producing mainly female trees in cultivation. In warmer climates — the southern United States, the Mediterranean, and subtropical regions — true <em>Salix babylonica</em> is still widely planted and thrives.</p>


            <h2>Pussy Willow — The First Sign of Spring</h2>
            <p>Pussy willow (<em>Salix discolor</em> in North America, <em>Salix caprea</em> in Europe) is one of the most beloved trees of late winter and early spring. Its silky soft silvery catkins — the original "pussy willows" — appear on bare branches in late February or March, sometimes while snow is still on the ground, making them one of the earliest and most welcome signs of spring in temperate regions.</p>
            <p>The catkins of pussy willow are staminate (male) catkins on male trees — soft, silvery-white, and covered in fine silky hairs that give them their characteristic velvet-like texture. Female catkins are less showy and less commonly known. Pussy willows are widely used in floral arrangements, spring decorations, and as cut branches brought indoors to "force" in water, where they open early.</p>
            <p>Beyond their ornamental value, pussy willows play an important ecological role as one of the first spring pollen and nectar sources for bees and other pollinators emerging from winter dormancy. A single pussy willow in full catkin is alive with bees on warm late-winter days — an important source of nutrition at a time when few other food sources are available. Pussy willows grow as shrubs or small trees to 3-8 meters, prefer moist soils, and tolerate partial shade.</p>

            <h2>Oak Willow / Goat Willow — The Broad-Leaved Willow</h2>
            <p>Oak willow (<em>Salix caprea</em>), also known as goat willow or great sallow, is one of the most unusual willows because its leaves are broad and oval rather than the typical narrow lance-shape associated with willows. The leaves resemble small oak leaves in shape — broader and more rounded than most willow leaves — which gives rise to the common name "oak willow." This species is the European pussy willow, and it produces abundant catkins before leaves in early spring.</p>
            <p>Oak willow is particularly valuable for wildlife — it is considered one of the most important early-spring food sources for insects in European woodlands, with its abundant catkins providing pollen and nectar to hundreds of species of bees, flies, and moths at a critical time of year. The Purple Emperor butterfly, one of Europe's most spectacular insects, breeds on goat willow caterpillar food plants. For bark-based identification in winter, see our <Link href="/blog/tree-identification-by-bark">bark identification guide</Link>.</p>

            <h2>8 Major Willow Species — Complete Profiles</h2>
            <p>The following profiles cover the 8 most important and commonly encountered willow species worldwide, with identification features for each.</p>

            {willowSpecies.map((tree) => (
              <div key={tree.num} style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)', borderRadius: '16px', padding: '1.8rem', marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ width: '44px', height: '44px', minWidth: '44px', background: 'linear-gradient(135deg, var(--forest-green), var(--mid-green))', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.3rem' }}>{tree.icon}</div>
                  <div style={{ flex: 1 }}>
                    <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '1.05rem', fontWeight: 700, color: 'var(--white)', marginBottom: '0.2rem' }}>#{tree.num} {tree.name}</h3>
                    <p style={{ color: 'var(--bright-green)', fontSize: '0.82rem', fontStyle: 'italic', marginBottom: '1rem' }}>{tree.sci} · {tree.region}</p>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.8rem', marginBottom: '0.8rem' }}>
                      <div><span style={{ color: 'var(--bright-green)', fontSize: '0.75rem', fontWeight: 600, display: 'block', marginBottom: '0.2rem' }}>LEAF</span><span style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.85rem' }}>{tree.leaf}</span></div>
                      <div><span style={{ color: 'var(--bright-green)', fontSize: '0.75rem', fontWeight: 600, display: 'block', marginBottom: '0.2rem' }}>BARK</span><span style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.85rem' }}>{tree.bark}</span></div>
                      <div><span style={{ color: 'var(--bright-green)', fontSize: '0.75rem', fontWeight: 600, display: 'block', marginBottom: '0.2rem' }}>SIZE</span><span style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.85rem' }}>{tree.size}</span></div>
                      <div><span style={{ color: 'var(--bright-green)', fontSize: '0.75rem', fontWeight: 600, display: 'block', marginBottom: '0.2rem' }}>GROWTH RATE</span><span style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.85rem' }}>{tree.growth}</span></div>
                    </div>
                    <div style={{ background: 'rgba(64,192,116,0.06)', border: '1px solid rgba(64,192,116,0.15)', borderRadius: '8px', padding: '0.6rem 0.9rem', fontSize: '0.82rem', color: 'rgba(255,255,255,0.75)', marginBottom: '0.6rem' }}>
                      ⭐ <strong style={{ color: 'var(--bright-green)' }}>Key Feature:</strong> {tree.feature}
                    </div>
                    <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '8px', padding: '0.6rem 0.9rem', fontSize: '0.82rem', color: 'rgba(255,255,255,0.65)' }}>
                      💡 {tree.note}
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <h2>Fascinating Willow Tree Facts</h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', margin: '1.5rem 0' }}>
              {willowFacts.map((fact, i) => (
                <div key={i} style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)', borderRadius: '12px', padding: '1.2rem' }}>
                  <div style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>{fact.icon}</div>
                  <div style={{ color: 'var(--white)', fontWeight: 700, fontSize: '0.9rem', marginBottom: '0.4rem' }}>{fact.title}</div>
                  <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.83rem', lineHeight: 1.6, margin: 0 }}>{fact.desc}</p>
                </div>
              ))}
            </div>

            {/* IMAGE 3 */}
            <div style={{ margin: '2rem 0', borderRadius: '16px', overflow: 'hidden', border: '1px solid var(--card-border)' }}>
              <img
                src="/wilow-tree.jpg"
                alt="Willow tree leaves close up showing narrow lance shaped leaves for identification"
                style={{ width: '100%', height: '260px', objectFit: 'cover' }}
              />
              <div style={{ background: 'var(--card-bg)', padding: '0.8rem 1.2rem' }}>
                <p style={{ color: 'var(--gray-mid)', fontSize: '0.82rem', margin: 0 }}>🍃 Most willow species have distinctive long narrow lance-shaped leaves — much longer than they are wide — that flutter and shimmer in the breeze, creating the characteristic willow sound and movement.</p>
              </div>
            </div>

            <h2>Growing Willow Trees — Tips and Considerations</h2>
            <p>Willow trees are among the easiest trees to grow from cuttings — simply push a fresh willow twig into moist soil and it will root readily. This ease of propagation has made willows valuable for rapid landscape establishment, erosion control, and habitat creation. However, their aggressive root systems require careful placement.</p>
            <p>Always plant willows at least 15-30 meters from buildings, underground pipes, septic systems, and paved surfaces. Willow roots actively seek water and will penetrate any crack in infrastructure to reach it. Near natural water features — ponds, streams, and riverbanks — willows are ideal and their root systems provide valuable bank stabilization.</p>
            <p>Willows prefer full sun and moist to wet soils. They are among the most adaptable trees for waterlogged conditions that would kill most other species. In urban settings, weeping willows are frequently planted near ponds and lakes where their drooping branches create beautiful reflections on the water surface — one of the classic images of romantic landscape design.</p>

            <h2>Frequently Asked Questions — Willow Trees</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', margin: '1.5rem 0' }}>
              {[
                { q: 'What is a weeping willow tree?', a: 'A weeping willow is a large fast-growing tree famous for its extremely long pendulous drooping branches cascading toward the ground. Most are the hybrid Salix × sepulcralis or the original Salix babylonica. They grow 10-25m tall, love water, and grow up to 2.5m per year.' },
                { q: 'What is Salix babylonica — the Babylonica weeping willow?', a: 'Salix babylonica is the original weeping willow species, native to China despite its name. It was spread worldwide via the Silk Road and is less cold-hardy than hybrid weeping willows. Most weeping willows in North America are actually the hybrid Salix × sepulcralis.' },
                { q: 'What is a pussy willow tree?', a: 'Pussy willow (Salix discolor in NA, Salix caprea in Europe) is a small tree famous for its silky silver catkins appearing in late winter before leaves. These fuzzy catkins are beloved as the first sign of spring and are important early food sources for bees.' },
                { q: 'How do I identify a willow tree?', a: 'Look for narrow lance-shaped leaves, single bud scales covering each bud, flexible twigs, catkins in spring, and association with water. Weeping willows are unmistakable from their long drooping branches. Pussy willows are identified by silky silver catkins in late winter.' },
                { q: 'What is an oak willow tree?', a: 'Oak willow (Salix caprea) is a European willow with unusually broad oval leaves resembling oak leaves — very different from typical narrow willow leaves. Also called goat willow, it is the European pussy willow and one of the most important spring pollen sources for bees.' },
                { q: 'How fast do willow trees grow?', a: 'Weeping willows grow up to 2.5 meters per year — among the fastest of any large tree. They reach full size in 10-15 years. Most willow species are fast to very fast growing compared to other trees.' },
                { q: 'Do willow trees have invasive roots?', a: 'Yes — willow roots are very aggressive and will seek out and penetrate water pipes, drains, and foundations. Always plant willows at least 15-30 meters from any underground infrastructure. Near natural water features, their root systems are beneficial for bank stabilization.' },
              ].map((faq, i) => (
                <div key={i} style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)', borderRadius: '12px', padding: '1.4rem' }}>
                  <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.95rem', fontWeight: 700, color: 'var(--white)', marginBottom: '0.6rem' }}>{faq.q}</h3>
                  <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.88rem', lineHeight: 1.7, margin: 0 }}>{faq.a}</p>
                </div>
              ))}
            </div>

            <h2>Identify Your Willow Tree Instantly</h2>
            <p>Found a willow tree and want to know the exact species? Upload a photo to our <Link href="/tree-identifier">free AI Tree Identifier</Link> for instant species identification. The AI identifies all major willow species including weeping willow, pussy willow, white willow, crack willow, and many more from leaf, bark, or full-tree photos.</p>
            <p>For leaf-specific identification, use our <Link href="/identify-tree-by-leaf">AI Leaf Identifier</Link>. Related guides: <Link href="/blog/trees-with-heart-shaped-leaves">Trees with Heart Shaped Leaves</Link>, <Link href="/blog/identify-tree-by-leaves">How to Identify Trees by Leaves</Link>, <Link href="/blog/tree-identification-by-bark">Tree Identification by Bark</Link>, <Link href="/blog/how-to-identify-trees-in-winter">Winter Tree Identification</Link>, and <Link href="/blog/common-tree-species">25 Most Common Tree Species</Link>.</p>
            <p>More species tools: <Link href="/oak-tree-identifier">Oak Tree Identifier</Link>, <Link href="/maple-tree-identifier">Maple Tree Identifier</Link>, <Link href="/elm-tree-identifier">Elm Tree Identifier</Link>, <Link href="/fruit-tree-identifier">Fruit Tree Identifier</Link>, <Link href="/birch-tree-identifier">Birch Tree Identifier</Link>, <Link href="/pine-tree-identifier">Pine Tree Identifier</Link>.</p>

          </article>

          <aside style={{ position: 'sticky', top: '90px' }}>
            <div className="card" style={{ marginBottom: '1.5rem' }}>
              <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem', fontWeight: 700, color: 'var(--bright-green)', marginBottom: '1.2rem' }}>🌊 Identify Your Willow</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                <Link href="/tree-identifier" className="btn-primary" style={{ textAlign: 'center', justifyContent: 'center', fontSize: '0.88rem', padding: '10px 16px' }}>🌳 Tree Identifier</Link>
                <Link href="/identify-tree-by-leaf" className="btn-outline" style={{ textAlign: 'center', justifyContent: 'center', fontSize: '0.88rem', padding: '10px 16px' }}>🍃 Leaf Identifier</Link>
              </div>
            </div>

            <div className="card" style={{ marginBottom: '1.5rem' }}>
              <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem', fontWeight: 700, color: 'var(--white)', marginBottom: '1rem' }}>🌊 Willow Quick ID</h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
                <li style={{ color: 'var(--gray-mid)', fontSize: '0.85rem' }}>✅ Drooping branches = Weeping Willow</li>
                <li style={{ color: 'var(--gray-mid)', fontSize: '0.85rem' }}>✅ Fuzzy silver catkins = Pussy Willow</li>
                <li style={{ color: 'var(--gray-mid)', fontSize: '0.85rem' }}>✅ Silvery leaf underside = White Willow</li>
                <li style={{ color: 'var(--gray-mid)', fontSize: '0.85rem' }}>✅ Snap-off twigs = Crack Willow</li>
                <li style={{ color: 'var(--gray-mid)', fontSize: '0.85rem' }}>✅ Broad oval leaves = Oak Willow</li>
                <li style={{ color: 'var(--gray-mid)', fontSize: '0.85rem' }}>✅ Black bark = Black Willow</li>
                <li style={{ color: 'var(--gray-mid)', fontSize: '0.85rem' }}>✅ Pink-white variegated = Dappled Willow</li>
                <li style={{ color: 'var(--gray-mid)', fontSize: '0.85rem' }}>✅ Single bud scale = All willows</li>
              </ul>
            </div>

            <div className="card" style={{ marginBottom: '1.5rem' }}>
              <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem', fontWeight: 700, color: 'var(--white)', marginBottom: '1rem' }}>🌳 Tree Identifiers</h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                <li><Link href="/oak-tree-identifier" style={{ color: 'var(--gray-mid)', fontSize: '0.88rem' }}>🌰 Oak Tree Identifier</Link></li>
                <li><Link href="/maple-tree-identifier" style={{ color: 'var(--gray-mid)', fontSize: '0.88rem' }}>🍁 Maple Tree Identifier</Link></li>
                <li><Link href="/elm-tree-identifier" style={{ color: 'var(--gray-mid)', fontSize: '0.88rem' }}>🌳 Elm Tree Identifier</Link></li>
                <li><Link href="/fruit-tree-identifier" style={{ color: 'var(--gray-mid)', fontSize: '0.88rem' }}>🍎 Fruit Tree Identifier</Link></li>
                <li><Link href="/birch-tree-identifier" style={{ color: 'var(--gray-mid)', fontSize: '0.88rem' }}>🪵 Birch Tree Identifier</Link></li>
                <li><Link href="/pine-tree-identifier" style={{ color: 'var(--gray-mid)', fontSize: '0.88rem' }}>🌲 Pine Tree Identifier</Link></li>
              </ul>
            </div>

            <div className="card">
              <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem', fontWeight: 700, color: 'var(--white)', marginBottom: '1rem' }}>📝 More Articles</h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                <li><Link href="/blog/trees-with-heart-shaped-leaves" style={{ color: 'var(--gray-mid)', fontSize: '0.88rem' }}>💗 Heart Shaped Leaves</Link></li>
                <li><Link href="/blog/maple-tree-identification-guide" style={{ color: 'var(--gray-mid)', fontSize: '0.88rem' }}>🍁 Maple ID Guide</Link></li>
                <li><Link href="/blog/oak-tree-identification-guide" style={{ color: 'var(--gray-mid)', fontSize: '0.88rem' }}>🌰 Oak ID Guide</Link></li>
                <li><Link href="/blog/tree-identification-by-bark" style={{ color: 'var(--gray-mid)', fontSize: '0.88rem' }}>🪵 Tree ID by Bark</Link></li>
                <li><Link href="/blog/how-to-identify-trees-in-winter" style={{ color: 'var(--gray-mid)', fontSize: '0.88rem' }}>❄️ Winter Tree ID</Link></li>
                <li><Link href="/blog/common-tree-species" style={{ color: 'var(--gray-mid)', fontSize: '0.88rem' }}>25 Common Species</Link></li>
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <section style={{ padding: '4rem 2rem', background: 'var(--deep-black)', borderTop: '1px solid var(--card-border)', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', color: 'var(--white)', marginBottom: '1rem' }}>Identify Any Willow Tree Instantly</h2>
        <p style={{ color: 'var(--gray-mid)', marginBottom: '2rem' }}>Upload a photo of leaves, bark, or catkins — our AI identifies the willow species in seconds. Free, no signup.</p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/tree-identifier" className="btn-primary">🌳 Identify Tree Now</Link>
          <Link href="/blog" className="btn-outline">📝 More Articles</Link>
        </div>
      </section>
    </Layout>
  );
}
