import Layout from '../../components/Layout';
import Link from 'next/link';

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Pine Tree Identification — White Pine, Eastern White Pine, Types of Pine Trees & Complete Guide",
    "description": "Complete pine tree identification guide covering eastern white pine, white pine trees, Florida pine trees, pine needle identification, pine bark identification, pine tree fungus, and all major pine species with charts and expert tips.",
    "image": "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=1200&q=80",
    "datePublished": "2026-08-28",
    "dateModified": "2026-08-28",
    "author": { "@type": "Organization", "name": "Tree Identifier" },
    "publisher": { "@type": "Organization", "name": "Tree Identifier", "url": "https://treeidentifier.online/" },
    "mainEntityOfPage": "https://treeidentifier.online/blog/pine-tree-identification",
    "wordCount": "2500",
    "keywords": "pine tree identification, pine tree, pine trees, white pine tree, eastern white pine, types of pine trees, pine tree identification by needles, pine tree bark identification, pine tree identification chart, white pine tree identification, florida pine trees identification, pine tree fungus identification"
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How do I identify a pine tree?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "To identify a pine tree, focus on four key features: needle count per bundle (fascicle), needle length, cone shape and size, and bark texture. All pine trees have needles growing in bundles of 2, 3, or 5 — this needle count is the single fastest identification feature. 5 needles per bundle = White Pine group (Eastern White Pine, Western White Pine). 2 needles per bundle = Red Pine, Scots Pine, Austrian Pine, Lodgepole Pine. 3 needles per bundle = Loblolly Pine, Ponderosa Pine, Pitch Pine. 2-3 needles = Shortleaf Pine. Upload a clear close-up photo of the needle bundles to our AI Pine Tree Identifier for instant species identification."
        }
      },
      {
        "@type": "Question",
        "name": "What is Eastern White Pine (Pinus strobus)?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Eastern White Pine (Pinus strobus) is the largest native pine tree in eastern North America, reaching 30-60 meters tall at maturity — historically even taller before centuries of logging. It is identified by: 5 long, soft, blue-green needles per bundle (the only common eastern pine with 5 needles), long cylindrical cones (8-20cm) that are slightly curved and resinous, smooth gray-green bark on young trees becoming gray and furrowed with age, and graceful, slightly horizontal branching pattern. Eastern White Pine tree identification is straightforward — 5 soft needles per bundle immediately identifies this species in the eastern forest."
        }
      },
      {
        "@type": "Question",
        "name": "How many types of pine trees are there?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "There are approximately 115-120 species of pine trees worldwide in the genus Pinus, native to the Northern Hemisphere from the Arctic Circle to tropical regions of Central America and Southeast Asia. In North America, about 35-40 pine species are native. The most common North American pines include Eastern White Pine (5 needles), Loblolly Pine (3 needles), Longleaf Pine (3 long needles), Shortleaf Pine (2-3 needles), Red Pine (2 needles), Jack Pine (2 short needles), Scots Pine (2 needles), Ponderosa Pine (3 needles), Western White Pine (5 needles), Sugar Pine (5 needles), and Lodgepole Pine (2 needles)."
        }
      },
      {
        "@type": "Question",
        "name": "How do I identify pine trees by their needles?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Pine tree identification by needles follows a simple system based on needle count per bundle (fascicle): 5 needles = White Pine group (Eastern White Pine, Western White Pine, Sugar Pine). 3 needles = Yellow Pine group (Loblolly, Ponderosa, Pitch, Longleaf). 2 needles = Hard Pine group (Red Pine, Scots Pine, Austrian Pine, Jack Pine, Lodgepole). Some species have 2 or 3 needles (Shortleaf Pine). After counting needles, check needle length — long soft needles (7-15cm) = White Pine. Short stiff needles = Jack Pine or Lodgepole. Very long needles (20-45cm) = Longleaf Pine. Roll a needle between your fingers — round needles roll easily (spruce), flat needles do not (fir). All pine needles roll easily."
        }
      },
      {
        "@type": "Question",
        "name": "What are Florida pine trees?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Florida's most common native pine trees are: Longleaf Pine (Pinus palustris) — once dominant across the Southeast, with the longest needles of any North American pine (20-45cm) and very large cones (15-25cm). Slash Pine (Pinus elliottii) — 2-3 needles, common in wet flatwoods and pinelands. Loblolly Pine (Pinus taeda) — 3 needles, 15-23cm long, most commercially important southeastern pine. Sand Pine (Pinus clausa) — 2 short needles, 5-9cm, adapted to very dry sandy soils. Florida pine trees identification focuses primarily on needle count and length, plus cone size and shape. Longleaf Pine is immediately recognizable from its extraordinarily long needles."
        }
      },
      {
        "@type": "Question",
        "name": "How do I identify pine tree bark?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Pine tree bark identification: Young pine bark of most species is smooth and gray-green, developing distinctive bark patterns with age. Eastern White Pine bark is smooth gray-green on young trees, developing long gray furrows with flat-topped ridges on mature trees. Red Pine bark develops distinctive reddish-orange to reddish-brown upper bark visible on the upper trunk — the most distinctive pine bark color. Scots Pine has similar orange upper bark. Ponderosa Pine has orange-brown to yellowish-brown plated bark that smells of vanilla or butterscotch when warmed by the sun. Longleaf Pine has distinctive plated orange-brown bark. For all species, young bark is less diagnostic than mature bark — photograph the mid-to-upper trunk of mature trees for bark identification."
        }
      },
      {
        "@type": "Question",
        "name": "What is pine tree fungus?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Pine tree fungus refers to several fungal diseases and fungal organisms associated with pine trees. The most common pine tree fungal diseases include: Dothistroma Needle Blight — causes red bands on needles and needle drop, affecting many pine species. White Pine Blister Rust (Cronartium ribicola) — a serious fungal disease of 5-needle pines including Eastern White Pine, causing cankers and branch death. Pine Wilt Disease — caused by a nematode spread by beetles, rapidly kills pine trees. Fusiform Rust — causes spindle-shaped galls on stems of Loblolly and Slash Pine in the southeastern US. For pine tree fungus identification, look for unusual needle discoloration, cankers, resin flow, galls on stems, or shelf-like bracket fungi on the trunk."
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
      { "@type": "ListItem", "position": 3, "name": "Pine Tree Identification", "item": "https://treeidentifier.online/blog/pine-tree-identification" }
    ]
  }
];

