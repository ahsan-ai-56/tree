import Layout from '../../components/Layout';
import Link from 'next/link';

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Mulberry Tree Identification — White Mulberry, Red Mulberry, Black Mulberry & Complete Guide",
    "description": "Complete mulberry tree identification guide covering white mulberry, red mulberry (Morus rubra), black mulberry, Pakistan mulberry, dwarf mulberry, weeping mulberry, mulberry leaves, fruit, bark, and care tips.",
    "image": "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=1200&q=80",
    "datePublished": "2026-08-21",
    "dateModified": "2026-08-21",
    "author": { "@type": "Organization", "name": "Tree Identifier" },
    "publisher": { "@type": "Organization", "name": "Tree Identifier", "url": "https://treeidentifier.online/" },
    "mainEntityOfPage": "https://treeidentifier.online/blog/mulberry-tree-identification",
    "wordCount": "2500",
    "keywords": "mulberry tree identification, mulberry tree, mulberry, white mulberry, red mulberry, morus rubra, black mulberry, mulberry fruit, mulberry tree leaves, mulberry tree care, fruitless mulberry tree, weeping mulberry tree, pakistan mulberry, dwarf mulberry, mulberry wood, mulberry bush, are mulberries edible"
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How do I identify a mulberry tree?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Mulberry trees are identified by five key features: highly variable leaves on the same tree (some heart-shaped or oval, some deeply lobed like mittens or gloves — unique among common trees), milky white sap when a leaf stalk is broken, alternate leaf arrangement, fruit that resembles elongated blackberries (1-3cm, ripening from white/green to red to black depending on species), and rough sandpaper-like upper leaf surface. The variable leaf shapes on a single tree is the most distinctive mulberry identification feature — no other common tree produces such dramatically different leaf shapes on the same individual."
        }
      },
      {
        "@type": "Question",
        "name": "What is the difference between white mulberry, red mulberry, and black mulberry?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "White Mulberry (Morus alba): native to China, smooth leaf underside, fruit ripens white to pink to purple-black, milder flavor, less juicy. Red Mulberry (Morus rubra): native to eastern North America, rough hairy leaf underside, fruit ripens red then dark purple-black, more flavorful and juicy than white mulberry. Black Mulberry (Morus nigra): native to western Asia, largest and darkest fruit, richest most complex flavor, considered the finest culinary mulberry. The fruit color at FULL RIPENESS is similar across all species (dark purple-black) — the species names refer to bark color or the intermediate fruit color, not the ripe fruit."
        }
      },
      {
        "@type": "Question",
        "name": "Are mulberries edible? Can you eat mulberries?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes — mulberries are completely edible and delicious. All three main species (white, red, and black mulberry) produce edible fruit. Ripe mulberries are sweet, slightly tart, and rich in vitamins C and K, iron, and antioxidants. They can be eaten fresh off the tree, used in jams, pies, cobblers, smoothies, and wines, or dried for later use. Unripe mulberries (still red or green) should not be eaten in large quantities as they can cause mild stomach upset. Black Mulberry (Morus nigra) is considered the most flavorful for culinary use."
        }
      },
      {
        "@type": "Question",
        "name": "Why are mulberry trees illegal in some places?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Mulberry trees are banned or restricted in some cities — most notably Las Vegas, Nevada and El Paso, Texas — primarily because of their pollen. White Mulberry (Morus alba) is a heavy pollen producer and is a significant cause of seasonal allergies in areas where it has naturalized. Some cities banned mulberry trees during mid-20th century allergy awareness campaigns. Additionally, the falling fruit of fruiting mulberry trees stains sidewalks, driveways, and cars dramatically — the dark purple juice is very difficult to remove — leading some municipalities and homeowners to prefer fruitless mulberry cultivars."
        }
      },
      {
        "@type": "Question",
        "name": "What is Red Mulberry (Morus rubra)?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Red Mulberry (Morus rubra) is the only mulberry species native to eastern North America, found from southern Ontario and New England south to Florida and west to Nebraska and Texas. It is identified by leaves with a distinctly rough, sandpaper-like upper surface and a hairy underside (much rougher than White Mulberry leaves), variable leaf shapes (heart-shaped, lobed, or mitten-shaped on the same tree), and fruit that ripens from red to very dark purple-black. Morus rubra is increasingly rare in the wild due to hybridization with the introduced White Mulberry."
        }
      },
      {
        "@type": "Question",
        "name": "What is a fruitless mulberry tree?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Fruitless mulberry trees are male cultivars of White Mulberry (Morus alba) that produce no fruit — only pollen. They were widely planted as shade trees in the American Southwest and other regions because they provide fast-growing dense shade without the messy staining fruit. However, fruitless mulberries still produce significant amounts of pollen, contributing to seasonal allergies. The most common fruitless mulberry cultivar is 'Stribling' — a fast-growing shade tree widely planted in California, Texas, and the southwestern United States."
        }
      },
      {
        "@type": "Question",
        "name": "What is Pakistan mulberry tree?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Pakistan mulberry (Morus macroura 'Pakistan') is a variety of long-fruited mulberry producing exceptionally long fruit — up to 7-10cm, compared to 1-3cm for typical mulberries. The fruit is deep red to black-purple when ripe, very sweet and flavorful, and much larger than any other commonly available mulberry. Pakistan mulberry trees are vigorous and fast-growing, popular in warm-climate gardens (USDA zones 7-11) for their exceptional fruit quality and size. They are widely grown in South Asia, the Middle East, and increasingly in California and the American South."
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
      { "@type": "ListItem", "position": 3, "name": "Mulberry Tree Identification", "item": "https://treeidentifier.online/blog/mulberry-tree-identification" }
    ]
  }
];

