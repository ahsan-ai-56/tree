import Layout from '../../components/Layout';
import Link from 'next/link';

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Trees With Heart Shaped Leaves — Complete Identification Guide",
    "description": "Discover trees with heart shaped leaves including large trees, small trees, and varieties with serrated edges. Complete visual guide with identification tips for all heart-leaved tree species.",
    "image": "https://images.unsplash.com/photo-1508193638397-1c4234db14d8?w=1200&q=80",
    "datePublished": "2026-07-25",
    "dateModified": "2026-07-25",
    "author": { "@type": "Organization", "name": "Tree Identifier" },
    "publisher": { "@type": "Organization", "name": "Tree Identifier", "url": "https://treeidentifier.online/" },
    "mainEntityOfPage": "https://treeidentifier.online/blog/trees-with-heart-shaped-leaves",
    "wordCount": "2500",
    "keywords": "trees with heart shaped leaves, what tree has heart shaped leaves, large tree with heart shaped leaves, heart shaped serrated leaves, heart shaped leaves tree identification"
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What tree has heart shaped leaves?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Many trees have heart-shaped (cordate) leaves. The most common include Eastern Redbud (Cercis canadensis) — the classic heart-shaped leaf with a perfectly rounded base notch, Catalpa — very large heart-shaped leaves up to 30cm, Basswood/Linden — heart-shaped with a toothed margin, Paulownia — enormous heart-shaped leaves on young growth, Katsura — small neat heart-shaped leaves that smell of caramel in autumn, and Lilac — medium heart-shaped leaves. Each species has distinctive additional features that help confirm identification."
        }
      },
      {
        "@type": "Question",
        "name": "What large tree has heart shaped leaves?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The largest trees with heart-shaped leaves include: Catalpa (Catalpa speciosa / bignonioides) with leaves up to 30cm — the largest heart-shaped leaves of any common North American tree, Paulownia (Paulownia tomentosa) with leaves up to 60cm on young growth — the largest leaves of any temperate tree, Basswood/American Linden (Tilia americana) with leaves 10-20cm, and Northern Catalpa which can reach 30 meters tall. In tropical regions, Teak and some fig species produce very large heart-shaped leaves."
        }
      },
      {
        "@type": "Question",
        "name": "What tree has heart shaped serrated leaves?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Trees with heart-shaped serrated (toothed) leaves include: Basswood/Linden — heart-shaped leaves with coarsely toothed margins and an asymmetric base, Mulberry (Morus species) — heart-shaped to lobed leaves with serrated margins, Hackberry (Celtis occidentalis) — heart-shaped leaves with serrated margins and a distinctive asymmetric base (similar to elm), Birch (some species) — triangular to heart-shaped leaves with doubly serrated margins, and Eastern Redbud — heart-shaped leaves with a smooth margin (not serrated). If your heart-shaped leaf has teeth along the edge, Basswood or Hackberry are the most likely candidates."
        }
      },
      {
        "@type": "Question",
        "name": "How do I identify a Redbud tree?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Eastern Redbud (Cercis canadensis) is identified by: perfectly heart-shaped leaves with a smooth (entire) margin — no teeth — and a distinctive notch at the base where the stalk attaches, reddish-purple flowers appearing directly on the branches and trunk in early spring before leaves (cauliflory), flat brown seed pods 5-10cm long persisting through winter, and smooth gray bark on young trees becoming scaly with age. The spring flowers appearing before leaves on bare branches are spectacular and unmistakable — no other common North American tree flowers this way."
        }
      },
      {
        "@type": "Question",
        "name": "How do I identify a Catalpa tree?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Catalpa trees are identified by: very large heart-shaped leaves (15-30cm) arranged in whorls of 3 on the twig — unusual since most trees have alternate or opposite leaves, white flowers with purple and yellow spots in large upright clusters (panicles) in early summer, and the extremely distinctive long thin seed pods (30-50cm) that look like green beans or cigars and persist on the tree through winter. The large whorled leaves and cigar-seed-pods make Catalpa unmistakable. Leaves smell unpleasant when crushed."
        }
      },
      {
        "@type": "Question",
        "name": "What small tree has heart shaped leaves?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Small trees with heart-shaped leaves include: Eastern Redbud (Cercis canadensis) — small tree to 10m with perfectly heart-shaped smooth leaves and spectacular spring flowers, Katsura (Cercidiphyllum japonicum) — medium tree with small neat heart-shaped leaves that turn yellow and smell of burnt caramel in autumn, Lilac (Syringa vulgaris) — large shrub to small tree with heart-shaped smooth leaves, and Japanese Snowbell (Styrax japonicus) — small ornamental tree with oval to heart-shaped leaves. Redbud is the most common small tree with heart-shaped leaves in North American gardens."
        }
      },
      {
        "@type": "Question",
        "name": "What is a heart-shaped leaf called in botany?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "In botanical terminology, a heart-shaped leaf is called cordate (from Latin cor, meaning heart). A cordate leaf has a rounded outline with a notch (sinus) at the base where the leaf stalk (petiole) attaches, and the widest point is near the base. When the heart shape appears at the leaf tip rather than the base, it is called obcordate. An oblique or asymmetric heart-shaped base (one side higher than the other) is called an oblique or inequilateral base, as seen in basswood and hackberry."
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
      { "@type": "ListItem", "position": 3, "name": "Trees With Heart Shaped Leaves", "item": "https://treeidentifier.online/blog/trees-with-heart-shaped-leaves" }
    ]
  }
];

