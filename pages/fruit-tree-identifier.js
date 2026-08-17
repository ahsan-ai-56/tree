import Layout from '../components/Layout';
import Link from 'next/link';
import UploadTool from '../components/UploadTool';

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "url": "https://treeidentifier.online/fruit-tree-identifier",
      "name": "Fruit Tree Identifier — Free AI Fruit Tree Identification Tool",
      "description": "Identify any fruit tree instantly with AI. Upload a photo of fruit tree leaves, flowers, bark, or fruit and get accurate species identification with detailed growing information.",
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://treeidentifier.online/" },
          { "@type": "ListItem", "position": 2, "name": "Fruit Tree Identifier", "item": "https://treeidentifier.online/fruit-tree-identifier" }
        ]
      }
    },
    {
      "@type": "SoftwareApplication",
      "name": "Fruit Tree Identifier",
      "applicationCategory": "UtilitiesApplication",
      "operatingSystem": "Web",
      "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
      "url": "https://treeidentifier.online/fruit-tree-identifier",
      "description": "Free AI-powered fruit tree identification tool. Upload a photo and identify any fruit tree species instantly.",
      "featureList": [
        "Identify fruit trees by leaf, flower, bark, or fruit photo",
        "Covers 100+ fruit tree species worldwide",
        "Instant AI identification in under 3 seconds",
        "Free with no signup required"
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How do I identify a fruit tree?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "To identify a fruit tree, observe four key features: leaf shape and margin (apple leaves are oval with finely serrated edges, pear leaves are oval to rounded with finely serrated edges, cherry leaves are oval with sharply serrated edges), bark texture (apple bark is grayish-brown and scaly, cherry bark is smooth reddish-brown with horizontal lenticels), flower color and shape in spring (apple has pink-white 5-petal flowers, cherry has white or pink 5-petal flowers), and of course the fruit itself when present. Upload a photo to our free AI Fruit Tree Identifier for instant species identification."
          }
        },
        {
          "@type": "Question",
          "name": "How do I identify an apple tree?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Apple trees (Malus domestica and related species) are identified by: oval leaves with finely serrated margins and slightly hairy undersides, gray-brown scaly bark on mature trees, distinctive pink-white 5-petal flowers in spring (one of the earliest spring-flowering fruit trees), and round to slightly irregular fruit with a characteristic depression at both ends. Wild crabapples have smaller fruit (under 5cm) while cultivated apple fruit is larger. The leaf underside is often woolly or hairy, distinguishing apples from pears which have smoother leaf undersides."
          }
        },
        {
          "@type": "Question",
          "name": "How do I identify a cherry tree?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Cherry trees are identified by: smooth reddish-brown bark with distinctive horizontal lines called lenticels (unique to the cherry family), oval leaves with sharply serrated margins and a pointed tip, white or pink 5-petal flowers appearing in spring before or with the leaves, and small round fruit ranging from yellow to red to black-purple. The bark lenticels are the most reliable year-round identification feature — no other common fruit tree has this distinctive horizontal-striped bark pattern."
          }
        },
        {
          "@type": "Question",
          "name": "How do I identify a pear tree?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Pear trees are identified by: oval to rounded leaves with finely serrated margins and a smooth upper surface (smoother than apple leaves), gray-brown bark that develops scaly plates on mature trees, white 5-petal flowers in early spring (slightly earlier than apple), and the distinctive pear-shaped or round fruit with a narrow top and wider base. Ornamental pear trees (Bradford Pear) have similar leaves but smaller fruit and brilliant red-orange fall color. Wild pears have smaller harder fruit."
          }
        },
        {
          "@type": "Question",
          "name": "How do I identify a plum tree?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Plum trees are identified by: oval leaves with finely serrated margins and a pointed tip, smooth gray-brown bark that may develop vertical cracks, white 5-petal flowers appearing very early in spring (often before leaves emerge), and oval to round fruit with a single central stone. Wild plum trees often have thorny branches. The very early spring flowering — sometimes in late February or March — is a key identification feature. Cherry plum (Prunus cerasifera) is often grown for its purple-red leaves."
          }
        },
        {
          "@type": "Question",
          "name": "What is the easiest way to identify a fruit tree?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The easiest way to identify a fruit tree is to photograph the actual fruit when present — the fruit shape, color, size, and skin texture immediately identify most species. When fruit is absent, photograph the bark — cherry bark with horizontal lenticels is unmistakable, apple bark is scaly gray-brown, and citrus bark is smooth greenish-gray. In spring, flower color and timing help identify species. Our free AI Fruit Tree Identifier identifies any fruit tree from a photo of leaves, bark, flowers, or fruit in under 3 seconds."
          }
        },
        {
          "@type": "Question",
          "name": "How do I identify a citrus tree?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Citrus trees are identified by: evergreen glossy dark green leaves with a distinctive winged petiole (a small leafy expansion on the leaf stalk visible on most species), smooth greenish-gray bark, highly fragrant white flowers, and the characteristic citrus fruit. The winged petiole is the most reliable vegetative identification feature — hold a citrus leaf up to light and you can see the small wing-like expansion on either side of the leaf stalk. Different citrus species vary in wing size: large wings indicate grapefruit or pomelo, medium wings indicate orange, small or no wings indicate lemon or lime."
          }
        }
      ]
    }
  ]
};

