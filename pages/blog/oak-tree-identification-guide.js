import Layout from '../../components/Layout';
import Link from 'next/link';

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Oak Tree Identification Guide — How to Identify Oak Trees by Leaf, Bark, and Acorn",
    "description": "Complete oak tree identification guide covering all major oak species. Learn to identify oak trees by leaf shape, bark texture, acorn type, and seasonal features with expert tips.",
    "image": "oaktree.jpg",
    "datePublished": "2026-07-19",
    "dateModified": "2026-07-19",
    "author": { "@type": "Organization", "name": "Tree Identifier" },
    "publisher": { "@type": "Organization", "name": "Tree Identifier", "url": "https://treeidentifier.online/" },
    "mainEntityOfPage": "https://treeidentifier.online/blog/oak-tree-identification-guide",
    "wordCount": "2500",
    "keywords": "oak tree identification, how to identify oak trees, oak tree identifier, types of oak trees, oak leaf identification"
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How do I identify an oak tree?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "To identify an oak tree, look for three key features: lobed leaves (either rounded lobes for White Oak group or pointed lobes for Red Oak group), acorns (the only tree that produces true acorns), and clustered buds at twig tips (unique to oaks). Bark is gray-brown and furrowed on mature trees. If a tree has acorns, it is definitely an oak — no other tree produces acorns."
        }
      },
      {
        "@type": "Question",
        "name": "What is the difference between Red Oak and White Oak?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The main differences between Red Oak and White Oak groups are: leaf lobe tips (Red Oak has pointed lobes with bristle tips, White Oak has rounded lobes with no bristles), acorn maturation (Red Oak acorns take 2 years to mature, White Oak acorns mature in 1 year), acorn taste (Red Oak acorns are very bitter, White Oak acorns are milder), and bark color (Red Oak has darker bark with flat-topped ridges that appear reddish in cross-section, White Oak has lighter ash-gray bark)."
        }
      },
      {
        "@type": "Question",
        "name": "How do I identify an oak tree by its leaves?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Oak leaves are alternate (one per node), simple, and typically lobed. White Oak group leaves have rounded lobes with smooth tips. Red Oak group leaves have pointed lobes with small bristle tips at each lobe point. Pin Oak leaves have deeply cut lobes with pointed bristle tips and a distinctive shape with the middle lobes perpendicular to the midrib. Willow Oak is unusual with long narrow unlobed leaves. Leaf size varies from 7cm to 30cm depending on species."
        }
      },
      {
        "@type": "Question",
        "name": "What do oak acorns look like?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Oak acorns are nuts enclosed at the base by a scaly cup called a cupule. White Oak acorns are oval, 1.5-2cm long, with a shallow warty cup covering about 1/4 of the nut, and mature in one season. Red Oak acorns are rounder, 1.5-3cm, with a shallow flat cup, and take two years to mature. Bur Oak has the largest acorns with a distinctive fringed cup that covers more than half the nut. All oaks produce acorns — if you see an acorn, you have found an oak."
        }
      },
      {
        "@type": "Question",
        "name": "How do I identify oak bark?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Oak bark is generally gray-brown and furrowed, but varies by species and age. White Oak has light ash-gray bark that is scaly or platy, often almost white in color. Red Oak has darker gray bark with flat-topped ridges that appear reddish when scratched — hence the name. Pin Oak has smooth gray-brown bark that develops shallow furrows with age. Young oak bark of all species is relatively smooth and gray, developing characteristic furrows and ridges only at 20-30 years."
        }
      },
      {
        "@type": "Question",
        "name": "How many species of oak trees are there?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "There are approximately 500 species of oak trees worldwide in the genus Quercus, with about 90 species native to North America. The most common North American oaks include White Oak, Red Oak, Pin Oak, Bur Oak, Scarlet Oak, Black Oak, Chestnut Oak, Live Oak (evergreen), and Willow Oak. The two main groups are the White Oak group (rounded leaf lobes, acorns maturing in one year) and the Red Oak group (pointed lobed leaves with bristle tips, acorns maturing in two years)."
        }
      },
      {
        "@type": "Question",
        "name": "Are oak trees easy to identify?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Identifying a tree as an oak is easy — if it has acorns, it is an oak. Identifying the specific oak species is more challenging due to the large number of species and natural hybridization between them. The best approach is to first determine which group (White Oak or Red Oak) based on leaf lobe shape, then narrow down to species using acorn shape, bark color, and geographic range. Our AI Oak Tree Identifier can identify specific oak species from a photo in seconds."
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
      { "@type": "ListItem", "position": 3, "name": "Oak Tree Identification Guide", "item": "https://treeidentifier.online/blog/oak-tree-identification-guide" }
    ]
  }
];