const heartLeafTrees = [
  {
    num: 1,
    name: 'Eastern Redbud',
    sci: 'Cercis canadensis',
    icon: '💗',
    region: 'Eastern North America',
    leafSize: '5–12 cm',
    leafMargin: 'Smooth (entire) — no teeth',
    leafBase: 'Deep heart-shaped notch',
    arrangement: 'Alternate',
    flower: 'Reddish-purple, appears before leaves in early spring directly on branches',
    bark: 'Smooth gray when young, developing scaly plates with age',
    note: 'THE classic heart-shaped leaf tree — perfectly heart-shaped smooth leaves + spectacular spring flowers on bare branches',
    difficulty: 'Very Easy',
    serrated: false,
  },
  {
    num: 2,
    name: 'Northern Catalpa',
    sci: 'Catalpa speciosa',
    icon: '🌿',
    region: 'Central & Eastern North America',
    leafSize: '15–30 cm',
    leafMargin: 'Smooth (entire) — no teeth',
    leafBase: 'Heart-shaped',
    arrangement: 'Whorled (3 per node) — very unusual',
    flower: 'White with purple/yellow spots, large upright clusters in early summer',
    bark: 'Gray-brown, scaly plates on mature trees',
    note: 'Largest heart-shaped leaves of any common North American tree + distinctive cigar-like seed pods 30-50cm long',
    difficulty: 'Very Easy',
    serrated: false,
  },
  {
    num: 3,
    name: 'American Basswood / Linden',
    sci: 'Tilia americana',
    icon: '🌳',
    region: 'Eastern North America',
    leafSize: '10–20 cm',
    leafMargin: 'Coarsely serrated (toothed)',
    leafBase: 'Asymmetric heart-shaped base',
    arrangement: 'Alternate',
    flower: 'Small fragrant yellow-white flowers in summer on distinctive strap-like bract',
    bark: 'Gray, develops flat-topped ridges and furrows with age',
    note: 'Heart-shaped WITH teeth — asymmetric base distinguishes from Redbud. Flowers on distinctive bract (strap-like leaf) are unique',
    difficulty: 'Easy',
    serrated: true,
  },
  {
    num: 4,
    name: 'Paulownia / Empress Tree',
    sci: 'Paulownia tomentosa',
    icon: '👑',
    region: 'Asia (widely naturalized)',
    leafSize: '20–40 cm (up to 60cm on young trees)',
    leafMargin: 'Smooth or slightly wavy — no teeth',
    leafBase: 'Heart-shaped',
    arrangement: 'Opposite',
    flower: 'Large lavender-purple trumpet flowers in upright clusters before leaves in spring',
    bark: 'Gray-brown, smooth with shallow furrows',
    note: 'Largest leaves of any temperate tree on young growth — enormous heart-shaped leaves make this unmistakable. Spectacular purple flowers.',
    difficulty: 'Very Easy',
    serrated: false,
  },
  {
    num: 5,
    name: 'Katsura Tree',
    sci: 'Cercidiphyllum japonicum',
    icon: '🍬',
    region: 'Japan & China (widely planted)',
    leafSize: '3–8 cm',
    leafMargin: 'Finely scalloped (crenate) — rounded teeth',
    leafBase: 'Heart-shaped',
    arrangement: 'Opposite',
    flower: 'Tiny, inconspicuous, appears before leaves',
    bark: 'Gray-brown, shaggy with age',
    note: 'Small neat heart-shaped leaves smell of burnt caramel or cotton candy when falling in autumn — the most distinctive autumn scent of any tree',
    difficulty: 'Easy',
    serrated: false,
  },
  {
    num: 6,
    name: 'Hackberry',
    sci: 'Celtis occidentalis',
    icon: '🌲',
    region: 'Eastern North America',
    leafSize: '6–12 cm',
    leafMargin: 'Serrated (toothed)',
    leafBase: 'Asymmetric heart-shaped base (one side higher)',
    arrangement: 'Alternate',
    flower: 'Tiny, inconspicuous',
    bark: 'Very distinctive — gray with irregular corky wart-like ridges and bumps',
    note: 'Heart-shaped serrated leaves with asymmetric base + extremely distinctive warty corky bark — bark alone identifies this tree instantly',
    difficulty: 'Easy',
    serrated: true,
  },
  {
    num: 7,
    name: 'Mulberry',
    sci: 'Morus alba / rubra',
    icon: '🫐',
    region: 'Worldwide (temperate)',
    leafSize: '5–18 cm',
    leafMargin: 'Serrated (toothed)',
    leafBase: 'Heart-shaped (variable)',
    arrangement: 'Alternate',
    flower: 'Catkins, inconspicuous',
    bark: 'Orange-brown, furrowed',
    note: 'Variable leaves on same tree — some heart-shaped, some deeply lobed, some mitten-shaped. Milky sap when stem broken. Dark berries like blackberries.',
    difficulty: 'Medium',
    serrated: true,
  },
  {
    num: 8,
    name: 'Lilac',
    sci: 'Syringa vulgaris',
    icon: '💜',
    region: 'Europe (widely planted worldwide)',
    leafSize: '4–10 cm',
    leafMargin: 'Smooth (entire) — no teeth',
    leafBase: 'Heart-shaped to rounded',
    arrangement: 'Opposite',
    flower: 'Fragrant purple or white flowers in dense upright clusters (panicles) in late spring',
    bark: 'Gray-brown, smooth to slightly furrowed',
    note: 'Shrub or small tree — heart-shaped smooth opposite leaves + unmistakable fragrant spring flowers. Most common garden shrub with heart-shaped leaves.',
    difficulty: 'Very Easy',
    serrated: false,
  },
  {
    num: 9,
    name: 'Judas Tree',
    sci: 'Cercis siliquastrum',
    icon: '🌸',
    region: 'Southern Europe & Western Asia',
    leafSize: '6–12 cm',
    leafMargin: 'Smooth (entire) — no teeth',
    leafBase: 'Heart-shaped — similar to Redbud',
    arrangement: 'Alternate',
    flower: 'Bright pink-purple flowers directly on branches and trunk in spring before leaves',
    bark: 'Dark gray-brown, developing deep furrows and cracks with age',
    note: 'European equivalent of Eastern Redbud — same heart-shaped smooth leaves and trunk-flowering habit. Common in Mediterranean gardens.',
    difficulty: 'Easy',
    serrated: false,
  },
  {
    num: 10,
    name: 'Cottonwood / Poplar',
    sci: 'Populus deltoides / nigra',
    icon: '🌬️',
    region: 'North America & Europe',
    leafSize: '7–15 cm',
    leafMargin: 'Coarsely toothed',
    leafBase: 'Triangular to heart-shaped',
    arrangement: 'Alternate',
    flower: 'Catkins before leaves in early spring',
    bark: 'Young trees smooth green-gray, mature trees deeply furrowed gray-brown',
    note: 'Flattened leaf stalk causes leaves to tremble in any breeze — hence "quaking" or "trembling" in related Aspen. Cotton-like seeds float in early summer.',
    difficulty: 'Easy',
    serrated: true,
  },
  {
    num: 11,
    name: 'Teak',
    sci: 'Tectona grandis',
    icon: '🏝️',
    region: 'South & Southeast Asia',
    leafSize: '20–60 cm',
    leafMargin: 'Smooth or slightly wavy',
    leafBase: 'Heart-shaped to oval',
    arrangement: 'Opposite',
    flower: 'Small white flowers in large branching clusters',
    bark: 'Gray-brown, peeling in strips',
    note: 'Tropical timber tree with enormous leaves — most valuable tropical hardwood. Grown in plantations worldwide for furniture and outdoor use.',
    difficulty: 'Easy (in tropical regions)',
    serrated: false,
  },
  {
    num: 12,
    name: 'Cercis / Chinese Redbud',
    sci: 'Cercis chinensis',
    icon: '🌺',
    region: 'China (widely planted)',
    leafSize: '6–14 cm',
    leafMargin: 'Smooth (entire)',
    leafBase: 'Heart-shaped — deeper notch than Eastern Redbud',
    arrangement: 'Alternate',
    flower: 'Vivid pink-purple flowers in dense clusters on branches in spring',
    bark: 'Gray, smooth to scaly',
    note: 'Chinese version of Redbud — slightly glossier leaves with a deeper base notch. Popular ornamental in Asian and Western gardens.',
    difficulty: 'Easy',
    serrated: false,
  },
];