const features = [
  { icon: '🍎', title: 'Fruit Recognition', desc: 'AI identifies fruit tree species from photos of the actual fruit — the most reliable identification method when fruit is present.' },
  { icon: '🌸', title: 'Flower Analysis', desc: 'Identify fruit trees in spring from blossom color, shape, and timing — apple, cherry, plum, and pear all have distinctive flowers.' },
  { icon: '🍃', title: 'Leaf Identification', desc: 'AI analyzes leaf shape, margin type, surface texture, and underside features for year-round fruit tree identification.' },
  { icon: '🪵', title: 'Bark Recognition', desc: 'Identify fruit trees from bark texture and color year-round — cherry bark with horizontal lenticels is unmistakable.' },
  { icon: '⚡', title: 'Instant Results', desc: 'Get fruit tree species identification in under 3 seconds with scientific name, fruit type, growing tips, and harvest season.' },
  { icon: '🌍', title: '100+ Fruit Species', desc: 'Covers all common fruit trees including apple, pear, cherry, plum, peach, citrus, fig, mango, avocado, and many more.' },
];

const fruitSpecies = [
  { name: 'Apple Tree', sci: 'Malus domestica', region: 'Worldwide (temperate)', note: 'Most widely grown fruit tree — thousands of cultivars', icon: '🍎' },
  { name: 'Pear Tree', sci: 'Pyrus communis', region: 'Europe, Asia, North America', note: 'Oval leaves smoother than apple, early white flowers', icon: '🍐' },
  { name: 'Cherry Tree', sci: 'Prunus avium / cerasus', region: 'Worldwide (temperate)', note: 'Distinctive horizontal lenticels on reddish-brown bark', icon: '🍒' },
  { name: 'Plum Tree', sci: 'Prunus domestica', region: 'Worldwide (temperate)', note: 'Very early spring flowers, sometimes thorny branches', icon: '🫐' },
  { name: 'Peach Tree', sci: 'Prunus persica', region: 'Worldwide (temperate)', note: 'Long lance-shaped leaves, fuzzy fruit skin', icon: '🍑' },
  { name: 'Lemon Tree', sci: 'Citrus limon', region: 'Subtropical worldwide', note: 'Evergreen, fragrant flowers, winged petiole', icon: '🍋' },
  { name: 'Orange Tree', sci: 'Citrus sinensis', region: 'Subtropical worldwide', note: 'Round fruit, medium winged petiole', icon: '🍊' },
  { name: 'Fig Tree', sci: 'Ficus carica', region: 'Mediterranean, worldwide', note: 'Large deeply lobed leaves, milky sap when cut', icon: '🫐' },
  { name: 'Avocado Tree', sci: 'Persea americana', region: 'Tropical/subtropical', note: 'Large evergreen leaves, distinctive pear-shaped fruit', icon: '🥑' },
  { name: 'Mango Tree', sci: 'Mangifera indica', region: 'Tropical worldwide', note: 'Large lance-shaped leaves, fragrant flowers', icon: '🥭' },
  { name: 'Olive Tree', sci: 'Olea europaea', region: 'Mediterranean, worldwide', note: 'Narrow silvery leaves, evergreen, gnarled trunk', icon: '🫒' },
  { name: 'Walnut Tree', sci: 'Juglans regia', region: 'Worldwide (temperate)', note: 'Compound leaves, distinctive round green fruit', icon: '🌰' },
];