const oakSpecies = [
  {
    num: 1,
    name: 'White Oak',
    sci: 'Quercus alba',
    icon: '🌳',
    group: 'White Oak Group',
    region: 'Eastern North America',
    leaf: 'Alternate, 5-9 rounded lobes, no bristle tips, 12-22cm long',
    bark: 'Light ash-gray, scaly or platy — almost white in some lights',
    acorn: 'Oval, 1.5-2cm, shallow warty cup covering 1/4 of nut, matures in 1 year',
    note: 'The iconic eastern hardwood — milder acorns eaten by wildlife and historically by humans',
    difficulty: 'Easy',
  },
  {
    num: 2,
    name: 'Red Oak',
    sci: 'Quercus rubra',
    icon: '🍂',
    group: 'Red Oak Group',
    region: 'Eastern North America',
    leaf: 'Alternate, 7-11 pointed lobes with bristle tips, 12-22cm, large sinuses',
    bark: 'Dark gray, flat-topped ridges that appear reddish in cross-section',
    acorn: 'Round, 1.5-2.5cm, very shallow flat cup covering 1/4 of nut, takes 2 years',
    note: 'Most common oak in northeastern forests — very bitter acorns due to high tannins',
    difficulty: 'Easy',
  },
  {
    num: 3,
    name: 'Pin Oak',
    sci: 'Quercus palustris',
    icon: '📌',
    group: 'Red Oak Group',
    region: 'Eastern North America',
    leaf: 'Deeply cut C-shaped sinuses nearly to midrib, 5-7 pointed lobes with bristle tips',
    bark: 'Smooth gray-brown, develops shallow furrows with age',
    acorn: 'Small round, 1-1.5cm, very shallow saucer-shaped cup, takes 2 years',
    note: 'Most commonly planted oak for landscaping — distinctive lower drooping branches',
    difficulty: 'Easy',
  },
  {
    num: 4,
    name: 'Bur Oak',
    sci: 'Quercus macrocarpa',
    icon: '🌾',
    group: 'White Oak Group',
    region: 'Central North America',
    leaf: 'Large, 15-30cm, deeply lobed with distinctive expanded upper half',
    bark: 'Dark gray, deeply furrowed with thick scaly ridges',
    acorn: 'Largest North American acorn — distinctive fringed mossy cup covering 50%+ of nut',
    note: 'Most drought-tolerant oak — the fringed acorn cup is unmistakable',
    difficulty: 'Easy',
  },
  {
    num: 5,
    name: 'Scarlet Oak',
    sci: 'Quercus coccinea',
    icon: '🔴',
    group: 'Red Oak Group',
    region: 'Eastern North America',
    leaf: 'Deeply cut, 7-9 pointed lobes with bristle tips, C-shaped sinuses, spectacular scarlet fall color',
    bark: 'Dark gray-brown, irregular ridges and furrows',
    acorn: 'Round, half enclosed in deep cup, takes 2 years',
    note: 'Best fall color of any oak — brilliant scarlet before leaf drop',
    difficulty: 'Medium',
  },
  {
    num: 6,
    name: 'Black Oak',
    sci: 'Quercus velutina',
    icon: '⚫',
    group: 'Red Oak Group',
    region: 'Eastern North America',
    leaf: 'Similar to Red Oak, 5-9 pointed lobes with bristle tips, glossy dark green above',
    bark: 'Very dark gray to black, deeply furrowed — inner bark is yellow-orange',
    acorn: 'Round, 1.5-2cm, cup covers half the nut, takes 2 years',
    note: 'Inner bark bright yellow-orange — scratch the bark to confirm identification',
    difficulty: 'Medium',
  },
  {
    num: 7,
    name: 'Chestnut Oak',
    sci: 'Quercus montana',
    icon: '🏔️',
    group: 'White Oak Group',
    region: 'Eastern North America',
    leaf: 'Large rounded teeth (not lobes), resembles chestnut leaf, 12-22cm',
    bark: 'Very thick, deeply ridged and furrowed — thickest bark of any eastern oak',
    acorn: 'Large oval, 2.5-3.5cm, cup with thick knobby scales covering 1/2 of nut',
    note: 'Leaf shape resembles American Chestnut — thick corrugated bark is distinctive',
    difficulty: 'Medium',
  },
  {
    num: 8,
    name: 'Live Oak',
    sci: 'Quercus virginiana',
    icon: '🌿',
    group: 'White Oak Group',
    region: 'Southeastern USA',
    leaf: 'Evergreen — elliptical, unlobed, leathery, dark glossy green, 5-12cm',
    bark: 'Dark gray-brown, furrowed into scaly ridges',
    acorn: 'Small dark oval, 1.5cm, thin cup on long stalks in clusters',
    note: 'Only major evergreen oak in eastern USA — keeps leaves through winter',
    difficulty: 'Easy',
  },
  {
    num: 9,
    name: 'Willow Oak',
    sci: 'Quercus phellos',
    icon: '🌊',
    group: 'Red Oak Group',
    region: 'Eastern USA',
    leaf: 'Unusual — long narrow, unlobed, lance-shaped, resembles willow leaves',
    bark: 'Gray-brown, smooth when young, developing shallow ridges',
    acorn: 'Very small round, 1cm, shallow cup',
    note: 'Most unusual oak leaf — narrow unlobed leaves look nothing like typical oaks',
    difficulty: 'Easy (if you know it)',
  },
  {
    num: 10,
    name: 'Swamp White Oak',
    sci: 'Quercus bicolor',
    icon: '💧',
    group: 'White Oak Group',
    region: 'Eastern North America',
    leaf: 'Shallowly lobed, wider above middle, dark green above, pale below',
    bark: 'Distinctive peeling bark on upper branches — flaking in curling strips',
    acorn: 'Oval, on long stalks 5-10cm, shallow cup',
    note: 'Peeling bark on upper trunk and branches is unique among eastern oaks',
    difficulty: 'Medium',
  },
];