const pineSpecies = [
  {
    num: 1,
    name: 'Eastern White Pine',
    sci: 'Pinus strobus',
    icon: '🌲',
    region: 'Eastern North America',
    needles: '5 needles per bundle, 5-13cm, soft, blue-green',
    needleCount: 5,
    cones: 'Long cylindrical, 8-20cm, slightly curved, resinous',
    bark: 'Young: smooth gray-green. Mature: gray, long furrows with flat ridges',
    note: 'Largest native pine in eastern NA. Only common eastern pine with 5 needles — immediately definitive. Once the tallest tree in eastern North America.',
    region2: 'NE USA, Canada, Appalachians',
  },
  {
    num: 2,
    name: 'Loblolly Pine',
    sci: 'Pinus taeda',
    icon: '🌲',
    region: 'Southeastern United States',
    needles: '3 needles per bundle, 15-23cm, stiff, yellow-green',
    needleCount: 3,
    cones: 'Oval-cylindrical, 7-13cm, with sharp prickles on each scale',
    bark: 'Gray-brown to reddish-brown, plated with broad flat ridges',
    note: 'Most commercially important pine in North America — planted extensively for timber. Most common tree in the southeastern US. Common Florida pine.',
    region2: 'SE USA from NJ to Texas',
  },
  {
    num: 3,
    name: 'Longleaf Pine',
    sci: 'Pinus palustris',
    icon: '🌲',
    region: 'Southeastern United States',
    needles: '3 needles per bundle, 20-45cm — LONGEST needles of any NA pine',
    needleCount: 3,
    cones: 'Very large, 15-25cm — largest of any southeastern pine',
    bark: 'Orange-brown, thick, plated — distinctive warm color',
    note: 'Most distinctive pine by needle length — needles so long they droop. Once the dominant tree of the southeastern coastal plain. Critically endangered ecosystem. Key Florida pine trees identification species.',
    region2: 'SE USA coastal plain',
  },
  {
    num: 4,
    name: 'Red Pine',
    sci: 'Pinus resinosa',
    icon: '🔴',
    region: 'Northeastern North America',
    needles: '2 needles per bundle, 12-18cm, stiff, dark green',
    needleCount: 2,
    cones: 'Oval, 4-6cm, without prickles — smooth cone',
    bark: 'Reddish-orange to reddish-brown on upper trunk — most distinctive red-colored bark of any North American pine',
    note: 'Reddish bark on upper trunk is unmistakable — most reliable bark ID feature of any common pine. Also called Norway Pine despite being native to North America.',
    region2: 'Great Lakes, NE USA, Canada',
  },
  {
    num: 5,
    name: 'Scots Pine',
    sci: 'Pinus sylvestris',
    icon: '🌲',
    region: 'Europe (widely planted in NA)',
    needles: '2 needles per bundle, 4-7cm, twisted, blue-green',
    needleCount: 2,
    cones: 'Small oval, 3-6cm, gray-brown',
    bark: 'Lower trunk: gray-brown furrowed. Upper trunk: distinctive orange-red flaking patches',
    note: 'Most widely distributed pine species in the world. Twisted short blue-green needles + orange-red upper bark = distinctive. Widely planted as ornamental in North America.',
    region2: 'Europe to Asia (planted worldwide)',
  },
  {
    num: 6,
    name: 'Ponderosa Pine',
    sci: 'Pinus ponderosa',
    icon: '🌲',
    region: 'Western North America',
    needles: '3 needles per bundle, 12-25cm, stiff, yellow-green',
    needleCount: 3,
    cones: 'Oval, 7-15cm, with sharp prickles',
    bark: 'Orange-brown to yellowish-brown, large flat plates with dark furrows. Smells of vanilla or butterscotch when warmed!',
    note: 'Vanilla-butterscotch bark smell is unmistakable and unique. One of the most important western North American forest trees. Largest pine in western NA.',
    region2: 'Western NA from BC to Mexico',
  },
  {
    num: 7,
    name: 'Pitch Pine',
    sci: 'Pinus rigida',
    icon: '🌲',
    region: 'Eastern North America',
    needles: '3 needles per bundle, 6-12cm, stiff, yellow-green',
    needleCount: 3,
    cones: 'Oval, 5-9cm, remaining on tree for years',
    bark: 'Dark gray, deeply furrowed, very rough. Develops clusters of needles directly on trunk (unusual).',
    note: 'Only common pine that grows needle clusters directly on the trunk and main branches — immediately distinctive. Extremely fire-resistant. Dominates New Jersey Pine Barrens.',
    region2: 'Eastern NA, Pine Barrens',
  },
  {
    num: 8,
    name: 'Jack Pine',
    sci: 'Pinus banksiana',
    icon: '🌲',
    region: 'Northern North America',
    needles: '2 needles per bundle, 2-4cm — SHORTEST needles of any common NA pine',
    needleCount: 2,
    cones: 'Curved, 3-6cm, pointing forward along branch — serotinous (requires fire to open)',
    bark: 'Gray-brown, rough, scaly',
    note: 'Shortest needles of any common NA pine. Curved cones pointing forward along the branch are distinctive. Requires fire to release seeds (serotinous cones).',
    region2: 'Northern Canada, Great Lakes',
  },
];