const identificationSeasons = [
  { season: 'Spring 🌸', tip: 'Best time for flower-based ID. Apple = pink-white flowers. Cherry = white/pink before leaves. Plum = very early white flowers. Pear = white slightly before apple.' },
  { season: 'Summer 🌿', tip: 'Leaves fully developed — best for leaf-based ID. Fruit developing on tree. Long lance leaves = Peach. Lobed large leaves = Fig. Compound leaves = Walnut.' },
  { season: 'Autumn 🍂', tip: 'Fruit ripe — easiest identification season. Apple round, Pear tapered at top, Cherry small round, Plum oval with bloom, Peach fuzzy. Walnut green husk turns black.' },
  { season: 'Winter ❄️', tip: 'Bark-based ID. Cherry reddish-brown with horizontal lenticels. Apple scaly gray-brown. Peach smooth gray with reddish tinge. Citrus smooth greenish-gray (evergreen).' },
];

const faqs = [
  { q: 'How do I identify a fruit tree by its leaves?', a: 'Key leaf features for fruit tree identification: Apple — oval, finely serrated, hairy underside, slightly rough. Pear — oval to rounded, finely serrated, smooth underside (smoother than apple). Cherry — oval, sharply serrated, pointed tip. Peach — long lance-shaped, finely serrated, 10-15cm. Plum — oval, finely serrated. Fig — large 3-5 lobed, rough surface, milky sap when torn. Citrus — oval, glossy, evergreen, winged petiole.' },
  { q: 'How do I identify a fruit tree in winter without leaves?', a: 'In winter, identify fruit trees by bark. Cherry has distinctive reddish-brown bark with horizontal lenticels (small oval dots/lines) — unmistakable. Apple has gray-brown scaly bark. Peach has smooth grayish bark. Citrus trees are evergreen and keep leaves year-round. Look for persistent fruit on branches or fallen fruit on the ground.' },
  { q: 'What is the difference between apple and pear tree leaves?', a: 'Apple leaves are slightly rounder, often have a hairy or slightly woolly underside, and are slightly rougher on top. Pear leaves are oval to egg-shaped, have a smoother and glossier surface on both sides, and a more tapered leaf tip. Apple flowers are pink-white, pear flowers are pure white. Apple bark tends to be more deeply scaly than pear bark.' },
  { q: 'How do I identify a wild fruit tree?', a: 'Wild fruit trees are identified the same way as cultivated ones — by leaf shape, bark, flowers, and fruit — but wild species tend to have smaller fruit, more thorny branches (especially wild plum and crabapple), and grow in hedgerows, forest edges, and disturbed ground rather than orchards. Wild crabapple has fruit under 5cm. Wild cherry has small dark fruit. Wild plum often has thorny branches. Upload a photo to our AI tool for instant wild fruit tree identification.' },
  { q: 'Can you identify a fruit tree from a photo of the fruit?', a: 'Yes — fruit photos are often the easiest way to identify a fruit tree. Upload a clear photo of the fruit showing its overall shape, color, and skin texture. The AI analyzes fruit shape (round, pear-shaped, oval), size, skin texture (smooth, fuzzy, waxy), color, and any distinctive features (depression at ends of apple, pit visible in plum, segments visible in citrus).' },
  { q: 'How do I identify a peach tree?', a: 'Peach trees are identified by: long lance-shaped leaves (10-15cm) with finely serrated margins — much longer and narrower than apple or cherry leaves, smooth gray bark with a slight reddish tinge, pink 5-petal flowers appearing before leaves in early spring, and the distinctive fuzzy-skinned fruit with a central stone. The long narrow leaf shape is the most reliable vegetative identification feature.' },
];