const oakGroups = [
  {
    name: 'White Oak Group',
    color: '#4ade80',
    features: [
      'Rounded leaf lobes — no bristle tips',
      'Acorns mature in ONE season',
      'Acorns milder (lower tannins)',
      'Lighter gray bark overall',
      'Examples: White Oak, Bur Oak, Chestnut Oak, Swamp White Oak, Live Oak',
    ],
  },
  {
    name: 'Red Oak Group',
    color: '#f87171',
    features: [
      'Pointed leaf lobes WITH bristle tips',
      'Acorns take TWO seasons to mature',
      'Very bitter acorns (high tannins)',
      'Darker bark, often reddish inner bark',
      'Examples: Red Oak, Pin Oak, Scarlet Oak, Black Oak, Willow Oak',
    ],
  },
];

export default function OakTreeIdentificationGuide() {
  return (
    <Layout
      meta={{
        title: 'Oak Tree Identification Guide — Identify Oak Trees by Leaf, Bark & Acorn | Tree Identifier Blog',
        description: 'Complete oak tree identification guide covering 10 major oak species. Learn to identify oak trees by leaf shape, bark texture, and acorn type. Includes White Oak vs Red Oak comparison and expert tips.',
        canonical: 'https://treeidentifier.online/blog/oak-tree-identification-guide',
        schema,
      }}
      breadcrumbs={[{ label: 'Blog', href: '/blog' }, { label: 'Oak Tree Identification Guide' }]}
    >
      {/* HERO */}
      <section style={{
        background: `linear-gradient(180deg, rgba(5,5,5,0.75) 0%, var(--black) 100%), url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1600&q=80') center/cover no-repeat`,
        padding: '120px 2rem 5rem',
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
            <span style={{ background: 'rgba(64,192,116,0.1)', color: 'var(--bright-green)', border: '1px solid rgba(64,192,116,0.2)', borderRadius: '50px', padding: '4px 14px', fontSize: '0.78rem', fontWeight: 600 }}>Oak Identification</span>
            <span style={{ color: 'var(--gray-mid)', fontSize: '0.85rem' }}>📅 July 19, 2026</span>
            <span style={{ color: 'var(--gray-mid)', fontSize: '0.85rem' }}>⏱ 16 min read</span>
          </div>
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', color: 'var(--white)', lineHeight: 1.15, marginBottom: '1.5rem' }}>
            Oak Tree Identification Guide —<br />Leaf, Bark & Acorn
          </h1>
          <p style={{ fontSize: '1.15rem', color: 'rgba(255,255,255,0.75)', lineHeight: 1.8 }}>
            Oak trees are among the most important and widespread trees in North America. This complete guide covers 10 major oak species with expert identification tips for leaves, bark, acorns, and seasonal features.
          </p>
        </div>
      </section>

      <section className="section">
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 2rem', display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '4rem', alignItems: 'start' }}>
          <article className="prose-content" style={{ maxWidth: '100%' }}>

            <h2>How to Identify an Oak Tree — The Basics</h2>
            <p>Identifying a tree as an oak is one of the easiest tasks in tree identification. If a tree has acorns, it is an oak. No other tree in North America produces true acorns — the distinctive nut-in-a-cup fruit structure that oaks are famous for. Even when acorns are not present, oaks have several other highly distinctive features that make identification straightforward: lobed leaves (in most species), clustered buds at twig tips, and gray-brown furrowed bark on mature trees.</p>
            <p>The greater challenge is identifying which oak species you have found. With approximately 90 native oak species in North America and frequent natural hybridization between them, oak identification can be complex. The best approach is to first sort the tree into the White Oak group or the Red Oak group — the two major divisions of North American oaks — and then narrow down to species from there. Use our dedicated <Link href="/oak-tree-identifier">Oak Tree Identifier</Link> to get instant AI identification from a photo.</p>

            <h2>White Oak Group vs Red Oak Group</h2>
            <p>The single most important distinction in oak identification is the difference between the White Oak group and the Red Oak group. Every North American oak belongs to one of these two groups, and the group identification immediately tells you key features of the leaf, acorn, and bark.</p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', margin: '1.5rem 0' }}>
              {oakGroups.map((group) => (
                <div key={group.name} style={{ background: 'var(--card-bg)', border: `1px solid ${group.color}30`, borderRadius: '14px', padding: '1.5rem' }}>
                  <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem', fontWeight: 700, color: group.color, marginBottom: '1rem' }}>{group.name}</h3>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                    {group.features.map((f, i) => (
                      <li key={i} style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.85rem', display: 'flex', gap: '0.5rem' }}>
                        <span style={{ color: group.color, flexShrink: 0 }}>✓</span> {f}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <h2>Identifying Oak Trees by Leaf</h2>
            <p>Oak leaves are alternate on the twig (one per node, alternating sides), simple (one leaf blade, not compound), and in most species deeply lobed. The lobes are the fingerlike projections that give oak leaves their characteristic shape. The two most important leaf features for oak identification are the lobe tip shape and the depth of the sinuses (the spaces between lobes).</p>
            <p>In the White Oak group, leaf lobes are rounded and smooth at the tips — run your finger along the leaf edge and it feels smooth. In the Red Oak group, leaf lobes end in pointed tips, each with a tiny sharp bristle. This bristle tip is the single most reliable feature for sorting oaks into their groups and can be felt even on dry fallen leaves. A hand lens or macro camera mode helps see bristle tips clearly on smaller leaves.</p>
            <p>Sinus depth — how deeply the lobes are cut — varies dramatically between species and helps identify specific oaks. Pin Oak and Scarlet Oak have very deep sinuses that cut almost to the midrib, giving the leaf a spidery appearance. White Oak has moderate sinuses. Chestnut Oak has shallow tooth-like lobes rather than true sinuses. Willow Oak is the most unusual, with narrow lance-shaped unlobed leaves that look nothing like typical oak leaves.</p>

            <h2>Identifying Oak Trees by Acorn</h2>
            <p>Acorns are the definitive oak identification feature — if you find acorns under or on a tree, it is an oak. Beyond confirming the genus, acorn features help identify specific species. The key acorn features to observe are size, shape, the proportion of the nut enclosed by the cup, and the cup scale texture.</p>
            <p>White Oak group acorns mature in a single season and are typically milder in flavor due to lower tannin content. Red Oak group acorns take two full seasons to mature — you can often find both one-year-old green acorns and two-year-old mature acorns on the same Red Oak tree simultaneously. This two-year maturation is unique to the Red Oak group and provides year-round identification value.</p>
            <p>Bur Oak produces the most distinctive acorn in North America — large, with a fringed mossy cup that covers half or more of the nut, making it unmistakable. Swamp White Oak produces acorns on unusually long stalks (5-10cm) compared to most other oaks. Live Oak acorns are small and dark, clustered on long stalks. These distinctive acorn features help identify specific species even from a distance.</p>

            <h2>Identifying Oak Trees by Bark</h2>
            <p>Oak bark is generally gray-brown and furrowed, but varies significantly between species, age, and even individual trees. Young oak bark of all species is relatively smooth and gray, developing characteristic ridges and furrows only after 20-30 years. The most useful bark features for oak identification are color, ridge shape, and bark thickness.</p>
            <p>White Oak has distinctively light ash-gray bark — often almost white in appearance, hence the name. The bark breaks into rectangular scales or plates. Red Oak bark is darker gray with distinctive flat-topped ridges that appear reddish when scratched or viewed in cross-section. Chestnut Oak has the thickest bark of any eastern oak, very deeply furrowed with thick corky ridges. Black Oak has very dark gray to black bark with yellow-orange inner bark visible when scratched. Swamp White Oak has unique peeling bark on its upper trunk and branches, flaking in curling strips.</p>
            <p>For bark-based oak identification, use our <Link href="/blog/tree-identification-by-bark">bark identification guide</Link> in combination with our <Link href="/oak-tree-identifier">Oak Tree Identifier</Link> for best results.</p>

            <h2>10 Major Oak Species — Complete Profiles</h2>
            <p>The following profiles cover the 10 most important oak species in North America, with identification features for leaf, bark, and acorn for each species.</p>

            {oakSpecies.map((tree) => (
              <div key={tree.num} style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)', borderRadius: '16px', padding: '1.8rem', marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ width: '44px', height: '44px', minWidth: '44px', background: 'linear-gradient(135deg, var(--forest-green), var(--mid-green))', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.3rem' }}>{tree.icon}</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', flexWrap: 'wrap', marginBottom: '0.2rem' }}>
                      <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '1.05rem', fontWeight: 700, color: 'var(--white)', margin: 0 }}>#{tree.num} {tree.name}</h3>
                      <span style={{ background: tree.group === 'White Oak Group' ? 'rgba(74,222,128,0.1)' : 'rgba(248,113,113,0.1)', color: tree.group === 'White Oak Group' ? '#4ade80' : '#f87171', border: `1px solid ${tree.group === 'White Oak Group' ? 'rgba(74,222,128,0.25)' : 'rgba(248,113,113,0.25)'}`, borderRadius: '20px', padding: '2px 10px', fontSize: '0.72rem', fontWeight: 600 }}>{tree.group}</span>
                    </div>
                    <p style={{ color: 'var(--bright-green)', fontSize: '0.82rem', fontStyle: 'italic', marginBottom: '1rem' }}>{tree.sci} · {tree.region}</p>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.8rem', marginBottom: '0.8rem' }}>
                      <div><span style={{ color: 'var(--bright-green)', fontSize: '0.75rem', fontWeight: 600, display: 'block', marginBottom: '0.2rem' }}>LEAF</span><span style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.85rem' }}>{tree.leaf}</span></div>
                      <div><span style={{ color: 'var(--bright-green)', fontSize: '0.75rem', fontWeight: 600, display: 'block', marginBottom: '0.2rem' }}>BARK</span><span style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.85rem' }}>{tree.bark}</span></div>
                      <div><span style={{ color: 'var(--bright-green)', fontSize: '0.75rem', fontWeight: 600, display: 'block', marginBottom: '0.2rem' }}>ACORN</span><span style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.85rem' }}>{tree.acorn}</span></div>
                      <div><span style={{ color: 'var(--bright-green)', fontSize: '0.75rem', fontWeight: 600, display: 'block', marginBottom: '0.2rem' }}>KEY NOTE</span><span style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.85rem' }}>{tree.note}</span></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <h2>Oak Tree Identification in Winter</h2>
            <p>Oak trees are among the more identifiable deciduous trees in winter due to several distinctive winter features. Most oaks have clustered buds at twig tips — a unique feature among North American trees that immediately identifies the genus even without leaves. Many young oaks also exhibit marcescence, retaining their dead brown leaves through winter rather than dropping them in autumn. This persistent dead foliage is particularly reliable in Pin Oak, which often holds leaves on its lower branches through the entire winter.</p>
            <p>Oak bark becomes easier to study in winter without the distraction of full foliage. The distinctive flat-topped reddish ridges of Red Oak, the light ash-gray scales of White Oak, and the extremely thick corrugated bark of Chestnut Oak are all readily visible in winter. Combined with clustered twig-tip buds and any persistent acorn cups on the ground, winter oak identification is reliable with practice. For more winter identification tips, see our <Link href="/blog/how-to-identify-trees-in-winter">complete winter tree identification guide</Link>.</p>

            <h2>Frequently Asked Questions — Oak Tree Identification</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', margin: '1.5rem 0' }}>
              {[
                { q: 'How do I identify an oak tree?', a: 'Look for acorns (definitive — only oaks produce acorns), lobed leaves (rounded lobes = White Oak group, pointed lobes with bristle tips = Red Oak group), and clustered buds at twig tips. If you see an acorn, you have found an oak.' },
                { q: 'What is the difference between Red Oak and White Oak?', a: 'Red Oak has pointed leaf lobes with bristle tips, very bitter acorns taking 2 years to mature, and darker bark with reddish inner bark. White Oak has rounded leaf lobes with no bristles, milder acorns maturing in 1 year, and lighter ash-gray bark.' },
                { q: 'How do I identify an oak tree by its leaves?', a: 'Oak leaves are alternate, simple, and typically lobed. White Oak group leaves have rounded lobes with smooth tips. Red Oak group leaves have pointed lobes with small bristle tips. Willow Oak is unusual with narrow unlobed leaves.' },
                { q: 'What do oak acorns look like?', a: 'Acorns are nuts enclosed at the base by a scaly cup. White Oak acorns are oval with a shallow cup, maturing in one season. Red Oak acorns are rounder with a shallow flat cup, taking two years. Bur Oak has the largest acorns with a distinctive fringed mossy cup.' },
                { q: 'How do I identify oak bark?', a: 'White Oak has light ash-gray scaly bark. Red Oak has darker gray bark with flat-topped ridges that appear reddish in cross-section. Chestnut Oak has very thick deeply furrowed bark. Black Oak has very dark bark with yellow-orange inner bark.' },
                { q: 'How many species of oak trees are there?', a: 'About 500 species worldwide, with roughly 90 native to North America. The most common include White Oak, Red Oak, Pin Oak, Bur Oak, Scarlet Oak, Black Oak, Chestnut Oak, Live Oak, Willow Oak, and Swamp White Oak.' },
                { q: 'Are oak trees easy to identify?', a: 'Identifying a tree as an oak is easy — any tree with acorns is an oak. Identifying the specific species is more challenging. Start by determining White Oak group vs Red Oak group from leaf lobe tips, then narrow down using acorn shape and bark color. Use our AI Oak Tree Identifier for instant species identification from a photo.' },
              ].map((faq, i) => (
                <div key={i} style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)', borderRadius: '12px', padding: '1.4rem' }}>
                  <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.95rem', fontWeight: 700, color: 'var(--white)', marginBottom: '0.6rem' }}>{faq.q}</h3>
                  <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.88rem', lineHeight: 1.7, margin: 0 }}>{faq.a}</p>
                </div>
              ))}
            </div>

            <h2>Using AI to Identify Oak Trees</h2>
            <p>Our dedicated <Link href="/oak-tree-identifier">Oak Tree Identifier</Link> is specifically optimized for oak species identification. Upload a photo of oak leaves, bark, acorns, or the whole tree and receive instant species identification with confidence level. The AI is trained on all major North American oak species including hybrids, which are common and can be difficult to identify manually.</p>
            <p>For general tree identification including oaks, use our <Link href="/tree-identifier">AI Tree Identifier</Link>. For leaf-specific identification, our <Link href="/identify-tree-by-leaf">Leaf Identifier</Link> provides detailed leaf morphology analysis. For bark identification in winter, upload a bark photo to either tool for year-round identification.</p>
            <p>Related identification guides: <Link href="/maple-tree-identifier">Maple Tree Identifier</Link>, <Link href="/pine-tree-identifier">Pine Tree Identifier</Link>, <Link href="/birch-tree-identifier">Birch Tree Identifier</Link>. For more blog content see our <Link href="/blog/common-tree-species">25 common tree species guide</Link>, <Link href="/blog/tree-identification-by-bark">bark identification guide</Link>, and <Link href="/blog/how-to-identify-trees-in-winter">winter tree identification guide</Link>.</p>

          </article>

          <aside style={{ position: 'sticky', top: '90px' }}>
            <div className="card" style={{ marginBottom: '1.5rem' }}>
              <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem', fontWeight: 700, color: 'var(--bright-green)', marginBottom: '1.2rem' }}>🌰 Identify Oak Trees</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                <Link href="/oak-tree-identifier" className="btn-primary" style={{ textAlign: 'center', justifyContent: 'center', fontSize: '0.88rem', padding: '10px 16px' }}>🌰 Oak Tree Identifier</Link>
                <Link href="/tree-identifier" className="btn-outline" style={{ textAlign: 'center', justifyContent: 'center', fontSize: '0.88rem', padding: '10px 16px' }}>🌳 All Tree Identifier</Link>
                <Link href="/identify-tree-by-leaf" className="btn-outline" style={{ textAlign: 'center', justifyContent: 'center', fontSize: '0.88rem', padding: '10px 16px' }}>🍃 Leaf Identifier</Link>
              </div>
            </div>
            <div className="card" style={{ marginBottom: '1.5rem' }}>
              <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem', fontWeight: 700, color: 'var(--white)', marginBottom: '1rem' }}>🌰 Oak ID Quick Tips</h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
                <li style={{ color: 'var(--gray-mid)', fontSize: '0.85rem' }}>✅ Acorns = Oak (always)</li>
                <li style={{ color: 'var(--gray-mid)', fontSize: '0.85rem' }}>✅ Rounded lobes = White Oak group</li>
                <li style={{ color: 'var(--gray-mid)', fontSize: '0.85rem' }}>✅ Bristle tips = Red Oak group</li>
                <li style={{ color: 'var(--gray-mid)', fontSize: '0.85rem' }}>✅ Fringed cup = Bur Oak</li>
                <li style={{ color: 'var(--gray-mid)', fontSize: '0.85rem' }}>✅ Light gray bark = White Oak</li>
                <li style={{ color: 'var(--gray-mid)', fontSize: '0.85rem' }}>✅ Yellow inner bark = Black Oak</li>
                <li style={{ color: 'var(--gray-mid)', fontSize: '0.85rem' }}>✅ Narrow leaves = Willow Oak</li>
                <li style={{ color: 'var(--gray-mid)', fontSize: '0.85rem' }}>✅ Evergreen = Live Oak</li>
              </ul>
            </div>
            <div className="card" style={{ marginBottom: '1.5rem' }}>
              <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem', fontWeight: 700, color: 'var(--white)', marginBottom: '1rem' }}>🌳 More Identifiers</h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                <li><Link href="/maple-tree-identifier" style={{ color: 'var(--gray-mid)', fontSize: '0.88rem' }}>🍁 Maple Tree Identifier</Link></li>
                <li><Link href="/pine-tree-identifier" style={{ color: 'var(--gray-mid)', fontSize: '0.88rem' }}>🌲 Pine Tree Identifier</Link></li>
                <li><Link href="/palm-tree-identifier" style={{ color: 'var(--gray-mid)', fontSize: '0.88rem' }}>🌴 Palm Tree Identifier</Link></li>
                <li><Link href="/birch-tree-identifier" style={{ color: 'var(--gray-mid)', fontSize: '0.88rem' }}>🪵 Birch Tree Identifier</Link></li>
              </ul>
            </div>
            <div className="card">
              <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem', fontWeight: 700, color: 'var(--white)', marginBottom: '1rem' }}>📝 More Articles</h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                <li><Link href="/blog/tree-identification-by-bark" style={{ color: 'var(--gray-mid)', fontSize: '0.88rem' }}>🪵 Tree ID by Bark</Link></li>
                <li><Link href="/blog/how-to-identify-trees-in-winter" style={{ color: 'var(--gray-mid)', fontSize: '0.88rem' }}>❄️ Winter Tree ID</Link></li>
                <li><Link href="/blog/common-tree-species" style={{ color: 'var(--gray-mid)', fontSize: '0.88rem' }}>25 Common Tree Species</Link></li>
                <li><Link href="/blog/how-to-identify-trees" style={{ color: 'var(--gray-mid)', fontSize: '0.88rem' }}>How to Identify Trees</Link></li>
                <li><Link href="/blog/tree-identification-by-leaf" style={{ color: 'var(--gray-mid)', fontSize: '0.88rem' }}>Tree ID by Leaf</Link></li>
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <section style={{ padding: '4rem 2rem', background: 'var(--deep-black)', borderTop: '1px solid var(--card-border)', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', color: 'var(--white)', marginBottom: '1rem' }}>Identify Any Oak Tree Instantly</h2>
        <p style={{ color: 'var(--gray-mid)', marginBottom: '2rem' }}>Upload a photo of leaf, bark, or acorn — our AI identifies the oak species in seconds.</p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/oak-tree-identifier" className="btn-primary">🌰 Oak Tree Identifier</Link>
          <Link href="/blog" className="btn-outline">📝 More Articles</Link>
        </div>
      </section>
    </Layout>
  );
}