const mulberrySpecies = [
  {
    num: 1,
    name: 'White Mulberry',
    sci: 'Morus alba',
    icon: '⚪',
    region: 'Native China — worldwide naturalized',
    leaf: 'Variable — smooth glossy upper surface, hairless or slightly hairy underside, lighter green',
    bark: 'Orange-brown to gray-brown, furrowed with flat-topped ridges',
    fruit: 'Ripens white to pink to pale purple — mild sweet flavor, less juicy than red or black',
    note: 'Original silkworm food plant — brought to Europe and Americas for silk production. Most common mulberry worldwide.',
    size: '10-20m',
  },
  {
    num: 2,
    name: 'Red Mulberry',
    sci: 'Morus rubra',
    icon: '🔴',
    region: 'Eastern North America (native)',
    leaf: 'Variable — very rough sandpaper-like upper surface, distinctly hairy underside (key ID feature)',
    bark: 'Brown to orange-brown, develops ridges and furrows similar to White Mulberry',
    fruit: 'Ripens red then deep purple-black — more flavorful and juicy than White Mulberry',
    note: 'Only mulberry native to North America. Increasingly rare due to hybridization with White Mulberry.',
    size: '10-20m',
  },
  {
    num: 3,
    name: 'Black Mulberry',
    sci: 'Morus nigra',
    icon: '⚫',
    region: 'Native western Asia — Mediterranean, worldwide',
    leaf: 'Heart-shaped, rough upper surface, hairy underside, darker green than White Mulberry',
    bark: 'Dark orange-brown, shaggy and deeply furrowed on mature trees',
    fruit: 'Largest and darkest fruit, deep red-black, richest most complex flavor — best for cooking',
    note: 'Best culinary mulberry — preferred for jams, wines, and fresh eating. Long-lived (can reach 300+ years).',
    size: '10-13m',
  },
  {
    num: 4,
    name: 'Pakistan Mulberry',
    sci: 'Morus macroura "Pakistan"',
    icon: '🇵🇰',
    region: 'South Asia — widely planted warm climates',
    leaf: 'Similar to White Mulberry — smooth surface, variable shapes',
    bark: 'Gray-brown, similar to White Mulberry',
    fruit: 'Extremely long fruit 7-10cm — largest mulberry available, deep red to black-purple, very sweet',
    note: 'Most popular mulberry for fruit production in warm climates. Fruit size dramatically larger than any other mulberry.',
    size: '8-15m',
  },
  {
    num: 5,
    name: 'Fruitless Mulberry',
    sci: 'Morus alba "Stribling"',
    icon: '🌿',
    region: 'Cultivar — SW United States, worldwide',
    leaf: 'Same as White Mulberry — variable shapes, smooth surface',
    bark: 'Same as White Mulberry',
    fruit: 'No fruit produced — male clone, pollen only',
    note: 'Widely planted shade tree in American Southwest. Fast-growing, no messy fruit, but still produces allergenic pollen.',
    size: '10-15m',
  },
  {
    num: 6,
    name: 'Weeping Mulberry',
    sci: 'Morus alba "Pendula"',
    icon: '🌊',
    region: 'Cultivar — worldwide',
    leaf: 'Same variable shapes as White Mulberry',
    bark: 'Gray-brown, same as White Mulberry',
    fruit: 'Small white to purple fruit (female trees)',
    note: 'Dramatic weeping form — pendulous branches cascade to ground. Popular ornamental, usually grafted onto a standard rootstock.',
    size: '3-5m (grafted form)',
  },
  {
    num: 7,
    name: 'Dwarf Mulberry',
    sci: 'Morus nigra "Wellington" / alba "Issai"',
    icon: '🪴',
    region: 'Cultivar — worldwide',
    leaf: 'Smaller than standard mulberry — otherwise same variable shapes',
    bark: 'Same as parent species',
    fruit: '"Issai" (White Mulberry dwarf) produces fruit from first year even in container',
    note: 'Ideal for small gardens and containers. "Issai" dwarf mulberry is particularly popular for patio growing.',
    size: '1.5-3m',
  },
];