const needleGuide = [
  { count: '2 Needles', color: '#60a5fa', species: 'Red Pine, Scots Pine, Austrian Pine, Jack Pine, Lodgepole Pine, Virginia Pine', tip: 'If you have 2 needles — check needle length. Short (2-4cm) = Jack Pine. Medium twisted (4-7cm) = Scots Pine. Long stiff (12-18cm) = Red Pine.' },
  { count: '3 Needles', color: '#4ade80', species: 'Loblolly Pine, Ponderosa Pine, Pitch Pine, Longleaf Pine, Slash Pine, Shortleaf Pine', tip: 'If you have 3 needles — check length. Very long (20-45cm) = Longleaf Pine. Medium (15-23cm) = Loblolly. Short with trunk needles = Pitch Pine. Vanilla bark smell = Ponderosa.' },
  { count: '5 Needles', color: '#fbbf24', species: 'Eastern White Pine, Western White Pine, Sugar Pine, Whitebark Pine, Limber Pine', tip: 'If you have 5 needles — in eastern NA = Eastern White Pine (only 5-needle pine in east). In western NA, check cone size: very large (25-50cm) = Sugar Pine.' },
  { count: '2-3 Needles', color: '#f87171', species: 'Shortleaf Pine (Pinus echinata)', tip: 'Variable needle count (some bundles 2, some 3) is unusual and helps identify Shortleaf Pine — the most common pine with variable needle counts.' },
];

