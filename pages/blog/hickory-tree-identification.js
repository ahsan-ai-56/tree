import Layout from '../../components/Layout';
import Link from 'next/link';

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Hickory Tree Identification — Shagbark Hickory, Bitternut, Pignut & Complete Guide",
    "description": "Complete hickory tree identification guide covering shagbark hickory (Carya ovata), bitternut hickory (Carya cordiformis), pignut hickory, mockernut hickory, hickory leaves, bark, nuts, and wood. Expert ID tips included.",
    "image": "https://images.unsplash.com/photo-1448375240586-882707db888b?w=1200&q=80",
    "datePublished": "2026-08-24",
    "dateModified": "2026-08-24",
    "author": { "@type": "Organization", "name": "Tree Identifier" },
    "publisher": { "@type": "Organization", "name": "Tree Identifier", "url": "https://treeidentifier.online/" },
    "mainEntityOfPage": "https://treeidentifier.online/blog/hickory-tree-identification",
    "wordCount": "2500",
    "keywords": "hickory tree identification, hickory tree, hickory nuts, shagbark hickory, carya ovata, bitternut hickory, carya cordiformis, pignut hickory, mockernut hickory, hickory wood, hickory bark, hickory tree leaves, hickory leaf, types of hickory trees, how to identify a hickory tree, is hickory a hardwood"
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How do I identify a hickory tree?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "To identify a hickory tree, look for five key features: large pinnately compound leaves with 5-9 leaflets (odd number, with a larger terminal leaflet), alternate arrangement on the twig, large round husked nuts (hickory nuts) that split into 4 sections when ripe, stout twigs with large terminal buds, and distinctive bark that varies dramatically by species. Shagbark Hickory (Carya ovata) has unmistakable bark — long shaggy strips peeling away from the trunk. Bitternut Hickory has distinctive sulfur-yellow buds in winter. Mockernut Hickory has very large terminal buds covered in overlapping scales."
        }
      },
      {
        "@type": "Question",
        "name": "What does a hickory tree look like?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A hickory tree looks like a large deciduous hardwood, typically 18-40 meters tall, with a straight trunk and an oval to rounded crown. The most distinctive features visible from a distance are: the large compound leaves (made up of multiple leaflets) that turn brilliant golden-yellow in autumn, the large husked nuts (hickory nuts) visible in summer and autumn, and — on Shagbark Hickory — the dramatically shaggy bark with long strips peeling away from the trunk. Hickory leaves are compound with 5-9 leaflets, and the terminal (end) leaflet is typically the largest."
        }
      },
      {
        "@type": "Question",
        "name": "What is Shagbark Hickory (Carya ovata)?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Shagbark Hickory (Carya ovata) is the most distinctive and easily identified hickory species, named for its unique bark — long, gray strips that curl away from the trunk at top and bottom, giving the tree a dramatically shaggy appearance unlike any other North American tree. Carya ovata is a large tree (20-35 meters) native to eastern North America, producing the most commercially valuable hickory nuts — sweet, edible, and used in the same way as pecans. The leaves have 5 leaflets (occasionally 7), and the nuts are round with a thick 4-sectioned husk."
        }
      },
      {
        "@type": "Question",
        "name": "What is Bitternut Hickory (Carya cordiformis)?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Bitternut Hickory (Carya cordiformis) is the most widespread hickory species in eastern North America and the easiest to identify in winter due to its distinctive sulfur-yellow buds — the only hickory with bright yellow winter buds. The name 'bitternut' reflects the extremely bitter, inedible nuts — unpalatable to humans due to very high tannin content. Bitternut hickory has 7-11 leaflets (more than most hickories), and the nuts are thin-shelled and round with a yellow-green ridged husk that only partially splits at maturity. Despite the inedible nuts, bitternut hickory wood is an excellent hardwood."
        }
      },
      {
        "@type": "Question",
        "name": "What are hickory nuts and are they edible?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Hickory nuts are the hard-shelled nuts produced by all hickory species (Carya), enclosed in a thick 4-sectioned husk that splits when ripe. Edibility varies by species: Shagbark Hickory nuts are sweet and delicious — the best-tasting hickory nut and historically important as a Native American food. Shellbark Hickory produces the largest edible nuts. Mockernut Hickory nuts are edible but have very thick shells with little kernel. Pignut Hickory nuts are somewhat bitter. Bitternut Hickory nuts are very bitter and inedible. The term 'hickery nut' (alternate spelling) refers to the same fruits."
        }
      },
      {
        "@type": "Question",
        "name": "Is hickory a hardwood?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes — hickory is one of the hardest and toughest hardwoods in North America, if not the world. Hickory wood ranks at the very top of hardness scales for North American woods, with a Janka hardness of 1820 lbf for Shagbark Hickory — harder than oak (1290 lbf), ash (1320 lbf), and most other common hardwoods. Hickory wood's combination of hardness, strength, and flexibility (it can bend considerably before breaking) makes it uniquely suited for tool handles, sports equipment (golf club shafts, drum sticks), flooring, and smoking wood. Hickory smoked meats are an American barbecue tradition."
        }
      },
      {
        "@type": "Question",
        "name": "What is the hickory leaf identification?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Hickory leaf identification: all hickory leaves are pinnately compound — divided into multiple leaflets arranged along a central stalk (rachis). The number of leaflets varies by species: 5 in Shagbark Hickory, 7-9 in Mockernut Hickory, 7-11 in Bitternut Hickory, 7-9 in Pignut Hickory. The terminal (end) leaflet is always the largest. Individual leaflets are oval to lance-shaped with finely serrated margins and prominent veins. The entire compound leaf is large — typically 25-50cm long — making hickory leaves among the largest compound leaves of any North American hardwood. In autumn, hickory leaves turn brilliant golden-yellow."
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
      { "@type": "ListItem", "position": 3, "name": "Hickory Tree Identification", "item": "https://treeidentifier.online/blog/hickory-tree-identification" }
    ]
  }
];