const mulberryLeafFacts = [
  { icon: '🍃', title: 'Highly Variable on Same Tree', desc: 'The most distinctive mulberry leaf feature — a single mulberry tree can have unlobed heart-shaped leaves, mitten-shaped leaves (one lobe), and multi-lobed leaves (2-5 lobes) all on the same branch. No other common tree shows this leaf diversity.' },
  { icon: '🥛', title: 'Milky Sap', desc: 'Break a mulberry leaf stalk and a milky white latex sap appears — present in all mulberry species. This milky sap is a reliable identification feature that distinguishes mulberry from similar-looking trees.' },
  { icon: '✋', title: 'Rough or Smooth Surface', desc: 'Leaf surface texture is the most reliable species identification feature. Red Mulberry leaves have an extremely rough sandpaper upper surface and hairy underside. White Mulberry leaves are smooth and slightly glossy. Black Mulberry is intermediate.' },
  { icon: '🦋', title: 'Silkworm Food', desc: 'White Mulberry leaves are the primary food source for silkworms (Bombyx mori) — the caterpillar that produces silk. White Mulberry was spread worldwide specifically to support silk production, making it one of the most economically important leaves in history.' },
  { icon: '🍂', title: 'Fall Color', desc: 'Mulberry trees turn a pleasant yellow in autumn before leaf drop. The fall color is not as spectacular as maples or oaks, but the large variable leaves create an attractive display before dropping.' },
  { icon: '📐', title: 'Identification Key', desc: 'To identify mulberry leaves: smooth shiny surface = White Mulberry. Very rough sandpaper surface + hairy underside = Red Mulberry. Rough surface + darker green = Black Mulberry. All mulberry leaves have toothed margins and alternate arrangement.' },
];