export default function FruitTreeIdentifier() {
  return (
    <Layout
      meta={{
        title: 'Fruit Tree Identifier — Free AI Fruit Tree Identification Online | Tree Identifier',
        description: 'Identify any fruit tree instantly with our free AI tool. Upload a photo of fruit tree leaves, bark, flowers, or fruit. Covers apple, pear, cherry, plum, peach, citrus, fig, mango & 100+ more species.',
        canonical: 'https://treeidentifier.online/fruit-tree-identifier',
        schema,
      }}
      breadcrumbs={[{ label: 'Fruit Tree Identifier' }]}
    >
      {/* HERO */}
      <section style={{
        position: 'relative',
        paddingTop: '70px',
        minHeight: '75vh',
        display: 'flex',
        alignItems: 'center',
        background: `linear-gradient(135deg, rgba(5,5,5,0.82) 0%, rgba(13,40,24,0.72) 100%), url('/fruittree.jpg') center/cover no-repeat`,
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '4rem 2rem', width: '100%' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
            <div>
              <span className="green-tag">🍎 Fruit Tree AI</span>
              <h1 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', color: 'var(--white)', lineHeight: 1.1, margin: '1rem 0 1.2rem' }}>
                Fruit Tree Identifier<br />
                <span style={{ color: 'var(--bright-green)' }}>Powered by AI</span>
              </h1>
              <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '2rem' }}>
                Instantly identify any fruit tree species worldwide. Upload a photo of leaves, bark, flowers, or fruit and our AI delivers accurate species identification in seconds — completely free, no signup required.
              </p>
              <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
                {[['100+', 'Fruit Species'], ['97%', 'Accuracy'], ['3s', 'Results'], ['Free', 'Always']].map(([n, l]) => (
                  <div key={l}>
                    <div style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--bright-green)', fontFamily: 'Playfair Display, serif', lineHeight: 1 }}>{n}</div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--gray-mid)', marginTop: '0.2rem' }}>{l}</div>
                  </div>
                ))}
              </div>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link href="/identify-tree-by-leaf" className="btn-outline">🍃 Try Leaf Identifier</Link>
                <Link href="/tree-identifier" className="btn-outline">🌳 General Tree ID</Link>
              </div>
            </div>

            <div style={{ background: 'var(--card-bg)', border: '1px solid var(--bright-green)', borderRadius: '20px', padding: '2.5rem' }}>
              <h2 style={{ fontFamily: 'Inter, sans-serif', fontSize: '1.1rem', fontWeight: 700, color: 'var(--white)', marginBottom: '1.5rem' }}>🍎 Upload Fruit Tree Photo</h2>
              <UploadTool mode="tree" />
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="section" style={{ background: 'var(--deep-black)' }}>
        <div className="section-inner">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="section-label">AI Capabilities</span>
            <h2 className="section-title">What Our Fruit Tree AI Analyzes</h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>Our AI examines leaves, bark, flowers, and fruit to deliver precise species identification in any season.</p>
          </div>
          <div className="grid-3">
            {features.map((f, i) => (
              <div className="card" key={i}>
                <div className="feature-icon-box">{f.icon}</div>
                <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem', fontWeight: 700, color: 'var(--white)', marginBottom: '0.6rem' }}>{f.title}</h3>
                <p style={{ color: 'var(--gray-mid)', fontSize: '0.88rem', lineHeight: 1.6 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEASONAL ID */}
      <section className="section">
        <div className="section-inner">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="section-label">Year-Round Identification</span>
            <h2 className="section-title">Identify Fruit Trees in Any Season</h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>Different features are available in different seasons — here's what to look for each time of year.</p>
          </div>
          <div className="grid-4" style={{ gap: '1rem' }}>
            {identificationSeasons.map((s, i) => (
              <div className="card" key={i}>
                <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem', fontWeight: 700, color: 'var(--bright-green)', marginBottom: '0.8rem' }}>{s.season}</h3>
                <p style={{ color: 'rgba(255,255,255,0.72)', fontSize: '0.85rem', lineHeight: 1.7 }}>{s.tip}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SPECIES TABLE */}
      <section className="section" style={{ background: 'var(--deep-black)' }}>
        <div className="section-inner">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="section-label">Species Database</span>
            <h2 className="section-title">Fruit Tree Species We Identify</h2>
          </div>
          <div className="grid-4">
            {fruitSpecies.map((s, i) => (
              <div className="card" key={i}>
                <div style={{ fontSize: '2rem', marginBottom: '0.8rem' }}>{s.icon}</div>
                <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.95rem', fontWeight: 700, color: 'var(--white)', marginBottom: '0.3rem' }}>{s.name}</h3>
                <p style={{ color: 'var(--bright-green)', fontSize: '0.78rem', fontStyle: 'italic', marginBottom: '0.4rem' }}>{s.sci}</p>
                <p style={{ color: 'var(--gray-mid)', fontSize: '0.8rem', marginBottom: '0.3rem' }}>📍 {s.region}</p>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.78rem' }}>{s.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO CONTENT */}
      <section className="section">
        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 2rem' }}>
          <article className="prose-content" style={{ maxWidth: '100%' }}>
            <span className="green-tag">Complete Fruit Tree Guide</span>
            <h2>The Complete Guide to Fruit Tree Identification</h2>
            <p>Fruit trees are among the most useful and culturally significant trees on Earth — they have fed humanity for thousands of years and continue to be planted in gardens, orchards, and public spaces worldwide. Identifying fruit trees correctly matters whether you are a gardener planning an orchard, a forager seeking wild edibles, a property buyer assessing existing trees, or simply someone curious about the fruiting tree in a neighbor's yard. Our <strong>free AI Fruit Tree Identifier</strong> makes fruit tree identification instant and accessible from a single photograph.</p>

            {/* IMAGE 1 */}
            <div style={{ margin: '2rem 0', borderRadius: '16px', overflow: 'hidden', border: '1px solid var(--card-border)' }}>
              <img
                src="https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=900&q=80"
                alt="Apple tree with red apples for fruit tree identification"
                style={{ width: '100%', height: '300px', objectFit: 'cover' }}
              />
              <div style={{ background: 'var(--card-bg)', padding: '0.8rem 1.2rem' }}>
                <p style={{ color: 'var(--gray-mid)', fontSize: '0.82rem', margin: 0 }}>🍎 Apple trees are identified by round fruit with depressions at both ends, scaly gray-brown bark, and oval leaves with finely serrated margins and a slightly hairy underside.</p>
              </div>
            </div>

            <h2>How to Identify Fruit Trees — The Key Features</h2>
            <p>Fruit tree identification is most straightforward when the tree is in fruit — the actual fruit provides definitive identification in most cases. However, fruit is only available for a limited time each year, so knowing the vegetative and bark features allows year-round identification. The most reliable fruit tree identification approach uses four features observed in combination: leaf shape and margin, bark texture and color, flower characteristics in spring, and fruit shape, color, and size in season.</p>

            <h3>Identifying Apple Trees</h3>
            <p>Apple trees (<em>Malus domestica</em> and related species) are the most widely grown fruit trees worldwide and are found in gardens, orchards, and wild hedgerows across the temperate world. The leaves are oval with finely serrated margins and a pointed tip. The upper surface is slightly rough, while the underside is often woolly or hairy — this hairy underside is the most reliable leaf feature distinguishing apples from pears. Apple bark is gray-brown and scaly, becoming more deeply scaly with age. In spring, apple flowers are pink in bud opening to white or pale pink with 5 petals, appearing after leaves begin to emerge.</p>
            <p>The fruit is the most reliable identification feature — round to slightly irregular in shape with a characteristic depression at both the stem end and the calyx end (where the flower was). Wild crabapples produce fruit under 5cm while cultivated apple fruit is larger. Over 7,500 cultivars of apple exist, with fruit color ranging from yellow and green to red, often with stripes. For detailed apple tree identification, use our <Link href="/tree-identifier">AI Tree Identifier</Link> with a leaf or fruit photo.</p>

            <h3>Identifying Cherry Trees</h3>
            <p>Cherry trees (<em>Prunus avium</em> for sweet cherry, <em>Prunus cerasus</em> for sour cherry) are among the easiest fruit trees to identify year-round due to their distinctive bark. Cherry bark is smooth and reddish-brown with <strong>horizontal lenticels</strong> — small oval breathing pores arranged in horizontal lines across the bark. This horizontal-striped pattern is unique to the cherry family and immediately distinguishes cherries from all other common fruit trees.</p>
            <p>Cherry leaves are oval with a pointed tip and sharply serrated margins — the teeth are more pronounced than in apple or pear. Most cherry leaves also have small glands (nectaries) at the base of the leaf blade or top of the leaf stalk. Cherry flowers are white or pink with 5 petals, appearing in clusters in early spring, often before or with the leaves. The fruit is small (1-3cm), round, and ranges from yellow to red to black-purple. Ornamental cherry trees (Japanese cherries) have double flowers with many petals and are non-fruiting or produce very small fruit.</p>

            <h3>Identifying Pear Trees</h3>
            <p>Pear trees (<em>Pyrus communis</em> and related species) are closely related to apples and can be confused with them, but several features distinguish them reliably. Pear leaves are oval to egg-shaped with finely serrated margins, but the leaf surface is smoother and more glossy than apple on both sides — the lack of hairiness on the underside is the most reliable leaf distinction from apple. Pear leaves also often have a slightly more elongated and tapered tip than apple leaves.</p>
            <p>Pear bark develops scaly plates similar to apple but tends to be slightly darker gray-brown. Pear flowers are pure white with 5 petals, appearing slightly earlier than apple flowers in spring — usually before the leaves have fully expanded. The fruit is the definitive identifier: pear-shaped (narrow at the top, wider at the base) in most cultivars, though some Asian pear cultivars are round like apples. Ornamental callery pears (Bradford Pear) have similar leaves but produce small hard inedible fruit and have brilliant red-orange fall color.</p>

            <h3>Identifying Peach and Nectarine Trees</h3>
            <p>Peach trees (<em>Prunus persica</em>) are distinctive among temperate fruit trees for their long lance-shaped leaves — much longer and narrower than apple, pear, or cherry leaves, typically 10-15cm long and only 2-3cm wide. This elongated narrow leaf shape immediately distinguishes peaches from other common fruit trees. The leaf margin is finely serrated and the leaf surface is smooth and glossy.</p>
            <p>Peach bark is smooth gray with a slight reddish or orange tinge, developing shallow vertical cracks with age. Peach flowers are pink with 5 petals, appearing before leaves in early spring — one of the most beautiful spring-flowering fruit trees. The fruit is round to oval with a distinctive furry skin (peaches) or smooth skin (nectarines, which are a smooth-skinned genetic variant of peach). Nectarines and peaches are otherwise identical and identified the same way.</p>

            {/* IMAGE 2 */}
            <div style={{ margin: '2rem 0', borderRadius: '16px', overflow: 'hidden', border: '1px solid var(--card-border)' }}>
              <img
                src="https://images.unsplash.com/photo-1528825871115-3581a5387919?w=900&q=80"
                alt="Cherry tree blossoms in spring for fruit tree identification"
                style={{ width: '100%', height: '280px', objectFit: 'cover' }}
              />
              <div style={{ background: 'var(--card-bg)', padding: '0.8rem 1.2rem' }}>
                <p style={{ color: 'var(--gray-mid)', fontSize: '0.82rem', margin: 0 }}>🌸 Cherry trees produce white or pink 5-petal flowers in spring and are identified year-round by reddish-brown bark with distinctive horizontal lenticels — unique among fruit trees.</p>
              </div>
            </div>

            <h3>Identifying Citrus Trees</h3>
            <p>Citrus trees (oranges, lemons, limes, grapefruits, and mandarins) are subtropical evergreens that are immediately distinguished from temperate fruit trees by their year-round glossy dark green leaves, fragrant white flowers with waxy petals, and the characteristic citrus fruit. The single most distinctive vegetative feature of citrus trees is the <strong>winged petiole</strong> — a small leaf-like expansion on either side of the leaf stalk, visible when the leaf is held up to light. The size of the wing indicates the species: large wings indicate grapefruit or pomelo, medium wings indicate orange, small wings indicate mandarin, and very small or absent wings indicate lemon or lime.</p>
            <p>Citrus trees also have smooth greenish-gray bark, often with sharp thorns on some species (especially lemon and some lime varieties). The flowers are intensely fragrant — a single citrus tree in bloom can perfume an entire garden. In subtropical and tropical regions, citrus trees may flower and fruit simultaneously throughout the year.</p>

            <h3>Identifying Fig Trees</h3>
            <p>Fig trees (<em>Ficus carica</em>) are among the most distinctive fruit trees and are easy to identify from their large, deeply lobed leaves. Fig leaves are large (10-30cm), rough on the upper surface, and divided into 3-5 rounded lobes — the overall shape resembles a hand with outstretched fingers. The leaves produce a milky white latex when broken or torn from the tree — this milky sap is present in all fig species and is a reliable identification feature.</p>
            <p>Fig bark is smooth and gray, often developing an interesting gnarled form with age. The fruit is the unmistakable pear-shaped fig, green turning brown or purple when ripe, with a distinctive eye-like opening (ostiole) at the base. Fig trees are deciduous in temperate climates and evergreen in subtropical and tropical regions.</p>

            <h3>Using Our Fruit Tree Identifier for Best Results</h3>
            <p>Our <strong>AI Fruit Tree Identifier</strong> achieves highest accuracy from photos of the actual fruit — upload a clear fruit photo showing shape, color, and any distinctive features (furry skin for peach, segments visible in citrus, depression at both ends for apple). When fruit is not available, leaf photos taken from directly above on a light background give excellent results. For winter identification, photograph the bark at close range in natural side lighting to reveal texture clearly.</p>
            <p>The AI can identify fruit trees from photos taken in any season and works with both cultivated orchard trees and wild fruit trees. For leaf-specific identification, use our dedicated <Link href="/identify-tree-by-leaf">Leaf Identifier</Link>. For general tree identification including fruit trees and ornamental species, our <Link href="/tree-identifier">AI Tree Identifier</Link> covers over 50,000 species. Related tools: <Link href="/oak-tree-identifier">Oak Tree Identifier</Link>, <Link href="/maple-tree-identifier">Maple Tree Identifier</Link>, <Link href="/elm-tree-identifier">Elm Tree Identifier</Link>, <Link href="/birch-tree-identifier">Birch Tree Identifier</Link>.</p>
            <p>For more tree identification guides, visit our <Link href="/blog">Tree Identification Blog</Link> including our guides on <Link href="/blog/how-to-identify-trees">how to identify trees</Link>, <Link href="/blog/identify-tree-by-leaves">identifying trees by leaves</Link>, <Link href="/blog/tree-identification-by-bark">tree identification by bark</Link>, and our <Link href="/blog/common-tree-species">25 most common tree species guide</Link>.</p>
          </article>
        </div>
      </section>

      {/* FAQ */}
      <section className="section" style={{ background: 'var(--deep-black)' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="section-label">FAQs</span>
            <h2 className="section-title">Fruit Tree Identification FAQs</h2>
          </div>
          {faqs.map((faq, i) => (
            <div className="faq-item" key={i}>
              <h3>{faq.q}</h3>
              <p>{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '4rem 2rem', background: 'linear-gradient(135deg, var(--dark-green), var(--forest-green))', borderTop: '1px solid var(--card-border)', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', color: 'var(--white)', marginBottom: '1rem' }}>Identify Any Fruit Tree Instantly</h2>
        <p style={{ color: 'var(--pale-green)', marginBottom: '2rem' }}>Upload a photo of leaf, bark, flower, or fruit — free, instant, no signup needed.</p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/oak-tree-identifier" className="btn-outline" style={{ borderColor: 'var(--pale-green)', color: 'var(--pale-green)' }}>🌰 Oak Identifier</Link>
          <Link href="/maple-tree-identifier" className="btn-outline" style={{ borderColor: 'var(--pale-green)', color: 'var(--pale-green)' }}>🍁 Maple Identifier</Link>
          <Link href="/elm-tree-identifier" className="btn-outline" style={{ borderColor: 'var(--pale-green)', color: 'var(--pale-green)' }}>🌳 Elm Identifier</Link>
          <Link href="/birch-tree-identifier" className="btn-outline" style={{ borderColor: 'var(--pale-green)', color: 'var(--pale-green)' }}>🪵 Birch Identifier</Link>
          <Link href="/identify-tree-by-leaf" className="btn-outline" style={{ borderColor: 'var(--pale-green)', color: 'var(--pale-green)' }}>🍃 Leaf Identifier</Link>
        </div>
      </section>
    </Layout>
  );
}