const hickorySpecies = [
  {
    num: 1,
    name: 'Shagbark Hickory',
    sci: 'Carya ovata',
    icon: '🌳',
    region: 'Eastern North America',
    leaflets: '5 (occasionally 7)',
    leaf: 'Large compound, 25-45cm total. Leaflets oval, finely toothed. Terminal leaflet largest.',
    bark: 'UNMISTAKABLE — long gray strips peeling away at top and bottom. Most shaggy bark of any NA tree.',
    nut: 'Round, thick 4-sectioned husk. Sweet, edible — best-tasting hickory nut. 2.5-4cm.',
    bud: 'Large, gray-brown, overlapping scales',
    note: 'Easiest hickory to identify at any season — shaggy bark is unmistakable. Best edible nuts. Carya ovata shagbark hickory = most beloved hickory.',
    edibility: 'Excellent — sweet',
  },
  {
    num: 2,
    name: 'Bitternut Hickory',
    sci: 'Carya cordiformis',
    icon: '💛',
    region: 'Eastern North America (most widespread hickory)',
    leaflets: '7-11 (most leaflets of any common hickory)',
    leaf: 'Compound, 20-40cm. More leaflets than other hickories. Terminal leaflet similar in size to laterals.',
    bark: 'Gray, relatively smooth for a hickory, developing shallow furrows with age',
    nut: 'Small round thin-shelled nut with ridged yellow-green husk. Extremely bitter and inedible.',
    bud: 'DISTINCTIVE — bright sulfur-yellow buds in winter. Only hickory with yellow winter buds.',
    note: 'Easiest hickory to identify in winter — bright yellow buds are unmistakable. Bitternut Hickory Carya cordiformis = most widespread hickory. Seeds / bitternut hickory seeds are bitter and inedible.',
    edibility: 'Inedible — very bitter',
  },
  {
    num: 3,
    name: 'Pignut Hickory',
    sci: 'Carya glabra',
    icon: '🐷',
    region: 'Eastern North America',
    leaflets: '5-7',
    leaf: 'Compound, 20-35cm. Leaflets lance-shaped to oval, finely toothed, relatively narrow.',
    bark: 'Gray, developing interlocking ridges and furrows — NOT shaggy like Shagbark',
    nut: 'Pear-shaped to oval, thin husk barely splits at maturity. Pignut hickory nut is small and somewhat bitter.',
    bud: 'Medium-sized, brown, overlapping scales',
    note: 'Carya glabra = Pignut Hickory. Named because pigs readily eat the fallen nuts. Distinguished from Shagbark by non-shaggy bark and pear-shaped nuts.',
    edibility: 'Somewhat bitter — edible but not preferred',
  },
  {
    num: 4,
    name: 'Mockernut Hickory',
    sci: 'Carya tomentosa',
    icon: '🤡',
    region: 'Eastern North America',
    leaflets: '7-9',
    leaf: 'Compound, 30-50cm — largest hickory leaves. Leaflets larger than most hickories. Fragrant when crushed.',
    bark: 'Gray, developing interlocking ridges and furrows similar to Pignut',
    nut: 'Large round nut with very thick hard shell. "Mockernut" = shell mocks you with little edible kernel inside.',
    bud: 'Very large terminal bud — largest of any hickory. Covered in overlapping yellowish-gray scales.',
    note: 'Named because the large nuts contain very little kernel — they "mock" the forager. Very large buds and fragrant leaves are key ID features. Hickory mockernut = most common name.',
    edibility: 'Edible but poor kernel-to-shell ratio',
  },
  {
    num: 5,
    name: 'Shellbark Hickory',
    sci: 'Carya laciniosa',
    icon: '🥜',
    region: 'Eastern North America (less common)',
    leaflets: '7-9',
    leaf: 'Compound, 30-60cm — very large. Similar to Shagbark but more leaflets and larger overall.',
    bark: 'Shaggy — similar to Shagbark Hickory but less dramatically peeling',
    nut: 'Largest hickory nut of all species. Sweet and edible — excellent quality.',
    bud: 'Large, orange-brown',
    note: 'Also called "Kingnut Hickory" for its enormous nuts — largest of all hickories. Less common than Shagbark. Distinguished by more leaflets (7-9 vs 5) and larger nuts.',
    edibility: 'Excellent — largest and sweetest nuts',
  },
  {
    num: 6,
    name: 'Sand Hickory',
    sci: 'Carya pallida',
    icon: '🏜️',
    region: 'Southeastern United States',
    leaflets: '7-9',
    leaf: 'Compound, 20-35cm. Leaflets narrow, pale silvery underside with scales',
    bark: 'Gray, developing furrows similar to Pignut Hickory',
    nut: 'Round, small, thin husk, slightly bitter',
    bud: 'Small, pale',
    note: 'Named for its preferred habitat — sandy, well-drained, poor soils of the coastal plain. Silvery leaf undersides distinguish from other hickories.',
    edibility: 'Somewhat bitter',
  },
];