export default function TreesWithHeartShapedLeaves() {
  return (
    <Layout
      meta={{
        title: 'Trees With Heart Shaped Leaves — Complete Identification Guide | Tree Identifier Blog',
        description: 'Discover which trees have heart-shaped leaves — from large Catalpa and Paulownia to small Redbud and Katsura. Includes heart-shaped serrated leaves, smooth-edged varieties, and expert identification tips.',
        canonical: 'https://treeidentifier.online/blog/trees-with-heart-shaped-leaves',
        schema,
      }}
      breadcrumbs={[{ label: 'Blog', href: '/blog' }, { label: 'Trees With Heart Shaped Leaves' }]}
    >
      {/* HERO */}
      <section style={{
        background: `linear-gradient(180deg, rgba(5,5,5,0.72) 0%, var(--black) 100%), url('https://images.unsplash.com/photo-1508193638397-1c4234db14d8?w=1600&q=80') center/cover no-repeat`,
        padding: '120px 2rem 5rem',
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
            <span style={{ background: 'rgba(64,192,116,0.1)', color: 'var(--bright-green)', border: '1px solid rgba(64,192,116,0.2)', borderRadius: '50px', padding: '4px 14px', fontSize: '0.78rem', fontWeight: 600 }}>Leaf Identification</span>
            <span style={{ color: 'var(--gray-mid)', fontSize: '0.85rem' }}>📅 July 25, 2026</span>
            <span style={{ color: 'var(--gray-mid)', fontSize: '0.85rem' }}>⏱ 15 min read</span>
          </div>
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', color: 'var(--white)', lineHeight: 1.15, marginBottom: '1.5rem' }}>
            Trees With Heart Shaped Leaves —<br />Complete Identification Guide
          </h1>
          <p style={{ fontSize: '1.15rem', color: 'rgba(255,255,255,0.75)', lineHeight: 1.8 }}>
            Found a leaf shaped like a heart and wondering what tree it came from? This complete guide covers every common tree with heart-shaped leaves — from the classic Redbud to giant Catalpa and Paulownia — with expert identification tips for each species.
          </p>
          <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link href="/identify-tree-by-leaf" className="btn-primary" style={{ fontSize: '0.95rem', padding: '12px 28px' }}>
              🍃 Identify Your Leaf Now →
            </Link>
            <Link href="/tree-identifier" className="btn-outline" style={{ fontSize: '0.95rem', padding: '12px 28px' }}>
              🌳 Tree Identifier
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 2rem', display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '4rem', alignItems: 'start' }}>
          <article className="prose-content" style={{ maxWidth: '100%' }}>

            <h2>What Does a Heart Shaped Tree Leaf Look Like?</h2>
            <p>In botanical terms, a heart-shaped leaf is called <strong>cordate</strong> (from the Latin <em>cor</em>, meaning heart). A cordate leaf has a broad rounded outline with a characteristic notch — called a sinus — at the base where the leaf stalk (petiole) attaches to the blade. This creates the two rounded lobes at the base of the leaf that form the top of the heart shape, while the leaf narrows to a pointed tip at the other end.</p>
            <p>Heart-shaped leaves vary enormously in size across different tree species — from the tiny 3cm leaves of Katsura to the enormous 60cm leaves of young Paulownia trees. They also vary in margin type (smooth edges vs. toothed edges), surface texture (glossy, rough, or hairy), and base symmetry (perfectly symmetric in Redbud, or asymmetric in Basswood and Hackberry). These additional features are what distinguish one heart-leaved tree from another. Upload a photo to our <Link href="/identify-tree-by-leaf">AI Leaf Identifier</Link> for instant identification.</p>

            {/* IMAGE 1 */}
            <div style={{ margin: '2rem 0', borderRadius: '16px', overflow: 'hidden', border: '1px solid var(--card-border)' }}>
              <img
                src="https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?w=900&q=80"
                alt="Heart shaped tree leaves showing cordate leaf shape for identification"
                style={{ width: '100%', height: '300px', objectFit: 'cover' }}
              />
              <div style={{ background: 'var(--card-bg)', padding: '0.8rem 1.2rem' }}>
                <p style={{ color: 'var(--gray-mid)', fontSize: '0.82rem', margin: 0 }}>💗 Heart-shaped (cordate) leaves are identified by their rounded outline with a notch at the base where the leaf stalk attaches — the notch creates the two rounded lobes at the "top" of the heart shape.</p>
              </div>
            </div>

            <h2>Quick Identification Guide — Heart Shaped Leaf Trees</h2>
            <p>Before diving into full species profiles, use this quick guide to narrow down your identification. The two most important features to observe are leaf size and leaf margin (edge):</p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', margin: '1.5rem 0' }}>
              {[
                { label: 'Large + Smooth edges', trees: 'Catalpa, Paulownia, Redbud, Judas Tree', color: 'rgba(64,192,116,0.12)', border: 'rgba(64,192,116,0.3)' },
                { label: 'Large + Toothed edges', trees: 'Basswood/Linden, Hackberry, Cottonwood, Mulberry', color: 'rgba(248,113,113,0.08)', border: 'rgba(248,113,113,0.25)' },
                { label: 'Small + Smooth edges', trees: 'Redbud, Katsura, Lilac, Chinese Redbud', color: 'rgba(251,191,36,0.08)', border: 'rgba(251,191,36,0.25)' },
                { label: 'Small + Toothed edges', trees: 'Hackberry (small trees), some Birch, Mulberry', color: 'rgba(167,139,250,0.08)', border: 'rgba(167,139,250,0.25)' },
                { label: 'Opposite arrangement', trees: 'Paulownia, Lilac, Katsura, Catalpa (whorled)', color: 'rgba(96,165,250,0.08)', border: 'rgba(96,165,250,0.25)' },
                { label: 'Alternate arrangement', trees: 'Redbud, Basswood, Hackberry, Mulberry, Cottonwood', color: 'rgba(52,211,153,0.08)', border: 'rgba(52,211,153,0.25)' },
              ].map((item, i) => (
                <div key={i} style={{ background: item.color, border: `1px solid ${item.border}`, borderRadius: '10px', padding: '1rem' }}>
                  <div style={{ color: 'var(--white)', fontWeight: 700, fontSize: '0.88rem', marginBottom: '0.4rem' }}>{item.label}</div>
                  <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.82rem' }}>{item.trees}</div>
                </div>
              ))}
            </div>

            <h2>Trees With Heart Shaped Leaves — Smooth Margins (No Teeth)</h2>
            <p>Trees with smooth-edged heart-shaped leaves include some of the most beautiful and distinctive ornamental trees. If your heart-shaped leaf has completely smooth edges with no teeth or serrations, these are the most likely candidates.</p>

            {heartLeafTrees.filter(t => !t.serrated).map((tree) => (
              <div key={tree.num} style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)', borderRadius: '16px', padding: '1.8rem', marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ width: '44px', height: '44px', minWidth: '44px', background: 'linear-gradient(135deg, var(--forest-green), var(--mid-green))', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.3rem' }}>{tree.icon}</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', flexWrap: 'wrap', marginBottom: '0.2rem' }}>
                      <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '1.05rem', fontWeight: 700, color: 'var(--white)', margin: 0 }}>{tree.name}</h3>
                      <span style={{ background: 'rgba(64,192,116,0.12)', color: 'var(--bright-green)', border: '1px solid rgba(64,192,116,0.25)', borderRadius: '20px', padding: '2px 10px', fontSize: '0.72rem', fontWeight: 600 }}>Smooth Margin</span>
                      <span style={{ background: 'rgba(96,165,250,0.1)', color: '#60a5fa', border: '1px solid rgba(96,165,250,0.2)', borderRadius: '20px', padding: '2px 10px', fontSize: '0.72rem', fontWeight: 600 }}>{tree.difficulty}</span>
                    </div>
                    <p style={{ color: 'var(--bright-green)', fontSize: '0.82rem', fontStyle: 'italic', marginBottom: '1rem' }}>{tree.sci} · {tree.region}</p>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.8rem', marginBottom: '0.8rem' }}>
                      <div><span style={{ color: 'var(--bright-green)', fontSize: '0.75rem', fontWeight: 600, display: 'block', marginBottom: '0.2rem' }}>LEAF SIZE</span><span style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.85rem' }}>{tree.leafSize}</span></div>
                      <div><span style={{ color: 'var(--bright-green)', fontSize: '0.75rem', fontWeight: 600, display: 'block', marginBottom: '0.2rem' }}>ARRANGEMENT</span><span style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.85rem' }}>{tree.arrangement}</span></div>
                      <div><span style={{ color: 'var(--bright-green)', fontSize: '0.75rem', fontWeight: 600, display: 'block', marginBottom: '0.2rem' }}>FLOWER</span><span style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.85rem' }}>{tree.flower}</span></div>
                      <div><span style={{ color: 'var(--bright-green)', fontSize: '0.75rem', fontWeight: 600, display: 'block', marginBottom: '0.2rem' }}>BARK</span><span style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.85rem' }}>{tree.bark}</span></div>
                    </div>
                    <div style={{ background: 'rgba(64,192,116,0.05)', border: '1px solid rgba(64,192,116,0.15)', borderRadius: '8px', padding: '0.6rem 0.9rem', fontSize: '0.82rem', color: 'rgba(255,255,255,0.75)' }}>
                      💡 {tree.note}
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* IMAGE 2 */}
            <div style={{ margin: '2rem 0', borderRadius: '16px', overflow: 'hidden', border: '1px solid var(--card-border)' }}>
              <img
                src="https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?w=900&q=80"
                alt="Eastern Redbud tree with heart shaped leaves and pink spring flowers"
                style={{ width: '100%', height: '280px', objectFit: 'cover' }}
              />
              <div style={{ background: 'var(--card-bg)', padding: '0.8rem 1.2rem' }}>
                <p style={{ color: 'var(--gray-mid)', fontSize: '0.82rem', margin: 0 }}>💗 Eastern Redbud is the most distinctive heart-leaved tree — spectacular pink-purple flowers appear directly on branches before leaves in early spring, followed by perfectly heart-shaped smooth leaves.</p>
              </div>
            </div>

            <h2>Trees With Heart Shaped Serrated Leaves (Toothed Edges)</h2>
            <p>If your heart-shaped leaf has teeth or serrations along the edges, these species are the most likely candidates. Heart-shaped serrated leaves are common in several important North American trees and can be distinguished from each other by leaf size, base symmetry, and bark features.</p>

            {heartLeafTrees.filter(t => t.serrated).map((tree) => (
              <div key={tree.num} style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)', borderRadius: '16px', padding: '1.8rem', marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ width: '44px', height: '44px', minWidth: '44px', background: 'linear-gradient(135deg, var(--forest-green), var(--mid-green))', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.3rem' }}>{tree.icon}</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', flexWrap: 'wrap', marginBottom: '0.2rem' }}>
                      <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '1.05rem', fontWeight: 700, color: 'var(--white)', margin: 0 }}>{tree.name}</h3>
                      <span style={{ background: 'rgba(248,113,113,0.1)', color: '#f87171', border: '1px solid rgba(248,113,113,0.25)', borderRadius: '20px', padding: '2px 10px', fontSize: '0.72rem', fontWeight: 600 }}>Serrated Margin</span>
                      <span style={{ background: 'rgba(96,165,250,0.1)', color: '#60a5fa', border: '1px solid rgba(96,165,250,0.2)', borderRadius: '20px', padding: '2px 10px', fontSize: '0.72rem', fontWeight: 600 }}>{tree.difficulty}</span>
                    </div>
                    <p style={{ color: 'var(--bright-green)', fontSize: '0.82rem', fontStyle: 'italic', marginBottom: '1rem' }}>{tree.sci} · {tree.region}</p>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.8rem', marginBottom: '0.8rem' }}>
                      <div><span style={{ color: 'var(--bright-green)', fontSize: '0.75rem', fontWeight: 600, display: 'block', marginBottom: '0.2rem' }}>LEAF SIZE</span><span style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.85rem' }}>{tree.leafSize}</span></div>
                      <div><span style={{ color: 'var(--bright-green)', fontSize: '0.75rem', fontWeight: 600, display: 'block', marginBottom: '0.2rem' }}>LEAF BASE</span><span style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.85rem' }}>{tree.leafBase}</span></div>
                      <div><span style={{ color: 'var(--bright-green)', fontSize: '0.75rem', fontWeight: 600, display: 'block', marginBottom: '0.2rem' }}>ARRANGEMENT</span><span style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.85rem' }}>{tree.arrangement}</span></div>
                      <div><span style={{ color: 'var(--bright-green)', fontSize: '0.75rem', fontWeight: 600, display: 'block', marginBottom: '0.2rem' }}>BARK</span><span style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.85rem' }}>{tree.bark}</span></div>
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
                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=900&q=80"
                alt="Basswood linden tree with heart shaped toothed leaves"
                style={{ width: '100%', height: '280px', objectFit: 'cover' }}
              />
              <div style={{ background: 'var(--card-bg)', padding: '0.8rem 1.2rem' }}>
                <p style={{ color: 'var(--gray-mid)', fontSize: '0.82rem', margin: 0 }}>🌳 Basswood (American Linden) has heart-shaped leaves with coarsely toothed margins and a slightly asymmetric base — distinctive flowers on a unique strap-like bract are unmistakable in summer.</p>
              </div>
            </div>

            <h2>Large Trees With Heart Shaped Leaves</h2>
            <p>If you are looking at a large mature tree with heart-shaped leaves, the most likely candidates are Catalpa, Paulownia, Basswood, and Cottonwood. Each of these can reach significant size — Basswood and Catalpa can exceed 25 meters, Cottonwood can reach 35 meters, and Paulownia is one of the fastest-growing trees in the world reaching 15 meters in just a few years.</p>
            <p>Northern Catalpa (<em>Catalpa speciosa</em>) produces the largest heart-shaped leaves of any common North American tree, with leaves reaching 30cm — larger than your hand with fingers spread. The leaves of Catalpa are also arranged in whorls of three at each node — two or three leaves at the same point on the twig — which is an unusual arrangement that helps distinguish Catalpa from other large-leaved trees. The distinctive cigar-like seed pods (30-50cm long) that persist on the tree through winter are unmistakable and provide year-round identification.</p>
            <p>Paulownia (<em>Paulownia tomentosa</em>) produces even larger leaves — up to 60cm on young or coppiced trees, making it the largest-leaved temperate tree in the world. Mature Paulownia trees produce lavender-purple trumpet flowers in spectacular upright clusters before the leaves emerge in spring, one of the most beautiful of all flowering trees. Young Paulownia that has been cut back (coppiced) produces extraordinarily large leaves on vigorous new shoots — leaves this large from a temperate tree are unique to Paulownia.</p>

            <h2>Small Trees and Shrubs With Heart Shaped Leaves</h2>
            <p>Several smaller trees and shrubs produce distinctive heart-shaped leaves and are commonly found in gardens and natural areas. Eastern Redbud (<em>Cercis canadensis</em>) is the most beloved of these — a small tree typically reaching 6-10 meters with perfectly heart-shaped smooth leaves and spectacular reddish-purple flowers that appear directly on the branches and trunk before the leaves emerge in early spring. This flowering habit — called cauliflory — makes Redbud unmistakable in spring and one of the most ornamental small trees in North American gardens.</p>
            <p>Katsura (<em>Cercidiphyllum japonicum</em>) is a medium-sized tree with small (3-8cm) heart-shaped leaves that are among the most distinctive of any tree in autumn — as the leaves fall, they release a fragrance of burnt caramel, cotton candy, or brown sugar that perfumes the air around the tree. No other common tree has this distinctive autumn scent, making Katsura identifiable by smell alone in autumn. Katsura leaves are opposite on the twig (two leaves per node directly across from each other), which helps distinguish them from alternate-leaved heart-leaved trees like Redbud.</p>

            <h2>How to Identify a Tree With Heart Shaped Leaves — Step by Step</h2>
            <p>When you find a heart-shaped leaf and want to identify it, follow these steps in order for the fastest accurate identification:</p>
            <p><strong>Step 1 — Measure the leaf size.</strong> Large (over 15cm) = likely Catalpa, Paulownia, or Basswood. Medium (8-15cm) = likely Redbud, Hackberry, or Basswood. Small (under 8cm) = likely Katsura, Lilac, or Chinese Redbud.</p>
            <p><strong>Step 2 — Check the leaf margin (edge).</strong> Smooth with no teeth = Redbud, Catalpa, Paulownia, Katsura, or Lilac. Toothed or serrated = Basswood, Hackberry, Mulberry, or Cottonwood.</p>
            <p><strong>Step 3 — Check leaf arrangement on the twig.</strong> Two leaves directly across from each other (opposite) = Paulownia, Katsura, or Lilac. Three leaves at same point (whorled) = Catalpa. One leaf per node alternating sides (alternate) = Redbud, Basswood, Hackberry, Mulberry, Cottonwood.</p>
            <p><strong>Step 4 — Check the leaf base symmetry.</strong> Perfectly symmetric heart-shaped base = Redbud, Catalpa, Paulownia, Katsura. Asymmetric base (one side higher than the other) = Basswood or Hackberry.</p>
            <p><strong>Step 5 — Use our AI tool.</strong> Upload a clear photo of the leaf (top surface, full blade visible, natural lighting) to our <Link href="/identify-tree-by-leaf">AI Leaf Identifier</Link> for instant species confirmation.</p>

            {/* IMAGE 4 */}
            <div style={{ margin: '2rem 0', borderRadius: '16px', overflow: 'hidden', border: '1px solid var(--card-border)' }}>
              <img
                src="/heart-leaves.jpg"
                alt="Collection of heart shaped tree leaves from different species"
                style={{ width: '100%', height: '260px', objectFit: 'cover' }}
              />
              <div style={{ background: 'var(--card-bg)', padding: '0.8rem 1.2rem' }}>
                <p style={{ color: 'var(--gray-mid)', fontSize: '0.82rem', margin: 0 }}>🍃 Heart-shaped leaves vary enormously in size, texture, and margin type across species — observing these features in combination allows accurate identification of any heart-leaved tree.</p>
              </div>
            </div>

            <h2>Frequently Asked Questions — Trees With Heart Shaped Leaves</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', margin: '1.5rem 0' }}>
              {[
                { q: 'What tree has heart shaped leaves?', a: 'Many trees have heart-shaped leaves. The most common include Eastern Redbud (perfectly heart-shaped smooth leaves), Catalpa (very large heart-shaped leaves, up to 30cm), Basswood/Linden (heart-shaped with toothed margins), Paulownia (enormous heart-shaped leaves), and Katsura (small heart-shaped leaves that smell of caramel in autumn).' },
                { q: 'What large tree has heart shaped leaves?', a: 'Large trees with heart-shaped leaves include Catalpa (leaves up to 30cm, distinctive cigar seed pods), Paulownia (leaves up to 60cm on young trees — largest temperate tree leaves), Basswood (large tree to 25m with 10-20cm toothed heart-shaped leaves), and Cottonwood (large tree with triangular to heart-shaped toothed leaves).' },
                { q: 'What tree has heart shaped serrated leaves?', a: 'Trees with heart-shaped serrated (toothed) leaves include Basswood/Linden (coarsely toothed, asymmetric base), Hackberry (toothed, very asymmetric base, warty bark), Mulberry (toothed, variable leaf shape), and Cottonwood (coarsely toothed, flattened leaf stalk).' },
                { q: 'How do I identify a Redbud tree?', a: 'Eastern Redbud has perfectly heart-shaped smooth leaves with a smooth margin and a distinct notch at the base. In spring, spectacular reddish-purple flowers appear directly on branches before leaves emerge. Flat brown seed pods 5-10cm persist through winter. The spring flowering on bare branches is unmistakable.' },
                { q: 'How do I identify a Catalpa tree?', a: 'Catalpa has very large heart-shaped leaves (15-30cm) arranged in whorls of 3. White flowers with purple spots appear in summer. Distinctive long thin cigar-like seed pods (30-50cm) persist through winter. Leaves smell unpleasant when crushed.' },
                { q: 'What small tree has heart shaped leaves?', a: 'Small trees with heart-shaped leaves include Eastern Redbud (to 10m, smooth heart-shaped leaves, spring flowers on branches), Katsura (medium tree, small heart-shaped leaves that smell of caramel in autumn), and Lilac (shrub/small tree, smooth heart-shaped opposite leaves, fragrant spring flowers).' },
                { q: 'What is a heart-shaped leaf called in botany?', a: 'A heart-shaped leaf is called cordate in botanical terminology, from the Latin "cor" meaning heart. It describes a leaf with a rounded outline and a notch at the base where the leaf stalk attaches. An asymmetric heart-shaped base is called oblique or inequilateral.' },
              ].map((faq, i) => (
                <div key={i} style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)', borderRadius: '12px', padding: '1.4rem' }}>
                  <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.95rem', fontWeight: 700, color: 'var(--white)', marginBottom: '0.6rem' }}>{faq.q}</h3>
                  <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.88rem', lineHeight: 1.7, margin: 0 }}>{faq.a}</p>
                </div>
              ))}
            </div>

            <h2>Identify Your Heart Shaped Leaf Tree Instantly</h2>
            <p>Found a heart-shaped leaf and still not sure which tree it belongs to? Upload a clear photo to our <Link href="/identify-tree-by-leaf">free AI Leaf Identifier</Link> for instant species identification. The AI analyzes leaf shape, margin type, surface texture, base shape, and venation pattern to identify the species with high accuracy.</p>
            <p>For full tree identification from any photo, use our <Link href="/tree-identifier">AI Tree Identifier</Link>. Related identification guides: <Link href="/blog/identify-tree-by-leaves">How to Identify Trees by Leaves</Link>, <Link href="/blog/oak-tree-identification-guide">Oak Tree Identification Guide</Link>, <Link href="/blog/maple-tree-identification-guide">Maple Tree Identification Guide</Link>, <Link href="/blog/tree-identification-by-bark">Tree Identification by Bark</Link>, and <Link href="/blog/how-to-identify-trees-in-winter">Winter Tree Identification</Link>.</p>
            <p>Species-specific tools: <Link href="/oak-tree-identifier">Oak Tree Identifier</Link>, <Link href="/maple-tree-identifier">Maple Tree Identifier</Link>, <Link href="/elm-tree-identifier">Elm Tree Identifier</Link>, <Link href="/fruit-tree-identifier">Fruit Tree Identifier</Link>, <Link href="/birch-tree-identifier">Birch Tree Identifier</Link>.</p>
          </article>

          <aside style={{ position: 'sticky', top: '90px' }}>
            <div className="card" style={{ marginBottom: '1.5rem' }}>
              <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem', fontWeight: 700, color: 'var(--bright-green)', marginBottom: '1.2rem' }}>🍃 Identify Your Leaf</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                <Link href="/identify-tree-by-leaf" className="btn-primary" style={{ textAlign: 'center', justifyContent: 'center', fontSize: '0.88rem', padding: '10px 16px' }}>🍃 Leaf Identifier</Link>
                <Link href="/tree-identifier" className="btn-outline" style={{ textAlign: 'center', justifyContent: 'center', fontSize: '0.88rem', padding: '10px 16px' }}>🌳 Tree Identifier</Link>
              </div>
            </div>

            <div className="card" style={{ marginBottom: '1.5rem' }}>
              <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem', fontWeight: 700, color: 'var(--white)', marginBottom: '1rem' }}>💗 Heart Leaf Quick ID</h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
                <li style={{ color: 'var(--gray-mid)', fontSize: '0.85rem' }}>✅ Smooth + pink spring flowers = Redbud</li>
                <li style={{ color: 'var(--gray-mid)', fontSize: '0.85rem' }}>✅ Huge + cigar pods = Catalpa</li>
                <li style={{ color: 'var(--gray-mid)', fontSize: '0.85rem' }}>✅ Enormous + purple flowers = Paulownia</li>
                <li style={{ color: 'var(--gray-mid)', fontSize: '0.85rem' }}>✅ Toothed + caramel smell = Katsura</li>
                <li style={{ color: 'var(--gray-mid)', fontSize: '0.85rem' }}>✅ Toothed + asymmetric = Basswood</li>
                <li style={{ color: 'var(--gray-mid)', fontSize: '0.85rem' }}>✅ Toothed + warty bark = Hackberry</li>
                <li style={{ color: 'var(--gray-mid)', fontSize: '0.85rem' }}>✅ Small + fragrant flower = Lilac</li>
                <li style={{ color: 'var(--gray-mid)', fontSize: '0.85rem' }}>✅ Variable lobed = Mulberry</li>
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
                <li><Link href="/blog/identify-tree-by-leaves" style={{ color: 'var(--gray-mid)', fontSize: '0.88rem' }}>🍃 ID Trees by Leaves</Link></li>
                <li><Link href="/blog/maple-tree-identification-guide" style={{ color: 'var(--gray-mid)', fontSize: '0.88rem' }}>🍁 Maple ID Guide</Link></li>
                <li><Link href="/blog/oak-tree-identification-guide" style={{ color: 'var(--gray-mid)', fontSize: '0.88rem' }}>🌰 Oak ID Guide</Link></li>
                <li><Link href="/blog/tree-identification-by-bark" style={{ color: 'var(--gray-mid)', fontSize: '0.88rem' }}>🪵 Tree ID by Bark</Link></li>
                <li><Link href="/blog/how-to-identify-trees-in-winter" style={{ color: 'var(--gray-mid)', fontSize: '0.88rem' }}>❄️ Winter Tree ID</Link></li>
                <li><Link href="/blog/common-tree-species" style={{ color: 'var(--gray-mid)', fontSize: '0.88rem' }}>25 Common Tree Species</Link></li>
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <section style={{ padding: '4rem 2rem', background: 'var(--deep-black)', borderTop: '1px solid var(--card-border)', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', color: 'var(--white)', marginBottom: '1rem' }}>Identify Any Heart Shaped Leaf Tree Instantly</h2>
        <p style={{ color: 'var(--gray-mid)', marginBottom: '2rem' }}>Upload a photo of the leaf — our AI identifies the species in seconds. Free, no signup required.</p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/identify-tree-by-leaf" className="btn-primary">🍃 Try Leaf Identifier Free</Link>
          <Link href="/blog" className="btn-outline">📝 More Articles</Link>
        </div>
      </section>
    </Layout>
  );
}