export default function PineTreeIdentification() {
  return (
    <Layout
      meta={{
        title: 'Pine Tree Identification — White Pine, Eastern White Pine, Types of Pine Trees & Chart | Tree Identifier',
        description: 'Complete pine tree identification guide. Covers eastern white pine identification, pine tree identification by needles, pine bark identification, Florida pine trees, pine tree fungus, and all types of pine trees with expert tips.',
        canonical: 'https://treeidentifier.online/blog/pine-tree-identification',
        schema,
      }}
      breadcrumbs={[{ label: 'Blog', href: '/blog' }, { label: 'Pine Tree Identification' }]}
    >
      {/* HERO */}
      <section style={{
        background: `linear-gradient(180deg, rgba(5,5,5,0.72) 0%, var(--black) 100%), url('https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=1600&q=80') center/cover no-repeat`,
        padding: '120px 2rem 5rem',
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
            <span style={{ background: 'rgba(64,192,116,0.1)', color: 'var(--bright-green)', border: '1px solid rgba(64,192,116,0.2)', borderRadius: '50px', padding: '4px 14px', fontSize: '0.78rem', fontWeight: 600 }}>Pine Tree ID</span>
            <span style={{ color: 'var(--gray-mid)', fontSize: '0.85rem' }}>📅 August 28, 2026</span>
            <span style={{ color: 'var(--gray-mid)', fontSize: '0.85rem' }}>⏱ 15 min read</span>
          </div>
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', color: 'var(--white)', lineHeight: 1.15, marginBottom: '1.5rem' }}>
            Pine Tree Identification —<br />White Pine, Types of Pine Trees,<br />Needles & Complete Guide
          </h1>
          <p style={{ fontSize: '1.15rem', color: 'rgba(255,255,255,0.75)', lineHeight: 1.8 }}>
            Pine trees are among the most important and widespread trees in the Northern Hemisphere. Whether you're identifying Eastern White Pine, exploring Florida pine trees, or using a pine tree identification chart, this complete guide covers every major pine species with expert needle, cone, and bark identification tips.
          </p>
          <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link href="/pine-tree-identifier" className="btn-primary" style={{ fontSize: '0.95rem', padding: '12px 28px' }}>
              🌲 Pine Tree Identifier →
            </Link>
            <Link href="/tree-identifier" className="btn-outline" style={{ fontSize: '0.95rem', padding: '12px 28px' }}>
              🌳 All Tree Identifier
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 2rem', display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '4rem', alignItems: 'start' }}>
          <article className="prose-content" style={{ maxWidth: '100%' }}>

            <h2>What Is a Pine Tree? — Pine Tree Definition</h2>
            <p>Pine trees are evergreen conifers belonging to the genus <em>Pinus</em> in the family Pinaceae. With approximately 115-120 species worldwide, pines are one of the most diverse and ecologically important groups of trees on Earth. Unlike most trees, pines are evergreen — they retain their needles year-round, shedding individual needles gradually rather than all at once in autumn. Pine trees are immediately distinguished from other conifers (spruces, firs, hemlocks, cedars) by their needles growing in bundles of 2, 3, or 5 called fascicles — this bundled arrangement is unique to pines and is the single fastest identification feature for the genus.</p>
            <p>Pines are found across the Northern Hemisphere from the Arctic to the tropics, dominating forest landscapes from the boreal forests of Canada to the tropical mountain forests of Mexico and Southeast Asia. In North America, approximately 35-40 native pine species cover landscapes from Alaska to Florida, from the Pacific coast to the Atlantic. Use our dedicated <Link href="/pine-tree-identifier">Pine Tree Identifier</Link> to identify any pine species from a photo instantly.</p>

            {/* IMAGE 1 */}
            <div style={{ margin: '2rem 0', borderRadius: '16px', overflow: 'hidden', border: '1px solid var(--card-border)' }}>
              <img
                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=900&q=80"
                alt="Eastern white pine tree showing long needles and graceful form for identification"
                style={{ width: '100%', height: '300px', objectFit: 'cover' }}
              />
              <div style={{ background: 'var(--card-bg)', padding: '0.8rem 1.2rem' }}>
                <p style={{ color: 'var(--gray-mid)', fontSize: '0.82rem', margin: 0 }}>🌲 Eastern White Pine (Pinus strobus) — the largest native pine in eastern North America. Identified by 5 long soft blue-green needles per bundle — the only common eastern pine with 5 needles. Graceful horizontal branching pattern and long cylindrical cones are also distinctive.</p>
              </div>
            </div>

            <h2>Pine Tree Identification Chart — Needle Count System</h2>
            <p>The most reliable and fastest pine tree identification chart system is based on needle count per bundle (fascicle). Before using any other feature, count the needles in one bundle — this single observation immediately narrows your identification from 115+ species to a small group. The pine tree identification by needles approach is used by professional foresters and botanists worldwide because it is reliable, consistent, and works on any pine at any time of year.</p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', margin: '1.5rem 0' }}>
              {needleGuide.map((item, i) => (
                <div key={i} style={{ background: 'var(--card-bg)', border: `1px solid ${item.color}30`, borderRadius: '14px', padding: '1.4rem' }}>
                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                    <div style={{ minWidth: '100px', background: `${item.color}15`, border: `1px solid ${item.color}30`, borderRadius: '10px', padding: '0.6rem', textAlign: 'center' }}>
                      <div style={{ color: item.color, fontWeight: 800, fontSize: '1.1rem', fontFamily: 'Inter, sans-serif' }}>{item.count}</div>
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.88rem', fontWeight: 600, marginBottom: '0.3rem' }}>{item.species}</div>
                      <div style={{ background: `${item.color}08`, border: `1px solid ${item.color}20`, borderRadius: '8px', padding: '0.5rem 0.8rem', fontSize: '0.82rem', color: 'rgba(255,255,255,0.65)' }}>💡 {item.tip}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <h2>Pine Tree Identification by Needles — Detailed Guide</h2>
            <p>After counting needles, the following needle features further narrow pine tree identification:</p>
            <p><strong>Needle length</strong> is highly diagnostic. Eastern White Pine has medium-long needles (5-13cm) that are soft and flexible — a bundle of White Pine needles feels like a soft brush. Longleaf Pine has the longest needles of any North American pine (20-45cm) — so long they droop dramatically. Jack Pine has the shortest needles of any common North American pine (2-4cm) — shorter than a car key. Measuring or estimating needle length against a known reference immediately narrows the species.</p>
            <p><strong>Needle texture</strong> — are the needles soft and flexible (White Pine group) or stiff and sharp (Yellow Pine group, most 2-needle pines)? White Pine needles are notably soft and will not poke your hand when rubbed. Loblolly, Ponderosa, and most other pines have stiff sharp needles that feel like a stiff brush. This soft vs. stiff distinction aligns with the major divisions within pines (Soft Pines = 5 needles; Hard Pines = 2 or 3 needles).</p>
            <p><strong>Needle color</strong> helps distinguish some species. Eastern White Pine has distinctively blue-green needles compared to the yellow-green of most 3-needle pines. Scots Pine has notably blue-green twisted needles that are distinctive. Lodgepole Pine has somewhat yellowish-green needles. Ponderosa Pine has longer, more yellow-green needles than similar 3-needle pines.</p>
            <p>For pictures of pine trees for identification, our <Link href="/pine-tree-identifier">Pine Tree Identifier</Link> accepts photos of needles, cones, bark, or the whole tree and provides instant identification with the needle count confirmed by AI analysis.</p>

            <h2>Eastern White Pine Tree Identification</h2>
            <p>Eastern White Pine (<em>Pinus strobus</em>) is the most important and recognizable pine tree of eastern North America — once the largest tree in the eastern forest and still the tallest pine east of the Rockies. Eastern white pine tree identification is among the easiest of any pine because a single needle bundle feature identifies it immediately: 5 long, soft, blue-green needles per bundle. No other common pine in eastern North America has 5 needles — count them and the identification is definitive.</p>
            <p>White pine tree identification beyond the needles uses cone shape and size (long cylindrical cones, 8-20cm, slightly curved and resinous), bark (smooth gray-green on young trees, developing long gray furrows with flat ridges at maturity), and overall tree form (graceful, wide-spreading horizontal branches that create a distinctive layered canopy visible from a distance). Eastern white pine tree identification in winter is straightforward from needles alone since the tree is evergreen — the long soft 5-needle bundles are present year-round.</p>
            <p>White pine trees were historically the most economically important trees in North America — prized for their tall, straight, clear trunks for ship masts by the British Royal Navy. Broad arrows were carved into white pine trees claimed by the Crown in colonial forests, triggering significant colonial resentment that contributed to the American Revolution. Today, Eastern White Pine remains important for timber, landscaping, and wildlife habitat. White pine trees for sale are widely available at nurseries across eastern North America for use as ornamental trees and wildlife habitat plantings.</p>

            <h2>Florida Pine Trees Identification</h2>
            <p>Florida pine trees identification covers a distinctive set of species adapted to the warm, humid, and often fire-prone climate of the southeastern United States. Florida's forests are dominated by pine — particularly Longleaf Pine, Slash Pine, and Loblolly Pine — and understanding these Florida pine trees is essential for both ecological understanding and practical identification in the region.</p>
            <p><strong>Longleaf Pine</strong> (<em>Pinus palustris</em>) is the most ecologically important Florida pine tree — once covering 37 million hectares across the southeastern coastal plain, now reduced to less than 3% of its original extent. Longleaf Pine identification is immediate from its extraordinarily long needles (20-45cm, sometimes longer) — the longest of any North American pine, so long they droop in graceful arching curves. Young Longleaf Pine trees spend years in a "grass stage" as a grass-like clump before rapidly growing a trunk — the grass-stage seedlings have no visible trunk but a dense cluster of grass-like long needles. Longleaf Pine produces the largest cones of any southeastern pine (15-25cm) and extremely valuable, strong, resinous wood.</p>
            <p><strong>Slash Pine</strong> (<em>Pinus elliottii</em>) is the most common pine in southern Florida, identified by 2-3 needles per bundle (variable, like Shortleaf Pine), needles 18-30cm long, and relatively large cones (7-15cm) with sharp prickles. Slash Pine grows in wet flatwoods and pond edges — its tolerance for wet, poorly drained soils distinguishes it ecologically from Loblolly Pine.</p>
            <p><strong>Sand Pine</strong> (<em>Pinus clausa</em>) grows on the driest, most nutrient-poor sandy soils of central and northwest Florida — often growing in dense, shrubby stands. It has 2 short needles per bundle (5-9cm) and small curved cones that may remain closed on the tree for years (serotinous). Sand Pine is a Florida endemic rarely found outside the state.</p>

            {/* IMAGE 2 */}
            <div style={{ margin: '2rem 0', borderRadius: '16px', overflow: 'hidden', border: '1px solid var(--card-border)' }}>
              <img
                src="https://images.unsplash.com/photo-1516912481808-3406841bd33c?w=900&q=80"
                alt="Pine tree needles close up showing bundle arrangement for identification"
                style={{ width: '100%', height: '280px', objectFit: 'cover' }}
              />
              <div style={{ background: 'var(--card-bg)', padding: '0.8rem 1.2rem' }}>
                <p style={{ color: 'var(--gray-mid)', fontSize: '0.82rem', margin: 0 }}>🌲 Pine tree needle bundles (fascicles) — the number of needles per bundle is the single most reliable pine identification feature. Count needles carefully: 5 = White Pine group; 3 = Yellow Pine group; 2 = Hard Pine group. Needle length and texture provide secondary identification.</p>
              </div>
            </div>

            <h2>Types of Pine Trees — Complete Species Profiles</h2>
            <p>The following profiles cover the 8 most important pine species in North America with complete identification details for pine tree identification by needles, cones, and bark.</p>

            {pineSpecies.map((tree) => (
              <div key={tree.num} style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)', borderRadius: '16px', padding: '1.8rem', marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ width: '44px', height: '44px', minWidth: '44px', background: 'linear-gradient(135deg, var(--forest-green), var(--mid-green))', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.3rem' }}>{tree.icon}</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', gap: '0.8rem', alignItems: 'center', flexWrap: 'wrap', marginBottom: '0.2rem' }}>
                      <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '1.05rem', fontWeight: 700, color: 'var(--white)', margin: 0 }}>#{tree.num} {tree.name}</h3>
                      <span style={{ background: tree.needleCount === 5 ? 'rgba(251,191,36,0.12)' : tree.needleCount === 3 ? 'rgba(64,192,116,0.12)' : 'rgba(96,165,250,0.12)', color: tree.needleCount === 5 ? '#fbbf24' : tree.needleCount === 3 ? 'var(--bright-green)' : '#60a5fa', border: `1px solid ${tree.needleCount === 5 ? 'rgba(251,191,36,0.25)' : tree.needleCount === 3 ? 'rgba(64,192,116,0.25)' : 'rgba(96,165,250,0.25)'}`, borderRadius: '20px', padding: '2px 10px', fontSize: '0.72rem', fontWeight: 700 }}>{tree.needleCount} Needles/Bundle</span>
                    </div>
                    <p style={{ color: 'var(--bright-green)', fontSize: '0.82rem', fontStyle: 'italic', marginBottom: '1rem' }}>{tree.sci} · {tree.region2}</p>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.8rem', marginBottom: '0.8rem' }}>
                      <div><span style={{ color: 'var(--bright-green)', fontSize: '0.75rem', fontWeight: 600, display: 'block', marginBottom: '0.2rem' }}>NEEDLES</span><span style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.85rem' }}>{tree.needles}</span></div>
                      <div><span style={{ color: 'var(--bright-green)', fontSize: '0.75rem', fontWeight: 600, display: 'block', marginBottom: '0.2rem' }}>CONES</span><span style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.85rem' }}>{tree.cones}</span></div>
                      <div style={{ gridColumn: '1 / -1' }}><span style={{ color: 'var(--bright-green)', fontSize: '0.75rem', fontWeight: 600, display: 'block', marginBottom: '0.2rem' }}>BARK</span><span style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.85rem' }}>{tree.bark}</span></div>
                    </div>
                    <div style={{ background: 'rgba(64,192,116,0.05)', border: '1px solid rgba(64,192,116,0.15)', borderRadius: '8px', padding: '0.6rem 0.9rem', fontSize: '0.82rem', color: 'rgba(255,255,255,0.75)' }}>
                      💡 {tree.note}
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <h2>Pine Tree Bark Identification</h2>
            <p>Pine tree bark identification provides year-round identification clues that complement needle and cone identification. Pine bark changes significantly with age, so always note whether you are examining a young tree or a mature specimen when using bark features for identification.</p>
            <p>The most distinctive pine bark features by species: Red Pine has the most immediately recognizable bark — reddish-orange to reddish-brown on the upper trunk, distinctive at any distance. Scots Pine has similar orange-red upper bark, shared with its close relative. Ponderosa Pine bark develops large flat plates of orange-brown to yellowish-brown separated by dark furrows — and uniquely, it smells of vanilla or butterscotch when the sun warms the bark. Eastern White Pine bark is smooth gray-green on young trees, developing long gray furrows with flat ridges at maturity. Pitch Pine bark is very rough and dark gray with deep irregular furrows — among the roughest bark of any eastern pine.</p>
            <p>For bark-based pine identification, photograph a section of mid-trunk bark (not the base, which is often differently colored) in natural side lighting to reveal texture clearly. See our <Link href="/blog/tree-identification-by-bark">complete bark identification guide</Link> and <Link href="/blog/trees-with-white-bark">trees with white bark guide</Link> for more bark identification tips.</p>

            {/* IMAGE 3 */}
            <div style={{ margin: '2rem 0', borderRadius: '16px', overflow: 'hidden', border: '1px solid var(--card-border)' }}>
              <img
                src="https://images.unsplash.com/photo-1448375240586-882707db888b?w=900&q=80"
                alt="Pine tree bark showing rough textured bark for identification"
                style={{ width: '100%', height: '260px', objectFit: 'cover' }}
              />
              <div style={{ background: 'var(--card-bg)', padding: '0.8rem 1.2rem' }}>
                <p style={{ color: 'var(--gray-mid)', fontSize: '0.82rem', margin: 0 }}>🪵 Pine tree bark varies dramatically by species and age. Red Pine and Scots Pine have reddish-orange upper bark. Ponderosa Pine bark smells of vanilla when warm. Eastern White Pine bark is smooth and gray-green on young trees. Pitch Pine has rough dark furrowed bark.</p>
              </div>
            </div>

            <h2>Pine Tree Fungus Identification</h2>
            <p>Pine tree fungus identification is important for tree health assessment and forest management. Several major fungal diseases affect pine trees, and recognizing their symptoms helps identify both the disease and sometimes the pine species affected.</p>
            <p><strong>White Pine Blister Rust</strong> (<em>Cronartium ribicola</em>) affects Eastern White Pine and other 5-needle pines. It causes orange-yellow blisters on infected branches in spring, followed by cankers (sunken dead areas) on branches and main stems that can girdle and kill branches or the whole tree. White Pine Blister Rust cannot spread directly between pine trees — it requires an alternate host (currant or gooseberry plants) to complete its life cycle, making it manageable by removing alternate hosts near valuable pines.</p>
            <p><strong>Dothistroma Needle Blight</strong> is a fungal disease affecting many pine species, causing distinctive red bands across needles followed by needle death beyond the band. Infected needles turn brown and fall prematurely. This disease can seriously weaken and eventually kill pine trees, particularly in wet years when the fungal spores spread readily. Scots Pine and Loblolly Pine are particularly susceptible.</p>
            <p><strong>Pine Tree Fungus Shelf Fungi</strong> — bracket or shelf fungi growing on pine trunks or roots indicate internal decay. Common pine-associated bracket fungi include Phellinus pini (red ring rot) which causes red-brown decay of heartwood. While these fungi indicate internal decay, they may not kill the tree immediately, but trees with significant shelf fungi growth should be assessed by an arborist for safety.</p>

            <h2>Pine Tree Drawing — Identifying Pines from Silhouette</h2>
            <p>A pine tree drawing or silhouette can help with identification — pine tree form varies significantly between species. Eastern White Pine has a distinctive graceful irregular crown with horizontal layered branches that droop slightly at the tips — a soft, feathery outline. Loblolly and other southern pines have a more cylindrical crown with a compact, dense canopy. Scots Pine develops an irregular, flat-topped crown at maturity, particularly distinctive in open-grown trees. Ponderosa Pine has an open, irregular crown with relatively sparse branches. Pitch Pine often has a gnarled, irregular form from exposure to fire, wind, and poor soils.</p>
            <p>The overall pine tree silhouette is most useful for identifying young trees in plantation or landscape settings, where the crown form is less influenced by environmental stress. For mature forest pines where bark, needles, and cones are more diagnostic, use the needle count and bark features first. For identifying pines from photos or pictures of pine trees for identification, our <Link href="/pine-tree-identifier">Pine Tree Identifier</Link> analyzes needle bundles, cone structure, bark, and overall form simultaneously.</p>

            <h2>Frequently Asked Questions — Pine Tree Identification</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', margin: '1.5rem 0' }}>
              {[
                { q: 'How do I identify a pine tree?', a: 'Count needles per bundle (fascicle) — this is the single fastest identification step. 5 needles = White Pine group (Eastern White Pine). 3 needles = Yellow Pine group (Loblolly, Ponderosa, Longleaf). 2 needles = Hard Pine group (Red Pine, Scots Pine, Jack Pine). Then check needle length, cone shape, and bark texture to confirm species.' },
                { q: 'What is Eastern White Pine (Pinus strobus)?', a: 'Eastern White Pine is the largest native pine in eastern NA. Identified by 5 long soft blue-green needles per bundle — the only common eastern pine with 5 needles. Long cylindrical cones 8-20cm. Smooth gray-green bark when young, long furrowed bark when mature. Once the tallest tree in eastern North America.' },
                { q: 'How many types of pine trees are there?', a: 'About 115-120 species worldwide, with 35-40 native to North America. Most common include Eastern White Pine (5 needles), Loblolly (3 needles), Longleaf (3 very long needles), Red Pine (2 needles, reddish bark), Scots Pine (2 short twisted needles), Ponderosa Pine (3 needles, vanilla bark smell), and Jack Pine (2 very short needles).' },
                { q: 'How do I identify pine trees by their needles?', a: 'Count needles per bundle: 5 = White Pine group. 3 = Yellow Pine group. 2 = Hard Pine group. Then check length: very long (20-45cm) = Longleaf Pine. Short (2-4cm) = Jack Pine. Soft and flexible = White Pine group. Stiff and sharp = Hard/Yellow Pine group. Blue-green and twisted = Scots Pine.' },
                { q: 'What are Florida pine trees?', a: 'Florida\'s main pines are Longleaf Pine (very long needles 20-45cm, largest cones), Slash Pine (2-3 needles, 18-30cm, wet habitats), Loblolly Pine (3 needles, 15-23cm, most commercial), and Sand Pine (2 short needles, dry sandy soils). Longleaf Pine identification is immediate from extraordinarily long drooping needles.' },
                { q: 'How do I identify pine tree bark?', a: 'Red Pine: reddish-orange upper trunk bark — most distinctive. Scots Pine: similar orange-red upper bark. Ponderosa Pine: orange-brown plates that smell of vanilla when warm. Eastern White Pine: smooth gray-green young, long gray furrows mature. Pitch Pine: rough dark gray deeply furrowed. All young pine bark is smoother than mature bark.' },
                { q: 'What is pine tree fungus?', a: 'Common pine fungal diseases: White Pine Blister Rust (orange blisters + cankers on 5-needle pines), Dothistroma Needle Blight (red bands on needles, then needle death), Pine Wilt Disease (rapid death spread by beetles/nematodes), Fusiform Rust (spindle galls on southeastern pines). Bracket fungi on trunk indicate internal decay.' },
              ].map((faq, i) => (
                <div key={i} style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)', borderRadius: '12px', padding: '1.4rem' }}>
                  <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.95rem', fontWeight: 700, color: 'var(--white)', marginBottom: '0.6rem' }}>{faq.q}</h3>
                  <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.88rem', lineHeight: 1.7, margin: 0 }}>{faq.a}</p>
                </div>
              ))}
            </div>

            <h2>Identify Your Pine Tree Instantly</h2>
            <p>Found a pine tree and want to confirm the exact species? Use our dedicated <Link href="/pine-tree-identifier">Pine Tree Identifier</Link> for instant AI identification from needle, cone, or bark photos. Our general <Link href="/tree-identifier">AI Tree Identifier</Link> also identifies all pine species from any photo.</p>
            <p>Related guides: <Link href="/blog/trees-with-white-bark">Trees With White Bark</Link>, <Link href="/blog/tree-identification-by-bark">Tree ID by Bark</Link>, <Link href="/blog/how-to-identify-trees-in-winter">Winter Tree ID</Link>, <Link href="/blog/fast-growing-trees">Fast Growing Trees</Link>, <Link href="/blog/hickory-tree-identification">Hickory Tree Guide</Link>.</p>
            <p>More species tools: <Link href="/oak-tree-identifier">Oak Tree Identifier</Link>, <Link href="/maple-tree-identifier">Maple Tree Identifier</Link>, <Link href="/birch-tree-identifier">Birch Tree Identifier</Link>, <Link href="/elm-tree-identifier">Elm Tree Identifier</Link>, <Link href="/fruit-tree-identifier">Fruit Tree Identifier</Link>.</p>

          </article>

          <aside style={{ position: 'sticky', top: '90px' }}>
            <div className="card" style={{ marginBottom: '1.5rem' }}>
              <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem', fontWeight: 700, color: 'var(--bright-green)', marginBottom: '1.2rem' }}>🌲 Identify Your Pine</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                <Link href="/pine-tree-identifier" className="btn-primary" style={{ textAlign: 'center', justifyContent: 'center', fontSize: '0.88rem', padding: '10px 16px' }}>🌲 Pine Tree Identifier</Link>
                <Link href="/tree-identifier" className="btn-outline" style={{ textAlign: 'center', justifyContent: 'center', fontSize: '0.88rem', padding: '10px 16px' }}>🌳 All Tree Identifier</Link>
                <Link href="/identify-tree-by-leaf" className="btn-outline" style={{ textAlign: 'center', justifyContent: 'center', fontSize: '0.88rem', padding: '10px 16px' }}>🍃 Leaf Identifier</Link>
              </div>
            </div>

            <div className="card" style={{ marginBottom: '1.5rem' }}>
              <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem', fontWeight: 700, color: 'var(--white)', marginBottom: '1rem' }}>🌲 Pine Needle Quick ID</h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
                <li style={{ color: 'var(--gray-mid)', fontSize: '0.85rem' }}>✅ 5 soft needles = White Pine</li>
                <li style={{ color: 'var(--gray-mid)', fontSize: '0.85rem' }}>✅ 3 long (15-23cm) = Loblolly</li>
                <li style={{ color: 'var(--gray-mid)', fontSize: '0.85rem' }}>✅ 3 very long (20-45cm) = Longleaf</li>
                <li style={{ color: 'var(--gray-mid)', fontSize: '0.85rem' }}>✅ 3 vanilla smell bark = Ponderosa</li>
                <li style={{ color: 'var(--gray-mid)', fontSize: '0.85rem' }}>✅ 2 short twisted = Scots Pine</li>
                <li style={{ color: 'var(--gray-mid)', fontSize: '0.85rem' }}>✅ 2 long red bark = Red Pine</li>
                <li style={{ color: 'var(--gray-mid)', fontSize: '0.85rem' }}>✅ 2 very short (2-4cm) = Jack Pine</li>
                <li style={{ color: 'var(--gray-mid)', fontSize: '0.85rem' }}>✅ Trunk needles = Pitch Pine</li>
              </ul>
            </div>

            <div className="card" style={{ marginBottom: '1.5rem' }}>
              <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem', fontWeight: 700, color: 'var(--white)', marginBottom: '1rem' }}>🌳 Tree Identifiers</h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                <li><Link href="/oak-tree-identifier" style={{ color: 'var(--gray-mid)', fontSize: '0.88rem' }}>🌰 Oak Tree Identifier</Link></li>
                <li><Link href="/maple-tree-identifier" style={{ color: 'var(--gray-mid)', fontSize: '0.88rem' }}>🍁 Maple Tree Identifier</Link></li>
                <li><Link href="/birch-tree-identifier" style={{ color: 'var(--gray-mid)', fontSize: '0.88rem' }}>🪵 Birch Tree Identifier</Link></li>
                <li><Link href="/elm-tree-identifier" style={{ color: 'var(--gray-mid)', fontSize: '0.88rem' }}>🌳 Elm Tree Identifier</Link></li>
                <li><Link href="/fruit-tree-identifier" style={{ color: 'var(--gray-mid)', fontSize: '0.88rem' }}>🍎 Fruit Tree Identifier</Link></li>
              </ul>
            </div>

            <div className="card">
              <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem', fontWeight: 700, color: 'var(--white)', marginBottom: '1rem' }}>📝 More Articles</h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                <li><Link href="/blog/trees-with-white-bark" style={{ color: 'var(--gray-mid)', fontSize: '0.88rem' }}>🪵 Trees With White Bark</Link></li>
                <li><Link href="/blog/trees-with-white-flowers" style={{ color: 'var(--gray-mid)', fontSize: '0.88rem' }}>🌸 Trees With White Flowers</Link></li>
                <li><Link href="/blog/fast-growing-trees" style={{ color: 'var(--gray-mid)', fontSize: '0.88rem' }}>⚡ Fast Growing Trees</Link></li>
                <li><Link href="/blog/hickory-tree-identification" style={{ color: 'var(--gray-mid)', fontSize: '0.88rem' }}>🌳 Hickory Tree Guide</Link></li>
                <li><Link href="/blog/tree-identification-by-bark" style={{ color: 'var(--gray-mid)', fontSize: '0.88rem' }}>🪵 Tree ID by Bark</Link></li>
                <li><Link href="/blog/how-to-identify-trees-in-winter" style={{ color: 'var(--gray-mid)', fontSize: '0.88rem' }}>❄️ Winter Tree ID</Link></li>
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <section style={{ padding: '4rem 2rem', background: 'var(--deep-black)', borderTop: '1px solid var(--card-border)', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', color: 'var(--white)', marginBottom: '1rem' }}>Identify Any Pine Tree Instantly</h2>
        <p style={{ color: 'var(--gray-mid)', marginBottom: '2rem' }}>Upload a photo of needles, cones, bark, or full tree — our AI identifies the pine species in seconds. Free, no signup required.</p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/pine-tree-identifier" className="btn-primary">🌲 Pine Tree Identifier</Link>
          <Link href="/blog" className="btn-outline">📝 More Articles</Link>
        </div>
      </section>
    </Layout>
  );
}