const hickoryIdFeatures = [
  { step: '01', icon: '🍃', title: 'Count the Leaflets', desc: 'The number of leaflets is the first and fastest hickory identification step. 5 leaflets = almost certainly Shagbark or Pignut. 7+ leaflets = Bitternut, Mockernut, or Shellbark. The terminal (end) leaflet is always the largest in hickories — check this as confirmation.' },
  { step: '02', icon: '🪵', title: 'Examine the Bark', desc: 'Bark is the most reliable year-round identification feature. Dramatically shaggy strips peeling away = Shagbark Hickory (unmistakable). Non-shaggy interlocking ridges = Pignut, Mockernut, or Bitternut. Slightly shaggy = Shellbark. Smooth for a hickory = young Bitternut.' },
  { step: '03', icon: '💛', title: 'Check Winter Buds', desc: 'Winter buds are highly diagnostic — the fastest winter identification method. Bright sulfur-yellow buds = Bitternut Hickory (only hickory with yellow buds — immediately definitive). Very large gray-brown buds = Mockernut. Medium gray-brown = Shagbark or Pignut.' },
  { step: '04', icon: '🥜', title: 'Examine the Nuts', desc: 'Hickory nuts (when present) confirm species identification. Thick 4-part husk splitting cleanly = Shagbark or Shellbark (edible). Pear-shaped husk barely splitting = Pignut. Ridged yellow-green husk = Bitternut (bitter). Very thick-shelled large round nut = Mockernut.' },
  { step: '05', icon: '👃', title: 'Crush a Leaf', desc: 'Crush a leaflet between your fingers and smell it. Mockernut Hickory leaflets have a strong, distinctively spicy fragrance when crushed — useful in summer when other features are less obvious. Other hickories have little or no fragrance.' },
  { step: '06', icon: '📏', title: 'Measure Leaf Size', desc: 'The overall compound leaf size helps narrow species. Mockernut and Shellbark have the largest leaves (30-60cm). Shagbark is large (25-45cm). Pignut and Bitternut are medium (20-40cm). A very large compound leaf with 7+ leaflets points to Mockernut or Shellbark.' },
];