export default function MulberryTreeIdentification() {
  return (
    <Layout
      meta={{
        title: 'Mulberry Tree Identification — White Mulberry, Red Mulberry & Black Mulberry Guide | Tree Identifier',
        description: 'Complete mulberry tree identification guide. Learn to identify white mulberry, red mulberry (Morus rubra), black mulberry, Pakistan mulberry, fruitless mulberry & weeping mulberry by leaves, fruit & bark.',
        canonical: 'https://treeidentifier.online/blog/mulberry-tree-identification',
        schema,
      }}
      breadcrumbs={[{ label: 'Blog', href: '/blog' }, { label: 'Mulberry Tree Identification' }]}
    >
      {/* HERO */}
      <section style={{
        background: `linear-gradient(180deg, rgba(5,5,5,0.72) 0%, var(--black) 100%), url('https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=1600&q=80') center/cover no-repeat`,
        padding: '120px 2rem 5rem',
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
            <span style={{ background: 'rgba(64,192,116,0.1)', color: 'var(--bright-green)', border: '1px solid rgba(64,192,116,0.2)', borderRadius: '50px', padding: '4px 14px', fontSize: '0.78rem', fontWeight: 600 }}>Mulberry Trees</span>
            <span style={{ color: 'var(--gray-mid)', fontSize: '0.85rem' }}>📅 August 21, 2026</span>
            <span style={{ color: 'var(--gray-mid)', fontSize: '0.85rem' }}>⏱ 15 min read</span>
          </div>
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', color: 'var(--white)', lineHeight: 1.15, marginBottom: '1.5rem' }}>
            Mulberry Tree Identification —<br />White, Red & Black Mulberry<br />Complete Guide
          </h1>
          <p style={{ fontSize: '1.15rem', color: 'rgba(255,255,255,0.75)', lineHeight: 1.8 }}>
            Mulberry trees are among the most fascinating trees in the world — famous for their edible fruit, highly variable leaf shapes, silk production history, and controversy over legality in some cities. This complete guide covers every mulberry species with expert identification tips.
          </p>
          <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link href="/tree-identifier" className="btn-primary" style={{ fontSize: '0.95rem', padding: '12px 28px' }}>
              🌳 Identify Your Mulberry →
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

            <h2>What Is Mulberry? — Mulberry Tree Definition</h2>
            <p>What is mulberry? Mulberry trees belong to the genus <em>Morus</em> in the family Moraceae, comprising 10-16 species of deciduous trees and shrubs native to Asia, Africa, Europe, and North America. The three most important species are White Mulberry (<em>Morus alba</em>), Red Mulberry (<em>Morus rubra</em>), and Black Mulberry (<em>Morus nigra</em>). Mulberry trees — also called mulberry bush in folk songs ("all around the mulberry bush") — are famous for their edible fruit (mulberries), their role in silk production, and their highly distinctive variable leaf shapes that change dramatically from leaf to leaf on the same tree.</p>
            <p>The word "mulberry" comes from the Latin <em>morum</em> via Old French <em>mure</em>. The colour of mulberry — a deep red-purple — is named after the ripe fruit of these trees. Mulberry trees (<em>Morus</em>) are unrelated to the ornamental plant called "mulberry bush" in children's songs, which was originally "gooseberry bush." Use our <Link href="/tree-identifier">AI Tree Identifier</Link> to identify any mulberry species from a photo instantly.</p>

            {/* IMAGE 1 */}
            <div style={{ margin: '2rem 0', borderRadius: '16px', overflow: 'hidden', border: '1px solid var(--card-border)' }}>
              <img
                src="https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=900&q=80"
                alt="Mulberry tree fruit showing ripe mulberries for identification"
                style={{ width: '100%', height: '300px', objectFit: 'cover' }}
              />
              <div style={{ background: 'var(--card-bg)', padding: '0.8rem 1.2rem' }}>
                <p style={{ color: 'var(--gray-mid)', fontSize: '0.82rem', margin: 0 }}>🍇 Ripe mulberries are elongated fruits resembling blackberries, 1-3cm long (much longer in Pakistan Mulberry). They ripen from white/green through red to deep purple-black, staining everything they touch with intense dark juice.</p>
              </div>
            </div>

            <h2>How to Identify a Mulberry Tree — Key Features</h2>
            <p>Mulberry tree identification is both straightforward and sometimes confusing — straightforward because mulberries have several unique features found on no other common tree, and confusing because their leaves vary so dramatically from branch to branch on the same individual tree.</p>
            <p>The single most distinctive mulberry identification feature is <strong>variable leaf shape on the same tree</strong>. Look at a mulberry tree and you will see leaves ranging from simple unlobed heart-shaped or oval leaves, to asymmetric mitten-shaped leaves with a single thumb-like lobe, to deeply lobed leaves with 2-5 fingerlike projections — all on the same tree, sometimes on the same branch. No other common tree shows this degree of leaf shape variation on a single individual. If you find a tree with wildly variable leaf shapes, think mulberry first.</p>
            <p>The second key feature is <strong>milky sap</strong> — break the stalk of any mulberry leaf and a milky white latex immediately appears at the break. This milky sap is present in all mulberry species and is a definitive identification feature, distinguishing mulberry from trees with superficially similar leaves like fig (which also has milky sap — they are related) from non-related trees.</p>
            <p>The <strong>fruit</strong> — when present — is unmistakable. Mulberries are elongated aggregate fruits resembling blackberries or raspberries but more elongated, ripening from white or green through red to deep purple-black. They stain hands, clothing, and paved surfaces intensely with purple-red juice — a familiar experience for anyone who has walked under a fruiting mulberry tree in summer.</p>

            <h2>Mulberry Tree Leaves — Complete Identification Guide</h2>
            <p>Understanding mulberry leaf features is essential for year-round identification when fruit is absent. The following six features cover everything you need to know about mulberry tree leaves.</p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', margin: '1.5rem 0' }}>
              {mulberryLeafFacts.map((f, i) => (
                <div key={i} style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)', borderRadius: '12px', padding: '1.2rem' }}>
                  <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{f.icon}</div>
                  <div style={{ color: 'var(--white)', fontWeight: 700, fontSize: '0.9rem', marginBottom: '0.4rem' }}>{f.title}</div>
                  <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.83rem', lineHeight: 1.6, margin: 0 }}>{f.desc}</p>
                </div>
              ))}
            </div>

            <h2>White Mulberry (Morus alba) — The Silk Tree</h2>
            <p>White Mulberry (<em>Morus alba</em>) is by far the most widespread mulberry species worldwide, having been deliberately spread by humans across the globe to support silk production. Native to China, White Mulberry was the primary food plant of the silkworm (<em>Bombyx mori</em>) and was carried along trade routes to Japan, Korea, Persia, Europe, and eventually the Americas as empires and merchants sought to establish their own silk industries.</p>
            <p>White Mulberry leaves have a smooth, slightly glossy upper surface — noticeably smoother than Red Mulberry — and a hairless or only slightly hairy underside. The leaves vary dramatically in shape on the same tree, from simple unlobed heart-shaped leaves to deeply multi-lobed leaves, with every intermediate form possible. The tree typically grows 10-20 meters tall with an irregular, broadly spreading crown.</p>
            <p>White Mulberry fruit ripens from white to pink to pale purple — the fruit is sweet but often considered less flavorful than Red or Black Mulberry. Despite the name "White Mulberry," the fully ripe fruit is not white but pale purple. The species name <em>alba</em> (white) refers to the fruit at intermediate ripeness, not at peak ripeness. White Mulberry is widely naturalized across North America, Europe, and other regions where it has escaped from silk cultivation plantings and become invasive in some areas.</p>

            <h2>Red Mulberry (Morus rubra) — America's Native Mulberry</h2>
            <p>Red Mulberry (<em>Morus rubra</em>) is the only mulberry species native to North America, found throughout eastern North America from southern Ontario south to Florida and west to Nebraska and Texas. It is closely related to White Mulberry and the two species hybridize readily where they grow together — a significant conservation concern as hybridization threatens the genetic integrity of native Red Mulberry populations.</p>
            <p>The most reliable way to distinguish Red Mulberry from White Mulberry is the leaf surface texture. Red Mulberry (<em>Morus rubra</em>) leaves have a distinctly <strong>rough, sandpaper-like upper surface</strong> — run your finger across the top of the leaf and it feels coarse, like fine sandpaper. The underside is also distinctly hairy to the touch. White Mulberry leaves feel smooth and slightly glossy on top, with little or no hairiness. This tactile test is the single most reliable field identification feature for separating these two species.</p>
            <p>Red Mulberry fruit is considered more flavorful and juicy than White Mulberry, ripening from red to deep purple-black. The fruit is similar in size (1-3cm) but often described as richer and more complex in flavor. Red mulberry trees have become increasingly rare in the wild due to habitat loss and hybridization with the more aggressive White Mulberry. In Texas, Red Mulberry (<em>mulberry tree Texas</em>) is a component of riparian forests in the eastern part of the state.</p>

            {/* IMAGE 2 */}
            <div style={{ margin: '2rem 0', borderRadius: '16px', overflow: 'hidden', border: '1px solid var(--card-border)' }}>
              <img
                src="https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?w=900&q=80"
                alt="Mulberry tree leaves showing variable leaf shapes on same tree for identification"
                style={{ width: '100%', height: '280px', objectFit: 'cover' }}
              />
              <div style={{ background: 'var(--card-bg)', padding: '0.8rem 1.2rem' }}>
                <p style={{ color: 'var(--gray-mid)', fontSize: '0.82rem', margin: 0 }}>🍃 Mulberry tree leaves are highly variable — a single tree can have simple heart-shaped leaves, mitten-shaped leaves with one lobe, and deeply multi-lobed leaves all growing on the same branch. This leaf variability is the most distinctive mulberry identification feature.</p>
              </div>
            </div>

            <h2>Black Mulberry (Morus nigra) — The Finest Culinary Mulberry</h2>
            <p>Black Mulberry (<em>Morus nigra</em>) is native to western Asia — likely the Caucasus region or Iran — and has been cultivated for its superior fruit quality for at least 2,000 years. It was the mulberry of choice in ancient Rome, medieval Europe, and across the Middle East and Mediterranean for fruit production. Despite its long cultivation history, Black Mulberry remains less common than White Mulberry because silkworms prefer White Mulberry leaves, meaning silk industries promoted White Mulberry at the expense of Black.</p>
            <p>Black Mulberry is identified by its heart-shaped leaves with a rough upper surface and hairy underside — similar to Red Mulberry but darker green and with a slightly different texture. The tree is typically smaller and slower-growing than White or Red Mulberry, reaching 10-13 meters, and develops a characterful gnarled trunk with dark orange-brown shaggy bark on old trees. Black Mulberry is long-lived — specimens 300 years old and older are known in Europe and the Middle East.</p>
            <p>Black Mulberry fruit is the largest, darkest, and most flavorful of the three main species — deep red-black, juicy, rich, and complex in flavor with a good balance of sweetness and acidity. It is considered the finest mulberry for culinary use — making the best jams, pies, wines, and fresh eating. The fruit stains intensely, and ripe Black Mulberries falling on paving are notoriously difficult to clean up.</p>

            <h2>Pakistan Mulberry Tree — Giant Fruited Mulberry</h2>
            <p>Pakistan Mulberry (<em>Morus macroura</em> 'Pakistan') is a remarkable variety of mulberry producing extraordinarily long fruit — up to 7-10cm, making the individual fruits several times larger than typical mulberries. It was developed or selected in Pakistan and has become popular worldwide among fruit growers seeking large, flavorful mulberry crops. The fruit is deep red to black-purple when ripe, very sweet, and juicy.</p>
            <p>Pakistan Mulberry trees are vigorous and fast-growing, suitable for USDA zones 7-11. They are widely grown across South Asia, the Middle East, California, and the American Southeast. The tree's exceptional fruit size and quality make it the preferred mulberry for home orchards and market production in warm climates. Pakistan Mulberry trees for sale are available from specialist fruit tree nurseries in warm-climate growing regions.</p>

            <h2>Are Mulberries Edible? Can You Eat Mulberries?</h2>
            <p>Are mulberries edible? Absolutely — mulberries are completely safe and delicious to eat. All three main species (white, red, and black mulberry) produce edible fruit that has been consumed by humans for thousands of years. Mulberries are eaten fresh, made into jams and preserves, used in pies and cobblers, fermented into mulberry wine, and dried for storage.</p>
            <p>Can you eat mulberries straight from the tree? Yes — ripe mulberries (deep purple-black, soft, and falling easily from the tree when shaken) are ready to eat immediately. Unripe mulberries (still green or pale red, firm) should be avoided in large quantities as they contain small amounts of compounds that can cause mild digestive upset. A small taste of unripe mulberries is harmless, but eating large amounts of unripe fruit is inadvisable. Fully ripe mulberries are one of the safest and most nutritious wild-harvested fruits available.</p>
            <p>I red mulberries often with great enjoyment — the flavor is rich, sweet-tart, and complex, with Black Mulberry considered the finest for eating fresh. Mulberries are high in vitamins C and K, iron, potassium, and antioxidants including resveratrol. They are picked by spreading a sheet under the tree and shaking the branches — the ripe fruit falls easily. Warning: harvest while wearing old clothes — the juice stains permanently.</p>

            <h2>Why Are Mulberry Trees Illegal in Some Areas?</h2>
            <p>Why are mulberry trees illegal? Several municipalities in the American Southwest and other regions have banned or restricted the planting of mulberry trees, most famously Las Vegas, Nevada. The primary reason is <strong>pollen allergies</strong> — White Mulberry (<em>Morus alba</em>) is a prolific pollen producer and a major cause of seasonal allergic rhinitis (hay fever) in regions where it has naturalized.</p>
            <p>Las Vegas banned mulberry trees in 1991 as part of a broader effort to reduce allergen-producing plants in the desert city. El Paso and other southwestern cities have similar restrictions. The combination of dry climate, high mulberry populations, and concentrated urban development creates conditions where mulberry pollen causes significant public health concerns during pollination season.</p>
            <p>The second reason for mulberry restrictions in some areas is the <strong>messy fruit</strong> — ripe mulberries fall from the tree in large quantities, staining sidewalks, driveways, patios, and cars with intense purple juice that is very difficult to remove. This led to the development and marketing of fruitless mulberry cultivars like 'Stribling', which provide fast-growing shade without messy fruit. However, fruitless mulberries are male trees that still produce significant amounts of pollen — they solve the staining problem but not the allergy problem.</p>

            <h2>Mulberry Tree Species — Complete Profiles</h2>
            {mulberrySpecies.map((tree) => (
              <div key={tree.num} style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)', borderRadius: '16px', padding: '1.8rem', marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ width: '44px', height: '44px', minWidth: '44px', background: 'linear-gradient(135deg, var(--forest-green), var(--mid-green))', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.3rem' }}>{tree.icon}</div>
                  <div style={{ flex: 1 }}>
                    <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '1.05rem', fontWeight: 700, color: 'var(--white)', marginBottom: '0.2rem' }}>#{tree.num} {tree.name}</h3>
                    <p style={{ color: 'var(--bright-green)', fontSize: '0.82rem', fontStyle: 'italic', marginBottom: '1rem' }}>{tree.sci} · {tree.region}</p>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.8rem', marginBottom: '0.8rem' }}>
                      <div><span style={{ color: 'var(--bright-green)', fontSize: '0.75rem', fontWeight: 600, display: 'block', marginBottom: '0.2rem' }}>LEAF</span><span style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.85rem' }}>{tree.leaf}</span></div>
                      <div><span style={{ color: 'var(--bright-green)', fontSize: '0.75rem', fontWeight: 600, display: 'block', marginBottom: '0.2rem' }}>BARK</span><span style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.85rem' }}>{tree.bark}</span></div>
                      <div style={{ gridColumn: '1 / -1' }}><span style={{ color: 'var(--bright-green)', fontSize: '0.75rem', fontWeight: 600, display: 'block', marginBottom: '0.2rem' }}>FRUIT</span><span style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.85rem' }}>{tree.fruit}</span></div>
                    </div>
                    <div style={{ background: 'rgba(64,192,116,0.05)', border: '1px solid rgba(64,192,116,0.15)', borderRadius: '8px', padding: '0.6rem 0.9rem', fontSize: '0.82rem', color: 'rgba(255,255,255,0.75)' }}>
                      💡 {tree.note}
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* IMAGE 3 */}
            <div style={{ margin: '2rem 0', borderRadius: '16px', overflow: 'hidden', border: '1px solid var(--card-border)' }}>
              <img
                src="https://images.unsplash.com/photo-1528825871115-3581a5387919?w=900&q=80"
                alt="Mulberry tree bark showing furrowed orange-brown texture for identification"
                style={{ width: '100%', height: '260px', objectFit: 'cover' }}
              />
              <div style={{ background: 'var(--card-bg)', padding: '0.8rem 1.2rem' }}>
                <p style={{ color: 'var(--gray-mid)', fontSize: '0.82rem', margin: 0 }}>🪵 Mulberry bark is orange-brown to gray-brown with developing furrows and ridges — the orange-brown color of the inner bark is visible where the outer bark is scratched, a useful identification feature year-round.</p>
              </div>
            </div>

            <h2>Mulberry Tree Care — Growing Tips</h2>
            <p>Mulberry trees are among the easiest fruit trees to grow — they tolerate a wide range of soil conditions, require minimal pruning, and once established are quite drought-tolerant. Both White Mulberry and Red Mulberry are adaptable to USDA zones 4-8, while Black Mulberry and Pakistan Mulberry prefer warmer zones 6-10.</p>
            <p>Plant mulberry trees in full sun for best fruit production — they will tolerate partial shade but fruit yield decreases significantly. Mulberries prefer well-drained soil but adapt to clay, loam, or sandy soils. Water young trees regularly for the first 2-3 seasons while roots establish; mature trees generally need no supplemental irrigation except during severe droughts.</p>
            <p>Mulberry tree seeds can be used to propagate new trees — clean seeds from ripe fruit, dry briefly, and plant in autumn or after cold stratification. However, cultivated varieties (Pakistan Mulberry, fruitless mulberry, weeping mulberry) must be propagated from cuttings or grafting to maintain their specific characteristics. Mulberry tree care is minimal once established — prune in late winter if needed to maintain shape, and fertilize lightly in early spring with a balanced fertilizer if growth seems slow.</p>

            <h2>Mulberry Wood — Uses and Properties</h2>
            <p>Mulberry wood (<em>Morus</em> species) is a dense, hard, and attractive hardwood with excellent properties for woodworking. It has a golden-yellow to light brown heartwood with a distinctive straight to interlocked grain, and it works well with both hand and machine tools. Mulberry wood is used for furniture, musical instruments, archery bows (historically prized for bow-making in many cultures), fence posts (naturally durable in ground contact), and decorative turning and carving.</p>
            <p>White Mulberry wood was traditionally used in Japan and China alongside the leaves for silk production — the wood for furniture and construction, the leaves for silkworms. Black Mulberry wood was historically used for wine barrels in the Middle East. Modern uses for mulberry wood include specialty furniture, wooden bowls and turned objects, and as a smoking wood — mulberry wood chips impart a mild, sweet fruity smoke ideal for smoking poultry and fish.</p>

            <h2>Frequently Asked Questions — Mulberry Trees</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', margin: '1.5rem 0' }}>
              {[
                { q: 'How do I identify a mulberry tree?', a: 'Look for variable leaf shapes on the same tree (heart-shaped, mitten-shaped, and multi-lobed leaves all present), milky white sap when leaf stalk is broken, alternate leaf arrangement, and elongated blackberry-like fruit in summer. The variable leaf shape is the single most distinctive mulberry feature.' },
                { q: 'What is the difference between white, red, and black mulberry?', a: 'White Mulberry (Morus alba): smooth leaf surface, mild fruit. Red Mulberry (Morus rubra): very rough sandpaper leaf surface + hairy underside, more flavorful fruit, native to North America. Black Mulberry (Morus nigra): largest and best-flavored fruit, darker green rough leaves, smaller slower-growing tree.' },
                { q: 'Are mulberries edible? Can you eat mulberries?', a: 'Yes — all mulberries are completely edible and delicious when fully ripe. Ripe mulberries (deep purple-black, soft, falling easily) can be eaten fresh or used for jams, pies, and wine. Avoid unripe (green/pale red, firm) fruit in large quantities. Mulberries are nutritious — rich in vitamins C and K, iron, and antioxidants.' },
                { q: 'Why are mulberry trees illegal in some places?', a: 'Mulberry trees are banned in some southwestern cities (notably Las Vegas) due to heavy pollen production causing severe allergies. Fruiting mulberry trees are also restricted in some areas due to messy staining fruit that damages paved surfaces. Fruitless mulberry cultivars were developed to address the fruit problem but still produce allergenic pollen.' },
                { q: 'What is Red Mulberry (Morus rubra)?', a: 'Morus rubra is the only mulberry native to North America. Distinguished from White Mulberry by extremely rough sandpaper-like leaf surface and hairy underside. More flavorful fruit than White Mulberry. Increasingly rare due to hybridization with White Mulberry.' },
                { q: 'What is a Pakistan mulberry tree?', a: 'Pakistan Mulberry produces exceptionally long fruit — 7-10cm compared to 1-3cm for typical mulberries. Deep red-black, very sweet, juicy, and the largest mulberry available. Ideal for warm climates (zones 7-11). Widely grown in South Asia, Middle East, California, and the American Southeast.' },
                { q: 'What is mulberry wood used for?', a: 'Mulberry wood is used for furniture, archery bows, fence posts, turned wooden objects, and as a smoking wood for poultry and fish. It is dense, hard, and golden-yellow in color. Historically important in Asia for silk industry construction and in the Middle East for wine barrels.' },
              ].map((faq, i) => (
                <div key={i} style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)', borderRadius: '12px', padding: '1.4rem' }}>
                  <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.95rem', fontWeight: 700, color: 'var(--white)', marginBottom: '0.6rem' }}>{faq.q}</h3>
                  <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.88rem', lineHeight: 1.7, margin: 0 }}>{faq.a}</p>
                </div>
              ))}
            </div>

            <h2>Identify Your Mulberry Tree Instantly</h2>
            <p>Found a mulberry tree and want to confirm the species? Upload a photo to our <Link href="/tree-identifier">free AI Tree Identifier</Link> for instant species identification. The AI identifies all mulberry species — White Mulberry, Red Mulberry, Black Mulberry, Pakistan Mulberry, fruitless mulberry, and weeping mulberry — from leaf, bark, or fruit photos.</p>
            <p>For leaf identification including variable-shaped mulberry leaves, our <Link href="/identify-tree-by-leaf">Leaf Identifier</Link> handles the distinctive mulberry leaf variability. Related guides: <Link href="/blog/poplar-tree">Poplar Tree Guide</Link>, <Link href="/blog/beech-tree">Beech Tree Guide</Link>, <Link href="/blog/willow-tree">Willow Tree Guide</Link>, <Link href="/blog/trees-with-heart-shaped-leaves">Trees with Heart Shaped Leaves</Link>, <Link href="/blog/fruit-tree-identifier">Fruit Tree Identifier</Link>, <Link href="/blog/tree-identification-by-bark">Tree ID by Bark</Link>.</p>
            <p>Species tools: <Link href="/oak-tree-identifier">Oak Tree Identifier</Link>, <Link href="/maple-tree-identifier">Maple Tree Identifier</Link>, <Link href="/elm-tree-identifier">Elm Tree Identifier</Link>, <Link href="/fruit-tree-identifier">Fruit Tree Identifier</Link>, <Link href="/birch-tree-identifier">Birch Tree Identifier</Link>, <Link href="/pine-tree-identifier">Pine Tree Identifier</Link>.</p>

          </article>

          <aside style={{ position: 'sticky', top: '90px' }}>
            <div className="card" style={{ marginBottom: '1.5rem' }}>
              <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem', fontWeight: 700, color: 'var(--bright-green)', marginBottom: '1.2rem' }}>🌳 Identify Your Mulberry</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                <Link href="/tree-identifier" className="btn-primary" style={{ textAlign: 'center', justifyContent: 'center', fontSize: '0.88rem', padding: '10px 16px' }}>🌳 Tree Identifier</Link>
                <Link href="/identify-tree-by-leaf" className="btn-outline" style={{ textAlign: 'center', justifyContent: 'center', fontSize: '0.88rem', padding: '10px 16px' }}>🍃 Leaf Identifier</Link>
              </div>
            </div>

            <div className="card" style={{ marginBottom: '1.5rem' }}>
              <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem', fontWeight: 700, color: 'var(--white)', marginBottom: '1rem' }}>🍇 Mulberry Quick ID</h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
                <li style={{ color: 'var(--gray-mid)', fontSize: '0.85rem' }}>✅ Variable leaf shapes = Mulberry</li>
                <li style={{ color: 'var(--gray-mid)', fontSize: '0.85rem' }}>✅ Milky sap from stalk = Mulberry</li>
                <li style={{ color: 'var(--gray-mid)', fontSize: '0.85rem' }}>✅ Smooth leaf = White Mulberry</li>
                <li style={{ color: 'var(--gray-mid)', fontSize: '0.85rem' }}>✅ Rough sandpaper leaf = Red Mulberry</li>
                <li style={{ color: 'var(--gray-mid)', fontSize: '0.85rem' }}>✅ Best flavor fruit = Black Mulberry</li>
                <li style={{ color: 'var(--gray-mid)', fontSize: '0.85rem' }}>✅ 7-10cm fruit = Pakistan Mulberry</li>
                <li style={{ color: 'var(--gray-mid)', fontSize: '0.85rem' }}>✅ No fruit = Fruitless Mulberry</li>
                <li style={{ color: 'var(--gray-mid)', fontSize: '0.85rem' }}>✅ Drooping branches = Weeping Mulberry</li>
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
                <li><Link href="/blog/poplar-tree" style={{ color: 'var(--gray-mid)', fontSize: '0.88rem' }}>🌳 Poplar Tree Guide</Link></li>
                <li><Link href="/blog/beech-tree" style={{ color: 'var(--gray-mid)', fontSize: '0.88rem' }}>🌲 Beech Tree Guide</Link></li>
                <li><Link href="/blog/willow-tree" style={{ color: 'var(--gray-mid)', fontSize: '0.88rem' }}>🌊 Willow Tree Guide</Link></li>
                <li><Link href="/blog/trees-with-heart-shaped-leaves" style={{ color: 'var(--gray-mid)', fontSize: '0.88rem' }}>💗 Heart Shaped Leaves</Link></li>
                <li><Link href="/blog/oak-tree-identification-guide" style={{ color: 'var(--gray-mid)', fontSize: '0.88rem' }}>🌰 Oak ID Guide</Link></li>
                <li><Link href="/blog/maple-tree-identification-guide" style={{ color: 'var(--gray-mid)', fontSize: '0.88rem' }}>🍁 Maple ID Guide</Link></li>
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <section style={{ padding: '4rem 2rem', background: 'var(--deep-black)', borderTop: '1px solid var(--card-border)', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', color: 'var(--white)', marginBottom: '1rem' }}>Identify Any Mulberry Tree Instantly</h2>
        <p style={{ color: 'var(--gray-mid)', marginBottom: '2rem' }}>Upload a photo of leaves, fruit, or bark — our AI identifies the mulberry species in seconds. Free, no signup.</p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/tree-identifier" className="btn-primary">🌳 Identify Tree Now</Link>
          <Link href="/blog" className="btn-outline">📝 More Articles</Link>
        </div>
      </section>
    </Layout>
  );
}