export default function HickoryTreeIdentification() {
  return (
    <Layout
      meta={{
        title: 'Hickory Tree Identification — Shagbark Hickory, Bitternut, Pignut & Complete Guide | Tree Identifier',
        description: 'Complete hickory tree identification guide covering shagbark hickory (Carya ovata), bitternut hickory (Carya cordiformis), pignut (Carya glabra), mockernut hickory, hickory nuts, bark, leaves, and wood.',
        canonical: 'https://treeidentifier.online/blog/hickory-tree-identification',
        schema,
      }}
      breadcrumbs={[{ label: 'Blog', href: '/blog' }, { label: 'Hickory Tree Identification' }]}
    >
      {/* HERO */}
      <section style={{
        background: `linear-gradient(180deg, rgba(5,5,5,0.72) 0%, var(--black) 100%), url('https://images.unsplash.com/photo-1448375240586-882707db888b?w=1600&q=80') center/cover no-repeat`,
        padding: '120px 2rem 5rem',
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
            <span style={{ background: 'rgba(64,192,116,0.1)', color: 'var(--bright-green)', border: '1px solid rgba(64,192,116,0.2)', borderRadius: '50px', padding: '4px 14px', fontSize: '0.78rem', fontWeight: 600 }}>Hickory Trees</span>
            <span style={{ color: 'var(--gray-mid)', fontSize: '0.85rem' }}>📅 August 24, 2026</span>
            <span style={{ color: 'var(--gray-mid)', fontSize: '0.85rem' }}>⏱ 15 min read</span>
          </div>
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', color: 'var(--white)', lineHeight: 1.15, marginBottom: '1.5rem' }}>
            Hickory Tree Identification —<br />Shagbark Hickory, Bitternut,<br />Pignut & Complete Guide
          </h1>
          <p style={{ fontSize: '1.15rem', color: 'rgba(255,255,255,0.75)', lineHeight: 1.8 }}>
            Hickory trees are among the mightiest hardwoods of eastern North America — famous for rock-hard wood, edible nuts, dramatic fall color, and the unmistakable shaggy bark of Shagbark Hickory. This complete identification guide covers all major hickory species with expert tips for every season.
          </p>
          <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link href="/tree-identifier" className="btn-primary" style={{ fontSize: '0.95rem', padding: '12px 28px' }}>
              🌳 Identify Your Hickory →
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

            <h2>What Is a Hickory Tree? — Hickory Meaning and Definition</h2>
            <p>Hickory meaning: hickory trees are members of the genus <em>Carya</em> in the family Juglandaceae — the walnut family. The name "hickory" is derived from the Powhatan (Algonquian) word <em>pawcohiccora</em>, referring to a food made from crushed hickory nuts. There are approximately 17-19 species of hickory worldwide, with about 12 native to North America and the remainder native to China and Southeast Asia. Hickories are among the most important native hardwood trees of eastern North America, producing valuable timber, edible nuts, and critical wildlife habitat.</p>
            <p>The hickory America connection is deep — hickory wood was essential to early American life for tool handles, wagon wheels, and firewood. President Andrew Jackson was nicknamed "Old Hickory" for his toughness and resilience, reflecting the cultural association between hickory wood and strength. Hickory Texas, Hickory NC, and countless other American place names testify to the historical importance of hickory trees across the continent. Use our <Link href="/tree-identifier">AI Tree Identifier</Link> to identify any hickory species from a photo instantly.</p>

            {/* IMAGE 1 */}
            <div style={{ margin: '2rem 0', borderRadius: '16px', overflow: 'hidden', border: '1px solid var(--card-border)' }}>
              <img
                src="https://images.unsplash.com/photo-1448375240586-882707db888b?w=900&q=80"
                alt="Shagbark hickory tree showing dramatic shaggy peeling bark for identification"
                style={{ width: '100%', height: '300px', objectFit: 'cover' }}
              />
              <div style={{ background: 'var(--card-bg)', padding: '0.8rem 1.2rem' }}>
                <p style={{ color: 'var(--gray-mid)', fontSize: '0.82rem', margin: 0 }}>🌳 Shagbark Hickory (Carya ovata) has the most distinctive bark of any North American tree — long gray strips peeling away from the trunk at top and bottom. This shaggy bark makes Shagbark Hickory unmistakable in any season, from any distance.</p>
              </div>
            </div>

            <h2>How to Identify a Hickory Tree — 6-Step Method</h2>
            <p>Hickory tree identification uses a systematic approach. The following six steps take you from initial observation to confident species identification in any season. Hickory tree ID is most straightforward in summer (leaves and nuts present) and winter (bark and buds), but the shaggy bark of Shagbark Hickory makes that species identifiable at any time and from considerable distance.</p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', margin: '1.5rem 0' }}>
              {hickoryIdFeatures.map((f, i) => (
                <div key={i} style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)', borderRadius: '14px', padding: '1.4rem', display: 'flex', gap: '1.2rem', alignItems: 'flex-start' }}>
                  <div style={{ width: '48px', height: '48px', minWidth: '48px', background: 'linear-gradient(135deg, var(--forest-green), var(--mid-green))', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 800, fontSize: '0.9rem', flexShrink: 0 }}>{f.step}</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.4rem' }}>
                      <span style={{ fontSize: '1.1rem' }}>{f.icon}</span>
                      <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem', fontWeight: 700, color: 'var(--white)', margin: 0 }}>{f.title}</h3>
                    </div>
                    <p style={{ color: 'rgba(255,255,255,0.72)', fontSize: '0.88rem', lineHeight: 1.7, margin: 0 }}>{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <h2>Hickory Tree Leaves — Complete Identification Guide</h2>
            <p>Hickory tree leaves are pinnately compound — divided into multiple leaflets arranged along a central stalk called the rachis. This compound leaf structure immediately distinguishes hickory from all simple-leaved trees and limits the identification to compound-leaved species including ash, walnut, and black locust. Within compound-leaved trees, hickory is distinguished by alternate leaf arrangement (ash leaves are opposite), odd number of leaflets with a distinctly larger terminal leaflet (walnut also has this but typically has 13-23 leaflets vs hickory's 5-11), and the large stout overall leaf structure.</p>
            <p>Hickory tree leaf identification for specific species focuses primarily on leaflet count. A hickory leaf with 5 leaflets immediately points to Shagbark Hickory (<em>Carya ovata</em>) or Pignut Hickory (<em>Carya glabra</em>) — these are the only common hickories with 5 leaflets. 7 or more leaflets points to Mockernut, Bitternut, or Shellbark Hickory. The shagbark hickory leaf is also distinguished by the largest and widest terminal leaflet relative to the lateral leaflets of any common hickory.</p>
            <p>Hickory leaves turn brilliant golden-yellow in autumn — one of the most reliable and attractive autumn color displays of any North American hardwood. The large compound leaves create dramatic "fans" of golden color in the autumn forest canopy. Hickory fall color typically peaks slightly later than maple in most of eastern North America, extending the autumn color season. Fallen hickory leaves are easily identified by the compound structure and large size even on the forest floor.</p>

            <h2>Shagbark Hickory (Carya ovata) — The Iconic American Hickory</h2>
            <p>Shagbark Hickory (<em>Carya ovata</em>) is the most recognizable and beloved hickory species — an instantly identifiable tree famous for its dramatically shaggy bark and delicious nuts. The bark alone makes Shagbark Hickory unmistakable: long strips of gray bark curl away from the trunk at both top and bottom, creating a rough, disheveled appearance unlike any other tree in North America. Even from 50 meters away, a Shagbark Hickory is immediately identifiable by this bark.</p>
            <p>Carya ovata is a large tree reaching 20-35 meters, native to eastern North America from southern Quebec and Ontario south to Georgia and west to Nebraska. It grows in well-drained upland forests, rocky hillsides, and mixed hardwood stands. The shagbark hickory tree prefers deep, fertile, well-drained soils and is commonly associated with oak, maple, and black cherry in mixed hardwood forests of the Appalachians and Great Lakes region.</p>
            <p>Shagbark hickory nuts are the most commercially and culinarily valuable hickory nuts produced by any species. The nuts are sweet, rich, and buttery — similar in flavor to but distinct from pecans (which are also a hickory, <em>Carya illinoinensis</em>). Shagbark hickory nuts have been an important food source for Indigenous peoples of eastern North America for thousands of years, eaten raw, roasted, or processed into a milky nut soup called "pawcohiccora" — the origin of the word "hickory." Shaggy bark hickory nuts (alternate phrasing) are harvested in autumn when the husk splits into four sections and the nut falls from the tree.</p>
            <p>The shagbark hickory leaf has 5 leaflets (occasionally 7) on a compound leaf 25-45cm long. The terminal leaflet is the largest, often 15-20cm long and 8-12cm wide. The lateral leaflets decrease in size toward the base of the compound leaf. The shagbark hickory leaf turns brilliant golden-yellow in autumn — one of the most attractive autumn color displays of any hickory. For the shagbark hickory leaf, the large size of the terminal leaflet relative to the lateral leaflets is a good distinguishing feature from Pignut Hickory, which has more uniformly sized leaflets.</p>

            {/* IMAGE 2 */}
            <div style={{ margin: '2rem 0', borderRadius: '16px', overflow: 'hidden', border: '1px solid var(--card-border)' }}>
              <img
                src="https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?w=900&q=80"
                alt="Hickory tree compound leaves showing multiple leaflets for identification"
                style={{ width: '100%', height: '280px', objectFit: 'cover' }}
              />
              <div style={{ background: 'var(--card-bg)', padding: '0.8rem 1.2rem' }}>
                <p style={{ color: 'var(--gray-mid)', fontSize: '0.82rem', margin: 0 }}>🍃 Hickory tree leaves are large pinnately compound leaves with 5-11 leaflets depending on species. The terminal (end) leaflet is always the largest. The entire compound leaf can be 25-60cm long — among the largest leaves of any North American hardwood.</p>
              </div>
            </div>

            <h2>Bitternut Hickory (Carya cordiformis) — The Winter ID Champion</h2>
            <p>Bitternut Hickory (<em>Carya cordiformis</em>) is the most widespread hickory species in North America and the easiest to identify in winter — making it a favorite subject for winter tree identification exercises. The defining feature is the <strong>bright sulfur-yellow winter buds</strong> — no other hickory (or nearly any other common North American tree) has buds this distinctive yellow color. In a winter forest, spotting bright yellow buds on a medium-large hardwood immediately identifies it as Bitternut Hickory with complete certainty.</p>
            <p>Bitternut hickory carya cordiformis has 7-11 leaflets — more than most other common hickories, which is another useful identification feature. The name "bitternut" perfectly describes the nuts, which are extremely bitter and completely inedible for humans due to very high concentrations of tannins and other bitter compounds. Bitternut hickory seeds / bitternut hickory seeds are also inedible. However, the nuts are eaten by squirrels, deer, wild turkey, and other wildlife that are less sensitive to bitterness.</p>
            <p>Despite the inedible nuts, Bitternut Hickory is an important and valuable tree. Its wood is indistinguishable from other hickory species and equally prized for tool handles, flooring, and smoking wood. The bitternut tree occupies a wider ecological range than other hickories, tolerating wetter soils and less fertile conditions, making it the common hickory of bottomlands and moist forest sites.</p>

            <h2>Pignut Hickory (Carya glabra) — The Streamside Hickory</h2>
            <p>Pignut Hickory (<em>Carya glabra</em>) is a common hickory of dry upland forests in eastern North America, named for the fact that pigs and other animals readily consume the nuts — which humans find somewhat bitter. The species name <em>glabra</em> means "smooth" or "hairless" — referring to the relatively smooth leaflets compared to the hairy leaflets of Mockernut Hickory.</p>
            <p>The pignut hickory tree is distinguished from Shagbark Hickory by its non-shaggy bark — developing interlocking gray ridges and furrows rather than the long peeling strips of Shagbark. The bark of Pignut Hickory is firm and adherent, giving the trunk a rough but non-peeling appearance. Pignut Hickory leaves have 5-7 leaflets with lance-shaped to oval leaflets — typically narrower than Shagbark leaflets. The pignut hickory nut is distinctive in shape — pear-shaped to oval, with a thin husk that barely splits at maturity, leaving the nut partially enclosed. This pear-shaped nut distinguishes Pignut Hickory from the rounder nuts of Shagbark and Mockernut.</p>

            <h2>Mockernut Hickory — The Largest-Leaved Hickory</h2>
            <p>Mockernut Hickory (<em>Carya tomentosa</em>) is named for its large, impressive-looking nuts with very thick shells that contain disappointingly little edible kernel — they "mock" the forager who invests effort in cracking them. The hickory mockernut lives up to its name — the nuts are edible but the effort-to-reward ratio is low compared to Shagbark or Shellbark.</p>
            <p>Mockernut Hickory has the largest leaves of any common hickory — compound leaves 30-50cm long with 7-9 leaflets. A distinctive feature is that the leaflets are fragrant when crushed — a spicy, slightly resinous scent that is absent or much weaker in other hickories. This fragrance is caused by resin-producing glands on the leaf surface, also visible as tiny dots when the leaflet is held up to light. The very large terminal bud of Mockernut Hickory — covered in overlapping yellowish-gray scales — is the largest bud of any hickory and a reliable identification feature in winter.</p>

            <h2>Types of Hickory Trees — Complete Species Profiles</h2>
            <p>The following profiles cover all 6 major hickory species with complete identification details for each type of hickory tree.</p>

            {hickorySpecies.map((tree) => (
              <div key={tree.num} style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)', borderRadius: '16px', padding: '1.8rem', marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ width: '44px', height: '44px', minWidth: '44px', background: 'linear-gradient(135deg, var(--forest-green), var(--mid-green))', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.3rem' }}>{tree.icon}</div>
                  <div style={{ flex: 1 }}>
                    <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '1.05rem', fontWeight: 700, color: 'var(--white)', marginBottom: '0.2rem' }}>#{tree.num} {tree.name}</h3>
                    <p style={{ color: 'var(--bright-green)', fontSize: '0.82rem', fontStyle: 'italic', marginBottom: '1rem' }}>{tree.sci} · {tree.region}</p>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.8rem', marginBottom: '0.8rem' }}>
                      <div><span style={{ color: 'var(--bright-green)', fontSize: '0.75rem', fontWeight: 600, display: 'block', marginBottom: '0.2rem' }}>LEAFLETS</span><span style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.85rem' }}>{tree.leaflets}</span></div>
                      <div><span style={{ color: 'var(--bright-green)', fontSize: '0.75rem', fontWeight: 600, display: 'block', marginBottom: '0.2rem' }}>BARK</span><span style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.85rem' }}>{tree.bark}</span></div>
                      <div><span style={{ color: 'var(--bright-green)', fontSize: '0.75rem', fontWeight: 600, display: 'block', marginBottom: '0.2rem' }}>NUT</span><span style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.85rem' }}>{tree.nut}</span></div>
                      <div><span style={{ color: 'var(--bright-green)', fontSize: '0.75rem', fontWeight: 600, display: 'block', marginBottom: '0.2rem' }}>WINTER BUD</span><span style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.85rem' }}>{tree.bud}</span></div>
                    </div>
                    <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.6rem' }}>
                      <span style={{ background: tree.edibility.includes('Excellent') ? 'rgba(64,192,116,0.12)' : tree.edibility.includes('Inedible') ? 'rgba(248,113,113,0.1)' : 'rgba(251,191,36,0.1)', color: tree.edibility.includes('Excellent') ? 'var(--bright-green)' : tree.edibility.includes('Inedible') ? '#f87171' : '#fbbf24', border: `1px solid ${tree.edibility.includes('Excellent') ? 'rgba(64,192,116,0.25)' : tree.edibility.includes('Inedible') ? 'rgba(248,113,113,0.25)' : 'rgba(251,191,36,0.25)'}`, borderRadius: '20px', padding: '2px 10px', fontSize: '0.72rem', fontWeight: 600 }}>🥜 {tree.edibility}</span>
                    </div>
                    <div style={{ background: 'rgba(64,192,116,0.05)', border: '1px solid rgba(64,192,116,0.15)', borderRadius: '8px', padding: '0.6rem 0.9rem', fontSize: '0.82rem', color: 'rgba(255,255,255,0.75)' }}>
                      💡 {tree.note}
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <h2>Hickory Tree Bark — Identification Guide</h2>
            <p>Hickory tree bark is one of the most important identification features and varies dramatically between species. Shagbark Hickory has the most distinctive bark of any North American tree — long strips of gray bark curl outward at top and bottom, creating a shaggy, rough appearance that is unmistakable from a distance. This shaggy bark develops on trees approximately 20-30 years old and increases in shagginess with age.</p>
            <p>Hickory bark on non-shaggy species (Pignut, Mockernut, Bitternut) develops a pattern of interlocking ridges and furrows — somewhat similar to ash or oak bark. The ridges are typically firm and adherent without peeling. Bitternut Hickory bark is generally grayer and somewhat smoother than Pignut or Mockernut. For detailed bark comparison, see our <Link href="/blog/tree-identification-by-bark">complete bark identification guide</Link>. Mature hickory bark on old trees becomes more deeply furrowed and dark, making the interlocking ridge pattern more pronounced.</p>

            {/* IMAGE 3 */}
            <div style={{ margin: '2rem 0', borderRadius: '16px', overflow: 'hidden', border: '1px solid var(--card-border)' }}>
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=900&q=80"
                alt="Hickory nuts on ground showing 4-sectioned husk for identification"
                style={{ width: '100%', height: '260px', objectFit: 'cover' }}
              />
              <div style={{ background: 'var(--card-bg)', padding: '0.8rem 1.2rem' }}>
                <p style={{ color: 'var(--gray-mid)', fontSize: '0.82rem', margin: 0 }}>🥜 Hickory nuts — all hickory nuts are enclosed in a thick 4-sectioned husk that splits open when ripe. The nut shape (round vs. pear-shaped), husk thickness, and shell thickness help distinguish between hickory species. Shagbark hickory nuts are the sweetest and most edible.</p>
              </div>
            </div>

            <h2>Is Hickory a Hardwood? — Hickory Wood Properties and Uses</h2>
            <p>Is hickory a hardwood? Hickory is not just a hardwood — it is one of the hardest, densest, and toughest hardwoods in North America, routinely ranking at or near the top of hardness scales for commercial North American woods. The Janka hardness of Shagbark Hickory is approximately 1820 lbf — significantly harder than white oak (1360 lbf), hard maple (1450 lbf), and most other common hardwoods. Only a few exotic tropical hardwoods exceed hickory in hardness.</p>
            <p>Hickory wood's most unusual property is its unique combination of hardness AND toughness — the ability to absorb shock without shattering. Most very hard woods are brittle and will crack under impact; hickory is both hard and flexible, bending considerably before breaking. This combination makes hickory the ideal wood for any application requiring resistance to repeated impact: tool handles (axes, hammers, picks, sledgehammers), sports equipment (baseball bats, golf club shafts, drum sticks), and structural applications where shock resistance is critical.</p>
            <p>Hickory smoking wood is one of the most prized and widely used smoking woods in American barbecue. Hickory smoke produces a strong, rich, bacon-like flavor that is classic for smoked pork ribs, pulled pork, and brisket across the American South and Midwest. The smoke flavor from hickory is more intense than fruit woods (apple, cherry) but less harsh than mesquite, making it the most popular barbecue smoking wood in America. Hickory charcoal is also widely used for cooking and was historically used for iron smelting.</p>
            <p>Other major hickory wood uses include hardwood flooring (very durable, with attractive grain), cabinetry, furniture, ladders, and wagon wheel spokes. The characteristic grain of hickory — dark brown heartwood with creamy-white sapwood — creates an attractive contrasting appearance in flooring and furniture that has become fashionable in rustic and craftsman-style interiors.</p>

            <h2>Hickory Nuts — Edibility Guide by Species</h2>
            <p>Hickory nuts are produced by all hickory species but vary dramatically in edibility, size, and quality. Identifying which type of hickory tree and nut you have found is the most important step before attempting to eat them. All hickory nuts have a 4-sectioned husk that splits when ripe — the nut inside has a hard shell enclosing the edible kernel.</p>
            <p>Shagbark Hickory nuts are the best-eating hickory nut available in North America — sweet, rich, and buttery, with a flavor often compared to pecan (which is also a hickory). The thick husk splits cleanly into four sections when ripe, releasing a round hard-shelled nut. Cracking the shell reveals the edible kernel. Shellbark Hickory produces even larger nuts of similar quality. Mockernut Hickory nuts are edible but have extremely thick shells relative to kernel size — considerable effort for little reward.</p>
            <p>Pignut hickory nut is somewhat bitter but eaten by wildlife and tolerated by humans. Bitternut hickory nuts are the most bitter of all — extremely unpleasant and not recommended for human consumption. Fallen hickory nuts can be identified by species from the nut shape and husk characteristics, helping foragers identify the best-quality nuts: round nuts with thick cleanly-splitting husks = Shagbark or Shellbark (eat); pear-shaped with thin husk = Pignut (somewhat bitter); small thin-husked with ridged yellow-green husk = Bitternut (avoid).</p>

            <h2>Frequently Asked Questions — Hickory Trees</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', margin: '1.5rem 0' }}>
              {[
                { q: 'How do I identify a hickory tree?', a: 'Look for large pinnately compound leaves with 5-9 leaflets (odd number, larger terminal leaflet), alternate arrangement, large husked nuts splitting into 4 sections, and distinctive bark. Shagbark Hickory (Carya ovata) has unmistakable shaggy peeling bark. Bitternut Hickory has bright yellow winter buds.' },
                { q: 'What does a hickory tree look like?', a: 'A hickory tree is a large deciduous hardwood (18-40m) with compound leaves, golden-yellow fall color, and large husked nuts. Shagbark Hickory has dramatically shaggy peeling bark visible from a distance. Other hickories have interlocking ridged bark. All hickories have stout twigs with large terminal buds.' },
                { q: 'What is Shagbark Hickory (Carya ovata)?', a: 'Shagbark Hickory is identified by its unmistakable dramatically shaggy bark — long gray strips peeling away at top and bottom. Has 5 leaflets. Produces the best-tasting edible hickory nuts. Native to eastern North America. The carya ovata tree is the most iconic and easy-to-identify hickory.' },
                { q: 'What is Bitternut Hickory (Carya cordiformis)?', a: 'Bitternut Hickory (Carya cordiformis) has bright sulfur-yellow winter buds — the only hickory with yellow buds, making winter identification immediate. Has 7-11 leaflets. Nuts are extremely bitter and inedible. Most widespread hickory in North America. Non-shaggy bark.' },
                { q: 'What are hickory nuts and are they edible?', a: 'Hickory nuts vary by species. Shagbark Hickory nuts are excellent — sweet and edible, the best hickory nut. Shellbark produces the largest edible nuts. Pignut nuts are somewhat bitter. Bitternut Hickory nuts are inedible — very bitter. All have 4-sectioned husks that split when ripe.' },
                { q: 'Is hickory a hardwood?', a: 'Yes — hickory is one of the hardest and toughest hardwoods in North America. Janka hardness 1820 lbf — harder than oak and maple. Uniquely combines hardness with toughness (shock resistance). Used for tool handles, sports equipment, flooring, and barbecue smoking wood.' },
                { q: 'What is the hickory leaf identification?', a: 'Hickory leaves are large pinnately compound leaves with 5-11 leaflets (odd number) and a larger terminal leaflet. 5 leaflets = Shagbark or Pignut. 7-11 leaflets = Bitternut, Mockernut, or Shellbark. Turn brilliant golden-yellow in autumn. 25-60cm long — among largest compound leaves of any NA hardwood.' },
              ].map((faq, i) => (
                <div key={i} style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)', borderRadius: '12px', padding: '1.4rem' }}>
                  <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.95rem', fontWeight: 700, color: 'var(--white)', marginBottom: '0.6rem' }}>{faq.q}</h3>
                  <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.88rem', lineHeight: 1.7, margin: 0 }}>{faq.a}</p>
                </div>
              ))}
            </div>

            <h2>Identify Your Hickory Tree Instantly</h2>
            <p>Found a hickory tree and want to confirm the exact species? Upload a photo to our <Link href="/tree-identifier">free AI Tree Identifier</Link> for instant identification. The AI identifies all major hickory species — Shagbark Hickory, Bitternut Hickory, Pignut Hickory, Mockernut Hickory, Shellbark Hickory, and Pecan — from leaf, bark, nut, or full-tree photos.</p>
            <p>For leaf identification, our <Link href="/identify-tree-by-leaf">Leaf Identifier</Link> analyzes the compound leaf structure and leaflet count. Related guides: <Link href="/blog/linden-tree-identification">Linden Tree Guide</Link>, <Link href="/blog/alder-tree-identification">Alder Tree Guide</Link>, <Link href="/blog/oak-tree-identification-guide">Oak Tree ID Guide</Link>, <Link href="/blog/beech-tree">Beech Tree Guide</Link>, <Link href="/blog/tree-identification-by-bark">Tree ID by Bark</Link>, <Link href="/blog/how-to-identify-trees-in-winter">Winter Tree ID</Link>.</p>
            <p>Species tools: <Link href="/oak-tree-identifier">Oak Tree Identifier</Link>, <Link href="/maple-tree-identifier">Maple Tree Identifier</Link>, <Link href="/elm-tree-identifier">Elm Tree Identifier</Link>, <Link href="/birch-tree-identifier">Birch Tree Identifier</Link>, <Link href="/pine-tree-identifier">Pine Tree Identifier</Link>, <Link href="/fruit-tree-identifier">Fruit Tree Identifier</Link>.</p>

          </article>

          <aside style={{ position: 'sticky', top: '90px' }}>
            <div className="card" style={{ marginBottom: '1.5rem' }}>
              <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem', fontWeight: 700, color: 'var(--bright-green)', marginBottom: '1.2rem' }}>🌳 Identify Your Hickory</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                <Link href="/tree-identifier" className="btn-primary" style={{ textAlign: 'center', justifyContent: 'center', fontSize: '0.88rem', padding: '10px 16px' }}>🌳 Tree Identifier</Link>
                <Link href="/identify-tree-by-leaf" className="btn-outline" style={{ textAlign: 'center', justifyContent: 'center', fontSize: '0.88rem', padding: '10px 16px' }}>🍃 Leaf Identifier</Link>
              </div>
            </div>

            <div className="card" style={{ marginBottom: '1.5rem' }}>
              <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem', fontWeight: 700, color: 'var(--white)', marginBottom: '1rem' }}>🌳 Hickory Quick ID</h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
                <li style={{ color: 'var(--gray-mid)', fontSize: '0.85rem' }}>✅ Shaggy peeling bark = Shagbark</li>
                <li style={{ color: 'var(--gray-mid)', fontSize: '0.85rem' }}>✅ Yellow winter buds = Bitternut</li>
                <li style={{ color: 'var(--gray-mid)', fontSize: '0.85rem' }}>✅ 5 leaflets = Shagbark or Pignut</li>
                <li style={{ color: 'var(--gray-mid)', fontSize: '0.85rem' }}>✅ 7-11 leaflets = Bitternut/Mockernut</li>
                <li style={{ color: 'var(--gray-mid)', fontSize: '0.85rem' }}>✅ Pear-shaped nut = Pignut</li>
                <li style={{ color: 'var(--gray-mid)', fontSize: '0.85rem' }}>✅ Very large bud = Mockernut</li>
                <li style={{ color: 'var(--gray-mid)', fontSize: '0.85rem' }}>✅ Sweet round nut = Shagbark/Shellbark</li>
                <li style={{ color: 'var(--gray-mid)', fontSize: '0.85rem' }}>✅ Fragrant leaflets = Mockernut</li>
              </ul>
            </div>

            <div className="card" style={{ marginBottom: '1.5rem' }}>
              <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem', fontWeight: 700, color: 'var(--white)', marginBottom: '1rem' }}>🌳 Tree Identifiers</h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                <li><Link href="/oak-tree-identifier" style={{ color: 'var(--gray-mid)', fontSize: '0.88rem' }}>🌰 Oak Tree Identifier</Link></li>
                <li><Link href="/maple-tree-identifier" style={{ color: 'var(--gray-mid)', fontSize: '0.88rem' }}>🍁 Maple Tree Identifier</Link></li>
                <li><Link href="/elm-tree-identifier" style={{ color: 'var(--gray-mid)', fontSize: '0.88rem' }}>🌳 Elm Tree Identifier</Link></li>
                <li><Link href="/birch-tree-identifier" style={{ color: 'var(--gray-mid)', fontSize: '0.88rem' }}>🪵 Birch Tree Identifier</Link></li>
                <li><Link href="/pine-tree-identifier" style={{ color: 'var(--gray-mid)', fontSize: '0.88rem' }}>🌲 Pine Tree Identifier</Link></li>
                <li><Link href="/fruit-tree-identifier" style={{ color: 'var(--gray-mid)', fontSize: '0.88rem' }}>🍎 Fruit Tree Identifier</Link></li>
              </ul>
            </div>

            <div className="card">
              <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem', fontWeight: 700, color: 'var(--white)', marginBottom: '1rem' }}>📝 More Articles</h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                <li><Link href="/blog/linden-tree-identification" style={{ color: 'var(--gray-mid)', fontSize: '0.88rem' }}>❤️ Linden Tree Guide</Link></li>
                <li><Link href="/blog/alder-tree-identification" style={{ color: 'var(--gray-mid)', fontSize: '0.88rem' }}>🌊 Alder Tree Guide</Link></li>
                <li><Link href="/blog/beech-tree" style={{ color: 'var(--gray-mid)', fontSize: '0.88rem' }}>🌲 Beech Tree Guide</Link></li>
                <li><Link href="/blog/oak-tree-identification-guide" style={{ color: 'var(--gray-mid)', fontSize: '0.88rem' }}>🌰 Oak ID Guide</Link></li>
                <li><Link href="/blog/maple-tree-identification-guide" style={{ color: 'var(--gray-mid)', fontSize: '0.88rem' }}>🍁 Maple ID Guide</Link></li>
                <li><Link href="/blog/tree-identification-by-bark" style={{ color: 'var(--gray-mid)', fontSize: '0.88rem' }}>🪵 Tree ID by Bark</Link></li>
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <section style={{ padding: '4rem 2rem', background: 'var(--deep-black)', borderTop: '1px solid var(--card-border)', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', color: 'var(--white)', marginBottom: '1rem' }}>Identify Any Hickory Tree Instantly</h2>
        <p style={{ color: 'var(--gray-mid)', marginBottom: '2rem' }}>Upload a photo of bark, leaves, nuts, or full tree — our AI identifies the hickory species in seconds. Free, no signup.</p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/tree-identifier" className="btn-primary">🌳 Identify Tree Now</Link>
          <Link href="/blog" className="btn-outline">📝 More Articles</Link>
        </div>
      </section>
    </Layout>
  );
}
